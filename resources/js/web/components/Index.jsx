import { CLink } from "@coreui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from "react-paginate";

function Employee(props) {

    const [blog, setBlog] = useState([]);
    const [totalNews, setTotalNews] = useState(0)
    const [id, setId] = useState()
    const [pages, setPages] = useState()

    const perPage = 1;
    const pagination = useRef();
    const domain = window.location.origin;
    const pathname = '/api/v1';

    useEffect(() => {
        axios.get(domain + pathname + "/blogs")
            .then(res => {
                setBlog(res.data.data);
                setTotalNews(res.data.meta.total);
            })
            .catch((error) => {

            })
    }, []);
    const setPage = async selected => {
        const page = selected.selected + 1;
        setPages(page);
        axios.get(domain + pathname + "/blogs?page=" + page)
            .then(res => {
                setBlog(res.data.data);
            })
            .catch((error) => {

            })
    }
    return (
        <>

        </>
    );
}

export default Employee;
