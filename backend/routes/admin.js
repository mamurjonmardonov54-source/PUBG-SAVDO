const router = require("express").Router();
const ctrl = require("../controllers/adminController");

router.post("/login", ctrl.login);

module.exports = router;
