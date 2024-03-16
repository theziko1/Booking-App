// import dependencies
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";

config()

// declare variables

const PORT = process.env.PORT

// initialize express
const app = express()

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