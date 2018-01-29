import React from 'react';

export default function TeacherAssignments(props) {
  const classes = props.user.classes.map((each, index) => {
    return (
      <li key={index}>
        <button value={each.className}>{each.className}</button>
      </li>
    );
  });
  return (
    <div>
      <h2>TeacherAssignments</h2>
      <ul>{classes}</ul>
    </div>
  );
}
