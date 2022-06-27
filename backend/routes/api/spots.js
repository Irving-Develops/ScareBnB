const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot, Image} = require('../../db/models/');

const router = express.Router();

router.get('/', asyncHandler(async(req,res) => {
    const spots = await Spot.findAll({include: [Image]})
    // const images = await Image.findAll()
    // console.log(res.json(images))
    // let data = res.json(spots);
    //  data += await res.json(images);
    console.log("WORKING =====================>", spots)
    // data.map(spot=> console.log('=========>', spot[id]))
    // console.log(res.json(spots).map(spot => {spot.id}))
    return res.json(spots)
}))

module.exports = router;
