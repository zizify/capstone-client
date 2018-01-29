import React from 'react';
import ClassFilter from './class-filter';
import ClassGradeBar from './class-grade-bar';
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
      <div className="class-grade-columns">
        <div className="class-grade-column-1">
          <ClassGradeBar relevantClass={this.props.userdata.grades[this.state.className]}/>
          <AssignmentGradeBar bars={this.findClassAssignments(this.state.className)}/>
        </div>
        <div className="class-grade-column-2">
          <ClassFilter classes={Object.keys(this.props.userdata.grades)} updateClass={this.updateClass}/>
        </div>
      </div>
    )
  }
}
