const { Group } = require('../models');

module.exports = {
    async getGroups(req, res) {
        try {
          const groups = await Group.find();
          res.json(groups);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async updateGroup({body}, res) {
        try {
          const group = await Group.findOneAndUpdate(
            { groupName: body.groupName, property: body.property },
            { $addToSet: { applicants : body } },
            { runValidators: true, upsert: true, new: true }
          );
    
          res.json(group);
        } catch (err) {
          res.status(500).json(err);
        }
      },
};
