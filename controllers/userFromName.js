import { User } from "../models/userModel.js";

export const userFromName=async(req,res)=>{
    const {name,email,password} =req.body
    const naam = req.query.namekiaha;
    console.log(name);
 await User.create({
     name,
     email,
     password
 })
     res.status(201).cookie('demo','now').json({
         success:true,
         message:"data send to db successfully"
     })
 }