module.exports = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(undeclaredVar); // BUG: undeclaredVar is not defined
};
