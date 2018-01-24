import React from 'react';
import HeaderNav from './header-nav';
import UserColumn from './user-column';
// import StudentNew from './student-new';
// import StudentUpcoming from './student-upcoming';
// import StudentGrades from './student-grades';
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
        console.log(this.props);
        // this.props.dispatch(fetchProtectedData());
        // this.props.dispatch(fetchStudentData());
        // this.props.dispatch(fetchTeacherData());
      }

    updateView(viewString) {
        this.setState({
            view: viewString
        })
    }
    
    render() {
        if (this.props.loading) {
            return <h2>Loading...</h2>;
        }

        if (!this.state.view) {
            return (
                <div className="null-container">
                    <UserColumn isTeacher={this.props.isTeacher} updateView={this.updateView}/>
                </div>
            )
        }

        // else if (this.state.view === 'new') {
        //     return (
        //         <div className="new-container">
        //             <UserColumn isTeacher={this.props.isTeacher} updateView={this.updateView}/>
        //             <StudentNew />
        //         </div>
        //     )
        // } else if (this.state.view === 'upcoming') {
        //     return (
        //         <div className="upcoming-container">
        //             <UserColumn isTeacher={this.props.isTeacher} />
        //             <StudentUpcoming />
        //         </div>
        //     )
        // } else if (this.state.view === 'student-grades') {
        //     return (
        //         <div className="student-grades-container">
        //             <UserColumn isTeacher={this.props.isTeacher} />
        //             <StudentGrades />
        //         </div>
        //     )
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
    const { currentUser } = state.auth;
    return {
        userdata: state.teachers.data.teacher || state.students.data.student,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        loading: state.students.loading
    };
  };
  
  export default connect(mapStateToProps)(Dashboard);