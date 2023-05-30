import mongoose from "mongoose"

// create colleciton 
const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

    
export const User = mongoose.model('User',schema)