import React from 'react'
import { useSelector } from 'react-redux';
import TourCard from './TourCard';
import AddTrip from './AddTrip';

function AllTrips({currentUser}) {
	const trip = useSelector((state) => state.trip.triplist);
  return (
	<div className='container mt-5'>
		<div className='row'>
			<h1 className='col-lg-9 col-sm-12'>Trips</h1>
			{currentUser ? 
				currentUser.role === 'admin' ?
				<>					
					<div className='col-lg-3 col-sm-12 add-trip'><AddTrip /></div>					
				</>
				: <></>
				: <></>
			}
		</div>
		<div className='row'>
			{trip.map((el) => <div className='col-lg-4 col-sm-12'><TourCard el={el} currentUser={currentUser} /></div>)}
		</div>
		
	</div>
  )
}

export default AllTrips