const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dnsRouter = require('./routes/dnsroutes'); // Adjust the path as needed

const app = express();

// Middleware
app.use(express.json()); // This replaces bodyParser.json()
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://sateeshchowhan:sateesh18@cluster0.fkuss0m.mongodb.net/dnsmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/dns', dnsRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
