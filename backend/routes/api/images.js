const express = require('express');
const asyncHandler = require('express-async-handler');
const {Image} = require('../../db/models')
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const images = await Image.findAll({where: {id: req.params.id}})

    return res.json(images)
}));

module.exports = router;