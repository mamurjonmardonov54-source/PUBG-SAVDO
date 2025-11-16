const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.json({ error: "Admin not found" });

  const check = await bcrypt.compare(req.body.password, admin.password);
  if (!check) return res.json({ error: "Wrong password" });

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
  res.json({ token });
};
