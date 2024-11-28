const express = require('express');
const { getUserProfile, registerUser } = require('../controllers/userController');
const router = express.Router();

router.get('/:id', getUserProfile);
router.post('/register', registerUser);

module.exports = router;
