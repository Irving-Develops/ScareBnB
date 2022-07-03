const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking} = require('../../db/models')
const router = express.Router();


//CREATE

router.post('/', asyncHandler(async (req, res) => {
    let createdBooking = await Booking.create(req.body)

    return res.json(createdBooking)
}))

//READ
router.get('/', asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll()
    // console.log("xxxxxxxxxxxxxxxxxxxxxxx", bookings)
    return res.json(bookings)
}))

//DELETE in spots route
router.delete(`/:bookingId(\\d+)`, asyncHandler(async (req, res) => {
        const {bookingId} = req.params;
        const booking = await Booking.findByPk(bookingId)
        // console.log("=====================", booking)
        await booking.destroy()
        return res.json({message: 'Success!'})
}))





module.exports = router;