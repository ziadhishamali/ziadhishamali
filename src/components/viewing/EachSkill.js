import React from 'react';

const EachSkill = ({ id, skill, filter, show, changeFilter }) => {
    const showSkills = skill.length ? (
        skill.map((s, idx) => {
            let chosen = filter[idx] === 0 ? "" : "on";
            return (
                <div key={idx + 1} className={"container-wrapper each-skill " + chosen} onClick={() => changeFilter(id, idx)}>
                    <img src={s.image} alt="skill"/>
                    <span className="skill-name">{s.name}</span>
                </div>
            );
        })
    ) : (
        <span></span>
    )

    if (skill.length && show) {
        return(
            <div className="container-wrapper no-border">
                {showSkills}
            </div>
        )
    } else {
        return(
            ""
        )
    }
}

export default EachSkill