const express = require('express');
const router = express.Router();
const { getNotes,getNote,createNote,editNote,deleteNote } = require('../controllers/notes');

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .put(editNote)
    .delete(deleteNote);

module.exports = router;