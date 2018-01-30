import React from 'react';
import TeacherClassForm from './teacher-class-form';
import TeacherAssignmentForm from './teacher-assignment-form';

export default function TeacherForm(props) {
  const whichForm = () => {
    if (props.view === "teacher-assignment-form") {
      return <TeacherAssignmentForm />
    }
    else if (props.view === "teacher-class-form") {
      return <TeacherClassForm />
    }
  }
    return (
        <div className="teacher-form-container">
            <h2>TeacherForm</h2>
            {whichForm()}
        </div>
    )
}
