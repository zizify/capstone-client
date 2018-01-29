import React from 'react';
import TeacherClassFilter from './teacher-class-filter';

export default class TeacherAssignments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: ''
    };
  }
  render() {
    
    return (
      <div>
        <h2>TeacherAssignments</h2>
        <TeacherClassFilter user={this.props.user}/>
      </div>
    );
  }
}
