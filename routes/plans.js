const express = require('express');
const router = express.Router();
const {
  createPlan,
  getUserPlans,
  updatePlan,
  deletePlan
} = require('../controllers/planController');

const authenticateToken = require('../middleware/authMiddleware');

// Plan oluştur
router.post('/', authenticateToken, createPlan);

// Kullanıcının tüm planlarını getir
router.get('/', authenticateToken, getUserPlans);

// Plan güncelle
router.put('/:id', authenticateToken, updatePlan);

// Plan sil
router.delete('/:id', authenticateToken, deletePlan);

module.exports = router;
