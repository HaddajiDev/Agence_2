import React from 'react'
import comment from '../comment.png';

function BlogCard({blog}) {
  return (
	<div>
		<div class="zoomable">			
                <img src={blog.poster} alt="" class="img-fluid" />                    
                </div>
                <div className='news-info'>
                    <div className='news-fs'>
                        <h6>{blog.type}</h6>
                        <h5>By {blog.author}</h5>
                    </div>
                    <h3>{blog.header}</h3>
                    <hr />
                    <div className='news-fs'>
                        <p>{blog.date}</p>
                        <div className='comment'>
                            <img src={comment} alt=''/>
                            <p>{blog.comment}</p>
                        </div>
                        
                    </div>
                </div>
	</div>
  )
}

export default BlogCard