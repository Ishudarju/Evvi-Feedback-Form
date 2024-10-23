
const userModel = require('../Model/users_form2_model');
const sendEmail = require("../Mailsender/nodemail");

const userController = {
  // Create a user
  createUser: async (req, res) => {
    console.log(req.body);
    try {
      const newUser = await userModel.create(req.body);

      await sendEmail(req.body); 

      res.status(201).json({ message: 'User created successfully', userId: newUser.insertId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user: ' + error.message });
    }
  },

  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAll();
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users: ' + error.message });
    }
  },

  // Get a user by ID
  getUserById: async (req, res) => {
    try {
      const user = await userModel.getById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve user: ' + error.message });
    }
  },

  // Update a user
  updateUser: async (req, res) => {
    try {
      const updatedUser = await userModel.update(req.params.id, req.body);
      if (updatedUser.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user: ' + error.message });
    }
  },

  // Delete a user
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await userModel.delete(req.params.id);
      if (deletedUser.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user: ' + error.message });
    }
  }
};

module.exports = userController;
