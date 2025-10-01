import { Router, Request, Response } from "express";
import { ArticleModel } from "../db";

const ArticleUserRouter = Router();

// get all articles
ArticleUserRouter.get("/articles", async (req: Request, res: Response) => {
  try {
    const articles = await ArticleModel.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: articles.length,
      data: articles,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching articles",
      error: err.message,
    });
  }
});

//get single article
ArticleUserRouter.get("/articles/:id", async (req: Request, res: Response) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    if (!article) {
      return res
        .status(404)
        .json({ success: false, message: "Article not found" });
    }
    res.json({
      success: true,
      data: article,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching article",
      error: err.message,
    });
  }
});

export { ArticleUserRouter };
