const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot, Image, User, Review} = require('../../db/models')
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({where: {vanId: req.params.id}})
    console.log(reviews, "<================= reviews in backend");
    return res.json(reviews)
}))

router.post('/', asyncHandler(async (req, res) => {
    const review = await Review.create(req.body)
    return res.json(review)
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id)
    const updatedReview = await review.update(req.body)
    res.send(updatedReview)
    return updatedReview

}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id)
    await review.destroy()
    return res.json(review)
}))




module.exports = router