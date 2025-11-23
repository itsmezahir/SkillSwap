const express = require('express');
const router = express.Router();
const AuthController = require('../controller/controller')

router.post('/register', AuthController.register);
router.post('/login', AuthController.loginUser);

module.exports = router;