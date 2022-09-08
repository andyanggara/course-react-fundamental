import React, { useEffect, useState } from "react";
import axios from "axios";
import Modals from "../Utilities/modal";
import { Button, Stack, Alert, Row, Col } from "react-bootstrap";
import { FaPlusCircle, FaMinusCircle, FaExclamationTriangle } from "react-icons/fa";
import CardSkeleton from "../Utilities/cardSkeleton";

const Posting = () => {
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(true);
        let isCancelled = false;
        if (isCancelled === false) {
            setLoading(true);
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
            })
                .then((result) => setDatas(result.data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
        return () => {
            isCancelled = true; // clean up render
        };
    }, [limit]);

    const handleLimit = (option) => {
        if (option === "+") {
            setLimit((prev) => (prev += 1));
        } else {
            setLimit((prev) => (prev -= 1));
        }
    };

    // if (loading) return <Skeleton />;

    // console.table(datas);

    return (
        <React.Fragment>
            <Alert variant="warning" className="d-flex align-items-center" style={{ borderLeft: "6px solid #ffecb5" }}>
                <FaExclamationTriangle className="me-2 flex-shrink-0" />
                By default data show 1 post and currently showing {limit} posts.
                {/* {loading ? <Skeleton /> : "By default data show 1 post and currently showing {limit} posts."} */}
            </Alert>
            <Stack className="d-flex justify-content-center align-items-center mb-4" direction="horizontal" gap={3}>
                <Button variant="outline-primary" onClick={() => handleLimit("+")} className="d-flex justify-content-center align-items-center">
                    <FaPlusCircle className="me-2 flex-shrink-0" />
                    Add
                </Button>
                {/* {limit > 1 && ( */}
                <Button
                    variant="outline-danger"
                    onClick={() => handleLimit("-")}
                    className="d-flex justify-content-center align-items-center"
                    disabled={limit === 1 ? true : false}
                >
                    <FaMinusCircle className="me-2 flex-shrink-0" />
                    Remove
                </Button>
                {/* )} */}
            </Stack>
            {loading ? (
                <Row>
                    <CardSkeleton countCards={limit} />
                </Row>
            ) : (
                <Row>
                    {datas.map((data, i) => {
                        return (
                            <Col key={i} lg={3} className="d-flex justify-content-center">
                                <Modals id={data.id} title={data.title} body={data.body}></Modals>
                            </Col>
                        );
                    })}
                </Row>
            )}
        </React.Fragment>
    );
};

export default Posting;
