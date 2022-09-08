import React, { useState } from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import Cards from "./card";

const Modals = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Cards>
                <Card.Title className="text-truncate">{props.title}</Card.Title>
                <Button variant="info" onClick={handleShow}>
                    Detail
                </Button>
            </Cards>
            {/* <h3>{props.title}</h3> */}
            <Modal size="lg" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <h5>
                            <strong>ID</strong>: {props.id}
                        </h5>
                        <h5>
                            <strong>Title:</strong> {props.title}
                        </h5>
                        <p>
                            <strong>Body:</strong> {props.body}
                        </p>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default Modals;
