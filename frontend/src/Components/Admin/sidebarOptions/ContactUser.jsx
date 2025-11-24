import { Router } from "express";
import { ContactModel } from "../db";
import { z } from "zod";

const requireBody = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format").transform(email => email.toLowerCase().trim()),
    mobile: z.string().optional().transform(val => val?.trim()),
    interestedIn: z.enum(["tourism", "wellness", "other"], { errorMap: () => ({ message: "Please select a valid option" }) }),
    message: z.string().min(1, "Message is required").transform(val => val.trim()),
});

function validateBody(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid input format",
                errors: result.error.flatten().fieldErrors,
            });
        }
        req.body = result.data;
        next();
    };
}

const ContactUserRouter = Router();

ContactUserRouter.post(
    "/contact",
    validateBody(requireBody),
    async (req, res) => {
        const { name, email, mobile, interestedIn, message } = req.body;

        try {
            await ContactModel.create({ name, email, mobile, interestedIn, message });
            return res.status(201).json({
                success: true,
                message: "Message sent successfully!",
            });
        } catch (err) {
            console.error("Error saving contact message:", err);
            return res.status(500).json({
                success: false,
                message: "Error sending message",
            });
        }
    }
);

export { ContactUserRouter };