// import dependencies
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import authRoute from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors"

config()

// declare variables

const PORT = process.env.PORT

// initialize express
const app = express()


// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials : true,
  origin : "http://localhost:5173",
}))

app.use("/api/auth",authRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/users",usersRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

// connecting MongoDB

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   console.log("Connected to the DATABASE !")
})
.catch((err)=>{
    console.log(`No Connexion ${err} !`)
})


// listenning to PORT of the Server

app.listen(PORT,()=>{
    console.log(`🚀 ~ Server running  ~ : ${PORT}` ) 
})