// createInitialAdmin.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { AdminModel } from "./db";

dotenv.config();

//creates manually initial admin in database
async function createInitialAdmin() {
  connectDB();

  //email
  const existing = await AdminModel.findOne({ email: "akshatsan23@gmail.com" });

  if (existing) {
    console.log("Admin already exists");
    return;
  }
  //password
  const hashedPassword = await bcrypt.hash("EHM@123", 10);

  const admin = new AdminModel({
    AdminName: "Akshat", //admin name
    email: "akshatsan23@gmail.com", //password
    password: hashedPassword, //hassed password
  });

  await admin.save();

  mongoose.disconnect();
}

async function connectDB() {
  try {
    const uri = "mongodb+srv://admin:1234567890@cluster0.zfd80.mongodb.net/ehm";
    await mongoose.connect(uri);
  } catch (error: any) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
}



createInitialAdmin();
