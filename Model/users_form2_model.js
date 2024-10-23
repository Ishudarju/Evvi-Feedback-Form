const db = require('../confiq_DB/db_connection');

const userModel = {
  // Create: Add a new user
  create: async (userData) => {
    const { fullname, age, currentStatus, city, country, goalChallenges, goalFamiliarity, goalReview, goalTraining, otherDetails, studentDetails, professionalDetails,effectiveness} = userData;

    const { college, yearstudy, major } = studentDetails || {}; // Extract student details
    const { jobtitle, company, industry } = professionalDetails || {}; // Extract professional details
  
    const sql = `INSERT INTO ptsf_form1 (fullname, age, current_status, college, year_study, major, job_title, company, industry, other_details, city, country, familiarity, goal_setting, review, effectiveness, challenges, training_expectations)
                 VALUES ('${fullname}', '${age}', '${currentStatus}', '${college}', '${yearstudy}', '${major}', '${jobtitle}', '${company}', '${industry}', '${otherDetails}', '${city}', '${country}', '${goalFamiliarity}', '${goalChallenges}', '${goalReview}', '${goalTraining}','${effectiveness}', '${goalTraining}')`;
  
    try {
      const result = await db.promise().query(sql);
      return result[0];  // The result is in the first element of the array
    } catch (error) {
      throw new Error('Database insertion failed: ' + error.message);
    }
  },

  // Read: Get all users
  getAll: async () => {
    const sql = 'SELECT * FROM ptsf_form';

    try {
      const [rows] = await db.promise().query(sql);
      return rows;
    } catch (error) {
      throw new Error('Database retrieval failed: ' + error.message);
    }
  },

  // Read: Get a user by ID
  getById: async (id) => {
    const sql = `SELECT * FROM ptsf_form WHERE id = ${id}`;

    try {
      const [rows] = await db.promise().query(sql);
      return rows[0];  // Return the first row if found
    } catch (error) {
      throw new Error('Database retrieval failed: ' + error.message);
    }
  },

  // Update: Update a user by ID
  update: async (id, userData) => {
    const { fullname, age, current_status, college, year_study, major, job_title, company, industry, other_details, city, country, familiarity, goal_setting, review, effectiveness, challenges, training_expectations } = userData;

    const sql = `UPDATE ptsf_form SET fullname = '${fullname}', age = ${age}, current_status = '${current_status}', college = '${college}', year_study = '${year_study}', major = '${major}', job_title = '${job_title}', company = '${company}', industry = '${industry}', other_details = '${other_details}', city = '${city}', country = '${country}', familiarity = '${familiarity}', goal_setting = '${goal_setting}', review = '${review}', effectiveness = '${effectiveness}', challenges = '${challenges}', training_expectations = '${training_expectations}' WHERE id = ${id}`;

    try {
      const result = await db.promise().query(sql);
      return result[0];  // Return result of update
    } catch (error) {
      throw new Error('Database update failed: ' + error.message);
    }
  },

  // Delete: Delete a user by ID
  delete: async (id) => {
    const sql = `DELETE FROM ptsf_form WHERE id = ${id}`;

    try {
      const result = await db.promise().query(sql);
      return result[0];  // Return result of deletion
    } catch (error) {
      throw new Error('Database deletion failed: ' + error.message);
    }
  }
};

module.exports = userModel;
