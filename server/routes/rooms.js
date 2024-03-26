import express from "express"
import { AddRoom, DeleteRoom, GetAllRooms, GetOneRoom, UpdateRoom, updateRoomAvailability } from "../controllers/room.js"
import { verifyAdmin } from "../middleware/verifyToken.js"


const router = express.Router()

router.post("/:hotelid", verifyAdmin , AddRoom)

router.get("/", GetAllRooms)

router.get("/:id",GetOneRoom)

router.put("/:id", verifyAdmin ,UpdateRoom)

router.put("/availability/:id", updateRoomAvailability);

router.delete("/:id/:hotelid", verifyAdmin ,DeleteRoom)


export default router

