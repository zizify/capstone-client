import React from 'react';
import ClassFilter from './class-filter';
import AssignmentGradeBar from './assignment-grade-bar';

export default class StudentGrades extends React.Component {
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
        <AssignmentGradeBar bars={this.findClassAssignments(this.state.className)}/>
      </div>
    )
  }
}
