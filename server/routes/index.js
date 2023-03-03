var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */

router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage); 

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProjectsPage); 

router.get('/services', indexController.displayServicesPage); 

router.get('/contact', indexController.displayContactPage); 

// GET Router for displaying the login page
router.get('/login', indexController.displayLoginPage);

// POST Router for processing the login Page
router.post('/login', indexController.processLoginPage);

// GET Router for displaying the register page
router.get('/register', indexController.displayRegisterPage);

//POST Router for processing the register Page
router.post('/register', indexController.processRegisterPage);

// GET to perform userLogout
router.get('/logout', indexController.performLogout);


module.exports = router;
