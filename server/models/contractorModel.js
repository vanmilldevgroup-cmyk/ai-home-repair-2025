const mongoose = require('mongoose');

const contractorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: {
      type: Number,
      required: true,
      default: 0,
    },
    profilePicture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;
