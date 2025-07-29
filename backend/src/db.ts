import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

interface AdminType {
  AdminName: string;
  email: string;
  password: string;
}

//admin schema
const AdminSchema = new Schema<AdminType>({
  AdminName: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const AdminModel = model<AdminType>("admin", AdminSchema, "admin");
