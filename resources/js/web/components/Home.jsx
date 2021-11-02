import React, { useState } from 'react';
import lfm from '../admin/configs/getImage/getImgUrlPry';
import '../admin/configs/getImage/geImage.scss';
import imgDefault from '../asset/images/default.jpg'
import { useForm, Controller } from "react-hook-form";


function Home() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();
    const apiUrl = "http://localhost:8000/api/v1/customers";
    const onSubmit = async data => {
        // axios.post(apiUrl, data).then(res => {
        //     console.log(res);
        // });

        console.log(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label id="lfm" data-input="thumbnail" onClick={lfm} data-preview="holder">
                        <div className='c_box-img'>
                            <img src={imgDefault} alt={imgDefault} className='a_img' />
                        </div>
                        <p className='c_choose_img'>Chọn file</p>
                        <input id="thumbnail" ref={register} className=" d-none" type="text" name="img" />
                    </label>
                </div>
                <div className='form-group'>
                    <button
                        type="submit"
                        className="btn btn-primary mr-3"
                    >
                        Lưu
                    </button>
                </div>
            </form>
        </>
    )
}

export default Home;
