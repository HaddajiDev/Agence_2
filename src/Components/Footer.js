import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid footer_con mt-5'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6 links-foo'>
            <h4><Link to='/allTours' style={{all: 'unset'}}>Trips</Link></h4>
            <h4><Link to='/blogs' style={{all: 'unset'}}>Blogs</Link></h4>
            <h4>Contact</h4>
            <h4>About us</h4>
          </div>
          <div className='col-lg-6 last'>
            <h2>Book you trip Now</h2>
            <button>Book Now</button>
          </div>
        </div>
        <div className='row'>
          <p className='col-12 c'>Ahmed copyright 2024</p>
        </div>        
      </div>      
    </div>
  )
}

export default Footer