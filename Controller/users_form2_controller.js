
const userModel = require('../Model/users_form2_model');
const sendEmail = require("../Mailsender/nodemail_form2");

const userController = {

  createUser: async (req, res) => {
    console.log(req.body);
    try {
      // Destructure the properties from the request body
      const { 
        fullname, age, currentStatus, city, country, 
        studentDetails, professionalDetails, 
        goalFamiliarity, effectiveness, goalSetting, 
        goalReview = [], goalChallenges, goalTraining 
      } = req.body;
  
      // Destructure nested objects (studentDetails and professionalDetails)
      const { college = '', yearstudy = '', major = '' } = studentDetails || {};
      const { jobtitle = '', company = '', industry = '' } = professionalDetails || {};
  
      // Prepare the new user data for insertion
      const newUserData = {
        fullname,
        age,
        current_status: currentStatus,
        college,
        year_study: yearstudy,
        major,
        job_title: jobtitle,
        company,
        industry,
        other_details: '',  // Default to empty string if no other details provided
        city,
        country,
        familiarity: goalFamiliarity, // Mapping from the request
        goal_setting: goalSetting, 
        review: goalReview.join(", "), // Join array into a string
        effectiveness,
        challenges: goalChallenges,
        training_expectations: goalTraining,
        created_at: new Date().toISOString() // Set created_at to current date-time
      };
  
      // Call the model to create the user in the database
      const newUser = await userModel.create(newUserData);
  
      // Send email after user creation
      await sendEmail(newUserData); 
  
      // Respond with success message
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
