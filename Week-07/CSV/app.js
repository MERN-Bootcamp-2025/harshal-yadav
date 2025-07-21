// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const multer  = require('multer')
// const csv = require('csv-parser');

// const errorController = require('./controllers/error');
// const User = require('./models/user');

// const MONGODB_URI =
//   'mongodb+srv://harshalyadav:r5HFz3Q8JM336wek@learning.5gn8wxw.mongodb.net/?retryWrites=true&w=majority&appName=Learning';

// const app = express();
// const store = new MongoDBStore({
//   uri: MONGODB_URI,
//   collection: 'sessions'
// });

// const fileStorage= multer.diskStorage({
//   destination: (req, file, cb)=>{
//     cb(null, 'images');
//   },
//   filename:(req, file,cb)=>{
//     cb(null, new Date().toISOString()+'-'+file.originalname)
//   }
// })

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const authRoutes = require('./routes/auth');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use(
//   session({
//     secret: 'my secret',
//     resave: false,
//     saveUninitialized: false,
//     store: store
//   })
// );



// const fileFilter=(req, file, cb)=>{
//   if(
//     file.mimetype === 'image/png'||
//     file.mimetype === 'image/jpg'||
//     file.mimetype === 'image/jpeg'
//     // file.mimetype === 'image/csv'
//   ){
//     cb(null, true);
//   }else{
//     cb(null, false);
//   }
// }
// app.use(multer({
//   storage:fileStorage,
//    limits: { fileSize: 5 * 1024 * 1024 },
//    fileFilter:fileFilter
// }).single('image'));


// app.use((req, res, next) => {
//   if (!req.session.user) {
//     return next();
//   }
//   User.findById(req.session.user._id)
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.session.isLoggedIn;
//   next();
// });



// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);

// app.use(errorController.get404);


// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   writeConcern: { w: 'majority' }
// })
//   .then(result => {
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });


//..................ARTICAL LINK...........................................'
// https://medium.com/%40sahni_hargun/creating-a-node-js-api-to-upload-csv-files-to-mongodb-c8c4853e1fb3

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');
var multer = require('multer');
var csv = require('csvtojson');
require('dotenv/config');

var upload = multer({ dest: 'uploads/' });

var dumbledoresArmyModel = require('./models/account_csv');

app.use(cors());



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());app.get('/', (req, res) => {
    dumbledoresArmyModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ items: items });
        }
    });
});
app.post('/', upload.single('file'), (req, res, next) => {
    csv()
    .fromFile(req.file.path)
    .then((jsonObj)=>{
        var army = [];
        for(var i = 0;i<jsonObj.length;i++){
            var obj={};
            obj.firstName=jsonObj[i]['First Name'];
            obj.lastName=jsonObj[i]['Last Name'];
            obj.house=jsonObj[i]['House'];
            army.push(obj);
        }
        dumbledoresArmyModel.insertMany(army).then(function(){
            res.status(200).send({
                message: "Successfully Uploaded!"
            });
        }).catch(function(error){
            res.status(500).send({
                message: "failure",
                error
            });
        });
    }).catch((error) => {
        res.status(500).send({
            message: "failure",
            error
        });
    })
});

 const MONGODB_URI =
  'mongodb+srv://harshalyadav:r5HFz3Q8JM336wek@learning.5gn8wxw.mongodb.net/?retryWrites=true&w=majority&appName=Learning';

mongoose.connect(MONGODB_URI,
{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
    console.log('Connected to database!')
});

app.listen('3000' || process.env.PORT, err => {
    if (err)
        throw err
    console.log('Server started!')
});