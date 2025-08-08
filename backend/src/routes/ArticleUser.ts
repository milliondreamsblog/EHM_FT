import { Router, Request, Response } from "express";
import { ArticleModel } from "../db";

const ArticleUserRouter = Router();

interface CustomRequest extends Request {
  adminId?: string;
}

// get all articles
ArticleUserRouter.get(
  "/articles",
  async (req: CustomRequest, res: Response) => {
    try {
      const articles = await ArticleModel.find().sort({ createdAt: -1 });

      res.json({
        success: true,
        count: articles.length,
        data: articles.map((article) => ({
          _id: article._id.toString(),
          title: article.title || "",
          image: article.image || "",
          author: article.author || "",
          content: article.content || "",
          creatorId: article.creatorId.toString(), // convert ObjectId to string
          createdAt: article.createdAt,
          updatedAt: article.updatedAt,
        })),
      });
    } catch (err: any) {
      res.status(500).json({ message: "Error fetching articles", error: err });
    }
  }
);

//get single article
ArticleUserRouter.get(
  "/articles/:id",
  async (req: CustomRequest, res: Response) => {
    try {
      const article = await ArticleModel.findById(req.params.id);
      if (!article)
        return res.status(404).json({ message: "article not found" });

      res.json({
        success: true,
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
      res.status(500).json({ message: "Error fetching articles", error: err });
    }
  }
);

export { ArticleUserRouter };
