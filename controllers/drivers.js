var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Driver = require('../models/Driver.js');

router.get('/', function(req, res, next) {
  Driver.find({}, (err, data) => {
    console.log(data);
    if(err) return next(err);
    if (data.length == 0) return res.json({}) 
    return res.json(data);
  })
});

router.post('/', function(req, res, next) {
  console.log("HERE", req.body)
  Driver.create(req.body, (err, post) => {
    if(err) return next(err);
    console.log("before returning")
    return res.json(post);
  })
});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  id = req.params.id
  Driver.find({ci:id}, (err, data) => {
    console.log(data);
    if(err) return next(err);
    if (data.length == 0) return res.json({}) 
    return res.json(data);
  })
});

module.exports = router;
