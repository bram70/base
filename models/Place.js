var mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  driver: String,
  lat: String,
  lng: String,
  updated_at: {type: Date, default:Date.now},
});

module.exports = mongoose.model('Place', PlaceSchema);
