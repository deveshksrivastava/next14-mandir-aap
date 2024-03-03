import mongoose from "mongoose";

const connectDB= handler=> async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    try{
        await mongoose.connect(process.env.MONGO_URI || '')
        console.log("mongodb connected");
        
    }catch(error){
        console.log("error connection on mongobd",error);
        
    }
    return handler(req,res);
}

export default connectDB;