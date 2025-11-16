const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  title: String,
  level: Number,
  UC: Number,
  skins: [String],
  email: String,
  password: String,
  price: Number,
  status: { type: String, default: 'available' },
  buyer: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', accountSchema);
