const RepairRequest = require('../models/repairRequestModel.js');

// @desc    Create new repair request
// @route   POST /api/requests
// @access  Private
const addRepairRequest = async (req, res) => {
  const { title, category, description, photos } = req.body;

  const repairRequest = new RepairRequest({
    user: req.user._id,
    title,
    category,
    description,
    photos,
  });

  const createdRepairRequest = await repairRequest.save();
  res.status(201).json(createdRepairRequest);
};

// @desc    Get user's repair requests
// @route   GET /api/requests
// @access  Private
const getMyRepairRequests = async (req, res) => {
  const requests = await RepairRequest.find({ user: req.user._id });
  res.json(requests);
};

module.exports = { addRepairRequest, getMyRepairRequests };
