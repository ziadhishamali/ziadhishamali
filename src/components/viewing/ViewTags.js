import React from 'react';

export const ViewTags = ({ tags, flex }) => {
    const view = tags && tags.length ? (
        tags.map((tag, idx) => {
            return (
                <span key={idx} className="tag-name">{tag}</span>
            )
        })
    ) : (
        ""
    )

    return (
        <div className={"tags-container " + flex}>
            {view}
        </div>
    )
};
