import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import React, { useState } from 'react';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from '../../../../../../node_modules/react-hook-form/dist';
import XLSX from "xlsx";

const SUPPORTED_FORMATS = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

];

const validationSchema = yup.object().shape({
    dataExcel: yup
        .mixed()
        .test("fileFormat", "Không đúng định dạng ảnh!!!", (value) => {
            if (value[0]) {
                return value && SUPPORTED_FORMATS.includes(value[0].type);
            }
        }),
});

function ImportExcel(props) {
    const [modalExcel, setModalExcel] = useState(false)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        // resolver: yupResolver(validationSchema)

    });
    const onSubmit = data => {
        const file = data.dataExcel[0];
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        reader.onload = e => {
            /* Parse data */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];

            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            /* Update state */
            // this.setState({ data: data, cols: make_cols(ws["!ref"]) });
            console.log(data);
        };
        if (rABS) reader.readAsBinaryString(file);
        else reader.readAsArrayBuffer(file);

    };
    return (
        <>
            <button className='btn btn-primary' onClick={() => setModalExcel(true)} >
                <i className="fa fa-trash"></i>
            </button>
            <CModal show={modalExcel} onClose={setModalExcel}>

                <CModalBody >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Nhập file excel:</p>
                        <div className='form-group'>
                            <input type="file" name='dataExcel' className='form-control' ref={register} />
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu</button>
                    </form>
                </CModalBody>

            </CModal>
        </>
    );
}

export default ImportExcel;
