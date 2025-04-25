const mongoose = require('mongoose');

const visitingPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  planName: {
    type: String,
    required: true,
  },
  items: [
    {
      landmarkId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Landmark',
        required: true,
      },
      note: {
        type: String,
        required: true,
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('VisitingPlan', visitingPlanSchema);
