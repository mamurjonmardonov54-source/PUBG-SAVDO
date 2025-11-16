const Account = require('../models/Account');

// Get all accounts
exports.getAccounts = async (req, res) => {
  const accounts = await Account.find({ status: 'available' });
  res.json(accounts);
};

// Add account
exports.addAccount = async (req, res) => {
  const newAccount = new Account(req.body);
  await newAccount.save();
  res.json({ message: 'Account added' });
};

// Edit account
exports.editAccount = async (req, res) => {
  await Account.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Account updated' });
};

// Delete account
exports.deleteAccount = async (req, res) => {
  await Account.findByIdAndDelete(req.params.id);
  res.json({ message: 'Account deleted' });
};
