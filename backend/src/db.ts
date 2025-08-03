import mongoose, { model, Schema, Types } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//admin-info
interface AdminType {
  AdminName: string;
  email: string;
  password: string;
}

//admin info schema
const AdminSchema = new Schema<AdminType>({
  AdminName: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

//admin-blog post
interface BlogType {
  title: string; // title shown in card and full view
  image: string; // Cover image shown in card and full view
  author: string; //author-name in the card
  content: string; //main content of the blog
  creatorId: Types.ObjectId; // Admin's mongoDB _id who created the blog
  createdAt: Date;
  updatedAt: Date;
}

//admin-blog post schema
const BlogSchema = new Schema<BlogType>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "admin_info",
      required: true,
    },
  },
  { timestamps: true } //automatically creates two fields "createdAt" and "updatedAt" in mongoDb
);

export const AdminModel = model<AdminType>(
  "admin_info",
  AdminSchema,
  "admin_info"
);

export const BlogModel = model<BlogType>("blog_post", BlogSchema, "blog_post");
