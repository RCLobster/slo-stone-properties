const mongoose = require('mongoose');

// Change DB name as desired

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/stonePropertiesDB');

module.exports = mongoose.connection;
