const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

router.get('/about', (req, res) => {
  res.send('About this app');
});
router.get('/submit-input', (req, res) => {
  res.send(`
    <form action="/submit-web" method="POST">
      <label for="name">Enter your name:</label>
      <input type="text" id="name" name="name" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/submit',(req, res, next) => {
    console.log("Received a POST request");
    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.send(`Thank you, ${name || 'Guest'}!`);
  }
);

module.exports = router;
