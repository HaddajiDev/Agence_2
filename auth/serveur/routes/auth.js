const express = require('express');
const { register, login } = require('../controller/auth');
const router = express.Router();
const auth = require('../middleware/auth');
const db = require('../models/user');

router.post('/register', register);
router.post('/login', login);

router.get('/me',auth, async (req, res) => {
    try {      
      const currentUser = await db.query('SELECT * FROM public.user WHERE id = $1', [req.user.id]);
  
      if (currentUser.rows.length === 0) {
        return res.json({ message: 'User not found' });
      }
  
      res.json(currentUser.rows[0]);
    } catch (error) {
      console.error('Error fetching current user', error);
      res.json({ message: 'Server error' });
    }
});

module.exports = router;
