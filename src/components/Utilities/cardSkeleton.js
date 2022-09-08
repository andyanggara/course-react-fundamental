import React from "react";
import { Card, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ countCards }) => {
    return Array(countCards)
        .fill(0)
        .map((item, i) => (
            <Col key={i} lg={3} className="d-flex justify-content-center">
                <Card border="primary" style={{ width: "20rem" }} className="mb-4">
                    <Card.Body>
                        <Skeleton />
                        <Skeleton width={"23%"} height={38} />
                    </Card.Body>
                </Card>
            </Col>
        ));
};

export default CardSkeleton;
