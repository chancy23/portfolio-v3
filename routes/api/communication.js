const router = require('express').Router();
const communicationController = require('../../controllers/communicationController');

//url api/communication/sendEmail
router
    .route('/sendEmail')
    .post(communicationController.sendEmail)

module.exports = router;