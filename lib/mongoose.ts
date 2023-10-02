import mongoose from "mongoose";

//stores mongodb's connection state
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not fround");
  if (isConnected) return console.log("Already Connected");

  try {
  } catch (e) {
    console.log(e);
  }
};
