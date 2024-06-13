import React, { useEffect, useState } from 'react'



function ImagesSection() {
	const img_src = [
		"https://ideogram.ai/assets/image/lossless/response/lfZjMIk1T9--qEa1_P-nGQ",
		"https://ideogram.ai/assets/image/lossless/response/9p6fmMfMQnSh8YzTE4ckPw",		
		"https://ideogram.ai/assets/image/lossless/response/5IzLCLREQ361oTl5_xwAGw",
		"https://ideogram.ai/assets/image/lossless/response/gBPEn4TATZGUPXaOrIsEpQ"
	];

	const [adultsCount, setAcount] = useState(1);
	const [kidsCount, setKcount] = useState(1);

	const Add_Adult = () => {
		if(adultsCount >= 0 && adultsCount < 10)
			setAcount(adultsCount + 1);
	}
	const RMV_Adult = () => {
		if(adultsCount > 0 && adultsCount <= 10)
			setAcount(adultsCount - 1);
	}

	const Add_Kids = () => {
		if(kidsCount >= 0 && kidsCount < 10)
			setKcount(kidsCount + 1);
	}
	const RMV_Kids = () => {
		if(kidsCount > 0 && kidsCount <= 10)
			setKcount(kidsCount - 1);
	}

	const [count, setCount] = useState(0);
	const [opacity, setOpacity] = useState(1);
	const resetValue = img_src.length - 1;
    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCount((prevCount) => {
                    if (prevCount >= resetValue) {
                        return 0;
                    }
                    return prevCount + 1;
                });
                setTimeout(() => setOpacity(1), 0);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [resetValue]);

  return (
	<div className='image-container'>
		<img src={img_src[count]} alt='' className={`img-fluid imgs_show`} style={{ opacity }}/>
			<div class='container mt-5 text-container'>
				<div class='row split'>
					<div class='texts col-md-5 mb-5'>
						<div class='overlay-text'>
							<h2>THE TRIP OF YOUR DREAM</h2>
							<p>~~~~~~</p>
							<p>Our team is ready to provide you with unique weekly travel insights that include photos, videos, and articles about untravelled tourist paths. We know everything about the places you’ve never been to!</p>
							<button>Learn More</button>
						</div>
						
					</div>
					<div className='col-md-2'></div>


					<div className='search_flight col-md-5'>
						<h1>FIND YOUR TOUR</h1>
						<h6 className='small-title'>from</h6>
						<select className='sel'>
							<option defaultChecked>Tunisia</option>
							<option>Maroco</option>
						</select>
						<h6 className='mt-4 small-title'>to</h6>
						<select className='sel'>
							<option defaultChecked>London</option>
							<option>New York</option>
							<option>China</option>
						</select>
						<div className='m-2-sec mt-4'>
							<div>
								<h6 className='small-title'>Date</h6>
								<input placeholder='choose date' type='date' className='date_'/>
							</div>
							<div>
								<h6 className='small-title'>Duration</h6>
								<select className='sel'>
									<option defaultChecked disabled>Any Lenght</option>
									<option>1 Day</option>
									<option>2 Days</option>
									<option>4 Days</option>
								</select>
							</div>							
						</div>
						<div className='m-2-sec mt-4'>
							<div>
								<h6 className='small-title'>Adults</h6>
								<div className='sec'>
									<input type='button' value='+' onClick={Add_Adult} className='indec' />
									<input type='number' min={1} max={10} value={adultsCount} className='vi'/>
									<input type='button' value='-' onClick={RMV_Adult} className='indec' />
								</div>								
							</div>
							<div>
								<h6 className='small-title'>Kids</h6>
								<div className='sec'>
									<input type='button' value='+' onClick={Add_Kids} className='indec'/>
									<input type='number' min={1} max={10} value={kidsCount} className='vi'/>
									<input type='button' value='-' onClick={RMV_Kids} className='indec'/>
								</div>
							</div>
						</div>
						<button className='mt-5'>Search Flight</button>
						
					</div>
				</div>
			</div>
	</div>
  );
}

export default ImagesSection;