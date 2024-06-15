import React from 'react'
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';
import AddBlog from './AddBlog';

function AllBlogs({currentUser}) {
	const blogs = useSelector((state) => state.blog.bloglist);
  return (
	<div className='container mt-5'>
		<div className='row'>
			<h1 className='col-lg-9 col-sm-12'>Blogs</h1>
			{currentUser ? 
				currentUser.role === 'admin' ?
				<>					
					<div className='col-lg-3 col-sm-12 add-trip'><AddBlog /></div>					
				</>
				: <></>
				: <></>
			}
		</div>
		<div className='row'>
			{blogs.map((el) => <div className='col-lg-6 col-sm-12'><BlogCard blog={el} currentUser={currentUser}/></div>)}
		</div>
	</div>
  )
}

export default AllBlogs