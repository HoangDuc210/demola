import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import firebase from "../../../configFirebase";

function AddMusicComponent(props) {
    // const [errorFile, setErrorFile] = useState();

    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    // const validationSchema = yup.object().shape({
    //     name_music: yup
    //         .string()
    //         .trim()
    //         .required("Vui lòng nhập họ và tên!!!")
    //         .max(20, "Tên nhân viên không quá 20 ký tự!!!"),
    //     like: yup
    //         .string()
    //         .trim()
    //         .required("Vui lòng nhập số điện thoại!!!")
    //         .min(10, "Số điện thoại không đúng định dạng!!!")
    //         .max(11, "Số điện thoại không đúng định dạng!!!"),
    //     cate_music: yup
    //         .string()
    //         .trim()
    //         .required("Vui lòng nhập hthành phố!!!")
    //         .max(20, "Tên thành phố không quá 20 ký tự!!!")
    // });

    // const {
    //     register,
    //     handleSubmit,
    //     setValue,
    //     formState: { errors }
    // } = useForm({ resolver: yupResolver(validationSchema) });
    // const apiUrl = "http://localhost:8000/api/v1/musics";
    // const onSubmit = async data => {
    //     const file_music_lenght = data.file_music.length;
    //     if (file_music_lenght === 0) return setErrorFile("Bạn chưa chọn file");

    //     const file_music_format = data.file_music[0].type;
    //     if (file_music_format !== "audio/mpeg") return setErrorFile("Bạn chưa chọn file nhạc");

    //     //upload image filebase
    //     const storage = firebase.storage();
    //     let bucketName = "musics";
    //     let file = data.file_music[0];
    //     let storageRef = storage.ref(`${bucketName}/${file.name}`);
    //     let uploadTask = await storageRef.put(file);

    //     const urlData = await storage.ref(`${bucketName}/${file.name}`).getDownloadURL();

    //     const dataMusic = {
    //         name_music: data.name_music,
    //         file_music: urlData,
    //         cate_music: data.cate_music,
    //         like: data.like
    //     }
    //     const apiUrl = "http://localhost:8000/api/v1/musics";
    //     axios.post(apiUrl, dataMusic).then(res => {
    //         console.log(res);
    //     });


    // };

    // const cancle = () => {
    //     setValue("name_music", "");
    //     setValue("file_music", "");
    //     setValue("cate_music", "");
    //     setValue("like", "");
    // };
    return (
        <>
            {/* <div className="container-fluid">
                <div className="form-employee">
                    <form onSubmit={handleSubmit(onSubmit)} className="row">
                        <div className="form-group">
                            <label htmlFor="">Tên nhạc</label>
                            <input
                                type="text"
                                name="name_music"
                                className="form-control"
                                placeholder="Vui lòng nhập họ và tên"
                                ref={register}
                            />
                            {errors.name_music && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.name_music?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">File nhạc</label>
                            <input
                                type="file"
                                name="file_music"
                                className="form-control"
                                placeholder="Vui lòng số điện thoại"
                                ref={register}
                            />
                            {errorFile && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errorFile}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Danh mục</label>
                            <input
                                type="text"
                                name="cate_music"
                                className="form-control"
                                placeholder="Vui lòng nhập email"
                                ref={register}
                            />
                            {errors.cate_music && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.cate_music?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Like</label>
                            <input
                                type="text"
                                name="like"
                                className="form-control"
                                placeholder="Vui lòng nhập địa chỉ"
                                ref={register}
                            />
                            {errors.like && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.like?.message}
                                </p>
                            )}
                        </div>

                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary mr-3"
                            >
                                Lưu
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => cancle()}
                            >
                                Hủy
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    );
}

export default AddMusicComponent;
