const mongoose = require('mongoose');

const userLandmarkNoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  landmarkId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Landmark',
  },
  note: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('UserLandmarkNote', userLandmarkNoteSchema);
