import React from 'react';
import quote from '../quote.png';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';

function ThridSection() {
    const blogs = useSelector((state) => state.blog.bloglist);    
    const naviagta = useNavigate();
  return (
    <div>
        <div className='container' style={{marginTop: 120}}>
        <div className='row'>
            <h1 className='col-12' style={{textAlign: 'center'}}>LATEST NEWS</h1>
        </div>
        <div className='row'>
            {blogs.slice(0, 2).map((el) => <div className='col-lg-6 col-sm-12'><BlogCard blog={el}/></div>)}           
        </div>

        <div className='row'>
            <div className='col-4'></div>
            <button className='allBlogs col-4' onClick={() => naviagta('/blogs')}>View all blog posts</button>     
            <div className='col-4'></div>
        </div>

        <div className='row'>
            <h1 className='col-12' style={{textAlign: 'center', marginTop: 50, marginBottom: 80}}>TESTIMONIALS</h1>
        </div>

        <div className='row'>
            <div className='testimoni col-lg-3 col-sm-12'>
                <img src='https://ideogram.ai/assets/image/lossless/response/BaaUbnIZT2eSpIf4YA7dKA' alt=''/>                
            </div>
            <div className='testimoni-info col-lg-9 col-sm-12'>
                <img src={quote} alt=''/>
                <h4>
                    I had a marvelous time in our travels to Madagascar, Zimbabwe and Botswana, I had just wonderful experiences.I loved the location of the Gorges Camp as I felt like it was only the time we got to see real and rural Africans and how they truly lived. The service was amazing and everyone was very attentive!
                </h4>
                <h4 className='namee'>John Doe</h4>
                <p>Regular Customer</p>
            </div>
        </div>
        
        </div>
        <div className='bottom_sec'>
            <div className='bot' style={{marginTop: 80, marginBottom: 80}}>
                <div className='bot-text'>
                    <h2>BUY A TOUR WITHOUT LEAVING YOUR HOME</h2>
                    <h6>Using our website, you can book any tour just in a couple of clicks</h6>
                </div>
                <div className='bot-button'>
                    <button className='bookNow'>BOOK NOW</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ThridSection;