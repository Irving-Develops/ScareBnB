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
    // console.log(req.params.id)
    const bookings = await Booking.findAll()

    return res.json(bookings)

}))

//DELETE in spots route




module.exports = router;