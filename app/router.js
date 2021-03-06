const express = require('express');

const contactController = require('./controllers/contactController');
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const searchController = require('./controllers/searchController');
const studentController = require('./controllers/studentController');
const adminController = require('./controllers/adminController');
const authController = require('./controllers/authController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/admin', adminController.adminPanel);

router.get('/promos', promoController.promosList);

router.get('/search', searchController.searchPage);

router.get('/contact', contactController.contact);

router.get('/promo/:id', promoController.promoPage);

router.get('/promo/:id/students', studentController.studentsByPromo);

router.get('/promo/students/:id/details', studentController.studentDetails);

router.get('/login', authController.getLogin);

router.get('/admin/logout', authController.logout);

router.post('/login', authController.postLogin);

router.post('/search', searchController.searchResult);

router.post('/admin/removeStudent', adminController.removeStudent);

router.post('/admin/addStudent', adminController.addStudent);

router.post('/admin/removePromo', adminController.removePromo);

router.post('/admin/addPromo', adminController.addPromo);

module.exports = router;