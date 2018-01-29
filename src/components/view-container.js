import React from 'react';
import requiresLogin from './requires-login';
import StudentAssignments from './views/student-assignments';
import StudentGrades from './views/student-grades';
import TeacherAssignments from './views/teacher-assignments';
import TeacherForm from './views/teacher-form';
import TeacherGrades from './views/teacher-grades';
import TeacherStudents from './views/teacher-students';
import { connect } from 'react-redux';

export default function ViewContainer(props) {
    //Refactor StudentNew and StudentUpcoming as one component, pass down view as prop
    if (props.view === 'new' || props.view === 'upcoming') {
      return (
        <div className="assignment-view-container">
          <StudentAssignments 
            assignments={props.userdata.relevant}
            view={props.view}
          />
        </div>
      );
    } else if (props.view === 'student-grades') {
      return (
        <div className="student-grades-container">
          <StudentGrades userdata={props.userdata}/>
        </div>
      );
     } else if (props.view === 'assignments') {
        return (
            <div className="assignments-container">
                <TeacherAssignments userdata={props.userdata} user={props.user} updateView={props.updateView}/>
            </div>
        )
    } else if (props.view === 'teacher-class-form' || props.view === 'teacher-assignment-form') {
        console.log('triggered')
        return (
            <div className="form-container">
                <TeacherForm view={props.view}/>
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