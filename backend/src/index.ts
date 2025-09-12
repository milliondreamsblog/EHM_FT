import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";

import dotenv from "dotenv"; // Add dotenv import
import { AuthAdminRouter } from "./routes/AuthAdmin";
import { BlogUserRouter } from "./routes/BlogUser";
import { BlogAdminRouter } from "./routes/BlogAdmin";
import { NewsletterUserRouter } from "./routes/NewsLetterUser";
import { NewsletterAdminRouter } from "./routes/NewsLetterAdmin";
import { ArticleAdminRouter } from "./routes/ArticleAdmin";
import { ArticleUserRouter } from "./routes/ArticleUser";
import { ContactUserRouter } from "./routes/ContactUser";
import { FootprintAdminRouter } from "./routes/FootprintAdmin";
import { FootprintUserRouter } from "./routes/FootprintUser";
import { CaseStudyAdminRouter } from "./routes/CaseStudyAdmin";
import { CaseStudyUserRouter } from "./routes/CaseStudyUser";

// Load .env file from backend root when running from dist
dotenv.config({ path: "../.env" }); // Adjust path if .env is in backend root

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ehmconsultancy.co.in",
      "https://www.ehmconsultancy.co.in",
      "https://ehm-ft.onrender.com",
      "http://localhost:5000",
    ],
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"], // Explicitly allow OPTIONS
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // If using cookies or auth
  })
);

// Connect to MongoDB
async function connectDB() {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in the .env file");
    }
    const uri = process.env.MONGO_URL;
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully"); // Log success
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
}

connectDB();

app.use(express.json());
app.use("/hello", (req, res) => {
  console.log("hello world");
  res.send("Hello World"); // Added response to prevent hanging
});

// Admin auth routes
app.use("/admin", AuthAdminRouter);

// Admin Blog routes
app.use("/admin", BlogAdminRouter);

// User Blog routes
app.use("/", BlogUserRouter);

// Admin case study routes
app.use("/admin", CaseStudyAdminRouter);

// User case study routes
app.use("/", CaseStudyUserRouter);

// Admin Article routes
app.use("/admin", ArticleAdminRouter);

// User Article routes
app.use("/", ArticleUserRouter);

// Serve static files from uploads folder
app.use("/uploads", express.static(path.resolve("uploads")));

// User newsletter route
app.use("/", NewsletterUserRouter);

// Admin newsletter route
app.use("/admin", NewsletterAdminRouter);

// User Contact route
app.use("/", ContactUserRouter);

//admin footprint route
app.use("/admin", FootprintAdminRouter);

//user footprint rout
app.use("/", FootprintUserRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
