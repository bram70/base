 const express = require('express')
 const router = new express.Router()

 router.use('/drivers', require('./../controllers/drivers'));
 router.use('/places', require('./../controllers/places'));

 router.get('/', (req, res) => {
   res.send('Hello World HERE!')
 })

 module.exports = router

/*var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/gasApp', function(err) {
    if(err) {
      console.log('connection error', err);
    } else {
      console.log('connection successful');
    }
});*/
