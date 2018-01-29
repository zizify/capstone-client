import React from 'react';
import StudentAssignments from './student-assignments';
import StudentGrades from './student-grades';

export default function StudentView(props) {
    const identifyComponent = view => {
        if (view === 'new' || view === 'upcoming') {
            return <StudentAssignments view={view}/>
        } else if (view === 'student-grades') {
            return <StudentGrades />
        }
    }

    return(
        <div className="student-view-container">
            {identifyComponent(props.view)}
        </div>
    )
}