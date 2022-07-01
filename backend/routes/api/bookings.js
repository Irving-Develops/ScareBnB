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
    console.log(req.params.id)
    const bookings = await Booking.findAll()
    res.send(bookings)
    return res.json(bookings)

}))
// router.get(`/:id(\\d+)`, asyncHandler(async (req, res) => {
//     res.send("working")
// }))

//UPDATE
router.put(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    res.send("working")
}))

//DELETE
router.delete(`/:bookingId(\\d+)`, asyncHandler(async (req, res) => {
        let {spotId, userId} = req.body;
        console.log(req.body)
        const booking = await Booking.findOne({where: {userId, spotId}})
        console.log("booking =========> ",booking)
        await booking.destroy()

        res.json({
            message: 'Success!'
        })
        return res.redirect(`/`)
}))


module.exports = router;