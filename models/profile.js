const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({ 
    name: String, 
    codename: String,
    displayname: String,
    peopleattending: Number
});

module.exports = mongoose.model('Profile', ProfileSchema);
