const express = require('express');
const cors = require('cors');

const data = require('./todos.json');

const app = express().use(cors());
const hostname = '127.0.0.1';
const port = 3000;

app.get('/todos', (req, res) => res.send(data));

app.listen(port, () =>
  console.log(`Serving running at http://${hostname}:${port}/`));
