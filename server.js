// server.js
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, 2025cloud from Node.js!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
