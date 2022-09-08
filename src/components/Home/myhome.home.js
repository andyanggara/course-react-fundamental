import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MyHomes = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [loading]);

    return (
        <React.Fragment>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                <div className="ms-3 me-2" style={{ flexGrow: 1 }}>
                    {loading ? <Skeleton /> : props.text}
                </div>
                {loading ? <Skeleton width={16} circle className="ms-2" /> : <FaCheckCircle className="ms-2 text-success flex-shrink-0" />}
            </ListGroup.Item>
        </React.Fragment>
    );
};

export default MyHomes;
