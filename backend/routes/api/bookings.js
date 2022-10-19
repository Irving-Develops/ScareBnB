const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot, Image, User} = require('../../db/models')
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
    const myBookings = await Booking.findAll({where: { userId: userId }, include: [{model: Spot, include: [{model: Image},  {model: User}]}]} )
    return res.json(myBookings)
    return res.send('working')

}))

//DELETE in spots route
router.delete(`/:bookingId(\\d+)`, asyncHandler(async (req, res) => {
        const {bookingId} = req.params;
        const booking = await Booking.findByPk(bookingId)
        console.log(booking, "booking ===================== \n")
        await booking.destroy()
        return res.json({message: 'Success!'})
}))





module.exports = router;