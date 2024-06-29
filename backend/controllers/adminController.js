const jwt = require('jsonwebtoken');

// Admin login
exports.login = async (req, res) => {
    const { username, password } = req.body;
    // Replace this with actual authentication logic
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
