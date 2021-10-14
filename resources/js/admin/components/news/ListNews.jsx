import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { CButton, CLink, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CSwitch } from "@coreui/react";
import ReactPaginate from "react-paginate";

function ListNews(props) {

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
        axios.get(domain + pathname + "/news")
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
        axios.get(domain + pathname + "/news?page=" + page)
            .then(res => {
                setNews(res.data.data);
            })
            .catch((error) => {

            })
    }
    const updateActive = (id) => {
        var remember = document.getElementById("active");

        const update = (id, data) => {
            axios.put(domain + pathname + "/news/" + id, data)
                .then(res => {
                    console.log(res.status);
                })
        }
        if (remember.checked) {
            const data = {
                act: 1
            }
            update(id, data);
        } else {

            const data = {
                act: 0
            }
            update(id, data);
        }
    }
    const setDelete = (id) => {
        setId(id);
        setModalDelete(true);
    }
    const deleteItem = (id) => {
        axios.delete(domain + pathname + "/news/" + id)
            .then(res => {
                axios.get(domain + pathname + "/news?page=" + pages)
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
                                        <th scope="col">Tiêu đề</th>
                                        <th scope="col">Đường dẫn</th>
                                        <th scope="col">Ảnh</th>
                                        <th scope="col">Kích hoạt</th>
                                        <th scope='col' className='text-center'>
                                            <CLink to={"/admin/them-bai-viet"} title='Thêm bài viết'>
                                                <i className="fa fa-plus-square"></i>
                                            </CLink>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        news.map((ne, index) => {
                                            return (
                                                <tr scope="row" key={index}>
                                                    <td>{ne.id}</td>
                                                    <td><CLink to={"/edit/" + ne.slug} title={ne.name}>{ne.name}</CLink></td>
                                                    <td><CLink to={"/edit/" + ne.slug} title={ne.slug}>{ne.slug}</CLink></td>
                                                    <td><CLink to={"/edit/" + ne.slug} title={ne.name}><img src={ne.img} alt={ne.name} /></CLink></td>
                                                    <td className='text-center'>
                                                        <CSwitch
                                                            id='active'
                                                            onChange={() => updateActive(ne.id)}
                                                            color="success"
                                                            defaultChecked={ne.act === 1 ? 'checked' : ''}
                                                            shape="pill"
                                                        />
                                                    </td>
                                                    <td className='text-center d-flex'>
                                                        <CLink to={"/admin/sua-bai-viet/" + ne.slug} title={ne.name}>
                                                            <i className="fa fa-edit"></i>
                                                        </CLink>
                                                        <button onClick={() => setDelete(ne.id)} >
                                                            <i className="fa fa-trash"></i>
                                                        </button>
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
                    <CModalTitle className="text-center">Bạn có muốn xóa không?</CModalTitle>
                </CModalHeader>
                <CModalBody className="text-center">
                    <i className="fa fa-exclamation-circle"></i>
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={() => deleteItem(id)}>Xóa</CButton>
                    <CButton color="secondary" onClick={() => setModalDelete(false)}>Không</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

export default ListNews;
