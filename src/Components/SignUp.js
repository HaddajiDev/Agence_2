import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  try {
		const response = await axios.post('http://localhost:5000/api/auth/register', {
		  username,
		  email,
		  password,
		});
		console.log(response.data);
    navigate('/login');
	  } catch (error) {
		console.error(error);
	  }
	};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

export default Signup;