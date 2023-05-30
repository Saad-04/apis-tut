import express from "express";
import {router} from "./routes/userRoutes.js";
export const app = express();
import {config} from 'dotenv'
import cookieParser from "cookie-parser";
config({
    "path":"./database/config.env"
})
app.use(cookieParser())
// user all router here 
app.use(express.json())
app.use("/api/v1/user", router)

app.get('/', (req, res) => {
    res.send('show message ')
})



