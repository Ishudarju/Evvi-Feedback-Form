
const userModel = require('../Model/users_form1_model.js');  
const sendEmail = require("../Mailsender/nodemail_form1.js");

// Create: Add a new user
exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const userData = req.body;
    const result = await userModel.create(userData);
    await sendEmail(req.body); 
    res.status(201).json({
      message: 'User created successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create user',
      error: error.message
    });
  }
};

// Read: Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAll();
    res.status(200).json({
      message: 'Users retrieved successfully',
      data: users
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve users',
      error: error.message
    });
  }
};

// Read: Get a user by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getById(id);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }
    res.status(200).json({
      message: 'User retrieved successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve user',
      error: error.message
    });
  }
};

// Update: Update a user by ID
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const result = await userModel.update(id, userData);
    if (!result.affectedRows) {
      return res.status(404).json({
        message: 'User not found or update failed'
      });
    }
    res.status(200).json({
      message: 'User updated successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update user',
      error: error.message
    });
  }
};

// Delete: Delete a user by ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userModel.delete(id);
    if (!result.affectedRows) {
      return res.status(404).json({
        message: 'User not found'
      });
    }
    res.status(200).json({
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete user',
      error: error.message
    });
  }
};
