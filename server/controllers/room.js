import { validateRoom } from "../middleware/validate.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js"


// Create a Room
export const AddRoom = async (req,res,next) => {
    const hotelId = req.params.hotelid;
    const valid = validateRoom(req.body)
    if (valid.error) {
      return res.status(401).json({success : false ,error : valid.error.message})
    }
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
          await Hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: savedRoom._id },
          });
        } catch (err) {
          next(err);
        }
        res.status(200).json(savedRoom);
      } catch (err) {
        next(err);
      } 
}

// Update a Room
export const UpdateRoom = async (req,res) => {
   
    try {
        const UpdatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        
        res.status(201).json(UpdatedRoom)
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Update a Availability of Room
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};

// Delete a Room
export const DeleteRoom = async (req,res,next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
          await Hotel.findByIdAndUpdate(hotelId, {
            $pull: { rooms: req.params.id },
          });
        } catch (err) {
          next(err);
        }
        res.status(201).json("Room has been deleted")
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Get a Room
export const GetOneRoom = async (req,res) => {
   
    try {
        const room = await Room.findById(req.params.id)
        res.status(201).json(room)
    } catch (error) {
        res.status(500).json(error)
    } 
}

// Get hotels
export const GetAllRooms = async (req,res) => {
   
    try {
        const rooms =await Room.find()
        res.status(201).json(rooms)
    } catch (error) {
        res.status(500).json(error)
    } 
}