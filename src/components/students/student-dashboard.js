import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../../actions/protected-data';
import { fetchStudentData } from '../../actions/students';

import './student-dashboard.css';

export class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      all: true
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchStudentData());
  }

  clickDayLink = e => {
    this.setState({ 
      day: parseInt(e.target.id, 10),
      all: false
    });
  };

  clickAllLink = e => {
    this.setState({ 
      day: parseInt(e.target.id, 10),
      all: true
    });
  };

  render() {
    if (!this.props.student) {
      return <h1>Loading....</h1>;
    }

    const studentData = () => {
      let assignments = this.props.student.relevant;
      if(!this.state.all) {
        assignments = this.props.student.relevant.filter(each => {
          return each.dueDate.weekday === this.state.day;
        });
      }
      return assignments.map((student, index) => {
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
    };

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
                  id="6"
                  onClick={this.clickDayLink}
                >
                  Fri
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  type="button"
                  id="7"
                  onClick={this.clickAllLink}
                >
                  All
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <ul>{studentData()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log('MapPropsToStateSTUDENT', state.students);
  const { currentUser } = state.auth;
  return {
    student: state.students.data.student,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    loading: state.students.loading
  };
};

export default connect(mapStateToProps)(StudentDashboard);
