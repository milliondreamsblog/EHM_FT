import { Router, Request, Response } from "express";
import { ContactModel } from "../db";
import { z } from "zod";

const ContactUserRouter = Router();

ContactUserRouter.post("/contact", async (req: Request, res: Response) => {
  const requireBody = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
     mobile: z.string().optional(),
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
      sucess: true,
      message: "Successfully message sent!",
    });
  } catch (err: any) {
    res.status(500).json({
      message: "Error sending message",
      error: err,
    });
  }
});

export { ContactUserRouter };
