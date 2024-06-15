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
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-3'></div>
        <form onSubmit={handleSubmit} className='col-6 login-form'>
            <div className='lab'>
              <label>Username</label>
              <input type="text" placeholder='Enter Your username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='lab'>
              <label>Email</label>
              <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='lab'>
              <label>Password</label>
              <input type="password" placeholder='Enter Your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">SignUp</button>
        </form>
        <div className='col-3'></div>
      </div>
    </div>
    
  )
}

export default Signup;