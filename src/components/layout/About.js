import React,{Component} from 'react';
import '../../styles/About.css';
import myImage from '../../images/DSC_0287.jpg';

class About extends Component {
    state = {
        aboutMe: "I'm an undergraduate at Computer and Sytems Engineering Department, Faculty of Engineering, Alexandria University and expected to graduate in 2021. I'm passionate for technology and everything that comes with it. Currently I'm more focused on full stack web development and machine learning. My hobbies are a lot I like football, cycling, running, reading books and of course making new awesome web-applications",
    }

    render() {
        return(
            <div className="section-static static">
                <h1 className="header margin-top blue-text medium-text margin-bottom">ABOUT ME<span className="orange-text">.</span></h1>
                <div className="about-section section-row justify align margin-bottom">
                    <img className="myImage" src={myImage} alt="shit"/>
                    <div className="aboutme">{this.state.aboutMe}</div>
                </div>
            </div>
        );
    }
}

export default About