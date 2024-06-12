import React from 'react'

function TourCard({el}) {
  return (
	<div className='trip-card'>
		<div class="zoomable">			
            <img src={el.poster} alt="" class="img-fluid" />
			<button className='hover-button'>Learn More</button>
        </div>
		<div className='trip-info'>
			<h3>{el.place}</h3>
			<h4 className='price'>from {el.price}$</h4>
		</div>
	</div>
  )
}

export default TourCard