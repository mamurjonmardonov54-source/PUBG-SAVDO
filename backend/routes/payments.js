const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const ctrl = require("../controllers/paymentController");

router.post("/", ctrl.pay);
router.put("/approve/:id", auth, ctrl.approve);

module.exports = router;
