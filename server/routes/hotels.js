import express from "express";
import { AddHotel, DeleteHotel, GetAllHotels, GetOneHotel, UpdateHotel } from "../controllers/hotel.js";

const router = express.Router()


router.post("/",AddHotel)

router.get("/",GetAllHotels)

router.get("/:id",GetOneHotel)

router.put("/:id",UpdateHotel)

router.delete("/:id",DeleteHotel)


export default router