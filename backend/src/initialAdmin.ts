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
    const uri = "mongodb+srv://sanskarvns19:4710Qasukvx5SbCu@cluster0.yvxmi5e.mongodb.net/ehm1";
    await mongoose.connect(uri);
  } catch (error: any) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
}



createInitialAdmin();
