import React from 'react'
import { useSelector } from 'react-redux'
import TourCard from './TourCard';
import plane from '../plane.png';
import hotel from '../hotel.png';
import map from '../map.png';
import prasol from '../parasol.png';
import { useNavigate } from 'react-router-dom';


function MiddleSection() {
	const navigate = useNavigate();
	const trip = useSelector((state) => state.trip.triplist);	
  return (
	<div className='container' style={{marginTop: 50}}>
		<div className='row'>
			<h1 className='col-lg-9'>Our Tours</h1>
			<button className='col-lg-3 vw-tour' onClick={() => navigate('/allTours')}>View All Tours</button>
		</div>
		<div className='row'>
			{trip.slice(0, 6).map((el) => <div className='col-lg-4 col-sm-12'><TourCard el={el} /></div>)}
		</div>
		<div className='row'>			
			<div className='col-5 d-flex justify-content-center w-100 mt-5'><h1>Our Services</h1></div>			
		</div>
		<div className='row mt-5'>
			<div className='col-lg-3 col-sm-12'>
				<div className='service-card'>
					<img src={plane} alt=''/>
					<p>Air Tickets</p>
					<hr />
					<h6>At our travel agency, you can book air tickets to any world destination. We also provide online ticket booking via our website in just a couple of steps.</h6>					
				</div>
			</div>
			<div className='col-lg-3 col-sm-12'>
				<div className='service-card'>
					<img src={hotel} alt=''/>
					<p>Hotel Bookings</p>
					<hr />
					<h6>We offer a wide selection of hotel ranging from 5-star ones to small properties located worldwide so that you could book a hotel you like.
					</h6>					
				</div>
			</div>
			<div className='col-lg-3 col-sm-12'>
				<div className='service-card'>
					<img src={map} alt=''/>
					<p>Voyages & Cruises</p>
					<hr />
					<h6>Besides regular tours and excursions, we also offer a variety of cruises & sea voyages for different customers looking for awesome experiences.</h6>					
				</div>
			</div>
			<div className='col-lg-3 col-sm-12'>
				<div className='service-card'>
					<img src={prasol} alt=''/>
					<p>Tailored Summer Tours</p>
					<hr />
					<h6>Our agency provides varied tours including tailored summer tours for clients who are searching for an exclusive and memorable vacation.
					</h6>					
				</div>
			</div>
		</div>
		

	</div>
  )
}

export default MiddleSection