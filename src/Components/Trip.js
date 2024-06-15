import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function Trip() {
	const location = useLocation();
    const { state } = location;
    const [textContent, setTextContent] = useState('');

    useEffect(() => {
      fetch(state?.desc)
          .then(response => {
              if (!response.ok) {
                  throw new Error();
              }
              return response.text();
          })
          .then(data => setTextContent(data))
          .catch(error => console.error(error));
  }, []);
  return (
	<div className='container' style={{marginTop: 70}}>
    <div className='row'>
      <h1>Trip to {state?.place.split(',')[0]}: A Comprehensive Guide</h1>
    </div>
    <div className='row'>
        <div className='col-lg-6 col-sm-12'>
          <p>{textContent}</p>
          <div className='price-trip'>
            <h3>From {state?.price}$</h3>
            <button>Book Now</button>
          </div>
          
        </div>
        <div className='col-lg-6 col-sm-12'>
          <div class="zoomable">
            <img src={state?.poster} style={{width: 500}} alt=''/>
          </div>
          <div class="zoomable">
            <img src={state?.poster_2} style={{width: 500, marginTop: 20}} alt=''/>
          </div>          
          <div class="zoomable">
            <img src={state?.poster_3} style={{width: 500, marginTop: 20}} alt=''/>
          </div>
        </div>
    </div>    
  </div>
  )
}

export default Trip