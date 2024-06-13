import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function NavBar() {
	const [name, setName] = useState('');
	const [role, setRole] = useState('');

	const handleSubmit = async (e) => {
        e.preventDefault();        
        const name_ = name;
        const role_ = role;
        try {
            const response = await axios.post('http://localhost:5000/insert', { name_, role_ });
            console.log('Inserted Row:', response.data);
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

  return (
	<div className=''>
		<div className='nav_top'>
			<div className='info_nav_1'>
				<div>
					<img src='https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/phone-24.png' alt='' />
					<p>+21625274299</p>
				</div>
				<div>
					<img src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-24.png' alt=''/>
					<p>2130 Fulton Street, San Diego, CA 94117-1080 USA</p>
				</div>
				<div>
					<img src='https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/envelope-24.png' alt=''/>
					<p>ahmed@gmail.com</p>
				</div>
				<div>
					<input type='text' onChange={(e) => setName(e.target.value)}/>
					<input type='text' onChange={(e) => setRole(e.target.value)}/>
					<button onClick={handleSubmit}>Submit</button>
				</div>		
			</div>
			
		</div>
		<div className='nav_sticky'>
			<div className='container'>
				<img src='https://ideogram.ai/assets/image/lossless/response/3rZmluLMTjeYAqpP7eMxOA' alt=''/>
				<ul>
					<li className='nav-item'><Link className='item'>Home</Link></li>
					<li className='nav-item'><Link className='item'>Contact</Link></li>
					<li className='nav-item'><Link className='item'>About Us</Link></li>
					<li className='nav-item'><Link className='item'>Trips</Link></li>
				</ul>
				<button>Book A Tour Now</button>
			</div>
			
		</div>
		
	</div>
  )
}

export default NavBar