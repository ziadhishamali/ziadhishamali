import React from 'react';
import location from '../../images/icons/location.svg';
import at from '../../images/icons/at.svg';
import phone from '../../images/icons/phone.svg';

const ViewIcons = () => {

    return (
        <div className="bio-info margin-top">
            <div className="section-row justify align">
                <img src={location} alt="location" />
                <span className="fugazOne">{"Alexandria, Egypt."}</span>
            </div>
            <div className="section-row justify align">
                <img src={at} alt="at" />
                <span className="fugazOne">{"ziadhesham97@gmail.com"}</span>
            </div>
            <div className="section-row justify align">
                <img src={phone} alt="phone" />
                <span className="fugazOne">{"00201113478944"}</span>
            </div>
        </div>
    )

}

export default ViewIcons;