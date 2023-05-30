import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// register user 
export const register=async(req,res)=>{

const {name,email,password} =await req.body;
let user = await User.findOne({email});
if(user){
   return res.status(404).json({
        success:false,
        message:'user already exist'
    })
}else{
const hashedPassword = await bcrypt.hash(password,10)
user = await User.create({
    name,
    email,
    password:hashedPassword
})
const token = await jwt.sign({_id:user._id},process.env.SECRET_ID)
await res.status(201).cookie('token',token,
{httpOnly:true,
 maxAge:15*60*1000}).json({
    success:true,
    message:"account create successfully"
})
}}

// login ?
export const  login= async (req,res)=>{

 } 

//  alldata
 export const  userAll= async (req,res)=>{
} 

// userData 
export const  userData= async (req,res)=>{

 } 