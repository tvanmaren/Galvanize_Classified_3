'use strict';

const express = require('express');
const app = express();

const messages = require('./routes/classifieds');

app.use('/classifieds',messages);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
