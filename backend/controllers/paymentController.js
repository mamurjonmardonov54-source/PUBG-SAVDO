const Payment = require("../models/Payment");
const Account = require("../models/Account");

exports.pay = async (req, res) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
};

exports.approve = async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  payment.status = "approved";
  await payment.save();

  await Account.findByIdAndUpdate(payment.accountId, {
    status: "sold",
    buyer: payment.user
  });

  res.json({ message: "Payment approved" });
};
