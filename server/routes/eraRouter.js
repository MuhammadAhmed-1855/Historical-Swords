const router = require('express').Router();

const eraController = require('../controllers/eraController');
const authAdmin = require('../middleware/authAdmin');
const auth = require('../middleware/auth');

router.post('/create', auth, authAdmin, eraController.create);
router.get('/all', auth, eraController.getAll);
router.delete('/remove/:name', auth, authAdmin, eraController.remove);

module.exports = router;