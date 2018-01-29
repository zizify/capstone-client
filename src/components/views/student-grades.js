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
      <div>
        <h2>StudentGrades</h2>
        <ClassFilter classes={Object.keys(this.props.userdata.grades)} updateClass={this.updateClass}/>
        <ClassGradeBar relevantClass={this.props.userdata.grades[this.state.className]}/>
        <AssignmentGradeBar bars={this.findClassAssignments(this.state.className)}/>
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