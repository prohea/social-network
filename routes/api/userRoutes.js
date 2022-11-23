const router = require('express').Router();
const {

} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/thoughts').post(addThought);

router.route('./:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;

