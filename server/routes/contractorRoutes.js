const express = require('express');
const router = express.Router();
const { getContractors } = require('../controllers/contractorController.js');

router.route('/').get(getContractors);

module.exports = router;
