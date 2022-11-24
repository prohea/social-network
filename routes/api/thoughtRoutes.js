const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

router.route('/')
    .get(getAllThought)
    .post(addThought);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

router.route('/:thoughtId/reactions')
.post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;