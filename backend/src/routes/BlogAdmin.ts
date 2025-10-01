import { Router, Request, Response } from "express";
import { AdminMiddleware, upload } from "../middleware";
import { BlogModel } from "../db";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

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

      const blog = new BlogModel({
        title,
        // req.file.path is the URL from Cloudinary
        // req.file.filename is the public_id from Cloudinary
        image: req.file ? req.file.path : "",
        imagePublicId: req.file ? req.file.filename : "",
        author,
        content,
        creatorId: req.adminId,
      });

      await blog.save();

      res.status(201).json({
        success: true,
        message: "Blog created successfully",
        data: blog,
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
  upload.single("image"),
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;
      const blogId = req.params.id;

      const existingBlog = await BlogModel.findById(blogId);
      if (!existingBlog) {
        return res.status(404).json({ message: "Blog not found" });
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
        if (existingBlog.imagePublicId) {
          await cloudinary.uploader.destroy(existingBlog.imagePublicId);
        }

        // Add new image details to the update data
        updateData.image = req.file.path; // New Cloudinary URL
        updateData.imagePublicId = req.file.filename; // New public_id
      }

      // Find the blog by ID and update it with the new data
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        blogId,
        updateData,
        {
          new: true,
        }
      );

      res.json({
        success: true,
        message: "Blog updated successfully",
        data: updatedBlog,
      });
    } catch (err: any) {
      res
        .status(500)
        .json({ message: "Error updating blog", error: err.message });
    }
  }
);

//delete blog
BlogAdminRouter.delete(
  "/blogs/:id",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const blog = await BlogModel.findById(req.params.id);

      if (!blog) return res.status(404).json({ message: "Blog not found" });

      // If there's an image, delete it from Cloudinary first
      if (blog.imagePublicId) {
        await cloudinary.uploader.destroy(blog.imagePublicId);
      }

      // Then delete the blog from the database
      await BlogModel.findByIdAndDelete(req.params.id);

      res.json({ success: true, message: "Blog deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting blog", error: err });
    }
  }
);

export { BlogAdminRouter };
