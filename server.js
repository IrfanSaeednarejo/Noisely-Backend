import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongoDb.js';
import connectCloudinary from './src/config/cloudinary.js';

dotenv.config();

const app = express();
const port = process.env.PORT||4000;
connectDB();
connectCloudinary();



app.use(express.json());
app.use(cors());





app.use("/api/song",songRouter);

app.get("/",(req,res)=>{
    res.send("API Working");
})                  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});