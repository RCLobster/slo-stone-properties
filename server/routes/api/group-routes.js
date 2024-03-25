const router = require('express').Router();
const {
  getGroups,
  updateGroup,
  deleteGroup
} = require('../../controllers/group-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').put(updateGroup).get(authMiddleware,getGroups);
router.route('/:groupName').delete(authMiddleware,deleteGroup);

module.exports = router;
