import { Router, Request, Response } from "express";
import { BlogModel } from "../db";

const BlogUserRouter = Router();

interface CustomRequest extends Request {
  adminId?: string;
}

// get all blogs
BlogUserRouter.get("/blogs", async (req: CustomRequest, res: Response) => {
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching blogs",
      error: err.message,
    });
  }
});

//get single blog
BlogUserRouter.get("/blogs/:id", async (req: CustomRequest, res: Response) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    res.json({
      success: true,
      data: blog,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching blog",
      error: err.message,
    });
  }
});

// GET all blogs by a specific author
BlogUserRouter.get(
  "/blogs/author/:authorName",
  async (req: Request, res: Response) => {
    try {
      const authorName = decodeURIComponent(req.params.authorName); // Decode author name from URL
      const blogs = await BlogModel.find({ author: authorName }).sort({
        createdAt: -1,
      });

      if (!blogs || blogs.length === 0) {
        return res.status(404).json({
          success: false,
          message: `No blogs found for author: ${authorName}`,
        });
      }

      res.json({
        success: true,
        count: blogs.length,
        data: blogs,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Error fetching author's blogs",
        error: err.message,
      });
    }
  }
);

export { BlogUserRouter };
