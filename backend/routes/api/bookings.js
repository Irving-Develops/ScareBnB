const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot} = require('../../db/models')
const router = express.Router();


//CREATE

router.post('/', asyncHandler(async (req, res) => {
    let createdBooking = await Booking.create(req.body)

    return res.json(createdBooking)
}))

//READ
router.get('/', asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll()
    return res.json(bookings)
}))

router.get('/mybookings/:userId(\\d+)', asyncHandler(async (req, res) => {
    const {userId} = req.params
    const myBookings = await Booking.findAll({where: { userId: userId }})
    // const spot = await Spot.findAll({where: {id: myBookings.spotId}})
    // console.log(spot, "spot")
    //I want to include the spot its related to, need to find out how to include it in the bookings query
    // const spot = await Spot.findAll({where: {spotId: myBookings.spotId}})
    // console.log(myBookings, "my bookings")
    console.log(req.url, "=============>")
    return res.json(myBookings)

}))

//DELETE in spots route
router.delete(`/:bookingId(\\d+)`, asyncHandler(async (req, res) => {
        const {bookingId} = req.params;
        const booking = await Booking.findByPk(bookingId)
        await booking.destroy()
        return res.json({message: 'Success!'})
}))





module.exports = router;