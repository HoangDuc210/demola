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



function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.trim();
    str = str.replace(/[^a-zA-Z ]/g, "-");
    str = str.replace(/\ /g, '-');
    str = str.toLowerCase();
    return str;
}
function AddNews(props) {

    const [content, setContent] = useState();
    const editorRef = useRef(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        // resolver: yupResolver(validationSchema)

    });

    const setSlug = (data) => {
        const a = xoa_dau(data);
        setValue("slug", a);
    }
    const handleEditorChange = (e) => {
        setContent(e.target.getContent());
    }

    console.log(content);

    const onSubmit = data => {

        const act = data.act === true ? 1 : 0;
        const hot = data.hot === true ? 1 : 0;

        const dataNews = {
            name: data.name,
            slug: data.slug,
            act: act,
            ord: data.ord,
            hot: hot,
            short_content: data.short_content,
            content: content

        }

        console.log(dataNews);


        // const domain = window.location.origin;
        // const pathname = '/api/v1';
        // axios.post(domain + pathname + "/news", dataNews)
        //     .then(res => {
        //         console.log(res.status);
        //     })
    };


    const cancle = () => {


    };

    if (typeof window !== "undefined") {
        injectStyle();
    }




    return (
        <>
            <form className='form-data' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-12'>
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
                                    <label htmlFor="">Họ và tên</label>
                                    <input type="text" onChange={(e) => setSlug(e.target.value)} name="name" className='form-control' ref={register} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Slug</label>
                                    <input type="text" name="slug" className='form-control' ref={register} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Kích hoạt</label>
                                    <label className="c-switch form-check-label c-switch-pill c-switch-success">
                                        <input className="c-switch-input c-form-check-input" type="checkbox" id="active" name="act" defaultChecked ref={register} />
                                        <span className="c-switch-slider"></span>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Sắp xếp</label>
                                    <input type="text" name="ord" className='form-control' ref={register} />

                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Tin nổi bật</label>
                                    <label className="c-switch form-check-label c-switch-pill c-switch-success">
                                        <input className="c-switch-input c-form-check-input" type="checkbox" id="active" name="hot" defaultChecked ref={register} />
                                        <span className="c-switch-slider"></span>
                                    </label>
                                </div>
                            </CTabPane>
                            <CTabPane data-tab="profile">
                                <div className='form-group'>
                                    <label htmlFor="">Mô tả ngắn</label>

                                    <textarea className="form-control" name="short_content" ref={register} >
                                    </textarea>


                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Nội dung</label>
                                    <div className="text-editor">
                                        <Editor
                                            apiKey={"jo19uvonaswch30xn08p0dkh10t2df6z3o37903rn9669li5"}
                                            initialValue="<p>This is the initial content of the editor</p>"
                                            init={{
                                                plugins:
                                                    "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
                                                imagetools_cors_hosts: ["picsum.photos"],
                                                menubar: "file edit view insert format tools table help",
                                                toolbar:
                                                    "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
                                                toolbar_sticky: true,
                                                autosave_ask_before_unload: true,
                                                autosave_interval: "30s",
                                                autosave_prefix: "{path}{query}-{id}-",
                                                autosave_restore_when_empty: false,
                                                autosave_retention: "2m",
                                                image_advtab: true,
                                                link_list: [
                                                    { title: "My page 1", value: "http://www.tinymce.com" },
                                                    { title: "My page 2", value: "http://www.moxiecode.com" }
                                                ],
                                                image_list: [
                                                    { title: "My page 1", value: "http://www.tinymce.com" },
                                                    { title: "My page 2", value: "http://www.moxiecode.com" }
                                                ],
                                                image_class_list: [
                                                    { title: "None", value: "" },
                                                    { title: "Some class", value: "class-name" }
                                                ],
                                                importcss_append: true,
                                                file_picker_callback: function (callback, value, meta) {
                                                    /* Provide file and text for the link dialog */
                                                    if (meta.filetype === "file") {
                                                        callback("", {
                                                            text: "My text"
                                                        });
                                                    }

                                                    /* Provide image and alt text for the image dialog */
                                                    if (meta.filetype === "image") {
                                                        callback("", {
                                                            alt: "My alt text"
                                                        });
                                                    }

                                                    /* Provide alternative source and posted for the media dialog */
                                                    if (meta.filetype === "media") {
                                                        callback("", {
                                                            source2: "",
                                                            poster: ""
                                                        });
                                                    }
                                                },
                                                templates: [
                                                    {
                                                        title: "New Table",
                                                        description: "creates a new table",
                                                        content:
                                                            '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
                                                    },
                                                    {
                                                        title: "Starting my story",
                                                        description: "A cure for writers block",
                                                        content: "Once upon a time..."
                                                    },
                                                    {
                                                        title: "New list with dates",
                                                        description: "New List with dates",
                                                        content:
                                                            '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
                                                    }
                                                ],
                                                template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
                                                template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
                                                height: 600,
                                                image_caption: true,
                                                quickbars_selection_toolbar:
                                                    "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                                                noneditable_noneditable_class: "mceNonEditable",
                                                toolbar_mode: "sliding",
                                                contextmenu: "link image imagetools table",
                                                content_style:
                                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                                            }}
                                            onEditorChange={handleEditorChange}
                                        />
                                    </div>
                                </div>
                            </CTabPane>
                        </CTabContent>
                    </CTabs>

                    <button type="submit" className="btn btn-primary btn-save-form">Lưu</button>
                </div>

            </form>

        </>
    );
}

export default AddNews;
