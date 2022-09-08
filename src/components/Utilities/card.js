import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ children }) => {
    return (
        <React.Fragment>
            <Card border="primary" style={{ width: "20rem", borderLeft: "6px solid" }} className="mb-4">
                <Card.Body>{children}</Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Cards;
