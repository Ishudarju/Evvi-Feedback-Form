const ptsfForm3Model = require('../Model/users_form3_model');
const sendmail =  require("../Mailsender/nodemail_form3");


exports.createEntry = async (req, res) => {
  try {
    await ptsfForm3Model.create(req.body);
    res.status(201).send('Entry created successfully');
    console.log(req.body);
    await sendmail(req.body); 
    
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const rows = await ptsfForm3Model.getAll();
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEntryById = async (req, res) => {
  try {
    const entry = await ptsfForm3Model.getById(req.params.id);
    res.json(entry);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEntry = async (req, res) => {
  try {
    await ptsfForm3Model.update(req.params.id, req.body);
    res.send('Entry updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    await ptsfForm3Model.delete(req.params.id);
    res.send('Entry deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
