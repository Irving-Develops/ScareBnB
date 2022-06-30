const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot, Image, User} = require('../../db/models/');
const bookingRouter = require('./bookings')

const router = express.Router();

router.use('/:spotId(\\d+)/bookings', bookingRouter)

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
    console.log("1",spot)
    const updatedSpot = await spot.update(req.body)
    const editedSpot = await Spot.findByPk(req.params.id, {include: [Image, User]})
    // res.redirect('/')
    return res.json(updatedSpot)

}))

router.post('/', asyncHandler(async(req,res) => {
    console.log("req body", req.body)
    const newSpot = await Spot.create(req.body);
    console.log("new spot", newSpot) 
    console.log('req.baseUrl', req.baseUrl)
    //  return res.redirect(`/spots/${newSpot}`);
        return  res.redirect(`/`);
        // return res.json()
}))

router.delete(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    const id = req.params.id
    const spot = await Spot.findByPk(id)

    await spot.destroy()
    res.json({message: 'Success!'})
    return res.redirect(`/`)

}))



module.exports = router;
