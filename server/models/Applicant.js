const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const applicantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  school: {
    type: String,
    required: true,
    trim: true,
  },
  graduation: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
    trim: true,
  },
  driversLicense: {
    type: String,
    required: true,
    trim: true,
  },
  ssn: {
    type: String,
    required: true,
    trim: true,
  },
  parent1Name: {
    type: String,
    required: true,
    trim: true,
  },
  parent1Address: {
    type: String,
    required: true,
    trim: true,
  },
  parent1Phone: {
    type: String,
    required: true,
    trim: true,
  },
  parent1Email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
    trim: true,
  },
  parent2Name: {
    type: String,
    trim: true,
  },
  parent2Address: {
    type: String,
    trim: true,
  },
  parent2Phone: {
    type: String,
    trim: true,
  },
  parent2Email: {
    type: String,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
    trim: true,
  },
  employmentHistory: {
    type: String,
  },
  scholarshipsFA: {
    type: String,
  },
  other: {
    type: String,
  },
});

applicantSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('ssn')) {
    const saltRounds = 10;
    this.ssn = await bcrypt.hash(this.ssn, saltRounds);
  }

  next();
});

module.exports = applicantSchema;
