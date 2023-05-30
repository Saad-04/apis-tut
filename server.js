import { app } from "./app.js"
import {connectDb} from "./database/connectDb.js";
// create database here 
connectDb()
app.listen(process.env.PORT, () => {
    console.log('server start')
})