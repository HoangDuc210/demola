import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { CButton, CLink, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CSwitch } from "@coreui/react";
import ReactPaginate from "react-paginate";
import imgDefault from '../../../asset/images/default.jpg'

function NewsCategories(props) {

    const [news, setNews] = useState([])
    const [totalNews, setTotalNews] = useState(0)
    const [modalDelete, setModalDelete] = useState(false)
    const [id, setId] = useState()
    const [pages, setPages] = useState()

    const perPage = 5;
    const pagination = useRef();
    const domain = window.location.origin;
    const pathname = '/api/v1';

    useEffect(() => {
        axios.get(domain + pathname + "/news_categories")
            .then(res => {
                setNews(res.data.data);
                // setTotalNews();
                setTotalNews(res.data.meta.total);
            })
            .catch((error) => {

            })
    }, []);

    const setPage = async selected => {
        const page = selected.selected + 1;
        setPages(page);
        axios.get(domain + pathname + "/news_categories?page=" + page)
            .then(res => {
                setNews(res.data.data);
            })
            .catch((error) => {

            })
    }
    const updateActive = (id) => {
        var remember = document.getElementById("active");

        const update = (data) => {

            axios.put(domain + pathname + "/news_categories/" + id, data)
                .then(res => {
                    console.log(res.status);
                })
        }
        if (remember.checked) {
            const data = {
                act: 1
            }
            update(data);
        } else {

            const data = {
                act: 0
            }
            update(data);
        }
    }
    const setDelete = (id) => {
        setId(id);
        setModalDelete(true);
    }
    const deleteItem = (id) => {
        axios.delete(domain + pathname + "/news_categories/" + id)
            .then(res => {
                axios.get(domain + pathname + "/news_categories?page=" + pages)
                .then(res => {
                    setNews(res.data.data);
                    setModalDelete(false);
                })
                .catch((error) => {

                })
            })
    }

    return (
        <>
            <div className="container">
                <div className='news'>
                    <div className='row'>
                        <div className='col-12'>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Ti??u ?????</th>
                                        <th scope="col">???????ng d???n</th>
                                        <th scope="col">???nh</th>
                                        <th scope="col">K??ch ho???t</th>
                                        <th scope='col' className='text-center'>
                                            <CLink to={"/admin/news/add"} title='Th??m b??i vi???t'>
                                                <i className="fa fa-plus-square"></i>
                                            </CLink>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        news.map((ne, index) => {
                                            const imgOb = JSON.parse(ne.img);

                                            const img = imgOb !== null ? imgOb.url : imgDefault;

                                            return (
                                                <tr scope="row" key={index}>
                                                    <td>{ne.id}</td>
                                                    <td><CLink to={"/admin/news/edit" + ne.slug} title={ne.name}>{ne.name}</CLink></td>
                                                    <td><CLink to={"/admin/news/edit" + ne.slug} title={ne.slug}>{ne.slug}</CLink></td>
                                                    <td><CLink className="box-img" to={"/admin/news/edit" + ne.slug} title={ne.name}><img src={img} alt={ne.name} /></CLink></td>
                                                    <td className='text-center'>
                                                        <CSwitch
                                                            id='active'
                                                            onChange={() => updateActive(ne.id)}
                                                            color="success"
                                                            defaultChecked={ne.act === 1 ? 'checked' : ''}
                                                            shape="pill"
                                                        />
                                                    </td>
                                                    <td className='text-center '>
                                                        <div className='box-options'>
                                                            <CLink to={"/admin/news/edit/" + ne.slug} title={ne.name}>
                                                                <i className="fa fa-edit"></i>
                                                            </CLink>
                                                            <button className='btn-0' onClick={() => setDelete(ne.id)} >
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        {totalNews > 5 ?
                            <div className='col-12 d-flex justify-content-center'>
                                <ReactPaginate
                                    ref={pagination}
                                    pageCount={Math.ceil(totalNews / perPage)}
                                    pageRangeDisplayed={4}
                                    marginPagesDisplayed={1}
                                    onPageChange={setPage}
                                    containerClassName="pagination"
                                    activeClassName="active disabled"
                                    previousLabel={<>&laquo;</>}
                                    nextLabel={<>&raquo;</>}
                                />
                            </div> : ''}

                    </div>
                </div>
            </div>

            <CModal show={modalDelete} onClose={setModalDelete}>
                <CModalHeader closeButton>
                    <CModalTitle className="text-center">B???n c?? mu???n x??a kh??ng?</CModalTitle>
                </CModalHeader>
                <CModalBody className="text-center">
                    <i className="fa fa-exclamation-circle"></i>
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={() => deleteItem(id)}>X??a</CButton>
                    <CButton color="secondary" onClick={() => setModalDelete(false)}>Kh??ng</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

export default NewsCategories;
