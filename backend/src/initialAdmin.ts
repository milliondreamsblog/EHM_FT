// createInitialAdmin.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { AdminModel } from "./db";

dotenv.config();

//creates manually initial admin in database
async function createInitialAdmin() {
  const uri = process.env.MONGO_URL!;
  await mongoose.connect(uri);

  //email
  const existing = await AdminModel.findOne({ email: "sitanshu@gmail.com" });

  if (existing) {
    console.log("Admin already exists");
    return;
  }
  //password
  const hashedPassword = await bcrypt.hash("1234", 10);

  const admin = new AdminModel({
    AdminName: "sitanshu", //admin name
    email: "sitanshu@gmail.com", //password
    password: hashedPassword, //hassed password
  });

  await admin.save();

  mongoose.disconnect();
}

createInitialAdmin();
