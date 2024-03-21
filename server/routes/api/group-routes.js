const router = require('express').Router();
const {
  getGroups,
  createGroup,
  updateGroup
} = require('../../controllers/group-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createGroup).put(updateGroup).get(getGroups);

module.exports = router;
