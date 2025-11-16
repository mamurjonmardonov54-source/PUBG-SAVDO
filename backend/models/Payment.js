const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  amount: Number,
  user: String,
  status: { type: String, default: 'pending' },
  method: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
