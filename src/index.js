import dotenv from "dotenv";

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
dotenv.config({path:"./env"});

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log(err);
        throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("DB connection error",err);
});
//first approach
// import express from "express";

// const app = express();

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });

// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (err) => {
//             console.log(err);
//             throw err;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     }catch(err){
//         console.error(err);
//         throw err;
//     }
// })();