const express = require('express');
const router = express.Router();
const AuthController = require('./controller')

router.post('/register', AuthController.register);
router.post('/login/:email/:password', AuthController.loginUser);

module.exports = router;