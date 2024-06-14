const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/user');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.query(
      `INSERT INTO public.user (username, email, password, role) VALUES ($1, $2, $3, 'user') RETURNING *`,
      [username, email, hashedPassword]
    );
    res.json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.query('SELECT * FROM public.user WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    res.json({ error: error.message });
  }
};
