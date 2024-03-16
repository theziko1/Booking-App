import Hotel from "../models/Hotel"


// Create a hotel
export const AddHotel = async (req,res) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(201).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Update a hotel
export const UpdateHotel = async (req,res) => {
   
    try {
        const UpdatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        res.status(201).json(UpdatedHotel)
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Delete a hotel
export const DeleteHotel = async (req,res) => {
   
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(201).json("Hotel has been deleted")
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Get a hotel
export const GetOneHotel = async (req,res) => {
   
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(201).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Get hotels
export const GetAllHotels = async (req,res) => {
   
    try {
        const hotels =await Hotel.find()
        res.status(201).json(hotels)
    } catch (error) {
        res.status(500).json(error)
    } 
}