const { Schema, model } = require('mongoose');

const applicantSchema = require('./Applicant');

const groupSchema = new Schema(
    {
        groupName: {
            type: String,
            required: true,
            unique: true,
        },
        property: {
            type: String,
            required: true,
        },
        applicants: [applicantSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
);

groupSchema.virtual('applicantCount').get(function () {
    return this.applicants.length;
  });

const Group = model('Group', groupSchema);

module.exports = Group;
