import {
    CButton, CLink, CModal, CModalBody, CModalFooter, CModalHeader,
    CNav, CNavItem, CNavLink, CTabContent, CTabPane, CTabs
} from '@coreui/react';
import React, { useState } from 'react'
import _nav from './_nav';
import logo from '../../asset/images/logo.png'

function TheHeader() {

    const [modalLogin, setModalLogin] = useState(false);

    return (
        <>
            <header className='header'>
                <div className='container'>
                    <p>Chào mừng đến với Blog Tâm Sự!</p>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <a href="/" className='logo' title='Trang chủ'>
                                <img src={logo} alt="Trang chủ" />
                            </a>
                        </div>
                        <div className='col-7'>
                            <div className='menu'>
                                <ul>
                                    {_nav.map((nav, index) => {
                                        return (
                                            <li key={index}>
                                                <CLink to={nav.route} title={nav.name}>{nav.name}</CLink>
                                                {nav._children === undefined ?
                                                    <ul>

                                                        {nav._children.map((c, i) => {
                                                            return (
                                                                <li key={i}>
                                                                    <CLink to={c.to} title={c.name}>{c.name}</CLink>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul> : ''
                                                }
                                            </li>

                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='box-user'>
                                <button onClick={() => setModalLogin(true)} className='btn btn-primary'>Đăng nhập</button>
                                <button onClick={() => setModalLogin(true)} className='btn btn-primary'>Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <CModal show={modalLogin} onClose={setModalLogin}>
                <CModalHeader closeButton>

                </CModalHeader>
                <CModalBody >
                    <CTabs  activeTab="home" >
                        <CNav className="d-flex justify-content-center" variant="tabs">
                            <CNavItem>
                                <CNavLink data-tab="home">
                                    Đăng nhập
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink data-tab="profile">
                                    Đăng ký
                                </CNavLink>
                            </CNavItem>

                        </CNav>
                        <CTabContent>
                            <CTabPane data-tab="home">
                                <form action="">

                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Mật khẩu</label>
                                        <input type="password" name="password" className="form-control" />
                                    </div>

                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-submit btn-primary">
                                            Gửi
                                        </button>
                                    </div>

                                    <div className='form-group'>
                                        <CLink  className="btn btn-primary" title='Đăng nhập Facebook'>
                                            <i className="fa fa-facebook" aria-hidden="true"></i> Đăng nhập Facebook
                                        </CLink>
                                        <CLink  className="btn btn-danger" title='Đăng nhập Google'>
                                            <i className="fa fa-google" aria-hidden="true"></i> Đăng nhập Google
                                        </CLink>
                                    </div>
                                </form>
                            </CTabPane>
                            <CTabPane data-tab="profile">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">Họ tên</label>
                                        <input type="text" name="name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Số điện thoại</label>
                                        <input type="text" name="phone" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" className="form-control" />
                                    </div>
                                    <div className="m-auto">
                                        <button type="submit" className="btn btn-submit btn-primary">
                                            Gửi
                                        </button>
                                    </div>
                                    <div className='form-group'>
                                        {/* <CLink to={} className="btn btn-primary" title='Đăng nhập Facebook'>
                                            <i className="fa fa-facebook" aria-hidden="true"></i> Đăng nhập Facebook
                                        </CLink>
                                        <CLink to={} className="btn btn-danger" title='Đăng nhập Google'>
                                            <i className="fa fa-google" aria-hidden="true"></i> Đăng nhập Google
                                        </CLink> */}
                                    </div>
                                </form>
                            </CTabPane>
                        </CTabContent>
                    </CTabs>
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={() => deleteItem(id)}>Xóa</CButton>
                    <CButton color="secondary" onClick={() => setModalLogin(false)}>Không</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default TheHeader;
