import mongoose from "mongoose";

 const dbConnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT),
        console.log("DB Connected Successfully...")

    }catch(error){
        console.log(console.error);

    }
 }

 export default dbConnect;