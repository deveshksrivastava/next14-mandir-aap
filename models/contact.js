import mongoose, { Schema,model } from "mongoose";


// schema create
const ContactSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    phone: {type:String, required:true},
    message: {type:String, required:true},
  });

// model create
const contact= model("contact",ContactSchema)
mongoose.model={}
export default contact;