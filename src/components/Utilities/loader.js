import React from "react";
import { Spinner } from "react-bootstrap";

const Loaders = () => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="danger" />
            </div>
        </React.Fragment>
    );
};

export default Loaders;
