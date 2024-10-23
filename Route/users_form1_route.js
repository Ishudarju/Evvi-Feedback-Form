// routes/userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../Controller/users_form1_controller.js');  // Adjust the path if necessary

// Define routes for users
router.post('/users', userController.createUser);   
     // Create user
router.get('/users', userController.getAllUsers);   
     // Get all users
router.get('/users/:id', userController.getUserById);
// Get a user by ID
router.put('/users/:id', userController.updateUser);  
   // Update a user by ID
router.delete('/users/:id', userController.deleteUser);
  // Delete a user by ID

module.exports = router;
