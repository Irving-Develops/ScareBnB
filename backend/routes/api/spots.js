const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot, Image} = require('../../db/models/');

const router = express.Router();

router.get('/', asyncHandler(async(req,res) => {
    const spots = await Spot.findAll()
    const images = await Image.findAll()
    console.log(res.json(images))
    console.log(res.json(spots))
}))

module.exports = router;
