import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      
      const userResponse = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      const user = { username: userResponse.data.username, role : userResponse.data.role };
      onLogin(user);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login