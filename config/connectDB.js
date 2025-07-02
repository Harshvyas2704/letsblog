import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log("error while connecting DB", error);
  }
}

export default connectDB;
