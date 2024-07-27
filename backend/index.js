import express from "express";
import dotenv from 'dotenv';

 const app = express();

 const PORT = process.env.PORT || 3000

 dotenv.config();

 app.get("/",(req,res) => {
    res.send("Server is working")
 });


 app.listen("3000", () => {
    console.log(`Server is running on port ${PORT}`);
 })