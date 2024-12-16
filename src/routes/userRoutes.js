const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// GET route to fetch all users
router.get('/all', getUsers);  // Use GET for fetching users

// POST route to create a new user
router.post('/create', createUser);  // Use POST for creating users

module.exports = router;
