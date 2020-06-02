import React, {Component} from 'react';
import ViewSkills from '../viewing/ViewSkills';
import '../../styles/Skills.css';
import Portfolio from '../layout/Portfolio';
import {db} from '../auth/firebase';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
        }
    }

    componentDidMount() {
        db.collection("Skills")
            .orderBy("priority", "asc")
            .onSnapshot((querySnapshot) => {
                let skills = [];
                querySnapshot.forEach(function(doc) {
                    let temp = {};
                    // fill temp
                    temp.id = doc.id;
                    temp.title = doc.data().title;
                    temp.all = doc.data().list;
                    temp.show = doc.data().show;
                    // add temp to portfolio
                    skills.push(temp);
                });
                this.setState({skills});
            });
    }

    hideSkill = (idx) => {
        let temp = [...this.state.skills];
        let skills = [];
        for (let i = 0; i < temp.length; i++) {
            if (i === idx) {
                if (temp[i].show) {
                    temp[i].show = false;
                } else {
                    temp[i].show = true;
                }
            }
            skills.push(temp[i]);
        }
        this.setState({skills});
    }

    render() {
        return (
            <div className="skill-portfolio-section box-shadow">
                <div className="flex-row justify align">
                    <ViewSkills skills={this.state.skills} hideSkill={this.hideSkill}/>
                    <Portfolio/>
                </div>
                <a className="copyrighted-badge margin-bottom" title="Copyrighted.com Registered &amp; Protected" target="_blank" rel="noopener noreferrer" href="https://www.copyrighted.com/website/uVTS3cfpHqXhVSl0"><img alt="Copyrighted.com Registered &amp; Protected" border="0" width="125" height="25" srcSet="https://static.copyrighted.com/badges/125x25/03_1_2x.png 2x" src="https://static.copyrighted.com/badges/125x25/03_1.png" /></a><script src="https://static.copyrighted.com/badges/helper.js"></script>
            </div>
        );
    }
}

export default Skills