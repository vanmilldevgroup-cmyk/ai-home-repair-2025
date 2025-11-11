const Contractor = require('../models/contractorModel.js');

// @desc    Fetch all contractors
// @route   GET /api/contractors
// @access  Public
const getContractors = async (req, res) => {
  const contractors = await Contractor.find({});
  res.json(contractors);
};

module.exports = { getContractors };
