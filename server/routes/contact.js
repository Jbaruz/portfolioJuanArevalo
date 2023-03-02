let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our contact model
let Contact = require('../models/contacts');
let contactController = require('../controllers/contact'); /* add this line WEEK5 2nd*/


//GET ROUTE for the contact list page - READ OPERATION
router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add Page - CREATE Operation */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add Page - CREATE Operation */
router.post('/add', contactController.processAddPage);

/* GET Route for displaying the Edit Page - UPDATE Operation */
router.get('/edit/:id', contactController.displayEditPage);

/* POST Route for processing the Edit Page - UPDATE Operation */
router.post('/edit/:id', contactController.processEditPage);

/* GET to [ perform Deletion - DELETE Operation ] */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;