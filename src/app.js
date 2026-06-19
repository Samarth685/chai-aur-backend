import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {   
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }
));

app.use(express.json({limit: "16kb"}));//to limit json data
app.use(express.urlencoded({limit: "16kb", extended: true}));//to decode url encoded data
app.use(express.static("public"));//to save static files in public folder
app.use(cookieParser());//to access server side cookies in client side code

//routes import

import userRouter from "./routes/user.routes.js";



//routes declaration
app.use("/api/v1/users",userRouter);



//https://localhost:8000/users/register
//https://localhost:8000/users/login

export {app};