'use strict';

const express = require('express');

const router = express.Router();


router.get('/classifieds/:id', (req, res, next) => {
  // GET /classifieds/:id should return the id,title, description, price and item_image of a single ad.
  const id = req.params.id;
});


router.get('/classifieds', (req, res, next) => {
  // GET /classifieds should return the id,title, description, price and item_image of all classifieds.

});


router.post('/classifieds', (req, res, next) => {
  // POST /classifieds should create a new ad and return the id, title, description, price and item_image that were created.

});


router.patch('/classifieds', (req, res, next) => {
  // PATCH /classifieds/:id should update an ad and return the id, title, description, price and item_image that were updated.

});


router.delete('/classifieds/:id', (req, res, next) => {
  // DELETE /classifieds/:id should delete an ad and return the id,title, description, price, and item_image that were deleted.
  const id = req.params.id;

});

module.exports = router;
