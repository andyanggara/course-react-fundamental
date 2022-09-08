import React from "react";
import { Container } from "react-bootstrap";
import MyPosts from "./myposts.posts";

const MainPosts = (props) => {
    return (
        <React.Fragment>
            <Container className="mt-2">
                <h3>
                    <strong>{props.title}</strong>
                </h3>
                <p>Data fetching from {process.env.REACT_APP_BASEURL}/posts</p>
                <MyPosts></MyPosts>
            </Container>
        </React.Fragment>
    );
};

export default MainPosts;
