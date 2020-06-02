import React from 'react';

const Indicator = ({level}) => {
    const showIndicator = [];
    for(let i = 1; i <= level; i++) {
        showIndicator.push(
            <div key={i} className="blue-circle"></div>
        );
    }
    for(let i = level + 1; i <= 10; i++) {
        showIndicator.push(
            <div key={i} className="white-circle"></div>
        );
    }
    return (
        <div className="container-wrapper">{showIndicator}</div>
    );
}

export default Indicator