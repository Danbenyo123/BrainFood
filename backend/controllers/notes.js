// @desc    Get All notes
// @route   GET /api/v1/notes
// @access  Private
const pool = require('../config/db');

exports.getNotes = async (req,res,next) => {
    try {
        const notesDB = await pool.query(
            'SELECT * FROM notes;'
        );
        res.status(200).json({
            success: true,
            data: notesDB.rows
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: `Error: ${err}`
        })
    }
}

// @desc    Get Single note
// @route   GET /api/v1/notes/:id
// @access  Private
exports.getNote = async (req,res,next) => {
    try {
        const queryId = req.params.id ?? null;
        const text = 'SELECT * from notes WHERE id = $1';
        const values = [queryId]
        const getDB = await pool.query(text,values);
        if (getDB.rows.length > 0) {
            res.status(200).json({
                success: true,
                data: getDB.rows[0]
            });
        }
        else {
            res.status(404).json({
                success: false,
                error: `query not found.`
            })
        }
    } catch (err) {
        next(err);
    }
}

// @desc    create Single note
// @route   POST /api/v1/notes/
// @access  Private
exports.createNote = async (req,res,next) => {
    const { title, content } = req.body ?? {};
    
    if (!content || !title) {
        return res.status(400).json({
            success: false,
            error: 'Title and Content fields are required.'
        });
    }
    try {
        const result = await pool.query(
            'INSERT INTO notes (title,content) VALUES ($1,$2) RETURNING *',
            [title,content]
        );
        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        next(err);
    }
}

// @desc    edit Single note
// @route   PUT /api/v1/notes/:id
// @access  Private
exports.editNote = async (req,res,next) => {
    try {
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
            return res.status(404).json({
                success: false,
                error: 'query not found.'
            })
        }
        res.status(200).json({
            success: true,
            data: editDB.rows[0]
        });
    } catch (err) {
        next(err);
    }
}

// @desc    delete Single note
// @route   DELETE /api/v1/notes/:id
// @access  Private
exports.deleteNote = async (req,res,next) => {
    try {
        const noteID = req.params.id;
        const text = 'DELETE FROM notes WHERE id = $1 RETURNING *';
        const values = [noteID];
        const deleteDB = await pool.query(text,values);
        if (deleteDB.rows.length == 0 ) {
            return res.status(404).json({
                success: false,
                error: 'query not found.'
            })
        }
        res.status(200).json({
            success: true,
            data: deleteDB.rows[0]
        });
    } catch (err) {
        next(err);
    }
}