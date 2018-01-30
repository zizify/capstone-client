import React from 'react';

export default function TeacherStudentsBar(props) {
    const studentBars = props.studentIds.map((each, index) => {
        return (
            <li key={index}>
                <div className="teacher-student-bar">
                    <h3 className="teacher-student-bar-username">{each}</h3>
                    <h3 className="teacher-student-bar-points">{props.studentGrades[each]}/{props.points}</h3>
                    <h3 className="teacher-student-bar-average">{props.points ? ((props.studentGrades[each]/props.points)*100) : '--'}%</h3>
                </div>
            </li>
        )
    })

    return (
        <ul className="teacher-students-bar-list">
            {studentBars}
        </ul>
    )
}