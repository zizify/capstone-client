import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchProtectedData } from '../../actions/protected-data';
import { fetchTeacherData } from '../../actions/teachers';
import { UserColumn } from '../user-column';

export class TeacherDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      all: true,
      assignments: false,
      teacherGrades: false,
      students: false,
      reset: true
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchTeacherData());
  }

  render() {
    // console.log('TEACHER PROPs', this.props.teacher);
    if (!this.props.teacher) {
      return <h1>Loading....</h1>;
    }

    const teacherData = () => {
      let assignments = this.props.teacher.all;

      if (!this.state.all) {
        assignments = this.props.teacher.all.filter(each => {
          return each.dueDate.weekday === this.state.day;
        });
      }

      return assignments.map((teacher, index) => {
        return (
          <div className="container" key={index}>
            <li>{teacher.className}</li>
            <li>{teacher.subject}</li>
            <li>{teacher.title}</li>
            <li>{teacher.dueDate.date}</li>
            <li>{teacher.goals}</li>
            <li>{teacher.points}</li>
            <li>{teacher.teacher}</li>
            <li>{teacher.instructions}</li>
          </div>
        );
      });
    };

    return (
      <div className="teacher-dashboard">
       <h2>{`Hello ${this.props.username}`}</h2>
        <UserColumn
          updateAssignmentsParentState={values => {
            this.setState({
              assignments: true,
              grades: false,
              students: false,
              reset: false
            });
          }}
          updateTeacherGradesParentState={values => {
            this.setState({
              assignments: false,
              grades: true,
              students: false,
              reset: false
            });
          }}
          updateStudentsParentState={values => {
            this.setState({
              assignments: false,
              grades: false,
              students: true,
              reset: false
            });
          }}
          updateResetParentState={values => {
            this.setState({
              assignments: false,
              grades: false,
              students: false,
              reset: true
            });
          }}
        />
        <ul>{teacherData()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('TeacherDashboard', state);
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    teacher: state.teachers.data.teacher
  };
};

export default requiresLogin()(connect(mapStateToProps)(TeacherDashboard));
