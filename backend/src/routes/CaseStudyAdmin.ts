import { Router, Request, Response } from "express";
import { AdminMiddleware, upload } from "../middleware";
import { CaseStudyModel } from "../db";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

const CaseStudyAdminRouter = Router();

dotenv.config();

interface CustomRequest extends Request {
  adminId?: string;
}

// Post case study
CaseStudyAdminRouter.post(
  "/casestudies",
  AdminMiddleware,
  upload.single("image"), // Handle file upload
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;

      const caseStudy = new CaseStudyModel({
        title,

        image: req.file ? req.file.path : "",

        imagePublicId: req.file ? req.file.filename : "",
        author,
        content,
        creatorId: req.adminId,
      });

      await caseStudy.save();

      res.status(201).json({
        success: true,
        message: "Case Study created successfully",
        data: caseStudy,
      });
    } catch (err: any) {
      res.status(500).json({
        message: "Error creating case study",
        error: err,
      });
    }
  }
);

//edit case study
CaseStudyAdminRouter.put(
  "/casestudies/:id",
  AdminMiddleware,
  upload.single("image"),
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;
      const caseStudyId = req.params.id;

      const existingCaseStudy = await CaseStudyModel.findById(caseStudyId);
      if (!existingCaseStudy) {
        return res.status(404).json({ message: "Case Study not found" });
      }

      const updateData: {
        title: string;
        author: string;
        content: string;
        image?: string;
        imagePublicId?: string;
      } = {
        title,
        author,
        content,
      };

      // Check if a new file is being uploaded
      if (req.file) {
        // If an old image exists, delete it from Cloudinary
        if (existingCaseStudy.imagePublicId) {
          await cloudinary.uploader.destroy(existingCaseStudy.imagePublicId);
        }

        // Add new image details to the update data
        updateData.image = req.file.path;
        updateData.imagePublicId = req.file.filename;
      }

      const updatedCaseStudy = await CaseStudyModel.findByIdAndUpdate(
        caseStudyId,
        updateData,
        { new: true }
      );

      res.json({
        success: true,
        message: "Case Study updated successfully",
        data: updatedCaseStudy,
      });
    } catch (err: any) {
      res
        .status(500)
        .json({ message: "Error updating case study", error: err.message });
    }
  }
);

// DELETE
CaseStudyAdminRouter.delete(
  "/casestudies/:id",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const caseStudy = await CaseStudyModel.findById(req.params.id);

      if (!caseStudy) {
        return res.status(404).json({ message: "Case Study not found" });
      }

      // delete from Cloudinary
      if (caseStudy.imagePublicId) {
        await cloudinary.uploader.destroy(caseStudy.imagePublicId);
      }

      //  delete  case study from the database
      await CaseStudyModel.findByIdAndDelete(req.params.id);

      res.json({ success: true, message: "Case Study deleted successfully" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error deleting case study", error: err });
    }
  }
);

export { CaseStudyAdminRouter };
