import React from 'react';
import requiresLogin from './requires-login';
import StudentNew from './views/student-new';
import StudentUpcoming from './views/student-upcoming';
import StudentGrades from './views/student-grades';
import TeacherAssignments from './views/teacher-assignments';
import TeacherClassForm from './views/teacher-class-form';
import TeacherAssignmentForm from './views/teacher-assignment-form';
import TeacherGrades from './views/teacher-grades';
import TeacherStudents from './views/teacher-students';
import { connect } from 'react-redux';

export default function ViewContainer(props) {
    if (props.view === 'new') {
      return (
        <div className="new-container">
          <StudentNew />
        </div>
      );
    } else if (props.view === 'upcoming') {
      return (
        <div className="upcoming-container">
          <StudentUpcoming />
        </div>
      );
    } else if (props.view === 'student-grades') {
      return (
        <div className="student-grades-container">
          <StudentGrades />
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