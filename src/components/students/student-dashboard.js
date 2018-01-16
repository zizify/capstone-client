import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../../actions/protected-data';
import { fetchStudentData } from '../../actions/students';

export class StudentDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchStudentData());
  }

  render() {
    return (
      <div className="student-dashboard">
        <h1 className="student-greeting"> Hello, {this.props.name} </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('MapPropsToStateSTUDENT', state.students.data.student);
  const { currentUser } = state.auth;
  return {
    student: state.students.data.student,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default connect(mapStateToProps)(StudentDashboard);
