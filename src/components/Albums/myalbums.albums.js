import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Button, Stack, Alert } from "react-bootstrap";
import { FaPlusCircle, FaMinusCircle, FaExclamationTriangle } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

const Collection = (props) => {
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(1);
    const [loading, setLoading] = useState();

    useEffect(() => {
        let isCancelled = false;
        if (isCancelled === false) {
            setLoading(true);
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
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

    return (
        <React.Fragment>
            <Alert variant="warning" className="d-flex align-items-center" style={{ borderLeft: "6px solid #ffecb5" }}>
                <FaExclamationTriangle className="me-2 flex-shrink-0" />
                By default data show 1 image and currently showing {limit} images.
            </Alert>
            <Stack className="d-flex justify-content-center align-items-center mb-4" direction="horizontal" gap={3}>
                <Button variant="outline-primary" onClick={() => handleLimit("+")} className="d-flex justify-content-center align-items-center">
                    <FaPlusCircle className="me-2 flex-shrink-0" />
                    Add
                </Button>
                <Button
                    variant="outline-danger"
                    onClick={() => handleLimit("-")}
                    className="d-flex justify-content-center align-items-center"
                    disabled={limit === 1 ? true : false}
                >
                    <FaMinusCircle className="me-2 flex-shrink-0" />
                    Remove
                </Button>
            </Stack>
            {loading ? (
                <Skeleton height={450} />
            ) : (
                <Carousel>
                    {datas.map((data, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <img className="d-block w-100" src={data.url} alt="" height={450} width={450} />
                                <Carousel.Caption>
                                    <h3>{data.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            )}
        </React.Fragment>
    );
};

export default Collection;
