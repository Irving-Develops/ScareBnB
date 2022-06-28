const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();


//CREATE

router.post('/', asyncHandler(async (req, res) => {
    res.send("working")
}))

//READ
router.get('/', asyncHandler(async (req, res) => {
    res.send("working")

}))
router.get(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    res.send("working")
}))

//UPDATE
router.put(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    res.send("working")
}))

//DELETE
router.delete(`/:id(\\d+)`, asyncHandler(async (req, res) => {
    res.send("working")
}))


module.exports = router;