module.exports = (err, req, res, next) => {
  console.error(`[Error] ${req.method} ${req.url} - ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
};
