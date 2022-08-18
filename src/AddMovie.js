import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddMovie(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const moviename = useRef();
  const movieimage = useRef();
  const movierate = useRef();
  const Add = () => {
    handleClose();
    props.setMovie([
      ...props.movies,
      {
        name: moviename.current.value,
        image: movieimage.current.value,
        rate: movierate.current.value,
      },
    ]);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your favorite movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" ref={moviename} placeholder={"movie name"}></input>
          <input
            type="text"
            ref={movieimage}
            placeholder={"movie image"}
          ></input>
          <input
            type="text"
            ref={movierate}
            placeholder={"movie rating 1-5"}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={Add}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
