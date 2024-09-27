const express = require('express');
const router = express.Router();
const { register, login, getUserDetails, deleteUser } = require('../controller/authController');
const authMiddleware = require('../middleware/authmiddleware');

router.post('/register', register);
router.post('/login', login);

router.get('/me', authMiddleware, getUserDetails);

router.delete('/delete', authMiddleware, deleteUser);

module.exports = router;
