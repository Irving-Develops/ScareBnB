const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const vansRouter = require('./vans.js');
const bookingsRouter = require('./bookings.js');
const imagesRouter = require('./images.js')
const reviewRouter =require('./reviews.js')
const favoritesRouter = require('./favorites.js')



router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/vans', vansRouter);

router.use('/bookings', bookingsRouter);

router.use('/reviews', reviewRouter);

router.use('/favorites', favoritesRouter);



// router.use('/images', imagesRouter);

// router.use('/bookings', bookingsRouter);

// router.use('/bookings', bookingsRouter);

router.post('/test', (req, res) => {
  res.json({
    requestBody: req.body
  });
});

module.exports = router;