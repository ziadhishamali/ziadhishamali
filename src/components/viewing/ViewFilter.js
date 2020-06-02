import React from 'react';
import Loader from './Loader';
import EachSkill from './EachSkill';

export const ViewFilter = ({ skills, changeFilter }) => {

    const showSkills = skills.length ? (
        skills.map((skill, idx) => {
            if (skill.title !== "Programming Languages" && skill.title !== "Web Development" && skill.title !== "Technologies & Tools") return "";
            return (
                <div key={skill.id} className="skills-container-2 no-background no-border">
                    <span className="skill-title">{skill.title}</span>
                    <EachSkill id={idx} skill={skill.all} filter={skill.filter} show={skill.show} changeFilter={changeFilter}/>
                </div>
            );
        })
    ) : (
        <Loader />
    );

    return (
        <div className="filter-container">
            {showSkills}
        </div>
    )
};
