const express = require('express');
const router = express.Router();

const materialController = require('../controllers/materialController');
const authAdmin = require('../middleware/authAdmin');
const auth = require('../middleware/auth');

router.post('/create', auth, authAdmin, materialController.create);
router.get('/all', auth, materialController.getAll);
router.delete('/remove/:name', auth, authAdmin, materialController.remove);

module.exports = router;