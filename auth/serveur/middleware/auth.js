const jwt = require('jsonwebtoken');
const db = require('../models/user');

const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await db.query('SELECT * FROM public.user WHERE id = $1', [decoded.id]);
    
    if (user.rows.length === 0) {
      return res.json({ error: 'Invalid token' });
    }

    req.user = user.rows[0];
    next();
  } catch (err) {
    res.json({ error: 'Invalid token' });
  }
};

module.exports = auth;
