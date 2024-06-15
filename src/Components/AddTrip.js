import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Add_Trip } from '../redux/t_slice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddTrip = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTrip, setNewTrip] = useState({
    id: Math.random(),
    place: "",
    poster: "",
    poster_2: "",
    poster_3: "",
    price: "",
    desc: ""
  });  

  const handleSaveChanges = () => {
    handleClose();	
	  dispatch(Add_Trip(newTrip));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{all: 'unset'}}>
        Add New Trip
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                placeholder="Paris, France"
                onChange={(e) => setNewTrip({ ...newTrip, place: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster</Form.Label>
              <Form.Control
                type="text"
                placeholder="Poster"
                onChange={(e) => setNewTrip({ ...newTrip, poster: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Poster 2"
                onChange={(e) => setNewTrip({ ...newTrip, poster_2: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster 3</Form.Label>
              <Form.Control
                type="text"
                placeholder="Poster 3"
                onChange={(e) => setNewTrip({ ...newTrip, poster_3: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price"
                onChange={(e) => setNewTrip({ ...newTrip, price: e.target.value })}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Desc</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vienna.txt"
                onChange={(e) => setNewTrip({ ...newTrip, desc: `/Descrption/${e.target.value}.txt` })}
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
};

export default AddTrip;
