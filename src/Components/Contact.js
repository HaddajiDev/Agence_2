import React from 'react';
import adress from '../adress.png';
import phone from '../phone.png';
import email from '../email.png';
import deadline from '../deadline.png';

function Contact() {
  return (
	<div>
		<div className='image-container ab-img'>
			<img src='https://ideogram.ai/assets/progressive-image/balanced/response/EVmjNVWEReejwV5DR0B2tw' alt='' className='img-fluid'/>
			<div class='container text-container'>
				<div class='row split'>
					<div class='texts col-md-12 mb-5'>
						<div className='about'>
							<h2>Get in touch with us</h2>
							<h1>CONTACT</h1>
						</div>						
					</div>
				</div>
			</div>
		</div>

		<div className='container' style={{marginTop: 80}}>
			<div className='row'>
				<div className='col-lg-3 col-sm-12 contact-fs'>
					<img src={adress} alt=''/>
					<h3>ADDRESS</h3>
					<p>2130 Fulton Street, Chicago, IL
					94117-1080 USA</p>
				</div>
				<div className='col-lg-3 col-sm-12 contact-fs'>
					<img src={phone} alt=''/>
					<h3>PHONE</h3>
					<p>+21625275999</p>
				</div>
				<div className='col-lg-3 col-sm-12 contact-fs'>
					<img src={email} alt=''/>
					<h3>EMAIL</h3>
					<p>ahmed@gmail.com
						
					</p>
				</div>
				<div className='col-lg-3 col-sm-12 contact-fs'>
					<img src={deadline} alt=''/>
					<h3>OPENING HOURS</h3>
					<p>Mon–Fri: 9:00 am–6:00 pm
					Sat–Sun: 11:00 am–4:00 pm</p>
				</div>
			</div>

			<div className='row mt-5'>
				<h2 className='col-12' style={{textAlign: 'center'}}>CONTACT US</h2>	
			</div>
			<div className='row mt-5'>				
				<form className='col-12'>
					<div className='line'>
						<div className='cul'>
							<label>First Name</label>
							<input type='text' placeholder='Enter Your Name'/>
						</div>
						<div className='cul'>
							<label>Last Name</label>
							<input type='text' placeholder='Enter Your Last Name'/>
						</div>
					</div>
					<div className='line mt-3'>
						<div className='cul'>
							<label>E-mail</label>
							<input type='text' placeholder='Enter Your Email'/>
						</div>
						<div className='cul'>
							<label>Phone</label>
							<input type='text' placeholder='Enter Your Phone'/>
						</div>
					</div>
					<div className='line mt-3'>
						<div className='cul'>
							<label>Message</label>
							<textarea ></textarea>
						</div>
						
					</div>
				</form>				
			</div>
			<div className='row'>
				<div className='col-4'></div>
				<button className='col-4 send-btn mt-5'>Send</button>
				<div className='col-4'></div>
			</div>	
		</div>
	</div>
  )
}

export default Contact