const Landmark = require('../models/Landmark');

// CREATE - Landmark ekle
const createLandmark = async (req, res) => {
  try {
    const { name, latitude, longitude, description, category } = req.body;

    const newLandmark = new Landmark({
      name,
      latitude,
      longitude,
      description,
      category,
    });

    await newLandmark.save();
    res.status(201).json(newLandmark);
  } catch (err) {
    res.status(500).json({ message: 'Error creating landmark', error: err.message });
  }
};

// READ - Tüm landmarkları getir
const getAllLandmarks = async (req, res) => {
  try {
    const landmarks = await Landmark.find();
    res.json(landmarks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching landmarks', error: err.message });
  }
};

// READ - Belirli bir landmark getir
const getLandmarkById = async (req, res) => {
  try {
    const landmark = await Landmark.findById(req.params.id);
    if (!landmark) return res.status(404).json({ message: 'Landmark not found' });
    res.json(landmark);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching landmark', error: err.message });
  }
};

// UPDATE - Landmark güncelle
const updateLandmark = async (req, res) => {
  try {
    const updated = await Landmark.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: 'Landmark not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating landmark', error: err.message });
  }
};

// DELETE - Landmark sil
const deleteLandmark = async (req, res) => {
  try {
    const deleted = await Landmark.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Landmark not found' });
    res.json({ message: 'Landmark deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting landmark', error: err.message });
  }
};

module.exports = {
  createLandmark,
  getAllLandmarks,
  getLandmarkById,
  updateLandmark,
  deleteLandmark
};
