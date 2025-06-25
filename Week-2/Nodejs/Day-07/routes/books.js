const express = require('express');
const router = express.Router();

let books = [
  { id: 101, title: 'Node Essentials' },
  { id: 102, title: 'Express Handbook' }
];

router.get('/', (req, res) => {
  const search = req.query.q;
  const results = search
    ? books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()))
    : books;
  res.json(results);
});

router.get('/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  book ? res.json(book) : res.status(404).json({ error: 'Book not found' });
});

router.post('/', (req, res) => {
  const newBook = { id: Date.now(), title: req.body.title };
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (book) {
    book.title = req.body.title || book.title;
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

router.delete('/:id', (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.json({ message: 'Book deleted' });
});

module.exports = router;
