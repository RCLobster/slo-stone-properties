const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const applicantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  graduation: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  driversLicense: {
    type: String,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  parent1Name: {
    type: String,
    required: true,
  },
  parent1Address: {
    type: String,
    required: true,
  },
  parent1Phone: {
    type: String,
    required: true,
  },
  parent1Email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  parent2Name: {
    type: String,
  },
  parent2Address: {
    type: String,
  },
  parent2Phone: {
    type: String,
  },
  parent2Email: {
    type: String,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
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
