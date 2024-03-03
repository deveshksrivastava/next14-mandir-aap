import contact from "../../../models/contact";
import connectDB from "../../../middleware/mongoose";

const handler=async(req,res)=>{
    let userQuery=await contact.find();
    res.status(200).json({userQuery })
}
export default connectDB(handler);