import React, { useRef, useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane, CTabs } from '@coreui/react';
import { Editor } from '@tinymce/tinymce-react';
import lfm from '../../../configs/getImage/getImgUrlPry';
import '../../../configs/getImage/geImage.scss';
import imgDefault from '../../../../asset/images/default.jpg'
import xoa_dau from '../../configs/xoa_dau';


function EditNewsCategory(props) {

    const slug = props.match.params.slug;
    const [id, setId] = useState([]);
    const [news, setNews] = useState([]);
    const [content, setContent] = useState();
    const [image, setImage] = useState(imgDefault);
    const domain = window.location.origin;
    const pathname = '/api/v1';
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        // resolver: yupResolver(validationSchema)

    });

    useEffect(() => {
        axios.get(domain + pathname + "/news/" + slug)
            .then(res => {

                setNews(res.data.data[0]);
                setId(res.data.data[0].id);
                setValue("name", res.data.data[0].name);
                setValue("slug", res.data.data[0].slug);
                setValue("ord", res.data.data[0].ord);
                setValue("short_content", res.data.data[0].short_content);
                setContent(res.data.data[0].content);

                if (res.data.data[0].img !== null) {
                    const imgOb = JSON.parse(res.data.data[0].img);
                    setValue("img", imgOb.url);
                    setImage(imgOb.url);
                }

            })
    },[]);

    const setSlug = (data) => {
        const a = xoa_dau(data);
        setValue("slug", a);
    }
    const handleEditorChange = (content) => {
        setContent(content);
    }

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
        axios.put(domain + pathname + "/news/" + id, dataNews)
            .then(res => {
                console.log(res.status);
            })


    };
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
                                    <p >Họ và tên</p>
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
                                            <img src={image} alt={image} className='a_img' />
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
                                <div className='form-group'>
                                    <p>Nội dung</p>
                                    <div className="text-editor">
                                        <Editor
                                            apiKey={"jo19uvonaswch30xn08p0dkh10t2df6z3o37903rn9669li5"}
                                            initialValue={content}
                                            init={{

                                                selector: 'textarea.my-editor',
                                                relative_urls: false,
                                                mobile: {
                                                    plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable'
                                                },
                                                plugins: [
                                                    "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                                                    "searchreplace wordcount visualblocks visualchars code fullscreen",
                                                    "insertdatetime media nonbreaking save table directionality",
                                                    "emoticons template paste textpattern"
                                                ],
                                                menubar: 'file edit view insert format tools table tc help',
                                                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | insertfile image link | code',
                                                height: 800,
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                                                template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',

                                                file_picker_callback: function (callback, value, meta) {
                                                    var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
                                                    var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
                                                    var domain = window.location.origin;
                                                    var cmsURL = domain + '/laravel-filemanager?editor=' + meta.fieldname;
                                                    if (meta.filetype == 'image') {
                                                        cmsURL = cmsURL + "&type=Images";
                                                    } else {
                                                        cmsURL = cmsURL + "&type=Files";
                                                    }

                                                    tinyMCE.activeEditor.windowManager.openUrl({
                                                        url: cmsURL,
                                                        title: 'Filemanager',
                                                        width: x * 0.8,
                                                        height: y * 0.8,
                                                        resizable: "yes",
                                                        close_previous: "no",
                                                        onMessage: (api, message) => {
                                                            callback(message.content);
                                                        }
                                                    })

                                                }
                                            }}
                                            onEditorChange={handleEditorChange}
                                        />
                                    </div>
                                </div>
                            </CTabPane>
                        </CTabContent>
                    </CTabs>

                    <button type="submit" className="btn btn-primary btn-save-form">Lưu</button>


            </form>

        </>
    );
}

export default EditNewsCategory;
