import { Router, Request, Response } from "express";
import { ContactModel } from "../db";
import { z } from "zod";

import { AdminMiddleware } from "../middleware";
import rateLimit from "express-rate-limit";

const ContactUserRouter = Router();

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    message: "Too many contact requests from this IP, please try again after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

ContactUserRouter.post("/contact", contactRateLimiter, async (req: Request, res: Response) => {
  const requireBody = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    mobile: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid mobile number format").optional().or(z.literal("")),
    interestedIn: z.string().min(1, "Please select an option"),
    message: z.string().min(1, "Message is required"),
  });

  const parsed = requireBody.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid input format",
      error: parsed.error.flatten().fieldErrors,
    });
  }

  const { name, email, mobile, interestedIn, message } = parsed.data;

  try {
    const contactData = new ContactModel({
      name,
      email,
      mobile,
      interestedIn,
      message,
    });

    await contactData.save();
    return res.status(201).json({
      success: true,
      message: "Successfully message sent!",
    });
  } catch (err: any) {
    res.status(500).json({
      message: "Error sending message",
      error: err,
    });
  }
});

// GET endpoint - Fetch all contacts (for admin only - secured)
ContactUserRouter.get("/contacts", AdminMiddleware, async (req: Request, res: Response) => {
  try {
    const contacts = await ContactModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      contacts,
    });
  } catch (err: any) {
    console.error("Error fetching contacts:", err);
    return res.status(500).json({
      success: false,
      message: "Error fetching contacts",
      error: err,
    });
  }
});

export { ContactUserRouter };