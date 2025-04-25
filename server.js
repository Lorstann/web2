const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const landmarkRoutes = require('./routes/landmarks');
const userNoteRoutes = require('./routes/userNotes');
const planRoutes = require('./routes/plans');
const visitedRoutes = require('./routes/visited');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/landmarks', landmarkRoutes);
app.use('/api/notes', userNoteRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/visited', visitedRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.error(err));
