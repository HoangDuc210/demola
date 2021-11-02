import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane, CTabs } from '@coreui/react';
import { Editor } from '@tinymce/tinymce-react';
import lfm from '../../configs/getImage/getImgUrlPry';
import '../../configs/getImage/geImage.scss';
import imgDefault from '../../../asset/images/default.jpg'
import xoa_dau from '../../configs/xoa_dau';

function AddNewsCategory(props) {

    const [content, setContent] = useState();
    const editorRef = useRef(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        // resolver: yupResolver(validationSchema)

    });

    const setSlug = (data) => {
        const a = xoa_dau(data);
        setValue("slug", a);
    }
    const handleEditorChange = (content) => {
        setContent(content);
    }

    console.log(content);

    const onSubmit = data => {

        const act = data.act === true ? 1 : 0;
        const hot = data.hot === true ? 1 : 0;

        const img = data.img !== '' ? data.img.replace('[', '').replace(']', '') : '';


        const dataNews = {
            name: data.name,
            slug: data.slug,
            img: img,
            act: act,
            ord: data.ord,
            hot: hot,
            short_content: data.short_content,
            content: content

        }
        console.log(dataNews);
        const domain = window.location.origin;
        const pathname = '/api/v1';
        axios.post(domain + pathname + "/news_categories", dataNews)
            .then(res => {
                console.log(res.status);
            })


    };


    const cancle = () => {


    };

    if (typeof window !== "undefined") {
        injectStyle();
    }




    return (
        <>
            <form className='form-data' onSubmit={handleSubmit(onSubmit)}>

                    <CTabs activeTab="home" >
                        <CNav variant="tabs">
                            <CNavItem>
                                <CNavLink data-tab="home">
                                    Chi tiết
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink data-tab="profile">
                                    Khác
                                </CNavLink>
                            </CNavItem>

                        </CNav>
                        <CTabContent>
                            <CTabPane data-tab="home">
                                <div className='form-group'>
                                    <p >Tên</p>
                                    <input type="text" onChange={(e) => setSlug(e.target.value)} name="name" className='form-control' ref={register} />

                                </div>
                                <div className='form-group'>
                                    <p>Slug</p>
                                    <input type="text" name="slug" className='form-control' ref={register} />

                                </div>
                                <div className='form-group'>
                                    <p>Ảnh</p>
                                    <label id="lfm" data-input="thumbnail" onClick={lfm} data-preview="holder">
                                        <div className='c_box-img'>
                                            <img src={imgDefault} alt={imgDefault} className='a_img' />
                                        </div>
                                        <p className='c_choose_img'>Chọn file</p>
                                        <input id="thumbnail" ref={register} className=" d-none" type="text" name="img" />
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <p>Kích hoạt</p>
                                    <label className="c-switch form-check-label c-switch-pill c-switch-success">
                                        <input className="c-switch-input c-form-check-input" type="checkbox" id="active" name="act" defaultChecked ref={register} />
                                        <span className="c-switch-slider"></span>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <p>Sắp xếp</p>
                                    <input type="text" name="ord" className='form-control' ref={register} />

                                </div>
                                <div className='form-group'>
                                    <p>Tin nổi bật</p>
                                    <label className="c-switch form-check-label c-switch-pill c-switch-success">
                                        <input className="c-switch-input c-form-check-input" type="checkbox" id="active" name="hot" defaultChecked ref={register} />
                                        <span className="c-switch-slider"></span>
                                    </label>
                                </div>
                            </CTabPane>
                            <CTabPane data-tab="profile">
                                <div className='form-group'>
                                    <p>Mô tả ngắn</p>

                                    <textarea className="form-control" name="short_content" ref={register} >
                                    </textarea>


                                </div>

                            </CTabPane>
                        </CTabContent>
                    </CTabs>

                    <button type="submit" className="btn btn-primary btn-save-form">Lưu</button>


            </form>

        </>
    );
}

export default AddNewsCategory;
