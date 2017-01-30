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
  const adId = parseInt(req.params.id);
  knex('classifieds')
    .where('classifieds.id', adId)
    .first()
    .then((ad) => {
      delete ad.created_at;
      delete ad.updated_at;
      res.json(ad);
    });
});

router.get('/', (req, res, next) => {
  // GET /classifieds should return the id,title, description, price and item_image of all classifieds.
  knex('classifieds')
    .then((ads) => {
      ads.forEach((ad) => {
        delete ad.created_at;
        delete ad.updated_at;
      });
      res.json(ads);
    });

});

router.post('/', (req, res, next) => {
  // POST /classifieds should create a new ad and return the id, title, description, price and item_image that were created.
  const newAd = req.body;
  knex('classifieds')
    .insert(newAd, '*')
    .then((ads) => {
      const ad = ads[0];
      delete ad.created_at;
      delete ad.updated_at;
      res.json(ad);
    });

});

router.patch('/:id', (req, res, next) => {
  // PATCH /classifieds/:id should update an ad and return the id, title, description, price and item_image that were updated.
  const newData = req.body;
  const adId = parseInt(req.params.id);
  knex('classifieds')
    .where('classifieds.id', adId)
    .first()
    .then((ad) => {
      if (ad) {
        knex('classifieds')
          .where('classifieds.id', adId)
          .update(newData, '*')
          .then((ads) => {
            const ad = ads[0];
            delete ad.created_at;
            delete ad.updated_at;
            res.json(ad);
          });
      } else {
        next();
      }
    });
});

router.delete('/:id', (req, res, next) => {
  // DELETE /classifieds/:id should delete an ad and return the id,title, description, price, and item_image that were deleted.
  const adId = req.params.id;
  knex('classifieds')
    .where('classifieds.id', adId)
    .del()
    .returning('*')
    .then((ads) => {
      const ad = ads[0];
      delete ad.created_at;
      delete ad.updated_at;
      res.json(ad);
    });
});

module.exports = router;
