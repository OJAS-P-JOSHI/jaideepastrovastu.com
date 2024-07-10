const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/messages', contactController.getAllMessages); 
router.post('/', contactController.createMessage); // Updated this line

module.exports = router;
