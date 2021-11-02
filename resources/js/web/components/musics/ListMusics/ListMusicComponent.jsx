import React, { useEffect, useRef, useState } from "react";
import { CButton, CLink, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ListMusicComponent = () => {
    // const [customers, setCustomers] = useState([]);
    // const [perPage, setPerPage] = useState(1);
    // const [totalCustomers, setTotalCustomers] = useState(0);
    // const [idMusic,setIdMusic] = useState(0);
    // const [modalDelete, setModalDelete] = useState(false);
    // const pagination = useRef();

    // const apiUrl = "http://localhost:8000/api/v1/musics";

    // const getCusstomers = async () => {
    //     const res = await axios.get(apiUrl);
    //     setCustomers(res.data.data);
    //     setTotalCustomers(res.data.meta.total);
    //     setPerPage(res.data.meta.per_page);
    // };

    // useEffect(() => {
    //     getCusstomers();
    // }, []);


    // const getCusstomerss = async () => {
    //     const apiUrl = "http://localhost:8000/api/v1/musics";
    //     const res = await axios.get(apiUrl + "?page=" + perPage);
    //     setCustomers(res.data.data);
    // };
    // const getPage = ({ selected }) => {
    //     const page = selected + 1;
    //     setPerPage(page);
    //     getCusstomerss(page);
    // };

    // const setDelete = (id) =>{
    //     setIdMusic(id);
    //     setModalDelete(true);
    // }
    // const deleteEmployee = id => {
    //     setModalDelete(false);
    //     axios.delete(apiUrl + "/" + id).then(res => {
    //         if (res.status === 200) {
    //             getCusstomerss(perPage);
    //         }
    //     });
    // };

    return (
        <>
            {/* <div className="container-fluid mt-3 mb-3">
                <div className="customer">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-striped table-bordered w-100">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Tên bài hát</th>
                                        <th>Link bài hát</th>
                                        <th>Danh mục</th>
                                        <th>Like</th>
                                        <th>
                                            <CLink
                                                to="/add-music"
                                                className="smooth btn d-flex align-items-center justify-content-center"
                                            >
                                                <i
                                                    className="fa fa-plus-square-o"
                                                    aria-hidden="true"
                                                ></i>
                                            </CLink>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map((cus, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{cus.id}</td>
                                                <td>{cus.name_music}</td>
                                                <td>
                                                    <audio controls>
                                                        <source
                                                            src={cus.file_music}
                                                            type="audio/mpeg"
                                                        />
                                                    </audio>
                                                </td>
                                                <td>{cus.cate_music}</td>
                                                <td>{cus.like}</td>
                                                <td>
                                                    <div className="options">
                                                        <CLink
                                                            to={
                                                                "/edit-music/" +
                                                                cus.id
                                                            }
                                                            title=""
                                                            className="btn btn-primary smooth"
                                                        >
                                                            <i
                                                                className="fa fa-pencil-square-o"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </CLink>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() =>
                                                                setDelete(cus.id)
                                                            }
                                                        >
                                                            <i className="fa fa-trash-o"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            {totalCustomers > 5 ? (
                                <ReactPaginate
                                    ref={pagination}
                                    pageCount={Math.ceil(
                                        totalCustomers / perPage
                                    )}
                                    pageRangeDisplayed={4}
                                    marginPagesDisplayed={1}
                                    onPageChange={getPage}
                                    containerClassName="pagination"
                                    activeClassName="active disabled"
                                    previousLabel={<>&laquo;</>}
                                    nextLabel={<>&raquo;</>}
                                    pageLinkClassName="smooth"
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <CModal show={modalDelete} onClose={setModalDelete}>
                <CModalHeader closeButton>
                    <CModalTitle className="text-center">
                        Bạn có muốn xóa nhân viên này ?
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <i></i>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="primary"
                        onClick={() => deleteEmployee(idMusic)}
                    >
                        Có
                    </CButton>
                    <CButton
                        color="secondary"
                        onClick={() => setModalDelete(false)}
                    >
                        Không
                    </CButton>
                </CModalFooter>
            </CModal> */}
        </>
    );
};

export default ListMusicComponent;
