import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

interface CustomRequest extends Request {
  adminId?: string;
}

//check is the admin signed in or not - with jwt.verify
function AdminMiddleware(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "token missing" });
  }

  // Split "Bearer <token>"
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  if (!token) {
    return res.status(401).json({ message: "token missing" });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET as string) as { id: string };
    req.adminId = decode.id;
    next();
  } catch (error: any) {
    return res.status(403).json({
      message: "You are not loged in!",
      error: error,
    });
  }
}

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer to use Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "EHM-APP",
    allowed_formats: ["jpg", "png", "jpeg", "gif"],
  } as { folder: string; allowed_formats: string[] },
});

const upload = multer({ storage: storage });

export { AdminMiddleware, upload };
