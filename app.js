const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World Small Project to practice devops'));

module.exports = app;