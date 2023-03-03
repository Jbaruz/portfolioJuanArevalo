let mongoose = require('mongoose');
let contactsModel = mongoose.Schema({
    Name: String,
    Number: String,
    Email: String,
    Username: String,
    Password: String
},
    {
        collection: "contacts"
    });
module.exports = mongoose.model('Contact', contactsModel);