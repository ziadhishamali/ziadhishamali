import React, { Component } from 'react';
import '../../styles/Skill.css';
import ViewSkills from '../viewing/ViewSkills';
import '../../styles/Skills.css';
import {db} from '../auth/firebase';

class Skill extends Component {
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
            <div className="skill-section box-shadow-2">
                <ViewSkills skills={this.state.skills} hideSkill={this.hideSkill}/>
            </div>
        );
    }
}
 
export default Skill;