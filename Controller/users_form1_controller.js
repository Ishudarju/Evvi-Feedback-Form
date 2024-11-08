
const userModel = require('../Model/users_form1_model.js');  
const sendEmail = require("../Mailsender/nodemail_form1.js");

// Create: Add a new user
exports.createUser = async (req, res) => {
  try {
    console.log(req.body);

    const { 
      full_name, fun_metor, options, other_status, state, country, district, 
      fun_metter_value, meter_value, learning_impact, star_rating, emoji_rating, 
      quality, concerns, testimonial, phone, email_address 
    } = req.body; // Use req.body instead of userData

    // Check for missing or empty fields
    const validationErrors = [];

    if (!full_name || full_name.trim() === "") validationErrors.push("Full Name is required.");
    if (!fun_metor || fun_metor.trim() === "") validationErrors.push("Fun Metor is required.");
    if (!options || options.trim() === "") validationErrors.push("Options are required.");
    // if (!other_status || other_status.trim() === "") validationErrors.push("Other Status is required.");
    if (!state || state.trim() === "") validationErrors.push("State is required.");
    if (!country || country.trim() === "") validationErrors.push("Country is required.");
    if (!district || district.trim() === "") validationErrors.push("District is required.");
    if (!fun_metter_value || fun_metter_value.trim() === "") validationErrors.push("Fun Metter Value is required.");
    if (!meter_value || meter_value.trim() === "") validationErrors.push("Meter Value is required.");
    if (!learning_impact || learning_impact.trim() === "") validationErrors.push("Learning Impact is required.");
    if (!star_rating || star_rating.trim() === "") validationErrors.push("Star Rating is required.");
    if (!emoji_rating || emoji_rating.trim() === "") validationErrors.push("Emoji Rating is required.");
    if (!quality || quality.trim() === "") validationErrors.push("Quality is required.");
    if (!concerns || concerns.trim() === "") validationErrors.push("Concerns are required.");
    if (!testimonial || testimonial.trim() === "") validationErrors.push("Testimonial is required.");
    if (!phone || phone.trim() === "") validationErrors.push("Phone is required.");
    if (!email_address || email_address.trim() === "") validationErrors.push("Email Address is required.");

    // If there are validation errors, return them to the frontend
    if (validationErrors.length > 0) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationErrors
      });
    }

    // Create user in the database
    const result = await userModel.create(req.body); // Use req.body here
    await sendEmail(req.body); // Send email with the form data

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
