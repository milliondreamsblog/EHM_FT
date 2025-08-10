import { Router, Request, Response } from "express";
import { AdminMiddleware, upload } from "../middleware";
import { ArticleModel } from "../db";
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
  upload.single("image"), // handle file
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;

      const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

      const article = new ArticleModel({
        title,
        image: imagePath,
        author,
        content,
        creatorId: req.adminId, //from middleware from token
      });

      await article.save();

      res.status(201).json({
        success: true,
        message: "Article created successfully",
        data: {
          _id: article._id.toString(),
          title,
          image: article.image,
          author,
          content,
          creatorId: article.creatorId.toString(),
          createdAt: article.createdAt,
          updatedAt: article.updatedAt,
        },
      });
    } catch (err: any) {
      res.status(500).json({
        message: "Error creating article",
        error: err, // send full object
      });
    }
  }
);

//update article
ArticleAdminRouter.put(
  "/articles/:id",
  AdminMiddleware,
  upload.single("image"), // handle file
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, author, content } = req.body;

      let updateData: any = { title, author, content };

      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }

      const article = await ArticleModel.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );

      if (!article)
        return res.status(404).json({ message: "article not found" });

      res.json({
        success: true,
        message: "article updated successfully",
        data: {
          _id: article._id.toString(),
          title: article.title || "",
          image: article.image || "",
          author: article.author || "",
          content: article.content || "",
          creatorId: article.creatorId.toString(),
          createdAt: article.createdAt,
          updatedAt: article.updatedAt,
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Error updating article", error: err });
    }
  }
);

//delete article
ArticleAdminRouter.delete(
  "/articles/:id",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const article = await ArticleModel.findByIdAndDelete(req.params.id);

      if (!article)
        return res.status(404).json({ message: "article not found" });

      // Delete the actual image file(of this post) from "uplode/" folder
      if (article.image) {
        const imagePath = path.resolve("." + article.image); // like- /uploads/filename.jpg
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
        message: "article deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ message: "Error deleting article", error: err });
    }
  }
);

export { ArticleAdminRouter };
