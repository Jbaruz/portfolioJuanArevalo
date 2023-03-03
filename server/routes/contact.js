let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
//connect to our contact model
let Contact = require('../models/contacts');
let contactController = require('../controllers/contact'); /* add this line WEEK5 2nd*/
//helper function for guard purposes
function requireAuth(req,res,next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//GET ROUTE for the contact list page - READ OPERATION
router.get('/', contactController.displayContactList);

/* GET Route for displaying the Add Page - CREATE Operation */
router.get('/add', requireAuth,contactController.displayAddPage);

/* POST Route for processing the Add Page - CREATE Operation */
router.post('/add',requireAuth, contactController.processAddPage);

/* GET Route for displaying the Edit Page - UPDATE Operation */
router.get('/edit/:id',requireAuth, contactController.displayEditPage);

/* POST Route for processing the Edit Page - UPDATE Operation */
router.post('/edit/:id',requireAuth, contactController.processEditPage);

/* GET to [ perform Deletion - DELETE Operation ] */
router.get('/delete/:id',requireAuth, contactController.performDelete);

module.exports = router;