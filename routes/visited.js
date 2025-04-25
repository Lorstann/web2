const express = require('express');
const router = express.Router();
const {
  markAsVisited,
  getUserVisits,
  getVisitsByLandmark,
  deleteVisit
} = require('../controllers/visitedController');




const authenticateToken = require('../middleware/authMiddleware');

// Landmark'ı visited olarak işaretle
router.post('/', authenticateToken, markAsVisited);

// Kullanıcının tüm ziyaret geçmişi
router.get('/', authenticateToken, getUserVisits);

// Belirli bir landmark için ziyaret geçmişi (opsiyonel)
router.get('/:id', getVisitsByLandmark);

router.delete('/:id', authenticateToken, deleteVisit);


module.exports = router;
