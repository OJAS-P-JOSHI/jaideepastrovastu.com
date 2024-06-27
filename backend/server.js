// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const serviceRoutes = require('./routes/serviceRoutes');
const contactRoutes = require('./routes/contactRoutes');
const blogRoutes = require('./routes/blogRoute'); // Add this line

app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes); // Mount blog routes under /api/blogs

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
