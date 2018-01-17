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
    if (!this.props.student) {
      console.log('InLoadingMode Student', this.props.student)
      return <h1>Loading....</h1>;
   }
    let studentClassName = null;
    const studentData = this.props.student.relevant.map((student, index) => {
      studentClassName = student.className;
      return <li key={index}> {student.className}, {student.subject}, {student.title}, {student.dueDate}, {student.goals}, {student.points}, {student.teacher}, {student.instructions}</li>;
    });
      console.log('Mapped_STUDENTDATA', studentData[0]);
    return (
      <div className="student-dashboard">
        <h1 className="student-greeting"> Hello, {this.props.name} </h1>
        <ul>{studentData}</ul>
        {studentClassName}
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
