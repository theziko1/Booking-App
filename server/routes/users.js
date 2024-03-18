import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js"
import { verifyAdmin, verifyUser } from "../middleware/verifyToken.js"


const router = express.Router()

router.get("/", verifyUser , getUsers)

router.get("/:id", verifyUser, getUser)

router.put("/:id", verifyUser, updateUser)

router.delete("/:id", verifyAdmin, deleteUser)

export default router