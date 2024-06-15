import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add_Trip, Edit_Trip } from '../redux/t_slice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EditTrip({trip}) {
	const [show, setShow] = useState(false);

	const dispatch = useDispatch();
  
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
	const [editedTrip, setEditedTrip] = useState({
	  id: trip.id,
	  place: trip.place,
	  poster: trip.poster,
	  poster_2: trip.poster_2,
	  poster_3: trip.poster_3,
	  price: trip.price,
	  desc: trip.desc
	});  
  
	
  
	return (
	  <>
		<Button variant="primary" onClick={handleShow} style={{all: 'unset'}}>
		  Edit
		</Button>
  
		<Modal show={show} onHide={handleClose}>
		  <Modal.Header closeButton>
			<Modal.Title>Edit Trip</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
			<Form>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Place</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={trip.place}
				  onChange={(e) => setEditedTrip({ ...editedTrip, place: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>	
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Poster</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={trip.poster}
				  onChange={(e) => setEditedTrip({ ...editedTrip, poster: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>		  
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Poster 2</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={trip.poster_2}
				  onChange={(e) => setEditedTrip({ ...editedTrip, poster_2: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Poster 3</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={trip.poster_3}
				  onChange={(e) => setEditedTrip({ ...editedTrip, poster_3: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Price</Form.Label>
				<Form.Control
				  type="text"
				  placeholder={trip.price}
				  onChange={(e) => setEditedTrip({ ...editedTrip, price: e.target.value })}
				  autoFocus
				/>
			  </Form.Group>
			</Form>
		  </Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			<Button variant="primary" onClick={() => {dispatch(Edit_Trip({id: trip.id, editedTrip: editedTrip})); handleClose()}}>
			  Save Changes
			</Button>
		  </Modal.Footer>
		</Modal>
	  </>
	);
}

export default EditTrip