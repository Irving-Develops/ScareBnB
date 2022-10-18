const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot, Image, User, Review} = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    // const reviews = await Review.findAll()
    // return res.json(reviews)
}))


module.exports = router