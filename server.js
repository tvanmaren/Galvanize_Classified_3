'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const messages = require('./routes/classifieds');

app.use(bodyParser.json());

app.use('/classifieds', messages);

app.use('/angular', express.static(path.join(__dirname, '/node_modules/angular/angular.min.js')));

app.use('/angular-ui-router', express.static(path.join(__dirname, '/node_modules/angular-ui-router/release/angular-ui-router.js')));

app.use(express.static(path.join(__dirname, '/public/')));

app.use('*', (req, res) => {
  res.sendFile('public/index.html', {
    root: __dirname
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
