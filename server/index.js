import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";

config()


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
   console.log("Connected to the DATABASE !")
})
.catch((err)=>{
    console.log(`No Connexion ${err} !`)
})

const PORT = process.env.PORT
const app = express()


app.listen(PORT,()=>{
    console.log(`🚀 ~ Server running  ~ : ${PORT}` ) 
})