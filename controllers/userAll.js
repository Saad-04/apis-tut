import { User } from "../models/userModel.js"

export const userAll=async(req,res)=>{
    const user=await User.find({})
    
        res.json({
            success:true,
            user:[user]
        })
    }