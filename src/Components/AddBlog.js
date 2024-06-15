import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Add_Blog } from '../redux/BlogSlice';

function AddBlog() {
	const [show, setShow] = useState(false);

	const dispatch = useDispatch();
  
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
	const [newBlog, setnewBlog] = useState({
	  id: Math.random(),
	  poster: "",
	  type: "",
	  header: "",
	  author: "",
	  comment: 0,
	  date: ""
	});  
  
	const handleSaveChanges = () => {
	  	handleClose();	
		dispatch(Add_Blog(newBlog));
	};
  
	return (
	  <>
		<Button variant="primary" onClick={handleShow} style={{all: 'unset'}}>
		  Add New Blog
		</Button>
  
		<Modal show={show} onHide={handleClose}>
		  <Modal.Header closeButton>
			<Modal.Title>New Trip</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
			<Form>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Poster</Form.Label>
				<Form.Control
				  type="text"
				  placeholder="poster"
				  onChange={(e) => setnewBlog({ ...newBlog, poster: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>type</Form.Label>
				<Form.Control
				  type="text"
				  placeholder="Type (eg: TIPS, HOTELS)"
				  onChange={(e) => setnewBlog({ ...newBlog, type: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Header</Form.Label>
				<Form.Control
				  type="text"
				  placeholder="Header"
				  onChange={(e) => setnewBlog({ ...newBlog, header: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Author</Form.Label>
				<Form.Control
				  type="text"
				  placeholder="Ahmed"
				  onChange={(e) => setnewBlog({ ...newBlog, author: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>date</Form.Label>
				<Form.Control
				  type="text"
				  placeholder="date"
				  onChange={(e) => setnewBlog({ ...newBlog, date: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>comment</Form.Label>
				<Form.Control
				  type="text"
				  placeholder="12"
				  onChange={(e) => setnewBlog({ ...newBlog, comment: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			</Form>
		  </Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			<Button variant="primary" onClick={handleSaveChanges}>
			  Save Changes
			</Button>
		  </Modal.Footer>
		</Modal>
	  </>
	);
}

export default AddBlog