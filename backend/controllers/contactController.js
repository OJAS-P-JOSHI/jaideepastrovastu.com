const Contact = require('../models/Contact');

// Get all messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new message
exports.createMessage = async (req, res) => {
    const message = new Contact(req.body);
    try {
        const newMessage = await message.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
