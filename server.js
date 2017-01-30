'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const messages = require('./routes/classifieds');

app.use(bodyParser.json());
app.use(express.static('node_modules/angular'));
app.use(express.static('public'));
app.use('/classifieds', messages);

app.use('*', (req, res, next) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'public')
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
