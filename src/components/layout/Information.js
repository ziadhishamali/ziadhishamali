import React, { Component } from 'react';
import '../../styles/Information.css';
import { db } from '../auth/firebase';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education: {
                
            },

            experiences: [
                
            ]
        }
    }

    componentDidMount() {
        db.collection("Experiences")
            .orderBy("priority", "asc")
            .onSnapshot((querySnapshot) => {
                let experiences = [];
                querySnapshot.forEach(function(doc) {
                    let temp = {};
                    // fill temp\
                    temp.company = doc.data().company;
                    temp.title = doc.data().title;
                    temp.start = doc.data().start;
                    temp.end = doc.data().end;
                    temp.description = doc.data().description;
                    // add temp to portfolio
                    experiences.push(temp);
                });
                this.setState({experiences});
            });

        db.collection("Education")
        .onSnapshot((querySnapshot) => {
            let temp = {};
            querySnapshot.forEach(function(doc) {
                // fill temp\
                temp.university = doc.data().university;
                temp.year = doc.data().year;
                temp.finish = doc.data().finish;
                temp.status = doc.data().status;
                temp.gpa = doc.data().gpa;
                // add temp to portfolio
            });
            this.setState({education: temp});
        });
    }

    showUniversity = () => {
        const { education } = this.state;
        let output = Object.keys(education).map((key, idx) => {
            let message = "";
            if (education[key] === "" || key === "status") {
                return("");
            }
            if (key === "finish") {
                if (new Date().getFullYear().toString() < education[key]) {
                    message = "Expected to graduate in ";
                } else {
                    message = "Graduated in ";
                }
                
            }
            if (key === "gpa") {
                message = "GPA: ";
            }
            return (
                <span key={idx}>{message + education[key]}</span>
            )
        })
        return (
            output
        )
    }

    showExperiences = () => {
        const { experiences } = this.state;
        let output = experiences.map((experience, idx) => {
            let message = "";
            let res = Object.keys(experience).map((key, idx2) => {
                if (key === "company") {
                    message = experience[key];
                    return "";
                }
                if (key === "title") {
                    return (
                        <span key={idx2}>{experience[key] + " at " + message}</span>
                    )
                }
                if (key === "start") {
                    message = experience[key];
                    return "";
                }
                if (key === "end") {
                    return (
                        <span key={idx2}>{message + " - " + experience[key]}</span>
                    )
                }
                return (
                    <span key={idx2}>{experience[key]}</span>
                )
            })
            return (
                <div key={idx} className="margin-bottom">
                    {res}
                </div>
            )
        })

        return output
    }

    render() { 
        return (
            <div className="information-section">
                <div className="education box-shadow-2">
                    <span className="header">{"Education"}<span className="orange-text">.</span></span>
                    {this.showUniversity()}
                </div>

                <div className="experiences box-shadow-2">
                    <span className="header">{"Experiences"}<span className="orange-text">.</span></span>
                    <div className="scrollable">{this.showExperiences()}</div>
                </div>
            </div>
        );
    }
}
 
export default Information;