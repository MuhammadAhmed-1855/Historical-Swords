const express = require('express');
const router = express.Router();

const swordController = require('../controllers/swordController');
const authAdmin = require('../middleware/authAdmin');
const auth = require('../middleware/auth');

router.post('/create', auth, authAdmin, swordController.create);
router.get('/all', auth, swordController.getAll);
router.delete('/remove/:name', auth, authAdmin, swordController.remove);

module.exports = router;