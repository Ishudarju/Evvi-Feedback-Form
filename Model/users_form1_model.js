const db = require('../confiq_DB/db_connection');  // Corrected path

const userModel = {
  // Create: Add a new user
  create: async (userData) => {
    const { full_name, fun_metor, options, other_status, state, country, district, 
            fun_metter_value, meter_value, learning_impact, star_rating, emoji_rating, 
            quality, concerns, testimonial, phone, email_address } = userData;
console.log(userData);
    const sql = `INSERT INTO ptsf_form1 (full_name, fun_metor, options, other_status, state, countrya, district, 
                 fun_metter_value, meter_value, learning_impact, star_rating, emoji_rating, 
                 quality, concerns, testimonial, phone, email_address)
                 VALUES ('${full_name}', '${fun_metor}', '${options}', '${other_status}', '${state}', '${country}', '${district}', 
                         '${fun_metter_value}', '${meter_value}', '${learning_impact}', '${star_rating}', '${emoji_rating}', 
                         '${quality}', '${concerns}', '${testimonial}',  '${phone}', '${email_address}')`;

    try {
      const result = await db.promise().query(sql);
      
      return result[0];  // The result is in the first element of the array
    } catch (error) {
      throw new Error('Database insertion failed: ' + error.message);
    }
  },

  // Read: Get all users
  getAll: async () => {
    const sql = 'SELECT * FROM ptsf_form1';

    try {
      const [rows] = await db.promise().query(sql);
      return rows;
    } catch (error) {
      throw new Error('Database retrieval failed: ' + error.message);
    }
  },

  // Read: Get a user by ID
  getById: async (id) => {
    const sql = `SELECT * FROM ptsf_form1 WHERE id = ${id}`;

    try {
      const [rows] = await db.promise().query(sql);
      return rows[0];  // Return the first row if found
    } catch (error) {
      throw new Error('Database retrieval failed: ' + error.message);
    }
  },

  // Update: Update a user by ID
  update: async (id, userData) => {
    const { full_name, fun_metor, options, other_status, state, countrya, district, 
            fun_metter_value, meter_value, learning_impact, star_rating, emoji_rating, 
            quality, concerns, testimonial,  phone, email_address } = userData;

    const sql = `UPDATE ptsf_form1 SET full_name = '${full_name}', fun_metor = '${fun_metor}', option = '${options}', 
                 other_status = '${other_status}', state = '${state}', countrya = '${countrya}', district = '${district}', 
                 fun_metter_value = '${fun_metter_value}', meter_value = '${meter_value}', learning_impact = '${learning_impact}', 
                 star_rating = '${star_rating}', emoji_rating = '${emoji_rating}', quality = '${quality}', 
                 concerns = '${concerns}', testimonial = '${testimonial}',  
                 phone = '${phone}', email_address = '${email_address}' WHERE id = ${id}`;

    try {
      const result = await db.promise().query(sql);
      return result[0];  // Return result of update
    } catch (error) {
      throw new Error('Database update failed: ' + error.message);
    }
  },

  // Delete: Delete a user by ID
  delete: async (id) => {
    const sql = `DELETE FROM ptsf_form1 WHERE id = ${id}`;

    try {
      const result = await db.promise().query(sql);
      return result[0];  // Return result of deletion
    } catch (error) {
      throw new Error('Database deletion failed: ' + error.message);
    }
  }
};

module.exports = userModel;
