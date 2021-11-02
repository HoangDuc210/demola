import { CLink } from '@coreui/react';
import axios from 'axios';
import { identity } from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';



function DetailBlog(props) {

    const [blog, setBlog] = useState([]);
    const [totalNews, setTotalNews] = useState(0)
    const [replay, setReplay] = useState(false);

    const slug = props.match.params.slug;
    const domain = window.location.origin;
    const pathname = '/api/v1';
    useEffect(() => {
        axios.get(domain + pathname + "/blogs/" + slug)
            .then(res => {
                setBlog(res.data.data[0]);
            })
            .catch((error) => {

            })
    }, []);



    return (
        <>
            <div className='container mt-4 mb-4'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='blogs'>
                            <h1 className="title_b mb-3">{blog.name}</h1>
                            <div className="date-users">
                                <p>Ngày đăng: {blog.created_at}</p>
                                <p>Người đăng: {blog.publish_by}</p>
                            </div>
                            <div className='box-img mt-3'>
                                <img src={blog.img} alt={blog.name} />
                            </div>
                            <div className='s-content mt-3'>
                                {ReactHtmlParser(blog.content)}
                            </div>
                            <div className='box-search'>

                                <ul>
                                    <li>Chia sẻ:</li>
                                    <li>
                                        <a  href={"https://www.facebook.com/sharer/sharer.php?u=" + domain + "/" + blog.slug} target="_blank">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>

                                    </li>
                                </ul>
                            </div>
                            <div className='box-comment'>
                                <p className='title_b'>Bình luận:</p>
                                <div className='screen-comment'>
                                    <div className='screen-comment_1'>
                                        <div className='box-img_u'>
                                            <img src="" alt="" />
                                        </div>
                                        <div className='s-content'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur quia architecto, error distinctio sit labore sed voluptatum molestiae voluptates illo nihil eos, minus nam totam ad possimus. Enim, ex.
                                        </div>
                                    </div>
                                    <ul className='screen-comment_2 mt-2 mb-2'>
                                        <li>
                                            <a href="">Thích </a>
                                        </li>
                                        <li>
                                            <CLink onClick={() => setReplay(true)}>Trả lời</CLink>
                                        </li>
                                    </ul>
                                    {replay === true ? <div className='screen-comment_3'>
                                        <div className='box-img_u'>
                                            <img src="" alt="" />
                                        </div>
                                        <form action="" className='form-replay'>
                                            <textarea name="" id=""></textarea>
                                            <button className='btn btn-submit'><i className="fa fa-plane" aria-hidden="true"></i></button>
                                        </form>
                                    </div> : ''}

                                </div>
                                <div className='comment mt-2'>
                                    <div className='box-img_u'>
                                        <img src="" alt="" />
                                    </div>
                                    <form action="" className='form-replay'>
                                        <textarea name="" id=""></textarea>
                                        <button className='btn btn-submit'><i className="fa fa-plane" aria-hidden="true"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 pl-0'>
                        <div className="box-contact">
                            <p className="title_b">Liên hệ</p>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailBlog;
