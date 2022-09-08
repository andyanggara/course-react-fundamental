import React from "react";
import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaRegSadTear } from "react-icons/fa";

export const NotFound = () => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <Row>
                    <Col className="d-flex justify-content-center align-items-center">
                        <IconContext.Provider value={{ color: "blue", size: "6em " }}>
                            <FaRegSadTear />
                        </IconContext.Provider>
                        <span className="ms-4" style={{ fontSize: "100px" }}>
                            404
                        </span>
                    </Col>
                    <span className="d-flex justify-content-center" style={{ fontSize: "20px" }}>
                        Page not found
                    </span>
                </Row>
            </div>
        </React.Fragment>
    );
};
