import React from "react";
import MyHomes from "./myhome.home";
import { Container, ListGroup, Alert } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";

const MainHomes = (props) => {
    return (
        <React.Fragment>
            <Container className="mt-2 mb-4">
                <h3>
                    <strong>{props.title}</strong>
                </h3>
                <Alert variant="info" className="d-flex align-items-center" style={{ borderLeft: "6px solid #b6effb" }}>
                    <FaInfoCircle className="me-2 flex-shrink-0" />
                    This website was created to meet REACT JS FUNDAMENTALs (Case Study of Creating a Modern Web - Single Page Application (SPA))
                </Alert>
                <h5>Tasks</h5>
                <ListGroup as="ol" numbered className="mt-3">
                    <MyHomes text="Routing the POSTS URL with the component fields from the POSTS API above (with data: title only)"></MyHomes>
                    <MyHomes text="Modif UI(User Interface) Homepage"></MyHomes>
                    <MyHomes text="Validate active navigation bar"></MyHomes>
                    <MyHomes text="When the posts title is clicked, it appears a modal popup detail description of the API (Application Programming Interface) (id, title, body)"></MyHomes>
                    <MyHomes text="UI creativity (User Interface) respectively"></MyHomes>
                </ListGroup>
            </Container>
        </React.Fragment>
    );
};

export default MainHomes;
