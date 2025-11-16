const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { getAccounts, addAccount, editAccount, deleteAccount } = require('../controllers/accountController');

router.get('/', getAccounts);
router.post('/', auth, addAccount);
router.put('/:id', auth, editAccount);
router.delete('/:id', auth, deleteAccount);

module.exports = router;
