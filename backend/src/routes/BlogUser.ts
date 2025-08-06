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
      data: blogs.map((blog) => ({
        _id: blog._id.toString(),
        title: blog.title || "",
        image: blog.image || "",
        author: blog.author || "",
        content: blog.content || "",
        creatorId: blog.creatorId.toString(), // convert ObjectId to string
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
      })),
    });
  } catch (err: any) {
    res.status(500).json({ message: "Error fetching blogs", error: err });
  }
});

//get single blog
BlogUserRouter.get("/blogs/:id", async (req: CustomRequest, res: Response) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json({
      success: true,
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
    res.status(500).json({ message: "Error fetching blogs", error: err });
  }
});

export { BlogUserRouter };
