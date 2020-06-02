import React from 'react';
import upwork from '../../images/icons/social/upwork.svg';
import linkedin from '../../images/icons/social/linkedin.svg';
import github from '../../images/icons/social/github.svg';
import twitter from '../../images/icons/social/twitter.svg';
import facebook from '../../images/icons/social/facebook.svg';
import instagram from '../../images/icons/social/instagram.svg';

export const ViewSocial = (props) => {
    return (
        <div className="social-links-container">
            <a className="social-link-item" href="https://www.upwork.com/o/profiles/users/~01464ed789075af903/" target="_blank" rel="noopener noreferrer">
                <img src={upwork} alt="upwork" />
            </a>
            <a className="social-link-item" href="https://www.linkedin.com/in/ziadhishamali" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a className="social-link-item" href="https://github.com/ziadhishamali" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github" />
            </a>
            <a className="social-link-item" href="https://twitter.com/ziadhishamali" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" />
            </a>
            <a className="social-link-item" href="https://www.facebook.com/ziadheshamali" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" />
            </a>
            <a className="social-link-item" href="https://www.instagram.com/ziad.hisham.ali" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" />
            </a>
        </div>
    )
};
