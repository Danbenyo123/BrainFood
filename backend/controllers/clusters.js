// @desc    Get All clusters
// @route   GET /api/v1/clusters
// @access  Private
const pool = require('../config/db');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middleware/async.js');

exports.getClusters = asyncHandler(async (req, res, next) => {
    const clustersDB = await pool.query(
        'SELECT * FROM clusters;'
    );
    res.status(200).json({
        success: true,
        data: clustersDB.rows
    });
});

// @desc    Get Single cluster
// @route   GET /api/v1/clusters/:id
// @access  Private
exports.getCluster = asyncHandler(async (req, res, next) => {
    const queryId = req.params.id ?? null;
    if (!/^\d+$/.test(queryId)) {
        return next(new ErrorResponse(400, 'Invalid id'));
    }
    const text = 'SELECT * from clusters WHERE id = $1';
    const values = [queryId]
    const getDB = await pool.query(text, values);
    if (getDB.rows.length < 1) {
        return next(new ErrorResponse(404, 'Cluster ID not found.'));
    }
    else {
        res.status(200).json({
            success: true,
            data: getDB.rows[0]
        })
    }
});

// @desc    create Single cluster
// @route   POST /api/v1/clusters/
// @access  Private
exports.createCluster = asyncHandler(async (req, res, next) => {
    const { cluster_name, cluster_description = null, parent_cluster_id = null } = req.body ?? {};
    if (!cluster_name) {
        return next(new ErrorResponse(400, `bad input, title field cannot be empty.`));
    }
    const result = await pool.query(
        `
            INSERT INTO clusters (cluster_name,cluster_description,parent_cluster_id) 
            VALUES ($1,$2,$3) RETURNING *
            `,
        [cluster_name, cluster_description, parent_cluster_id]
    );
    res.status(201).json({
        success: true,
        data: result.rows[0]
    });
});

// @desc    edit Single cluster
// @route   PUT /api/v1/clusters/:id
// @access  Private
exports.editCluster = asyncHandler(async (req, res, next) => {
    const { cluster_name, cluster_description = null, parent_cluster_id = null } = req.body ?? {};
    if (!cluster_name) {
        return res.status(400).json({
            success: false,
            error: 'Title field is required.'
        })
    };

    const id = req.params.id ?? null;
    const text = `
        UPDATE clusters SET cluster_name = $1, cluster_description = $2 parent_cluster_id = $3 
        WHERE cluster_id = $4 RETURNING *
    `;
    const values = [cluster_name, cluster_description, parent_cluster_id, id];
    const editDB = await pool.query(text, values);
    if (editDB.rows.length == 0) {
        return next(new ErrorResponse(404, 'cluster id not found'));
    }
    res.status(200).json({
        success: true,
        data: editDB.rows[0]
    });
});

// @desc    delete Single cluster
// @route   DELETE /api/v1/clusters/:id
// @access  Private
exports.deleteCluster = asyncHandler(async (req, res, next) => {
    const clusterID = req.params.id;
    const text = 'DELETE FROM clusters WHERE cluster_id = $1 RETURNING *';
    const values = [clusterID];
    const deleteDB = await pool.query(text, values);
    if (deleteDB.rows.length == 0) {
        return next(new ErrorResponse(404, 'cluster id not found'));
    }
    res.status(200).json({
        success: true,
        data: deleteDB.rows[0]
    });
});