const express = require('express');
const musicController = require('../controllers/musicController');

const router = express.Router();

router.post('/', musicController.createMusic);
router.get('/', musicController.getMusics);
//router.put('/:id', musicController.updateMusic);
router.delete('/:id', musicController.deleteMusic);

module.exports = router;
