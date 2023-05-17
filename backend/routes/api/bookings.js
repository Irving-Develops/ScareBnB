const express = require("express");
const asyncHandler = require("express-async-handler");
const { Booking, Van, Image, User } = require("../../db/models");
const router = express.Router();

//CREATE

router.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log(req.body, "<================= req.body in backend");
    let createdBooking = await Booking.create(req.body);

    return res.json(createdBooking);
  })
);

//READ
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const bookings = await Booking.findAll();
    return res.json(bookings);
  })
);

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const booking = await Booking.findAll({ where: { vanId: req.params.id } });
    console.log(booking, "<================= booking in backend");
    return res.json(booking);
  })
);

router.get(
  "/mybookings/:userId(\\d+)",
  asyncHandler(async (req, res) => {
    const id = req.params.userId;
    console.log(id, "<================= id in backend");
    const myBookings = await Booking.findAll({
      where: { bookerId: id },
      include: [{ model: Van, include: [{ model: Image }] }],
    });
    console.log(myBookings, "<================= myBookings in backend");
    return res.json(myBookings)
  })
);

//DELETE in spots route
router.delete(
  `/:bookingId(\\d+)`,
  asyncHandler(async (req, res) => {
    const { bookingId } = req.params;
    const booking = await Booking.findByPk(bookingId);
    await booking.destroy();
    return res.json({ message: "Success!" });
  })
);

module.exports = router;
