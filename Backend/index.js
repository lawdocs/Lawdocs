dotenv.config()
import express from "express";
import dotenv from 'dotenv'
import cors from "cors";
import connectDB from './database/db.js'
const app = express();
import userRoute  from './routes/user.route.js'

app.use(cors());
app.use(express.json())

connectDB();
app.get("/", (req, res) => {
  res.send("hello");
});

app.use('/user',userRoute)
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});
