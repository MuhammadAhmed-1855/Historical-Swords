const router = require('express').Router();

const makerController = require('../controllers/makerController');
const authAdmin = require('../middleware/authAdmin');
const auth = require('../middleware/auth');

router.post('/create', auth, authAdmin, makerController.create);
router.get('/all', auth, makerController.getAll);
router.delete('/remove/:name', auth, authAdmin, makerController.remove);

module.exports = router;