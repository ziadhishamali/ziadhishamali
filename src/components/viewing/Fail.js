import React from 'react';
import '../../styles/Successfull.css';

export const Fail = () => {
    return (
        <div id="fail-area" className="fail-area">
            <h2 className="">Ooops !!</h2>
            <h3 className="">An Error occured while sending the email please try again later</h3>
        </div>
    )
}