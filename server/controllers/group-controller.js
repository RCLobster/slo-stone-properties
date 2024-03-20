const { Group } = require('../models');

module.exports = {
    async getCourses(req, res) {
        try {
          const courses = await Course.find();
          res.json(courses);
        } catch (err) {
          res.status(500).json(err);
        }
      },


};
