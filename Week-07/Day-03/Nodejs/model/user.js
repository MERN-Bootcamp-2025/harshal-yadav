// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const PostSchema= new Schema({
//      title:{
//         type: String,
//         required: true
//      },
//      imageUrl:{
//         type: String,
//         required: true,
//      },
//      content:{
//         type: String,
//         required: true
//      },
//      creator:{
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//      }
// })

// module.exports = mongoose.Schema('Post',PostSchema);

// email, password, name, status, posts


const mongoose= require('mongoose');
const Schema= mongoose.Schema;


const userSchema= new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: 'I am new'
    },
    posts:[
        {
          type: Schema.Types.ObjectId,
          ref: 'Post'
        }
    ]

})

module.exports= mongoose.model('User',userSchema);