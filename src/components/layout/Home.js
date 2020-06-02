import React, {Component} from 'react';
import {db} from '../auth/firebase';
import '../../styles/Home.css';
import { ViewSocial } from '../viewing/ViewSocial';

class Home extends Component {
    state = {
        resume: "",
        header: "Undergraduate Software Engineer",
        name: "ZIAD HISHAM ALI",
        nameAr: "زياد هشام علي",
        aboutMe: "I'm an undergraduate at Computer and Sytems Engineering Department, Faculty of Engineering, Alexandria University and expected to graduate in 2021. I'm passionate for technology and everything that comes with it. Currently I'm more focused on full stack web development and machine learning. My hobbies are a lot I like football, cycling, running, reading books and of course making new awesome web-applications",
    }

    componentDidMount() {
        db.collection("Files").doc('resume').onSnapshot(snapshot => {
            this.setState({resume: snapshot.data().src})
        })
    }

    hireMe = (e) => {
        e.preventDefault();
        console.log("hire me clicked");
        document.getElementById("contact-area").classList.toggle("moveContactLeft");
    }

    scrollToPortfolio = (id) => {
        window.document.getElementById(id).scrollIntoView();
    }

    downloadResume = () => {
        
    }
    
    render() {
        return (
            <div className="bio-section">
                <div className="logo-container">
                    <div className="logo-circle">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="section-column logo-name align justify">
                        <span className="header white-text">{this.state.header}</span>
                        <span className="name white-text">{this.state.name}</span>
                        <span className="nameAr white-text">{this.state.nameAr}</span>
                    </div>
                    <div className="buttons-container">
                        <button className="button-portfolio" onClick={() => this.scrollToPortfolio('portfolio-section')}>Portfolio</button>
                        <button className="button-portfolio" onClick={() => this.scrollToPortfolio('services-section')}>Services</button>
                        <button className="button-portfolio" onClick={() => this.props.history.push('/games')}>Games</button>
                    </div>
                </div>

                <div className="section-column bio-container">
                    <div className="bio">
                        <div>"</div>
                        <div className="aboutme white-text righteous">{this.state.aboutMe}<span className="orange-text">.</span></div>
                        <div></div>
                    </div>
                    <div className="social-links-container">
                        <a href={this.state.resume} target="_blank" rel="noopener noreferrer"><button className="button-portfolio resume" onClick={this.downloadResume}>Download Resume</button></a>
                    </div>
                    <ViewSocial />
                </div>
                
                {/*<ViewIcons />*/}
            </div>
        );
    }
}

export default Home