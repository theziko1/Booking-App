import express from "express";
import { AddHotel, DeleteHotel, GetAllHotels, GetOneHotel, UpdateHotel, countByCity, countByType } from "../controllers/hotel.js";
import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router()


router.post("/", verifyAdmin, AddHotel)

router.get("/", GetAllHotels)

router.get("/:id", GetOneHotel)

router.put("/:id", verifyAdmin, UpdateHotel)

router.delete("/:id", verifyAdmin, DeleteHotel)

router.get("/count/countByCity", countByCity)

router.get("/count/countByType", countByType)


export default router