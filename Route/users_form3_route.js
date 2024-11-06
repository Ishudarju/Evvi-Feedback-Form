const express = require('express');
const router = express.Router();
const ptsfForm3Controller = require('../Controller/users_form3_controller');


router.post('/insert', ptsfForm3Controller.createEntry);
router.get('/getAll', ptsfForm3Controller.getAllEntries);
router.get('/getId/:id', ptsfForm3Controller.getEntryById);
router.put('/update/:id', ptsfForm3Controller.updateEntry);
router.delete('/delete/:id', ptsfForm3Controller.deleteEntry);

module.exports = router;

