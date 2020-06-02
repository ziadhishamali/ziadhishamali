import React from 'react';
import Loader from '../viewing/Loader';

export const Services = ({ services }) => {

    const showServices = services.length ? (
        services.map((service, idx) => {
            return (
                <div key={idx} className="service-item">
                    <img src={service.image} alt="service" />
                    <span className="service-title">{service.title}</span>
                    <span className="service-description">{service.description}</span>
                </div>
            )
        })
    ) : (
        <Loader />
    )

    return (
        <div className="services-container"  id="services-section">
            <span className="services-container-title">SERVICES<hr/></span>
            <div className="services-wrapper">
                {showServices}
            </div>
            <div className="services-buttons">
                {/*<button className="button-portfolio contact" onClick={null}>Contact Me</button>*/}
                <a href={"https://www.upwork.com/o/profiles/users/~01464ed789075af903/"} target="_blank" rel="noopener noreferrer"><button className="button-portfolio upwork">Go To Upwork</button></a>
            </div>
        </div>
    )
};
