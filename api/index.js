 const express = require('express')
 const router = new express.Router()
const { body, validationResult } = require('express-validator');

 router.use('/drivers', require('./../controllers/drivers'));
 router.use('/places', require('./../controllers/places'));

 router.get('/', (req, res) => {
   res.send('Hello World HERE!')
 })

// post endpoint
router.post('/testing', [//validations
  body('name', 'Name is mandatory').trim().escape().not().isEmpty(),
  body('email', 'Invalid email').trim().escape().isEmail(),
  body('date', 'Invalid date (format YYYY-MM-DD)').trim().escape().isISO8601()
], (req, res) => {

  	const errors = validationResult(req);
  	if (!errors.isEmpty()) {
	  return res.status(422).json({ errors: errors.array() });
	}

	var body 	= req.body;
	
	var name 	= body.name;
	var email 	= body.email;
	var date 	= body.date;

	/*
	USE DATA
	*/

	res.send('Well done!');
});

 module.exports = router

/*var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/gasApp', function(err) {
    if(err) {
      console.log('connection error', err);
    } else {
      console.log('connection successful');
    }
});*/
