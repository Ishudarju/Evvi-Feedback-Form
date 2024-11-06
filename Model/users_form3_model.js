const db = require('../confiq_DB/db_connection');

// const ptsfForm3Model = {
//   // Create: Add a new entry
//   create: async (formData) => {
//     const {
//       sessions,
//       familiarity,
//       scale_familiarity,
//       improved_training,
//       attend,
//       updates,
//       email,
//       phone,
//     } = formData;

//     const sql = `
//       INSERT INTO ptsf_form3 
//       (sessions, familiarity, scale_familiarity, improved_training, attend, updates, email, phone)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     try {
//       const [result] = await db.promise().query(sql, [
//         sessions,
//         familiarity,
//         scale_familiarity,
//         improved_training,
//         attend,
//         updates,
//         email,
//         phone
//       ]);
//       return result;
//     } catch (error) {
//       throw new Error('Database insertion failed: ' + error.message);
//     }
//   },

//   // Read: Get all entries
//   getAll: async () => {
//     const sql = 'SELECT * FROM ptsf_form3';

//     try {
//       const [rows] = await db.promise().query(sql);
//       return rows;
//     } catch (error) {
//       throw new Error('Database retrieval failed: ' + error.message);
//     }
//   },

//   // Read: Get an entry by ID
//   getById: async (id) => {
//     const sql = `SELECT * FROM ptsf_form3 WHERE id = ?`;

//     try {
//       const [rows] = await db.promise().query(sql, [id]);
//       return rows[0];
//     } catch (error) {
//       throw new Error('Database retrieval failed: ' + error.message);
//     }
//   },

//   // Update: Update an entry by ID
//   update: async (id, formData) => {
//     const { sessions, familiarity, scale_familiarity, improved_training, attend, updates, email, phone } = formData;

//     const sql = `
//       UPDATE ptsf_form3 
//       SET sessions = ?, familiarity = ?, scale_familiarity = ?, improved_training = ?, attend = ?, updates = ?, email = ?, phone = ?
//       WHERE id = ?
//     `;

//     try {
//       const [result] = await db.promise().query(sql, [
//         sessions,
//         familiarity,
//         scale_familiarity,
//         improved_training,
//         attend,
//         updates,
//         email,
//         phone,
//         id
//       ]);
//       return result;
//     } catch (error) {
//       throw new Error('Database update failed: ' + error.message);
//     }
//   },

//   // Delete: Delete an entry by ID
//   delete: async (id) => {
//     const sql = `DELETE FROM ptsf_form3 WHERE id = ?`;

//     try {
//       const [result] = await db.promise().query(sql, [id]);
//       return result;
//     } catch (error) {
//       throw new Error('Database deletion failed: ' + error.message);
//     }
//   }
// };


const ptsfForm3Model = {
  // Create: Add a new entry
  create: async (formData) => {
    const {
      achievinggoal,
      learned,
      metervalue,
      familiarity,
      scalefamiliarity,
      improvedTraining,
      attend,
      email,
      phone
    } = formData;

    const sql = `
      INSERT INTO ptsf_form3 
      (achievinggoal, learned, metervalue, familiarity, scalefamiliarity, improvedTraining, attend, email, phone)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
      const [result] = await db.promise().query(sql, [
        achievinggoal,
        learned,
        metervalue,
        familiarity,
        scalefamiliarity,
        improvedTraining,
        attend,
        email,
        phone
      ]);
      return result;
    } catch (error) {
      throw new Error('Database insertion failed: ' + error.message);
    }
  },

  // Read: Get all entries
  getAll: async () => {
    const sql = 'SELECT * FROM ptsf_form3';

    try {
      const [rows] = await db.promise().query(sql);
      return rows;
    } catch (error) {
      throw new Error('Database retrieval failed: ' + error.message);
    }
  },

  // Read: Get an entry by ID
  getById: async (id) => {
    const sql = `SELECT * FROM ptsf_form3 WHERE id = ?`;

    try {
      const [rows] = await db.promise().query(sql, [id]);
      return rows[0];
    } catch (error) {
      throw new Error('Database retrieval failed: ' + error.message);
    }
  },

  // Update: Update an entry by ID
  update: async (id, formData) => {
    const {
      achievinggoal,
      learned,
      metervalue,
      familiarity,
      scalefamiliarity,
      improvedTraining,
      attend,
      email,
      phone
    } = formData;

    const sql = `
      UPDATE ptsf_form3 
      SET achievinggoal = ?, learned = ?, metervalue = ?, familiarity = ?, scalefamiliarity = ?, improvedTraining = ?, attend = ?, email = ?, phone = ?
      WHERE id = ?
    `;

    try {
      const [result] = await db.promise().query(sql, [
        achievinggoal,
        learned,
        metervalue,
        familiarity,
        scalefamiliarity,
        improvedTraining,
        attend,
        email,
        phone,
        id
      ]);
      return result;
    } catch (error) {
      throw new Error('Database update failed: ' + error.message);
    }
  },

  // Delete: Delete an entry by ID
  delete: async (id) => {
    const sql = `DELETE FROM ptsf_form3 WHERE id = ?`;

    try {
      const [result] = await db.promise().query(sql, [id]);
      return result;
    } catch (error) {
      throw new Error('Database deletion failed: ' + error.message);
    }
  }
};

module.exports = ptsfForm3Model;


