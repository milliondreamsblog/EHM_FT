import { Router, Request, Response } from "express";
import { NewsLetterModel } from "../db";
import { AdminMiddleware } from "../middleware";

const NewsletterAdminRouter = Router();

interface CustomRequest extends Request {
  adminId?: string;
}

NewsletterAdminRouter.get(
  "/subscribers",
  AdminMiddleware,
  async (req: CustomRequest, res: Response) => {
    try {
      const subscribers = await NewsLetterModel.find().sort({ createdAt: -1 });

      return res.status(200).json({
        count: subscribers.length,
        subscribers,
      });
    } catch (err: any) {
      console.error("Failed to fetch subscribers:", err);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }
);

export { NewsletterAdminRouter };
