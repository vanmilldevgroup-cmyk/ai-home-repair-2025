const mongoose = require('mongoose');

const repairRequestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photos: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      required: true,
      default: 'Pending',
    },
    assignedContractor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contractor',
    },
  },
  {
    timestamps: true,
  }
);

const RepairRequest = mongoose.model('RepairRequest', repairRequestSchema);

module.exports = RepairRequest;
