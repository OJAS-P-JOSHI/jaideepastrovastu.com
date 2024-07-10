const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/messages', contactController.getAllMessages); // Note the endpoint
router.post('/contact-now', contactController.createMessage);

module.exports = router;
