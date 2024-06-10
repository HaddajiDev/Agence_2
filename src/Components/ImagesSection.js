import React, { useEffect, useState } from 'react'

function ImagesSection() {
	const img_src = [
		"https://ideogram.ai/assets/image/balanced/response/LL3slLWFSti44t1JhrOvmw",
		"https://ideogram.ai/assets/image/balanced/response/dbH-BiwZSSqZFaFVOV1uAw",
		"https://ideogram.ai/assets/image/balanced/response/dcLOPeKZT3O8aJlSVhNkHw",
		"https://ideogram.ai/assets/image/balanced/response/mM-OC7ZORsSQtTh-xbYjqA"
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
			<div className='texts'>
				<div class="overlay-text">
					<h2>THE TRIP OF YOUR DREAM</h2>
					<p>~~~~~~</p>
					<h2>THE TRIP OF YOUR DREAM</h2>
				</div>
				<div class="overlay-text">
					<h2>THE TRIP OF YOUR DREAM</h2>					
				</div>
			</div>

			<div>
				<h1>Texts</h1>
			</div>
				
		</div>
	</div>
  );
}

export default ImagesSection;