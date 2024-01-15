import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
       
    },
    password:{
        type: String,
        required:true
    },
});

const authModel = mongoose.model("user" , authSchema)
export default authModel;