const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
     imageUrl: String,
     title: String,
     description: String,
     link: String,
     theme: String,
     user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
     }

});

module.exports = mongoose.model('Post', PostSchema);