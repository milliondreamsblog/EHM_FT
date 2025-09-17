// routes/VidUser.ts
import { Router } from "express";
import cloudinary from "cloudinary";

const VidUser = Router();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

VidUser.get("/videos", async (req, res) => {
  try {
    const result = await cloudinary.v2.api.resources({
      type: "upload",
      resource_type: "video",
      prefix: "videos_folder/",
      max_results: 50,
      
    });
     console.log(result);
    const videoUrls = result.resources.map((v: any) => v.secure_url);
    res.json(videoUrls);
  } catch (err) {
    console.error("Cloudinary fetch error:", err);
    res.status(500).json({ message: "Failed to fetch videos from Cloudinary" });
  }
});

export default VidUser;
