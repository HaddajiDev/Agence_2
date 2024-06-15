import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { Delete_Trip } from '../redux/t_slice';
import EditTrip from './EditTrip';


function TourCard({el, currentUser}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
  return (
	<div className='trip-card'>
		<div class="zoomable">			
            <img src={el.poster} alt="" class="img-fluid" />
			<div>
				<button className='hover-button'><Link style={{all: 'unset'}} to={`/trip/${el.id}`} state={el}>Learn More</Link></button>
				{currentUser ?
					currentUser.role == 'admin' ?
					<>
					 	<button className='hover-button dele' onClick={() => dispatch(Delete_Trip(el.id))}>delete</button>
						<div className='hover-button edit'><EditTrip trip={el}/></div>
					</>
					: <></>
					: <></>
				}
			</div>
			
        </div>
		<div className='trip-info'>
			<h3>{el.place}</h3>
			<h4 className='price'>from {el.price}$</h4>
		</div>
	</div>
  )
}

export default TourCard