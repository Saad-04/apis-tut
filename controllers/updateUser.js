import { User } from "../models/userModel.js"

export const updateUser  = async(req,res)=>{
  
    const {name} = req.params
    
const user=await User.find({name}).catch((err)=>{console.log(err.message)})

    res.json({
        success:true,
        'message':'updated'})
}