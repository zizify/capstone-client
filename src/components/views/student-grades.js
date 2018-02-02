import React from 'react';
import ClassFilter from './class-filter';
import ClassGradeBar from './class-grade-bar';
import AssignmentGradeBar from './assignment-grade-bar';
import { connect } from 'react-redux';

export class StudentGrades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ''
    }
  };

  updateClass = value => {
    this.setState({
      className: value
    })
  }

  findClassAssignments = value => {
    let relevantAssignments = this.props.userdata.relevant.filter(each => each.className === value)
    return relevantAssignments;
  }

  render() {
    return (
      <div className="student-grades-container">
          <div className="column-1">
            <ClassGradeBar relevantClass={this.props.userdata.grades[this.state.className]}/>
            <AssignmentGradeBar bars={this.findClassAssignments(this.state.className)}/>
          </div>
          <div className="column-2">
            <ClassFilter classes={Object.keys(this.props.userdata.grades)} updateClass={this.updateClass}/>
          </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userdata: state.students.data.student
  };
};

export default connect(mapStateToProps)(StudentGrades);
