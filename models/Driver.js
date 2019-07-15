var mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  ci: String,
  name: String,
  updated_at: {type: Date, default:Date.now},
});
module.exports = mongoose.model('Driver', DriverSchema);
