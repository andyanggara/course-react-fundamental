import React from "react";
import { Container } from "react-bootstrap";
import MyAlbums from "./myalbums.albums";

const MainAlbums = (props) => {
    return (
        <React.Fragment>
            <Container className="mt-2 mb-4">
                <h3>
                    <strong>{props.title}</strong>
                </h3>
                <p>Data fetching from {process.env.REACT_APP_BASEURL}/albums</p>
                <MyAlbums></MyAlbums>
            </Container>
        </React.Fragment>
    );
};

export default MainAlbums;
