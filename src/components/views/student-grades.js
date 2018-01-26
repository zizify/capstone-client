import React from 'react';
import ClassFilter from './class-filter';
import AssignmentGradeBar from './assignment-grade-bar';

export default function StudentGrades(props) {
    return (
      <div>
        <h2>StudentGrades</h2>
        <ClassFilter classes={props.userdata.grades}/>
        <AssignmentGradeBar bars={props.userdata.relevant}/>
      </div>
    )
}
