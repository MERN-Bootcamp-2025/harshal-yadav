const express= require('express');
const  feedController  = require('../controllers/feed');
 const router= express.Router();

router.get('/', feedController.getPost);
router.post('/add', feedController.addPost);
 module.exports= router;