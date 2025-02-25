import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    if (conn) {
      console.log(`DB connected !! DB_HOST : ${conn.connection.host}`);
    }
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

export default connectDB;
