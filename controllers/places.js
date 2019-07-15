var express = require('express');
var router = express.Router();

const Place = require('../models/Place.js');

router.get('/', function(req, res, next) {
  Place.find({}, (err, data) => {
    if(err) return next(err);
    res.json(data);
  })
});

router.post('/', function(req, res, next) {
  Place.create(req.body, (err, data) => {
    if(err) return next(err);
    res.json(data);
  })
});

router.get('/:id', function(req, res, next) {
  Place.findOne({driver: req.params.id}, (err, post) => {
    if(err) return next(err);
    res.json(post);
  }).sort({updated_at: -1})
});

module.exports = router;
