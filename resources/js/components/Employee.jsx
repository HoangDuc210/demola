import React from "react";
import axios from "axios";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Vui lòng nhập họ và tên!!!")
        .max(20, "Tên nhân viên không quá 20 ký tự!!!"),
    email: yup
        .string()
        .trim()
        .required("Vui lòng nhập email!!!")
        .email("Email không đúng định dạng!!!"),
    phone: yup
        .string()
        .trim()
        .required("Vui lòng nhập số điện thoại!!!")
        .matches(phoneRegExp, "Số điện thoại không đúng định dạng!!!")
        .min(10, "Số điện thoại không đúng định dạng!!!")
        .max(11, "Số điện thoại không đúng định dạng!!!"),
    address: yup
        .string()
        .trim()
        .required("Vui lòng nhập địa chỉ!!!")
        .max(20, "Địa chỉ không quá 20 ký tự!!!"),
    city: yup
        .string()
        .trim()
        .required("Vui lòng nhập hthành phố!!!")
        .max(20, "Tên thành phố không quá 20 ký tự!!!")
});
function Employee(props) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({ resolver: yupResolver(validationSchema) });
    const apiUrl = "http://localhost:8000/api/v1/customers";
    const onSubmit = async data => {
        axios.post(apiUrl, data).then(res => {
            console.log(res);
        });
    };

    const cancle = () => {
        setValue("name", "");
        setValue("phone", "");
        setValue("email", "");
        setValue("address", "");
        setValue("city", "");
    };
    return (
        <>
            <div className="container-fluid">
                <div className="form-employee">
                    <form onSubmit={handleSubmit(onSubmit)} className="row">
                        <div className="form-group">
                            <label htmlFor="">Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Vui lòng nhập họ và tên"
                                ref={register}
                            />
                            {errors.name && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Số điện thoại</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Vui lòng số điện thoại"
                                ref={register}
                            />
                            {errors.phone && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.phone?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Vui lòng nhập email"
                                ref={register}
                            />
                            {errors.email && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.email?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Địa chỉ</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                placeholder="Vui lòng nhập địa chỉ"
                                ref={register}
                            />
                            {errors.address && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.address?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">City</label>
                            <input
                                type="text"
                                name="city"
                                className="form-control"
                                placeholder="Vui lòng nhập thành phố"
                                ref={register}
                            />
                            {errors.city && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.city?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Vui lòng nhập họ và tên"
                                ref={register}
                            />
                            {errors.name && (
                                <p className="error">
                                    <i
                                        className="fa fa-exclamation-circle"
                                        aria-hidden="true"
                                    ></i>
                                    {errors.name?.message}
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
            </div>
        </>
    );
}

export default Employee;
