const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot, Image, User, Review} = require('../../db/models')
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({where: {spotId: req.params.id}, include: [User]})
    console.log(reviews, "==============")
    return res.json(reviews)
}))

router.post('/', asyncHandler(async (req, res) => {
    const review = await Review.create(req.body)
    return res.json(review)
}))


module.exports = router