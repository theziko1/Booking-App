import express from "express"
import { AddRoom, DeleteRoom, GetAllRooms, GetOneRoom, UpdateRoom } from "../controllers/room.js"
import { verifyAdmin } from "../middleware/verifyToken.js"


const router = express.Router()

router.post("/:hotelid", verifyAdmin , AddRoom)

router.get("/", GetAllRooms)

router.get("/:id",GetOneRoom)

router.put("/:id", verifyAdmin ,UpdateRoom)

router.delete("/:id/:hotelid", verifyAdmin ,DeleteRoom)


export default router

