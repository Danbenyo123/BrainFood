const express = require('express');
const router = express.Router();
const { getClusters, getCluster, createCluster, editCluster, deleteCluster } = require('../controllers/clusters');

router.route('/')
    .get(getClusters)
    .post(createCluster);

router.route('/:id')
    .get(getCluster)
    .put(editCluster)
    .delete(deleteCluster);

module.exports = router;