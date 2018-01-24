import React from 'react';

import requiresLogin from './requires-login';
import StudentNew from './views/student-new';
import StudentUpcoming from './views/student-upcoming';
import StudentGrades from './views/student-grades';
// import TeacherAssignments from './teacher-assignments';
// import TeacherClassForm from './teacher-class-form';
// import TeacherAssignmentForm from './teacher-assignment-form';
// import TeacherGrades from './teacher-grades';
// import TeacherStudents from './teacher-students';
import { connect } from 'react-redux';

export  function ViewContainer (props) {
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
    } else {
      return <div></div>
    }
    // } else if (this.state.view === 'assignments') {
    //     return (
    //         <div className="assignments-container">
    //             <UserColumn isTeacher={this.props.isTeacher} />
    //             <TeacherAssignments />
    //         </div>
    //     )
    // } else if (this.state.view === 'classform') {
    //     return (
    //         <div className="classform-container">
    //             <UserColumn isTeacher={this.props.isTeacher} />
    //             <TeacherClassForm />
    //         </div>
    //     )
    // } else if (this.state.view === 'assignmentform') {
    //     return (
    //         <div className="assignmentform-container">
    //             <UserColumn isTeacher={this.props.isTeacher} />
    //             <TeacherAssignmentForm />
    //         </div>
    //     )
    // } else if (this.state.view === 'teacher-grades') {
    //     return (
    //         <div className="teacher-grades-container">
    //             <UserColumn isTeacher={this.props.isTeacher} />
    //             <TeacherGrades />
    //         </div>
    //     )
    // } else if (this.state.view === 'students') {
    //     return (
    //         <div className="students-container">
    //             <UserColumn isTeacher={this.props.isTeacher} />
    //             <TeacherStudents />
    //         </div>
    //     )
    // }
}


export default requiresLogin()(ViewContainer)

