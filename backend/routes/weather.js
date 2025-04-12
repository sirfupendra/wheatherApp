const express= require('express');
const router= express.Router();
const wheatherController= require('../controllers/weatherController');


//router.get('/weather',wheatherController.getWeather);
router.get('/:city',wheatherController.getWeatherByCity);

module.exports= router;