import { Router, Request, Response } from "express";
import { NewsLetterModel } from "../db";
import { z } from "zod";

const NewsletterUserRouter = Router();

//user subscribes
NewsletterUserRouter.post("/subscribe", async (req: Request, res: Response) => {
  // Validate the request body data using zod schema
  const requireBody = z.object({
    email: z.string().email("Invalid email format"),
  });

  const parsed = requireBody.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid input format",
      error: parsed.error.flatten().fieldErrors,
    });
  }

  const { email } = parsed.data;

  try {
    // Check if the email is already subscribed
    const existingSubscriber = await NewsLetterModel.findOne({ email });

    if (existingSubscriber) {
      return res.status(409).json({
        message: "Email is already subscribed",
      });
    }

    const subscriber = new NewsLetterModel({
      email,
    });

    await subscriber.save();

    return res.status(201).json({
      message: "Successfully subscribed!",
    });
  } catch (err: any) {
    return res.status(500).json({
      message: "Something went wrong",
      err,
    });
  }
});

export { NewsletterUserRouter };
