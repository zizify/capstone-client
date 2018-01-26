import React from 'react';

export default function ClassFilter(props) {
    let classButtons = props.classes.map((each, index) => {
        return (
            <li key={index}>
                <button
                    className="class-button"
                    value={each}
                    onClick={e => props.updateClass(e.target.value)}
                >
                    {each}
                </button>
            </li>
        )
    })

    return(
        <div className="class-filter-container">
            <ul className="class-filter">
                {classButtons}
            </ul>
        </div>
    )
}