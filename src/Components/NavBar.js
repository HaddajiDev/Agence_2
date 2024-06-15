import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavBar({ currentUser, onLogout }) {
	const navigate = useNavigate();  	
	console.log(currentUser);
	const LogOut = () => {
		onLogout();
		navigate('/');
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
			</div>		
				
				{currentUser ? (
					<div className='login_si'>
						<p className='username'>{currentUser.username}</p>
						<button onClick={LogOut}>Logout</button>
					</div>
				):
					<div className='login_si'>
						<Link to='login'><button>Login</button></Link>
						<Link to='register'><button>SignUp</button></Link>
					</div>					
				}
			
			
		</div>
		<div className='nav_sticky'>
			<div className='container'>
				<img src='https://ideogram.ai/assets/image/lossless/response/3rZmluLMTjeYAqpP7eMxOA' alt=''/>
				<ul>
					<li className='nav-item'><Link className='item' to='/'>Home</Link></li>
					<li className='nav-item'><Link className='item'>Contact</Link></li>
					<li className='nav-item'><Link className='item'>About Us</Link></li>
					<li className='nav-item'><Link className='item' to='/allTours'>Trips</Link></li>
				</ul>
				<button onClick={() => navigate('/allTours')}>Book A Tour Now</button>
			</div>			
			
		</div>
		
	</div>
  )
}

export default NavBar