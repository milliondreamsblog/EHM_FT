import express from "express";
import mongoose from "mongoose";
import { adminRouter } from "./admin";

const app = express();
app.use(express.json());

//use the adminRouter
app.use("/admin",adminRouter);

//connecting to mongoDb
async function connectDB() {
  try {
    const uri = process.env.MONGO_URL!;
    await mongoose.connect(uri);
  } catch (error: any) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
}

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
