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
      return each.dueDate.weekday === parseInt(e.target.id);
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
                <a
                  className="nav-link"
                  id="2"
                  href="#"
                  onClick={this.clickDayLink}
                >
                  Mon
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  id="3"
                  href="#"
                  onClick={this.clickDayLink}
                >
                  Tue
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  id="4"
                  href="#"
                  onClick={this.clickDayLink}
                >
                  Wed
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  id="5"
                  href="#"
                  onClick={this.clickDayLink}
                >
                  Thur
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="#"
                  id="6"
                  href="#"
                  onClick={this.clickDayLink}
                >
                  Fri
                </a>
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
