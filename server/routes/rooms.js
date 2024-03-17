import express from "express"
import { AddRoom, DeleteRoom, GetAllRooms, GetOneRoom, UpdateRoom } from "../controllers/room.js"


const router = express.Router()

router.post("/",AddRoom)

router.get("/",GetAllRooms)

router.get("/:id",GetOneRoom)

router.put("/:id",UpdateRoom)

router.delete("/:id",DeleteRoom)


export default router

