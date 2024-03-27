import Joi from "joi"

export const validateUser = (User) => {
     const UserSchema = Joi.object({
        username : Joi.string().min(4).max(10).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(8).max(18).required(),
        country : Joi.string().required(),
        img : Joi.string(),
        city : Joi.string().required(),
        phone : Joi.string().required(),
        isAdmin : Joi.boolean()


     })

     return UserSchema.validate(User)
}

export const validateRoom = (Room) => {
    const RoomSchema = Joi.object({
       title : Joi.string().min(4).max(10).required(),
       price : Joi.number().required(),
       maxPeople : Joi.number().required(),
       desc : Joi.string().required(),
       roomNumbers : Joi.array().items(Joi.string())


    })

    return RoomSchema.validate(Room)
}

export const validateHotel = (Hotel) => {
    const HotelSchema = Joi.object({
       name : Joi.string().min(4).max(10).required(),
       type : Joi.string().required(),
       city : Joi.string().required(),
       address : Joi.string().required(),
       distance : Joi.string().required(),
       photos : Joi.array().items(Joi.string()),
       title : Joi.string().required(),
       desc : Joi.string().required(),
       rating : Joi.number(),
       rooms : Joi.array().items(Joi.string()),
       cheapestPrice : Joi.number().required(),
       featured : Joi.boolean(),

    })

    return HotelSchema.validate(Hotel)
}