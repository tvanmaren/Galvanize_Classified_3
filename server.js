'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const messages = require('./routes/classifieds');

app.use(bodyParser.json());

app.use('/classifieds', messages);

app.use('/angular', express.static(path.join(__dirname, '/node_modules/angular/angular.min.js')));
app.use(express.static(path.join(__dirname, 'public')));

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
