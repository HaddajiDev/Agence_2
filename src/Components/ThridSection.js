import React from 'react';
import comment from '../comment.png';
import quote from '../quote.png';

function ThridSection() {
    const imgs = [
        'https://ideogram.ai/assets/image/lossless/response/hwT280ngQEau8fFUhy9IWg',
        'https://ideogram.ai/assets/image/lossless/response/SIDfl2uFTU6vOfySnjjd-Q',
        'https://ideogram.ai/assets/image/lossless/response/O7StsiMGTGGoX_bdq6eKEA'
    ]
  return (
    <div>
        <div className='container' style={{marginTop: 120}}>
        <div className='row'>
            <h1 className='col-12' style={{textAlign: 'center'}}>LATEST NEWS</h1>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-sm-12'>
                <div class="zoomable">			
                    <img src={imgs[0]} alt="" class="img-fluid" />                    
                </div>
                <div className='news-info'>
                    <div className='news-fs'>
                        <h6>HOTELS</h6>
                        <h5>By Ahmed</h5>
                    </div>
                    <h3>Top 10 Hotels to Stay At: Exclusive Rating by Sealine Travel Experts</h3>
                    <hr />
                    <div className='news-fs'>
                        <p>JULY 1, 2022</p>
                        <div className='comment'>
                            <img src={comment} alt=''/>
                            <p>12</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
                <div class="zoomable">			
                    <img src={imgs[2]} alt="" class="img-fluid" />                    
                </div>
                <div className='news-info'>
                    <div className='news-fs'>
                        <h6>TIPS</h6>
                        <h5>By Youssef</h5>
                    </div>
                    <h3>How to Plan Your Vacation in Advance and Why It’s Beneficial</h3>
                    <hr />
                    <div className='news-fs'>
                        <p>AUG 21, 2021</p>
                        <div className='comment'>
                            <img src={comment} alt=''/>
                            <p>136</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-4'></div>
            <button className='allBlogs col-4'>View all blog posts</button>     
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