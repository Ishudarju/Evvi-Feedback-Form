const express = require('express');
const userController = require('../Controller/users_form2_controller');
const router = express.Router();

// Create a user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get a user by ID
router.get('/users/:id', userController.getUserById);

// Update a user by ID
router.put('/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
