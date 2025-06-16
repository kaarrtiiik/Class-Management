const db = require('./db');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const classRoutes = require('./routes/classRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', classRoutes);

app.get('/', (req, res) => {
  res.send('Class Management System Backend is running');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;