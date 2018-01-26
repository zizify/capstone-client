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

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>StudentGrades</h2>
        <ClassFilter classes={this.props.userdata.grades} updateClass={this.updateClass}/>
        <AssignmentGradeBar bars={this.props.userdata.relevant}/>
      </div>
    )
  }
}
