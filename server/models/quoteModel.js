const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema(
  {
    repairRequest: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'RepairRequest',
    },
    contractor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Contractor',
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
