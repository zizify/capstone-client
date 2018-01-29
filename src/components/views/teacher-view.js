import React from 'react';
import TeacherClassFilter from './teacher-class-filter';
import TeacherAssignments from './teacher-assignments';
import TeacherGrades from './teacher-grades';
import TeacherStudents from './teacher-students';
import { connect } from 'react-redux';

export class TeacherView extends React.Component {
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

  identifyComponent = view => {
      if (view === 'assignments') {
          return <TeacherAssignments updateView={this.props.updateView} class={this.state.class} />
      } else if (view === 'teacher-grades') {
          return <TeacherGrades />
      } else if (view === 'students') {
          return <TeacherStudents />
      }
  }

  render() {
    return (
      <div>
        <h2>TeacherView</h2>
        <TeacherClassFilter
          user={this.props.user}
          updateClass={this.updateClass}
          updateView={this.props.updateView}          
        />
        {this.identifyComponent(this.props.view)}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
    };
  };
  
  export default connect(mapStateToProps)(TeacherView);