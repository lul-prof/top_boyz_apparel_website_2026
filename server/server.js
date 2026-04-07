//Imports
import express from 'express'
import userRouter from './routers/userRouter.js';
import adminRouter from './routers/adminRouter.js';
import "dotenv/config"
import dns from "dns"
import cors from "cors"
import morgan from 'morgan';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';



//configurations
//Google default dns to bypass network restrictions
dns.setServers([
    "8.8.8.8",
    "8.8.4.4",
    "[2001:4860:4860::8888]",
    "[2001:4860:4860::8844]",
]);

const app=express();
const port=process.env.PORT;

connectDB();
connectCloudinary();


//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));


//Routes
app.get('/',(req,res)=>{
    res.send("Top Boyz Apparel Server is Working. Email: engineermutua1@gmail.com")
})

app.use('/api/user/',userRouter);

app.use('/api/admin/',adminRouter);

app.listen(port,()=>{
    console.log(`App Started on port ${port}`);
})