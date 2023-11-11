
// const LoginController = require('../controllers/loginController');
// const express = require('express');
// const Router = express.Router();

// const router = Router();

// // router.get('/', getLogin);
// router.post('/', LoginController.createLogin);

// module.exports = router;

const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.post('/', loginController.createLogin);

module.exports = router;
