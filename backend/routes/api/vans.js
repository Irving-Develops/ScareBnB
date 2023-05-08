const express = require('express');
const asyncHandler = require('express-async-handler');
const {Van, Image, User, Amenity, VanAmenity, Booking, Review} = require('../../db/models');
const bookingRouter = require('./bookings')

const router = express.Router();


// router.use('/:vanId(\\d+)/bookings', bookingRouter)


//DELETE for booking, I don't have access to booking id so I need van and user id to delete specific booking
// router.delete(`/:vanId(\\d+)/bookings/:bookingId(\\d+)`, asyncHandler(async (req, res) => {
//         const {bookingId} = req.params;
//         const booking = await Booking.findOne({where: {id: bookingId}})
//         await booking.destroy()
//         return res.json({message: 'Success!'})
// }))


//READ for all and specific van
router.get('/', asyncHandler(async(req,res) => {
    // const vans = await Van.findAll({include: [Image, User, Review, amenities]})
    // const vans = await Van.findAll()

    const vans = await Van.findAll({include: [Image]})
    console.log(vans)







// const amenities = await Amenity.findAll({
//   include: [
//     {
//       model: Van,
//       as: 'amenities',
//       through: {
//         attributes: []
//       }
//     }
//   ]
// });
    console.log("--------------- inside")
    return res.json(vans)
}))

router.get(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    const van = await Van.findByPk(req.params.id, {include: [Image, Review, User, {model: Booking, include: [User]}]})
    console.log(van, "<================= van in backend")
    return res.json(van)
}))


//UPDATE
router.put(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    const van = await Van.findByPk(req.params.id)
    const updatedVan = await van.update(req.body)
    const editedVan = await Van.findByPk(req.params.id, {include: [Image]})
    return res.json(updatedVan)

}))

//CREATE
router.post('/', asyncHandler(async(req,res) => {
    const newVan = await Van.create(req.body);
        return res.json(newVan)
}))


//DELETE
router.delete(`/:id(\\d+)`, asyncHandler(async(req,res) => {
    const id = req.params.id
    const van = await Van.findByPk(id)
    console.log(van, "<=============== van in delete")
    
    await van.destroy()
    res.json({message: 'Success!'})
    return res.redirect(`/`)

}))



module.exports = router;
