const { Schema, model } = require('mongoose');

const applicantSchema = require('./Applicant');

const groupSchema = new Schema(
    {
        groupName: {
            type: String,
            required: true,
            unique: true,
        },
        // property: {
        //     type: String,
        //     required: true,
        // },
        applicants: [applicantSchema],
    },
);

const Group = model('Group', groupSchema);

module.exports = Group;
