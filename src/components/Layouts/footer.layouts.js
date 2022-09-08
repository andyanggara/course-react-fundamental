import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="border-top mt-auto bg-light py-3 sticky-sm-bottom">
                <Container className="d-flex justify-content-center">
                    <span>Ini footer</span>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
