import React from 'react';
import requiresLogin from './requires-login';
import StudentAssignments from './views/student-assignments';
import StudentGrades from './views/student-grades';
import TeacherAssignments from './views/teacher-assignments';
import TeacherClassForm from './views/teacher-class-form';
import TeacherAssignmentForm from './views/teacher-assignment-form';
import TeacherGrades from './views/teacher-grades';
import TeacherStudents from './views/teacher-students';
import { connect } from 'react-redux';

export default function ViewContainer(props) {
    //Refactor StudentNew and StudentUpcoming as one component, pass down view as prop
    if (props.view === 'new' || props.view === 'upcoming') {
      return (
        <div className="assignment-container">
          <StudentAssignments 
            assignments={props.userdata.relevant}
            view={props.view}
          />
        </div>
      );
    } else if (props.view === 'student-grades') {
      return (
        <div className="student-grades-container">
          <StudentGrades assignments={props.userdata.relevant}/>
        </div>
      );
     } else if (props.view === 'assignments') {
        return (
            <div className="assignments-container">
                <TeacherAssignments />
            </div>
        )
    } else if (props.view === 'classform') {
        return (
            <div className="classform-container">
                <TeacherClassForm />
            </div>
        )
    } else if (props.view === 'assignmentform') {
        return (
            <div className="assignmentform-container">
                <TeacherAssignmentForm />
            </div>
        )
    } else if (props.view === 'teacher-grades') {
        return (
            <div className="teacher-grades-container">
                <TeacherGrades />
            </div>
        )
    } else if (props.view === 'students') {
        return (
            <div className="students-container">
                <TeacherStudents />
            </div>
        )
    } else {
        return (
        <h2>Click a button</h2>
      )
    }
}