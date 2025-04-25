const VisitedLandmark = require('../models/VisitedLandmark');

// Ziyaret kaydı oluştur
const markAsVisited = async (req, res) => {
  const { landmarkId } = req.body;
  const visitorName = req.user.username;

  try {
    const alreadyVisited = await VisitedLandmark.findOne({ landmarkId, visitorName });
    if (alreadyVisited) {
      return res.status(400).json({ message: 'You already marked this landmark as visited.' });
    }

    const visit = new VisitedLandmark({
      landmarkId,
      visitorName,
      visitDate: new Date(),
    });

    await visit.save();
    res.status(201).json(visit);
  } catch (err) {
    res.status(500).json({ message: 'Error marking landmark as visited', error: err.message });
  }
};

// Kullanıcının ziyaret geçmişini getir
const getUserVisits = async (req, res) => {
  const visitorName = req.user.username;

  try {
    const visits = await VisitedLandmark.find({ visitorName }).populate('landmarkId');
    res.json(visits);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching visited landmarks', error: err.message });
  }
};

// Belirli landmark için ziyaret geçmişi (opsiyonel)
const getVisitsByLandmark = async (req, res) => {
  const landmarkId = req.params.id;

  try {
    const visits = await VisitedLandmark.find({ landmarkId });
    res.json(visits);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching visits', error: err.message });
  }
};



const deleteVisit = async (req, res) => {
  try {
    const deleted = await VisitedLandmark.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Visit not found' });
    res.json({ message: 'Visit record deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  markAsVisited,
  getUserVisits,
  getVisitsByLandmark,
  deleteVisit
};
