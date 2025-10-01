import { Router, Request, Response } from "express";
import { AdminMiddleware, upload } from "../middleware";
import { ArticleModel } from "../db";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const ArticleAdminRouter = Router();

dotenv.config();

interface CustomRequest extends Request {
  adminId?: string;
}

//create/post route
ArticleAdminRouter.post(
  "/articles",
  AdminMiddleware,
  upload.single("image"),
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;

      const article = new ArticleModel({
        title,
        image: req.file ? req.file.path : "",
        imagePublicId: req.file ? req.file.filename : "",
        author,
        content,
        creatorId: req.adminId,
      });

      await article.save();

      res.status(201).json({
        success: true,
        message: "Article created successfully",
        data: article,
      });
    } catch (err: any) {
      res
        .status(500)
        .json({ message: "Error creating article", error: err.message });
    }
  }
);

//update article
ArticleAdminRouter.put(
  "/articles/:id",
  AdminMiddleware,
  upload.single("image"),
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;
      const articleId = req.params.id;

      const existingArticle = await ArticleModel.findById(articleId);
      if (!existingArticle) {
        return res.status(404).json({ message: "Article not found" });
      }

      const updateData = {
        title,
        author,
        content,
        image: existingArticle.image,
        imagePublicId: existingArticle.imagePublicId,
      };

      if (req.file) {
        if (existingArticle.imagePublicId) {
          await cloudinary.uploader.destroy(existingArticle.imagePublicId);
        }
        updateData.image = req.file.path;
        updateData.imagePublicId = req.file.filename;
      }

      const updatedArticle = await ArticleModel.findByIdAndUpdate(
        articleId,
        updateData,
        { new: true }
      );

      res.json({
        success: true,
        message: "Article updated successfully",
        data: updatedArticle,
      });
    } catch (err: any) {
      res
        .status(500)
        .json({ message: "Error updating article", error: err.message });
    }
  }
);

//delete article
ArticleAdminRouter.delete(
  "/articles/:id",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const article = await ArticleModel.findById(req.params.id);

      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }

      if (article.imagePublicId) {
        await cloudinary.uploader.destroy(article.imagePublicId);
      }

      await ArticleModel.findByIdAndDelete(req.params.id);

      res.json({ success: true, message: "Article deleted successfully" });
    } catch (err: any) {
      res
        .status(500)
        .json({ message: "Error deleting article", error: err.message });
    }
  }
);

export { ArticleAdminRouter };
