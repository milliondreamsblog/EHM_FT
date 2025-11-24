import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;
// if (!JWT_SECRET || !process.env.CLOUDINARY_CLOUD_NAME) {
//   throw new Error("Missing environment configuration for JWT or Cloudinary");
// }

interface CustomRequest extends Request {
  adminId?: string;
}

// ✅ Admin Authentication Middleware
function AdminMiddleware(req: CustomRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const decode = jwt.verify(token, JWT_SECRET) as { id: string };
    req.adminId = decode.id;
    next();
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired, please log in again" });
    }
    return res.status(403).json({ message: "Invalid token" });
  }
}

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Multer with Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "EHM-APP",
    allowed_formats: ["jpg", "png", "jpeg", "gif"],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});

export { AdminMiddleware, upload };
