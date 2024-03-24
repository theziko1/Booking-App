import Hotel from "../models/Hotel.js"


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
     const { min ,max , ...others} = req.query
    try {
        const hotels =await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min | 1, $lt: max || 999 },
          }).limit(req.query.limit);
        res.status(201).json(hotels)
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Count hotels by city (Filter)
export const countByCity = async (req,res) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map((city)=>{
          return  Hotel.countDocuments({city : city})
        }))
        res.status(201).json(list)
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Count hotels by type (Filter)
export const countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };