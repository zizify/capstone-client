import React from 'react';

export default function TeacherClassFilter(props) {
  const classes = props.user.classes.map((each, index) => {
    return (
      <li key={index}>
        <button value={each.className} onClick={e => props.updateClass(e.target.value)}>{each.className}</button>
      </li>
    );
  });
  return (
    <ul>{classes}</ul>
  )
}