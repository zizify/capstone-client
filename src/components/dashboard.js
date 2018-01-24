import React from 'react';
import HeaderNav from './header-nav';
import UserColumn from './user-column';
import requiresLogin from './requires-login';
import StudentNew from './views/student-new';
import StudentUpcoming from './views/student-upcoming';
import StudentGrades from './views/student-grades';
import { ViewContainer } from './view-container';
// import TeacherAssignments from './teacher-assignments';
// import TeacherClassForm from './teacher-class-form';
// import TeacherAssignmentForm from './teacher-assignment-form';
// import TeacherGrades from './teacher-grades';
// import TeacherStudents from './teacher-students';
import { fetchStudentData } from '../actions/students';
import { fetchTeacherData } from '../actions/teachers';
import { fetchProtectedData } from '../actions/protected-data';
import { connect } from 'react-redux';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null
    };
  }

  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    // this.props.dispatch(fetchStudentData());
    // this.props.dispatch(fetchTeacherData());
  }

  updateView = viewString => {
    this.setState({
      view: viewString
    });
  };

  render() {
    if (this.props.loading) {
      return <h2>Loading...</h2>;
    }
    return (
    <div>
      <HeaderNav />
      <UserColumn isTeacher={this.props.isTeacher} updateView={this.updateView}/>
      <ViewContainer view={this.state.view} test={'test'}/>
    </div>
    )
   
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
}

const mapStateToProps = state => {
  //console.log('MAPSTATETOPROPS', state);
  const { currentUser } = state.auth;
  return {
    userdata: state.teachers.data.teacher || state.students.data.student,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    loading: state.students.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
