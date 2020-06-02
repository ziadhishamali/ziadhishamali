import React, { Component } from 'react';
import ViewLinks from '../viewing/ViewLinks';
import facebookIcon from '../../images/svgs/facebook.svg';
import linkedInIcon from '../../images/svgs/linkedin.svg';
import githubIcon from '../../images/svgs/github.svg';
import instagramIcon from '../../images/svgs/instagram.svg';

class SocialLinks extends Component {
    state = {
        links: [
            {name: "facebook", url: "https://facebook.com/ziad.hisham.ali", imageURL: facebookIcon},
            {name: "linkedIn", url: "https://linkedin.com/in/ziadhishamali", imageURL: linkedInIcon},
            {name: "github", url: "https://github.com/ziadhishamali", imageURL: githubIcon},
            {name: "instagram", url: "https://instagram.com/ziad.hisham.ali", imageURL: instagramIcon}
        ]
    }
      
    render() { 
        return (
            <div className="social-full">
                <ViewLinks links={this.state.links}/>
            </div>
         );
    }
}

export default SocialLinks;