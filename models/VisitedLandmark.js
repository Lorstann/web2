const mongoose = require('mongoose');

const visitedLandmarkSchema = new mongoose.Schema({
  landmarkId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Landmark',
  },
  visitorName: {
    type: String,
    required: true,
  },
  visitDate: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('VisitedLandmark', visitedLandmarkSchema);
