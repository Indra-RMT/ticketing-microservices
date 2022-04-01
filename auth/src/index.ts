import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("Missing JWT_KEY environment variable");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("Missing MONGO_URI environment variable");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!");
  });
};

start();
