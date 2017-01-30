'use strict';

const express = require('express');

const router = express.Router();

const knex = require('../knex');

// const {
//   camelizeKeys,
//   decamelizeKeys
// } = require('humps');

router.get('/:id', (req, res, next) => {
  // GET /classifieds/:id should return the id,title, description, price and item_image of a single ad.
  const id = parseInt(req.params.id);
  knex('classifieds')
    .where('classifieds.id', id)
    .first()
    .then((entry) => {
      delete entry.created_at;
      delete entry.updated_at;
      res.json(entry);
    });
});

router.get('/', (req, res, next) => {
  // GET /classifieds should return the id,title, description, price and item_image of all classifieds.

});

router.post('/', (req, res, next) => {
  // POST /classifieds should create a new ad and return the id, title, description, price and item_image that were created.

});

router.patch('/', (req, res, next) => {
  // PATCH /classifieds/:id should update an ad and return the id, title, description, price and item_image that were updated.

});

router.delete('/:id', (req, res, next) => {
  // DELETE /classifieds/:id should delete an ad and return the id,title, description, price, and item_image that were deleted.
  const id = req.params.id;

});

module.exports = router;
