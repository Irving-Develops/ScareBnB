const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking} = require('../../db/models')
const router = express.Router();


//CREATE

router.post('/', asyncHandler(async (req, res) => {
    res.send("working")
}))

//READ
router.get('/', asyncHandler(async (req, res) => {
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
        let {id} = req.params
        console.log("id =======> " , id)
        const booking = await Booking.findByPk(id)
        console.log(booking)
        // await booking.destroy()
        res.json({
            message: 'Success!'
        })
        // return res.redirect(`/`)
}))


module.exports = router;