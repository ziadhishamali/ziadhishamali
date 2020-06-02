import React from 'react';
import EachSkill from './EachSkill';
import Loader from './Loader';
import '../../styles/Loader.css';

const ViewSkills = ({skills, hideSkill}) => {
    const showSkills = skills.length ? (
        skills.map((skill, idx) => {
            return (
                <div key={skill.id} className="skills-container-2 no-background no-border">
                    <h1 className="black-text small-text bold white-box cursor margin-top-- no-padding" onClick={() => {hideSkill(idx)}}>{skill.title}</h1>
                    <EachSkill skill={skill.all} show={skill.show}/>
                </div>
            );
        })
    ) : (
        <Loader/>
    );

    return (
        <div className="skills-container">
            {/*<h1 className="header">Skills<span className="orange-text">.</span></h1>*/}
            <div className="scrollable">
                {showSkills}
            </div>
        </div>
    );
}

export default ViewSkills