import React from 'react';
import { connect } from 'react-redux';

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
    return relevantAssignments.map((each, index) => {
      return (
        <option key={index} value={each._id}>
          {each.title}
        </option>
      );
    });
  };

  render() {
    console.log('TA.STATE', this.state);
    return (
      <div className="teacher-grades-container">
        <h2>Teacher Grades</h2>
        <select name="assignments" onChange={e => this.updateAssignmentID(e.target.value)}>
        {this.getAssignments()}
        </select>
      </div>
    );
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
