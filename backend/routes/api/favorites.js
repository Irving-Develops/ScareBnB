const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot, Image, User, Favorite} = require('../../db/models')
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const favorites = await Favorite.findAll({where: {userId: req.params.id}, include: [{model: Spot, include: [{model: Image}]}]})
    return res.json(favorites)
}))

router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
    res.send("inside add route")
}))
module.exports = router