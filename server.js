import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import messageRoute from "./route/messageRoute.js";
import cors from "cors";

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connection was successful!");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("Database connection did not succeeded!");
  });
console.log(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
);

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/post", messageRoute);

app.listen(3001, () =>
  console.log("Server is listening for HTTP requests on port 3001")
);
