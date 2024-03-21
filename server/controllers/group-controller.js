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
      async createGroup({body}, res) {
        try {
          const group = await Group.create(body);
          res.json(group);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },
      async updateGroup({body}, res) {
        try {
          const group = await Group.findOneAndUpdate(
            { groupName: body.groupName },
            { $addToSet: { applicants : body } },
            { runValidators: true, new: true }
          );
    
          if (!group) {
            res.status(404).json({ message: 'No group with this name!' });
          }
    
          res.json(group);
        } catch (err) {
          res.status(500).json(err);
        }
      },
};
