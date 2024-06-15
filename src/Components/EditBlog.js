import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Edit_Blog } from '../redux/BlogSlice';

function EditBlog({blog}) {
	const [show, setShow] = useState(false);

	const dispatch = useDispatch();
  
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
	const [editedblog, setEditedblog] = useState({
	  id: blog.id,
	  poster: blog.poster,
	  type: blog.type,
	  header: blog.header,
	  comment: blog.comment,
	  author: blog.author,
	  date: blog.date
	});  
  return (
	<>
		<Button variant="primary" onClick={handleShow} style={{all: 'unset'}}>
		  Edit
		</Button>
  
		<Modal show={show} onHide={handleClose}>
		  <Modal.Header closeButton>
			<Modal.Title>Edit blog</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
			<Form>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Poster</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={blog.poster}
				  onChange={(e) => setEditedblog({ ...editedblog, poster: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>	
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Date</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={blog.date}
				  onChange={(e) => setEditedblog({ ...editedblog, date: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>		  
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Poster 2</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={blog.header}
				  onChange={(e) => setEditedblog({ ...editedblog, header: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Poster 3</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={blog.comment}
				  onChange={(e) => setEditedblog({ ...editedblog, comment: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>author</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={blog.author}
				  onChange={(e) => setEditedblog({ ...editedblog, author: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			</Form>
		  </Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			<Button variant="primary" onClick={() => {dispatch(Edit_Blog({id: blog.id, editedBlog: editedblog})); handleClose()}}>
			  Save Changes
			</Button>
		  </Modal.Footer>
		</Modal>
	  </>
	);  
}

export default EditBlog