import { Router, Request, Response } from "express";
import { AdminModel } from "../db";
import { AdminMiddleware } from "../middleware";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const AuthAdminRouter = Router();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

interface CustomRequest extends Request {
  adminId?: string;
}

//admin login  rout
AuthAdminRouter.post("/login", async (req: CustomRequest, res: Response) => {
  const { email, password } = req.body;

  const admin = await AdminModel.findOne({ email });

  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const isValid = await bcrypt.compare(password, admin.password);
  if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: admin._id }, JWT_SECRET);

  res.json({ message: "Login successful", token });
});

//route that protects & create new admin , only logged-in admin can create new admin (as using AdminMiddleaware)
AuthAdminRouter.post(
  "/create",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
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

export { AuthAdminRouter };
