import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Signup() {
  	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const [l_email, l_setEmail] = useState('');
  	const [l_password, l_setPassword] = useState('');


	const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const table = 'public.user';
        const columns = ['username', 'email', 'password'];
        const values = [username, email, password];

        try {
            const response = await axios.post('http://localhost:5000/signup', { table, columns, values });
            console.log('Inserted Row:', response.data);
			navigate("/");
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

	const handleLogin = async (e) => {
		e.preventDefault();
		const table = 'public.user';
		
		const values = [l_email, l_password];
		try {
			const response = await axios.post('http://localhost:5000/login', { table, values });
			console.log(response.data);
		} catch (error) {
			console.log("err " + error);
		}
	}
  return (
    <div>
		<h1>SignUp</h1>
      	<form onSubmit={handleSignUp}>
			<div>
				<label>Name:</label>
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
			</div>
			<div>
				<label>Email:</label>
				<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
          	<div>
				<label>password:</label>
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</div>
				<button type="submit">Signup</button>
		</form>


		<h1>Login</h1>
      	<form onSubmit={handleLogin}>			
			<div>
				<label>Email:</label>
				<input type="text" value={l_email} onChange={(e) => l_setEmail(e.target.value)} />
			</div>
          	<div>
				<label>password:</label>
				<input type="password" value={l_password} onChange={(e) => l_setPassword(e.target.value)} />
			</div>
				<button type="submit">Signup</button>
		</form>
    </div>
  )
}

export default Signup;