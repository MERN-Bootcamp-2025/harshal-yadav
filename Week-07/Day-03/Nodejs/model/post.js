const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema= new Schema({
     title:{
        type: String,
        required: true
     },
     imageUrl:{
        type: String,
        required: true,
     },
     content:{
        type: String,
        required: true
     },
     creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
     },
   
},
     {
      timestamps: true
     }
   )

module.exports = mongoose.model('Post',PostSchema);

// title, image, content, creator