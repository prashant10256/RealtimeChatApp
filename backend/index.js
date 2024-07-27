import express from "express";
import dotenv from 'dotenv';
import dbConnect from "./DB/dbConneect.js";

 const app = express();

 const PORT = process.env.PORT || 3000

 dotenv.config();

 app.get("/",(req,res) => {
    res.send("Server is working")
 });


 app.listen("3000", () => {
   dbConnect();
    console.log(`Server is running on port ${PORT}`);
 })