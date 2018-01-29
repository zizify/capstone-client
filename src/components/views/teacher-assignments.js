import React from 'react';
import TeacherClassFilter from './teacher-class-filter';
import AssignmentBar from './assignment-bar';

export default class TeacherAssignments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'all'
    };
  }

  updateClass = value => {
    this.setState({
      class: value
    });
  };

  findRelevantAssignments = () => {
    let relevantAssignments;
    if (this.state.class === 'all') {
      relevantAssignments = this.props.userdata.all;
    } else {
      relevantAssignments = this.props.userdata.all.filter(
        each => each.className === this.state.class
      );
    }
    return relevantAssignments;
  };

  render() {
    return (
      <div>
        <h2>TeacherAssignments</h2>
        <TeacherClassFilter
          user={this.props.user}
          updateClass={this.updateClass}
          updateView={this.props.updateView}          
        />
        <AssignmentBar bars={this.findRelevantAssignments()} />
        <button value="teacher-assignment-form" onClick={e => this.props.updateView(e.target.value)}>New Assignment</button>
      </div>
    );
  }
}
