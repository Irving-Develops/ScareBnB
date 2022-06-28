const express = require('express');
const asyncHandler = require('express-async-handler');
const {Spot, Image, User} = require('../../db/models/');

const router = express.Router();

router.get('/', asyncHandler(async(req,res) => {
    const spots = await Spot.findAll({include: [Image, User]})
    return res.json(spots)
}))

router.get(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    const spots = await Spot.findAll({include: [Image, User]})
    return res.json(spots)
}))

router.put(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    res.send("working")
    // console.log(req.params.id)
    const spot = await Spot.updateItem(req.body)
    return res.json(spot)
    // // console.log("inside route")
    // spot.address = req.body.address
    // spot.city = req.body.city
    // spot.state = req.body.state
    // spot.country = req.body.country
    // spot.name = req.body.name
    // spot.price = req.body.price
    // spot.history = req.body.history

    // await spot.save()
    // res.json({message: 'Success!', post})

}))

router.post('/', asyncHandler(async(req,res) => {
        const newSpot = await Spot.create(req.body);
        console.log(req.baseUrl)
        return res.redirect(`${req.baseUrl}/${id}`);
}))

router.delete(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    // console.log(req.params.id)
    const id = req.params.id
    const spot = await Spot.findByPk(id)
    // const images = await Image.findAll({where: {spotId: id}})
    // console.log(spot)
    // console.log(spot, images)
    // await images.destroy()
    await spot.destroy()
    // await images.destroy()

    // return res.json(spot)

    // // res.json({spot})
      res.json({message: 'Success!'})
      return res.redirect(`/`)

}))

module.exports = router;
