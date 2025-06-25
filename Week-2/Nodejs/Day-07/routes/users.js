const express = require('express');
const router = express.Router();

// Example in-memory array
let users = [
  { id: 1, name: 'Ash' },
  { id: 2, name: 'Misty' }
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Get user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'User not found' });
});

// Create user
router.post('/', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete user
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: 'User deleted' });
});

module.exports = router;
