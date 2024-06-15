import React, { useEffect, useState } from 'react'



function ImagesSection() {
	const img_src = [		
		"https://ideogram.ai/assets/progressive-image/balanced/response/-WrHrYNzTQWzMSNdQ_QzMg",
		"https://ideogram.ai/assets/progressive-image/balanced/response/EVmjNVWEReejwV5DR0B2tw",
		"https://ideogram.ai/assets/image/lossless/response/5IzLCLREQ361oTl5_xwAGw",
		"https://ideogram.ai/assets/image/lossless/response/gBPEn4TATZGUPXaOrIsEpQ"
	];

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
			<div className='container mt-5 text-container'>
				<div className='row split'>
					<div className='texts col-md-12 mb-5'>
						<div className='overlay-text'>
							<h2>THE TRIP OF YOUR DREAM</h2>
							<p>~~~~~~</p>
							<p>Our team is ready to provide you with unique weekly travel insights that include photos, videos, and articles about untravelled tourist paths. We know everything about the places you’ve never been to!</p>
							<button>Learn More</button>
						</div>
						
					</div>
				</div>
			</div>
	</div>
  );
}

export default ImagesSection;