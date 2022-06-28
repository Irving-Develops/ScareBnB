const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot, Image, User} = require('../../db/models/');
const bookingRouter = require('./bookings')

const router = express.Router();

router.use('/:id(\\d+)/bookings', bookingRouter)

router.get('/', asyncHandler(async(req,res) => {
    const spots = await Spot.findAll({include: [Image, User]})
    return res.json(spots)
}))

router.get(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    const spots = await Spot.findAll({include: [Image, User]})
    return res.json(spots)
}))

router.put(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    // res.send(req.body)
    // console.log(req.params.id)
    const spot = await Spot.findByPk(req.params.id)

    const updatedSpot = await spot.update(req.body)
    // res.redirect('/')
    return res.json(updatedSpot)

}))

router.post('/', asyncHandler(async(req,res) => {
    const newSpot = await Spot.create(req.body);
    console.log(req.body)  
     return res.redirect(`${req.baseUrl}/${newSpot}`);
        // return res.redirect(`/`);
}))

router.delete(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    const id = req.params.id
    const spot = await Spot.findByPk(id)

    await spot.destroy()
    res.json({message: 'Success!'})
    return res.redirect(`/`)

}))

module.exports = router;
