const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot, Image, User} = require('../../db/models');
const { restoreUser } = require('../../utils/auth');
const router = express.Router();


//CREATE

router.post('/', asyncHandler(async (req, res) => {
    let createdBooking = await Booking.create(req.body)

    return res.json(createdBooking)
}))

//READ
router.get('/:spotId(\\d+)', restoreUser, asyncHandler(async (req, res) => {
    const { user } = req;
    const spotId = req.params.spotId; // Get the spotId from the request params
    console.log("\n", " user:      ", user, "\n");
    const booking = await Booking.findOne({
        where: {
            userId: user.id, // Remove the curly braces around user.id
            spotId: spotId // Pass the spotId variable to the where condition
        }
    });
    console.log("booking", "\n", booking,)

    return res.json(booking);
}))

router.get('/mybookings/:userId(\\d+)', restoreUser, asyncHandler(async (req, res) => {
    const {userId} = req.params
    const myBookings = await Booking.findAll({where: { userId: userId }, include: [{model: Spot, include: [{model: Image},  {model: User}]}]} )
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