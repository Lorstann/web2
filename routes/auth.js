const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);

// ✅ Bu route sadece giriş yapmış kullanıcılar görebilir
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}, this is protected content.` });
});

module.exports = router;
