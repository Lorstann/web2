const express = require('express');
const router = express.Router();
const {
  addNote,
  getUserNotes,
  updateNote,
  deleteNote,
} = require('../controllers/userNoteController');

const authenticateToken = require('../middleware/authMiddleware');

// 📌 Giriş yapan kullanıcılar not işlemleri yapabilir

// Not ekle
router.post('/', authenticateToken, addNote);

// Kullanıcının tüm notlarını getir
router.get('/', authenticateToken, getUserNotes);

// Not güncelle
router.put('/:id', authenticateToken, updateNote);

// Not sil
router.delete('/:id', authenticateToken, deleteNote);

module.exports = router;
