import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { CLink } from "@coreui/react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Home = () => {

    const [customers, setCustomers] = useState([]);
    const apiUrl = "http://localhost:8000/api/v1/musics";
    const getCusstomers = async () => {
        const res = await axios.get(apiUrl);
        setCustomers(res.data.data);

    };

    useEffect(() => {
        getCusstomers();
    }, []);

    return (
        <>

            {/* <Content className="music">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="box-music">

                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </Content> */}
        </>
    );
};

export default Home;
