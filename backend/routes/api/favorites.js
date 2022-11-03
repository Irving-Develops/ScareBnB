const express = require('express');
const asyncHandler = require('express-async-handler');
const {Booking, Spot, Image, User, Favorite} = require('../../db/models')
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const favorites = await Favorite.findAll({where: {userId: req.params.id}, include: [{model: Spot, include: [{model: Image}]}]})
    return res.json(favorites)
}))

router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
    // res.send("inside add route")
    const favorite = await Favorite.create(req.body)
    return res.json(favorite)
}))

router.delete('/:id(\d+)', asyncHandler(async (req, res) => {
    res.send("hitting delete route")
}))
module.exports = router