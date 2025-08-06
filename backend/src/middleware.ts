import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";

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
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "token missing" });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET as string) as { id: string };
    req.adminId = decode.id;

    next();
  } catch (error: any) {
    return res.status(403).json({
      message: "You are not Signed in!",
      error: error,
    });
  }
}

// Multer configuration middleware( for image upload )
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Local uploads folder
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

export { AdminMiddleware, upload };
