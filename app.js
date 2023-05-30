import express from "express";
import {router} from "./routes/userRoutes.js";
export const app = express();
import {config} from 'dotenv'
config({
    "path":"./database/config.env"
})
// user all router here 
app.use("/user", router)

app.get('/', (req, res) => {
    res.send('show message ')
})

app.use(express.json())


