import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const connectDB = async () => {
    const res = await mongoose.connect(process.env.MONGO_DB_URL);
    if(res){
        console.log("DB connected successfully");
    }
   
};

export default connectDB;