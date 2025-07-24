const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();
// Method    Desc
// GET       /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// Method    Desc
// POST     /feed/post
router.post(
  '/post',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.createPost
);

router.get('/post/:postId', isAuth, feedController.getPost);



// Method    Desc
// PUT     /feed/:id
router.put(
  '/post/:postId',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('content')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.updatePost
);


// Method    Desc
// DELETE     /feed/:id
router.delete('/post/:postId', isAuth, feedController.deletePost);

module.exports = router;
