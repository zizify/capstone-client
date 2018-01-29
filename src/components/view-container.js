import React from 'react';
import requiresLogin from './requires-login';
import StudentAssignments from './views/student-assignments';
import StudentGrades from './views/student-grades';
import TeacherForm from './views/teacher-form';
import TeacherView from './views/teacher-view';
import { connect } from 'react-redux';

export default function ViewContainer(props) {
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
     } else if (props.view === 'assignments' || props.view === 'teacher-grades' || props.view === 'students') {
        return (
            <div className="teacher-view-container">
                <TeacherView view={props.view} userdata={props.userdata} user={props.user} updateView={props.updateView}/>
            </div>
        )
    } else if (props.view === 'teacher-class-form' || props.view === 'teacher-assignment-form' ) {
        return (
            <div className="form-container">
                <TeacherForm view={props.view}/>
            </div>
        )
    } else {
        return (
        <h2>Click a button</h2>
      )
    }
}