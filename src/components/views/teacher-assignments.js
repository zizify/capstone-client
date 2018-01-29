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
    if (this.state === 'all') {
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
        />
        <AssignmentBar bars={this.findRelevantAssignments()} />
      </div>
    );
  }
}
