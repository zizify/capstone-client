import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import { fetchStudentData } from '../actions/students';
import { fetchTeacherData } from '../actions/teachers';

export class UserColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchStudentData());
    this.props.dispatch(fetchTeacherData());
  }

  newButtonClick = e => {
    this.props.updateNewParentState();
  };

  upcomingButtonClick = e => {
    this.props.updateUpcomingParentState();
  };

  gradesButtonClick = e => {
    this.props.updateGradesParentState();
  };

  resetButtonClick = e => {
    this.props.updateResetParentState();
  };

  assignmentsButtonClick = e => {
    this.props.updateAssignmentsParentState();
  };

  teacherGradesButtonClick = e => {
    this.props.updateTeacherGradesParentState()
  }

  studentsButtonClick = e => {
    this.props.updateStudentsParentState()
}

  render() {
    if (!this.props) {
      return <h1>Loading....</h1>;
    }

    const renderButtons = () => {
      if(this.props.student) {
        return (
          <div>
            <button onClick={this.newButtonClick}>New</button>
            <button onClick={this.upcomingButtonClick}>Upcoming</button>
            <button onClick={this.gradesButtonClick}>Grades</button>
            <button onClick={this.resetButtonClick}>Reset</button>
          </div>
        )
      } else {
        return ( 
          <div>
            <button onClick={this.assignmentsButtonClick}>TeacherAssignments</button>
            <button onClick={this.teacherGradesButtonClick}>TeacherGrades</button>
            <button onClick={this.studentsButtonClick}>TeacherStudents</button>
          </div>
      <div className="user-column">
        <h1>User Column</h1>
        <img src="https://cdn7.bigcommerce.com/s-fkt3i18h/product_images/uploaded_images/reading.png?t=1516737669&_ga=2.25683967.332062381.1516737598-1817016180.1514945206"></img>
        <h2>{`Hello ${this.props.username}`}</h2>
        <button
          onClick={this.newButtonClick}
        >New</button>
        <button
          onClick={this.upcomingButtonClick}
        >Upcoming</button>
        <button
          onClick={this.gradesButtonClick}
        >Grades</button>
         <button
          onClick={this.resetButtonClick}
        >Reset</button>
        </div>
        )
      }
    }
    return (
      <div>
        <h1>User Column</h1>
        <img src="https://assets-jpcust.jwpsrv.com/thumbs/3Gz5D0sR-720.jpg" />
        <h2>{`Hello ${this.props.name}`}</h2>
        {renderButtons()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    student: state.students.data.student,
    teacher: state.teachers.data.teacher,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    loading: state.students.loading
  };
};

export default connect(mapStateToProps)(UserColumn);
