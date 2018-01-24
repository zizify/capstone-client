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
    // this.props.dispatch(fetchProtectedData());
    // this.props.dispatch(fetchStudentData());
    // this.props.dispatch(fetchTeacherData());
  }


  buttonClick = e => {
    this.props.updateView(e.target.value)
  }
  // Student Views

  upcomingButtonClick = e => {
    console.log('Upcoming', e)
    this.props.updateView('upcoming')
  };

  studentGradesButtonClick = e => {
    console.log('Grades', e)
    this.props.updateView('student-grades')
  };

  // Teacher Views
  assignmentsButtonClick = e => {
    this.props.updateView('assignments')
  };

  classFormButtonClick = e => {
    this.props.updateView('classform')
  };

  assignmentsFormButtonClick = e => {
    this.props.updateView('assignmentform')
  };

  teacherGradesButtonClick = e => {
    this.props.updateView('teacher-grades')
  };

  studentsButtonClick = e => {
    this.props.updateView('students')
  };

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
            <button onClick={this.studentGradesButtonClick}>Grades</button>
          </div>
        )
      } else {
        return ( 
        <div>
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
         value="new"
          onClick={this.buttonClick}
        >New</button>
        <button
          value="upcoming"
          onClick={this.buttonClick}
        >Upcoming</button>
        <button
          value="student-grades"
          onClick={this.buttonClick}
        >Grades</button>
        </div>
      </div>
        )
      }
    }
    return (
      <div>
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