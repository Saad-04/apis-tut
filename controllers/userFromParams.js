import { User } from "../models/userModel.js"

export const userFromParams  = async(req,res)=>{
    // const {id} = req.body
    const {name} = req.params
    // const {_id} = req.query
    // console.log(req.params)
const user=await User.find({name}).catch((err)=>{console.log(err.message)})

    res.json({
        success:true,
        user:[user]})
}