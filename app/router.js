const express = require('express');
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/promos', promoController.promosList);
//Route trouver une promo

router.get('/promo/:id', promoController.promoPage);

router.get('/promo/:id/students', studentController.studentsByPromo);

module.exports = router;