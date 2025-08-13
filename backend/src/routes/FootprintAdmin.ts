import { Router, Request, Response } from "express";
import { AdminMiddleware, upload } from "../middleware";
import { FootprintModel } from "../db";
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
      const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

      const footprint = new FootprintModel({
        image: imagePath,
        creatorId: req.adminId, //from middleware from token
      });

      await footprint.save();

      res.status(201).json({
        success: true,
        message: "Footprint created successfully",
        data: {
          _id: footprint._id.toString(),
          image: footprint.image,
          creatorId: footprint.creatorId.toString(),
          createdAt: footprint.createdAt,
          updatedAt: footprint.updatedAt,
        },
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
      const footprint = await FootprintModel.findByIdAndDelete(req.params.id);

      if (!footprint)
        return res.status(404).json({ message: "footprint not found" });

      // Delete the actual image file(of this post) from "uplode/" folder
      if (footprint.image) {
        const imagePath = path.resolve("." + footprint.image); // e.g., /uploads/filename.jpg
        fs.unlink(imagePath, (err: any) => {
          if (err) {
            console.error("Error deleting footprint:", err);
          } else {
            console.log("Deleted footprint:", imagePath);
          }
        });
      }

      res.json({
        success: true,
        message: "footprint deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ message: "Error deleting footprint", error: err });
    }
  }
);
export { FootprintAdminRouter };
