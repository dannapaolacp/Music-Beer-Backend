const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/create', userController.createUser);
router.delete('/:id', userController.deleteTable);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUser);
router.get('/admin', userController.getAdminUser);
router.get('/employee', userController.getEmployeeUser);
router.get('/table', userController.getTableUser);

module.exports = router;
