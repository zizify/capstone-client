import React from 'react';
import StudentView from './views/student-view';
import TeacherForm from './views/teacher-form';
import TeacherView from './views/teacher-view';
import { connect } from 'react-redux';

export default function ViewContainer(props) {
    if (props.view === 'new' || props.view === 'upcoming' || props.view === 'student-grades') {
        return (
            <div className="student-views-container">
                <StudentView view={props.view} />
            </div>
        );
    } else if (props.view === 'assignments' || props.view === 'teacher-grades' || props.view === 'students') {
        return (
            <div className="teacher-views-container">
                <TeacherView view={props.view} updateView={props.updateView}/>
            </div>
        );
    } else if (props.view === 'teacher-class-form' || props.view === 'teacher-assignment-form' ) {
        return (
            <div className="forms-container">
                <TeacherForm view={props.view}/>
            </div>
        );
    } else {
        return (
        <h2>Click a button</h2>
      );
    }
}