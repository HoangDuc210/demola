import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import opps from '../../asset/images/oops-orange.jpg';


function PageError(props) {
    let history = useHistory();
    useEffect(() => {

        setTimeout(() => {
            var timeLeft = 6;
            var elem = document.getElementById('Timer');

            var timerId = setInterval(countdown, 1000);

            function countdown() {
                if (timeLeft == 0) {
                    clearTimeout(timerId);
                    history.push('/');
                } else {
                    elem.innerHTML = timeLeft - 1;
                    timeLeft--;
                }
            }
        }, 3000);

    });

    return (
        <>
            <div className='container mt-5 position-relative'>
                <div className='row align-items-center justify-content-center'>
                    <div className='box-img'>
                        <img src={opps} alt="" />
                    </div>
                    <div className='count-down'>
                        <p>Quay lại trang chủ</p>
                        <div id="Timer">5</div>
                        <p>s</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageError;
