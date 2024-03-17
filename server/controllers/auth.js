import { createError } from "../middleware/error.js";
import User from "../models/User.js"
import bcrypt from "bcrypt"

export const register = async(req,res,next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
        ...req.body,
        password : hash,
       
    })
    await newUser.save()
    res.status(201).send("User has been created.")
  } catch (error) {
    next(error)
  }
}

