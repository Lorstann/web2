const mongoose = require('mongoose');

const landmarkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['historical', 'cultural', 'natural', 'others'],
    required: true,
  }
}, { timestamps: true }); // createdAt, updatedAt otomatik eklenir

module.exports = mongoose.model('Landmark', landmarkSchema);
