import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js";
import AuthRouter from "./routes/Auth.routes.js";
import userRouter from "./routes/User.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use("/api/auth",AuthRouter);
app.use("/api/user",userRouter);


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
   connectDB();
    console.log(`mast chal rha hu bhai,port:${port}`)
});