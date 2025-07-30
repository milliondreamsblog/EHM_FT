import { Router, Request, Response } from "express";
import { BlogModel } from "./db";

const userRouter = Router();

interface CustomRequest extends Request {
  adminId?: string;
}

// get all blogs
userRouter.get("/blogs", async (req: CustomRequest, res: Response) => {
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });

    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs", error: err });
  }
});

//get single blog
userRouter.get("/blogs/:id", async (req: CustomRequest, res: Response) => {
  try {
    const blogs = await BlogModel.findById(req.params.id);
    if (!blogs) return res.status(404).json({ message: "Blog not found" });

    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blogs", error: err });
  }
});

export { userRouter };
