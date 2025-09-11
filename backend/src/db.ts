import mongoose, { model, Schema, Types } from "mongoose";
import dotenv from "dotenv";
import { email } from "zod";

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
  image: string; // Cloudinary URL of image
  imagePublicId: string; // Cloudinary Public ID
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
    image: { type: String },
    imagePublicId: { type: String },
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

//admin-Case study post
interface CaseStudyType {
  title: string; // title shown in card and full view
  image: string; // Cloudinary URL of image
  imagePublicId: string; // Cloudinary Public ID
  author: string; //author-name in the card
  content: string; //main content of the blog
  creatorId: Types.ObjectId; // Admin's mongoDB _id who created the blog
  createdAt: Date;
  updatedAt: Date;
}

//admin-Case study postschema
const CaseStudySchema = new Schema<CaseStudyType>(
  {
    title: { type: String, required: true },
    image: { type: String },
    imagePublicId: { type: String },
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

//admin-NewsLetter type
interface NewsLetterType {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

//admin-NewsLetter schema
const NewsLetterSchema = new Schema<NewsLetterType>(
  {
    email: { type: String },
  },
  {
    timestamps: true,
  }
);

//article-post
interface ArticleType {
  title: string; // title shown in card and full view
  image: string; // Cover image shown in card and full view
  imagePublicId: string; // Cloudinary Public ID
  author: string; //author-name in the card
  content: string; //main content of the blog
  creatorId: Types.ObjectId; // Admin's mongoDB _id who created the blog
  createdAt: Date;
  updatedAt: Date;
}

//article post schema
const ArticleSchema = new Schema<ArticleType>(
  {
    title: { type: String, required: true },
    image: { type: String },
    imagePublicId: { type: String },
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

//contact-data
interface ContactType {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

//contsct-data schema
const ContactSchema = new Schema<ContactType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

//Footprint type
interface FootprintType {
  image: string;
  imagePublicId: string;
  creatorId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

//Footprint schema
const FootprintSchema = new Schema<FootprintType>(
  {
    image: { type: String },
    imagePublicId: { type: String },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "admin_info",
      required: true,
    },
  },
  { timestamps: true } //automatically creates two fields "createdAt" and "updatedAt" in mongoDb
);

//admin-auth model
export const AdminModel = model<AdminType>(
  "admin_info",
  AdminSchema,
  "admin_info"
);

//blog-post model
export const BlogModel = model<BlogType>("blog_post", BlogSchema, "blog_post");
export const CaseStudyModel = model<CaseStudyType>(
  "caseStudy_post",
  CaseStudySchema,
  "caseStudy_post"
);

//article-post model
export const ArticleModel = model<BlogType>(
  "article_post",
  ArticleSchema,
  "article_post"
);

//newsletter-subscriber model
export const NewsLetterModel = model<NewsLetterType>(
  "newsletter_info",
  NewsLetterSchema,
  "newsletter_info"
);

//contact-data
export const ContactModel = model<ContactType>(
  "contact_data",
  ContactSchema,
  "contact_data"
);

export const FootprintModel = model<FootprintType>(
  "footprint",
  FootprintSchema,
  "footprint"
);
