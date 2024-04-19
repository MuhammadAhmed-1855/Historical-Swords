const express = require('express');
const router = express.Router();

const typeController = require('../controllers/typeController');
const authAdmin = require('../middleware/authAdmin');
const auth = require('../middleware/auth');

router.post('/create', auth, authAdmin, typeController.create);
router.get('/all', auth, typeController.getAll);
router.delete('/remove/:name', auth, authAdmin, typeController.remove);

module.exports = router;