// @desc    Get All notes
// @route   GET /api/v1/notes
// @access  Private
const pool = require('../config/db');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middleware/async.js');

exports.getNotes = asyncHandler(async (req,res,next) => {
    const notesDB = await pool.query(
        'SELECT * FROM notes;'
    );
    res.status(200).json({
        success: true,
        data: notesDB.rows
    });
});

// @desc    Get Single note
// @route   GET /api/v1/notes/:id
// @access  Private
exports.getNote = asyncHandler(async (req,res,next) => {
    const queryId = req.params.id ?? null;
    if (!/^\d+$/.test(queryId)) {
        return next(new ErrorResponse(400,'Invalid id'));
    }
    const text = 'SELECT * from notes WHERE id = $1';
    const values = [queryId]
    const getDB = await pool.query(text,values);
    if (getDB.rows.length < 1) {
        return next(new ErrorResponse(404,'Note ID not found.'));
    }
    else {
        res.status(200).json({
            success: true,
            data: getDB.rows[0]
        })
    }
});

// @desc    create Single note
// @route   POST /api/v1/notes/
// @access  Private
exports.createNote = asyncHandler(async (req,res,next) => {
    const { title, content } = req.body ?? {};
    if (!content || !title) {
        return next(new ErrorResponse(400,`bad input, title and content filed cannot be empty.`));
    }
        const result = await pool.query(
            'INSERT INTO notes (title,content) VALUES ($1,$2) RETURNING *',
            [title,content]
        );
        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
});

// @desc    edit Single note
// @route   PUT /api/v1/notes/:id
// @access  Private
exports.editNote = asyncHandler(async (req,res,next) => {
    const { title, content } = req.body ?? {};
    if (!content || !title) {
    return res.status(400).json({
        success: false,
        error: 'Title and Content fields are required.'
    })};
    
    const id = req.params.id ?? null;
    const text = 'UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *';
    const values = [title,content,id];
    const editDB = await pool.query(text,values);
    if (editDB.rows.length == 0 ) {
        return next(new ErrorResponse(404,'note id not found'));
    }
    res.status(200).json({
        success: true,
        data: editDB.rows[0]
    });
});

// @desc    delete Single note
// @route   DELETE /api/v1/notes/:id
// @access  Private
exports.deleteNote = asyncHandler(async (req,res,next) => {
    const noteID = req.params.id;
    const text = 'DELETE FROM notes WHERE id = $1 RETURNING *';
    const values = [noteID];
    const deleteDB = await pool.query(text,values);
    if (deleteDB.rows.length == 0 ) {
        return next(new ErrorResponse(404,'note id not found'));
    }
    res.status(200).json({
        success: true,
        data: deleteDB.rows[0]
    });
});