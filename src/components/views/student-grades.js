import React from 'react';
import AssignmentGradeBar from './assignment-grade-bar';

export default function StudentGrades(props) {
    return (
      <div>
        <h2>StudentGrades</h2>
        <AssignmentGradeBar bars={props.assignments}/>
      </div>
    )
}
