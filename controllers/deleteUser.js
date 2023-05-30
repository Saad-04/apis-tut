import { User } from "../models/userModel.js"

export const deleteUser  = async(req,res)=>{
    
    const {name} = req.params
let user=await User.findOneAndDelete({name}).catch((err)=>{console.log(err.message)})
          
    res.json({
        success:true,
        user:[user],
    'message':'deleted'
    })
}