import React from 'react';
import { connect } from 'react-redux';
import TeacherGradeBar from './teacher-grade-bar';

export class TeacherGrades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  updateAssignmentID = value => {
    this.setState({
      id: value
    });
  };

  getAssignments = () => {
    const relevantAssignments = this.props.userdata.all.filter(
      each => each.className === this.props.class
    );
    return relevantAssignments;
  };
  renderDropdown = assignments => {
    return assignments.map((each, index) => {
      return (
        <option key={index} value={each._id}>
          {each.title}
        </option>
      );
    });
  };

  render() {
    //console.log('TA.STATE', this.state);
    if (this.props.class !== 'all') {
      return (
        <div className="teacher-grades-container">
          <h2>Teacher Grades</h2>
          <select
            name="assignments"
            onChange={e => this.updateAssignmentID(e.target.value)}
          >
            {this.renderDropdown(this.getAssignments())}
          </select>
          {this.state.id ? (
            <TeacherGradeBar
              students={
                this.props.userdata.all.find(each => each._id === this.state.id)
                  .students
              }
            />
          ) : (
            <h3>Select An Assignment</h3>
          )}
        </div>
      );
    } else {
      return <h3>Select A Class</h3>;
    }
  }
}

const mapStateToProps = state => {
  console.log('TEACHER-GRADES', state);
  return {
    user: state.auth.currentUser,
    userdata: state.teachers.data.teacher
  };
};

export default connect(mapStateToProps)(TeacherGrades);
