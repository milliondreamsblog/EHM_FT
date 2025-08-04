import { Router, Request, Response } from "express";
<<<<<<< HEAD
import { AdminModel } from "./db";
=======
import { AdminModel, BlogModel } from "./db";
>>>>>>> main
import { AdminMiddleware } from "./middleware";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const adminRouter = Router();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

<<<<<<< HEAD
//admin login  rout
adminRouter.post("/login", async (req: Request, res: Response) => {
=======
interface CustomRequest extends Request {
  adminId?: string;
}

//admin login  rout
adminRouter.post("/login", async (req: CustomRequest, res: Response) => {
>>>>>>> main
  const { email, password } = req.body;

  const admin = await AdminModel.findOne({ email });

  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const isValid = await bcrypt.compare(password, admin.password);
  if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

<<<<<<< HEAD
  const token = jwt.sign({ email: admin.email }, JWT_SECRET);
=======
  const token = jwt.sign({ id: admin._id }, JWT_SECRET);
>>>>>>> main

  res.json({ message: "Login successful", token });
});

//route that protects & create new admin , only logged-in admin can create new admin (as using AdminMiddleaware)
adminRouter.post(
  "/create",
  AdminMiddleware,
<<<<<<< HEAD
  async (req: Request, res: Response) => {
=======
  async (req: CustomRequest, res: Response) => {
>>>>>>> main
    const { AdminName, email, password } = req.body;

    const existing = await AdminModel.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new AdminModel({
      AdminName,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    res.status(201).json({ message: "New admin created" });
  }
);

<<<<<<< HEAD
=======
// create/post new blog
adminRouter.post(
  "/blogs",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, image, author, content } = req.body;

      const blog = new BlogModel({
        title,
        image,
        author,
        content,
        creatorId: req.adminId, //from middleware from token
      });

      await blog.save();

      res.status(201).json({ message: "Blog created", postId: blog._id });
    } catch (err: any) {
      res.status(500).json({ message: "Error creating blog", error: err });
    }
  }
);

//update blog
adminRouter.put(
  "/blogs/:id",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const { title, image, author, content } = req.body;

      const blog = await BlogModel.findByIdAndUpdate(
        req.params.id,
        { title, image, author, content },
        { new: true }
      );

      if (!blog) return res.status(404).json({ message: "Blog not found" });

      res.json({ message: "Blog updated", blog });
    } catch (err) {
      res.status(500).json({ message: "Error updating blog", error: err });
    }
  }
);

//delete blog
adminRouter.delete(
  "/blogs/:id",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const blog = await BlogModel.findByIdAndDelete(req.params.id);

      if (!blog) return res.status(404).json({ message: "Blog not found" });

      res.json({ message: "Blog deleted" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting blog", error: err });
    }
  }
);

>>>>>>> main
export { adminRouter };
