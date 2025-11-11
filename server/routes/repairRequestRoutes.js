const express = require('express');
const router = express.Router();
const { addRepairRequest, getMyRepairRequests } = require('../controllers/repairRequestController.js');
const { protect } = require('../middleware/authMiddleware.js');

router.route('/').post(protect, addRepairRequest).get(protect, getMyRepairRequests);

module.exports = router;
