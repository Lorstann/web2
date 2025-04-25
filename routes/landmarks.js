const express = require('express');
const router = express.Router();
const {
  createLandmark,
  getAllLandmarks,
  getLandmarkById,
  updateLandmark,
  deleteLandmark
} = require('../controllers/landmarkController');

// Landmark oluşturma → Herkes ekleyebilsin dedik, auth gerekmez
router.post('/', createLandmark);

// Tüm landmarkları listele
router.get('/', getAllLandmarks);

// Belirli bir landmark detayını getir
router.get('/:id', getLandmarkById);

// Landmark güncelle (opsiyonel: auth middleware ile koruyabiliriz)
router.put('/:id', updateLandmark);

// Landmark sil (opsiyonel: auth middleware ile koruyabiliriz)
router.delete('/:id', deleteLandmark);

module.exports = router;
