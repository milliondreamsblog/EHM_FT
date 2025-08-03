import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

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

export { AdminMiddleware };
