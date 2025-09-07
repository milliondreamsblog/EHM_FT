import { Router, Request, Response } from "express";
import { AdminMiddleware, upload } from "../middleware";
import { FootprintModel } from "../db";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const FootprintAdminRouter = Router();

dotenv.config();

interface CustomRequest extends Request {
  adminId?: string;
}

// create/post new footprint
FootprintAdminRouter.post(
  "/footprints",
  AdminMiddleware,
  upload.single("image"), // handle file
  async (req: CustomRequest, res: Response) => {
    try {
      const footprint = new FootprintModel({
        image: req.file ? req.file.path : "",
        imagePublicId: req.file ? req.file.filename : "",
        creatorId: req.adminId,
      });

      await footprint.save();

      res.status(201).json({
        success: true,
        message: "Footprint created successfully",
        data: footprint,
      });
    } catch (err: any) {
      res.status(500).json({
        message: "Error creating footprint",
        error: err,
      });
    }
  }
);

//delete footprint
FootprintAdminRouter.delete(
  "/footprints/:id",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const footprint = await FootprintModel.findById(req.params.id);

      if (!footprint)
        return res.status(404).json({ message: "footprint not found" });

      // If there's an image, delete it from Cloudinary first
      if (footprint.imagePublicId) {
        await cloudinary.uploader.destroy(footprint.imagePublicId);
      }

      // Then delete from the database
      await FootprintModel.findByIdAndDelete(req.params.id);

      res.json({ success: true, message: "Footprint deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting footprint", error: err });
    }
  }
);
export { FootprintAdminRouter };
