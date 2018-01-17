import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../../actions/protected-data';
import { fetchStudentData } from '../../actions/students';

import './student-dashboard.css';

export class StudentDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchStudentData());
  }

  clickDayLink = e => {
    const dayofweek = this.props.student.relevant.filter(each => {
      return each.dueDate.weekday === parseInt(e.target.id, 10);
    });
    console.log(dayofweek);
    return dayofweek;
  };

  render() {
    if (!this.props.student) {
      console.log('InLoadingMode Student', this.props.student);
      return <h1>Loading....</h1>;
    }

    const studentData = this.props.student.relevant.map((student, index) => {
      return (
        <div className="container" key={index}>
          <li>{student.className}</li>
          <li>{student.subject}</li>
          <li>{student.title}</li>
          <li>{student.dueDate.date}</li>
          <li>{student.goals}</li>
          <li>{student.points}</li>
          <li>{student.teacher}</li>
          <li>{student.instructions}</li>
        </div>
      );
    });
    return (
      <div className="student-dashboard">
        <h1 className="student-greeting"> Hello, {this.props.name} </h1>
        <div className="navigation">
          <nav>
            <ul className="nav-links">
              <li>
                <button
                  className="nav-link"
                  type="button"
                  id="2"
                  onClick={this.clickDayLink}
                >
                  Mon
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  type="button"
                  id="3"
                  onClick={this.clickDayLink}
                >
                  Tue
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  type="button"
                  id="4"
                  onClick={this.clickDayLink}
                >
                  Wed
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  type="button"
                  id="5"
                  onClick={this.clickDayLink}
                >
                  Thur
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  type="button"
                  id="5"
                  onClick={this.clickDayLink}
                >
                  Fri 
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <ul>{studentData}</ul>
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
