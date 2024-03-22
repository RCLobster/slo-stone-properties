const router = require('express').Router();
const {
  getGroups,
  updateGroup
} = require('../../controllers/group-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').put(updateGroup).get(authMiddleware,getGroups);

module.exports = router;
