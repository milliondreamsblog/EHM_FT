import { Router, Request, Response } from "express";
import { AdminMiddleware, upload } from "../middleware";
import { BlogModel } from "../db";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const BlogAdminRouter = Router();

dotenv.config();

interface CustomRequest extends Request {
  adminId?: string;
}

// create/post new blog
BlogAdminRouter.post(
  "/blogs",
  AdminMiddleware,
  upload.single("image"), // handle file
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;

      const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

      const blog = new BlogModel({
        title,
        image: imagePath,
        author,
        content,
        creatorId: req.adminId, //from middleware from token
      });

      await blog.save();

      res.status(201).json({
        success: true,
        message: "Blog created successfully",
        data: {
          _id: blog._id.toString(),
          title,
          image: blog.image,
          author,
          content,
          creatorId: blog.creatorId.toString(),
          createdAt: blog.createdAt,
          updatedAt: blog.updatedAt,
        },
      });
    } catch (err: any) {
      res.status(500).json({
        message: "Error creating blog",
        error: err, // send full object
      });
    }
  }
);

//update blog
BlogAdminRouter.put(
  "/blogs/:id",
  AdminMiddleware,
  upload.single("image"), // handle file
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;

      let updateData: any = { title, author, content };

      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }

      const blog = await BlogModel.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      if (!blog) return res.status(404).json({ message: "Blog not found" });

      res.json({
        success: true,
        message: "Blog updated successfully",
        data: {
          _id: blog._id.toString(),
          title: blog.title || "",
          image: blog.image || "",
          author: blog.author || "",
          content: blog.content || "",
          creatorId: blog.creatorId.toString(),
          createdAt: blog.createdAt,
          updatedAt: blog.updatedAt,
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Error updating blog", error: err });
    }
  }
);

//delete blog
BlogAdminRouter.delete(
  "/blogs/:id",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const blog = await BlogModel.findByIdAndDelete(req.params.id);

      if (!blog) return res.status(404).json({ message: "Blog not found" });

      // Delete the actual image file(of this post) from "uplode/" folder
      if (blog.image) {
        const imagePath = path.resolve("." + blog.image); // e.g., /uploads/filename.jpg
        fs.unlink(imagePath, (err: any) => {
          if (err) {
            console.error("Error deleting image:", err);
          } else {
            console.log("Deleted image:", imagePath);
          }
        });
      }

      res.json({
        success: true,
        message: "Blog deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ message: "Error deleting blog", error: err });
    }
  }
);

export { BlogAdminRouter };
