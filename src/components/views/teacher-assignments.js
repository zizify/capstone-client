import React from 'react';
import AssignmentBar from './assignment-bar';
import { connect } from 'react-redux';

export class TeacherAssignments extends React.Component {
  findRelevantAssignments = () => {
      let relevantAssignments;

      if (this.props.class === 'all') {
        relevantAssignments = this.props.userdata.all;
      } else {
        relevantAssignments = this.props.userdata.all.filter(
          each => each.className === this.props.class
        );
      }

      return relevantAssignments;
    }

    renderAssignmentBar = () => {
      if(this.findRelevantAssignments()) {
        console.log('if part')
        return <AssignmentBar bars={this.findRelevantAssignments()}/>
      }
      else {
        console.log('else part')
        return "";
      }
    }

    render() {
      return (
          <div>
            <h2>TeacherAssignments</h2>
            {this.renderAssignmentBar()}
            <button value="teacher-assignment-form" onClick={e => this.props.updateView(e.target.value)}>New Assignment</button>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    userdata: state.teachers.data.teacher
  };
};

export default connect(mapStateToProps)(TeacherAssignments);
