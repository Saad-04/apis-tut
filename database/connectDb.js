import mongoose from "mongoose";

export const connectDb =()=>{mongoose.connect(process.env.DATABASE_URL,
 { dbName: "backend-api",
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
.then((r) => console.log("Database Connected"))
.catch((e) => console.log(e))}