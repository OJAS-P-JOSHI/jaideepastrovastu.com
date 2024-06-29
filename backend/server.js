const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const blogRoutes = require('./routes/blogRoutes');
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

<<<<<<< HEAD
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Update this to your Vercel URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

=======
app.use(cors());
app.use(express.json());

>>>>>>> 7cf516b977c1a7805381654d7418aafce6399f59
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
<<<<<<< HEAD
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
=======
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
>>>>>>> 7cf516b977c1a7805381654d7418aafce6399f59

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
