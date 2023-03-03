let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let Contact = require('../models/contacts');
// we want to display the ContactList 
module.exports.displayContactList = (req, res, next) => {
    // console.log('bug---------->>>>>>>>')
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            // console.log('bug---------->>>>>>>>',contactList);
            res.render('contact/list',
            {title:'Contacts', ContactList:contactList,
            displayName:req.user?req.user.displayName:''})
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title:'Add Contact', 
    displayName:req.user?req.user.displayName:''});
}

module.exports.processAddPage = (req,res,next) => {

    let newContact = Contact({
        "Name":req.body.name,
        "Number":req.body.number,
        "Email":req.body.email,
        "Username":req.body.username,
        "Password":req.body.password
    });
    Contact.create(newContact,(err,Contact) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contactList');
        }
    });
}

module.exports.displayEditPage = (req,res,next) => {

    let id = req.params.id;
    Contact.findById(id,(err,contactToEdit) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contact/edit', {title: 'Edit Contact', contact:contactToEdit,
            displayName:req.user?req.user.displayName:''});
        }
    });

}

module.exports.processEditPage = (req,res,next) => {

    let id = req.params.id
    let updatedContact = Contact({
        "_id":id,
        "Name":req.body.name,
        "Number":req.body.number,
        "Email":req.body.email,
        "Username":req.body.username,
        "Password":req.body.password
    });
    Contact.updateOne({_id:id}, updatedContact, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contactList');
        }
    });
}

module.exports.performDelete = (req,res,next) => {

    let id = req.params.id;
    Contact.remove({_id:id}, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contactList');
        }
    });

}