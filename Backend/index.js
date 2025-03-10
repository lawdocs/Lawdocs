import dotenv from "dotenv";
dotenv.config();
import express from "express";

import cors from "cors";
// import { Clerk, ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import connectDB from "./database/db.js";
import blogRoutes from "./routes/blog.route.js";
import userRoute from "./routes/user.route.js";
import blogCategory from "./routes/blogCategory.route.js";
const app = express();

app.use(cors());
app.use(express.json());

// const clerk = new Clerk({ secretKey: process.env.CLERK_SECRET_KEY });

connectDB();
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/blogCategory", blogCategory);

app.use("/user", userRoute);
app.use("/blogs", blogRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);

  console.log(`Server is running on port ${PORT}`);
});
