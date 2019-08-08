const router = require('express').Router();

const communicationRoutes = require('./communication');

router.use('/communication', communicationRoutes);

module.exports = router;