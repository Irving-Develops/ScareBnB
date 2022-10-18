const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot, Image, User, Booking, Review} = require('../../db/models/');
const bookingRouter = require('./bookings')

const router = express.Router();


// router.use('/:spotId(\\d+)/bookings', bookingRouter)


//DELETE for booking, I don't have access to booking id so I need spot and user id to delete specific booking
// router.delete(`/:spotId(\\d+)/bookings/:bookingId(\\d+)`, asyncHandler(async (req, res) => {
//         const {bookingId} = req.params;
//         const booking = await Booking.findOne({where: {id: bookingId}})
//         await booking.destroy()
//         return res.json({message: 'Success!'})
// }))


//READ for all and specific spot
router.get('/', asyncHandler(async(req,res) => {
    const spots = await Spot.findAll({include: [Image, User, Review]})
    return res.json(spots)
}))

router.get(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    const spot = await Spot.findByPk(req.params.id, {include: [Image, User]})
    return res.json(spot)
}))


//UPDATE
router.put(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id)
    const updatedSpot = await spot.update(req.body)
    const editedSpot = await Spot.findByPk(req.params.id, {include: [Image, User]})
    return res.json(updatedSpot)

}))

//CREATE
router.post('/', asyncHandler(async(req,res) => {
    const newSpot = await Spot.create(req.body);
        return res.json(newSpot)
}))


//DELETE
router.delete(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    const id = req.params.id
    const spot = await Spot.findByPk(id)
    
    await spot.destroy()
    res.json({message: 'Success!'})
    return res.redirect(`/`)

}))



module.exports = router;
