const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot, Image, User, Review} = require('../../db/models')
const router = express.Router();

router.get('/:spotId', asyncHandler(async (req, res) => {
    const reviews = await Review.findByPk(req.params.id)
    console.log(reviews)
    return res.json(reviews)
}))


module.exports = router