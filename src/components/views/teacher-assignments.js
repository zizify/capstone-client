import React from 'react';
import AssignmentBar from './assignment-bar';

export default function TeacherAssignments(props) {
    let relevantAssignments;

    if (props.class === 'all') {
      relevantAssignments = props.userdata.all;
    } else {
      relevantAssignments = props.userdata.all.filter(
        each => each.className === props.class
      );
    }
  return (
      <div>
        <h2>TeacherAssignments</h2>
        <AssignmentBar bars={relevantAssignments} />
        <button value="teacher-assignment-form" onClick={e => props.updateView(e.target.value)}>New Assignment</button>
      </div>
    );
}
