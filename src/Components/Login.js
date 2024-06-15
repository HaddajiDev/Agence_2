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
  <div className='container mt-5'>
    <div className='row'>
      <div className='col-3'></div>
      <form onSubmit={handleSubmit} className='col-6 login-form'>
        <div className='lab'>
          <label>Email</label>
          <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='lab'>
          <label>Password</label>
          <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className='col-3'></div>
    </div>
  </div>
  );
}

export default Login