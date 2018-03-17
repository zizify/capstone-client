import React from 'react';
import { fetchCreateNewAssignment } from '../../actions/teachers.js';
import { connect } from 'react-redux';

export class TeacherAssignmentForm extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(fetchCreateNewAssignment(e));
  }

  getClassNames(){
    return this.props.classes.map((each, index) => {
      return <option
        key={index}
         value={each.className}>{each.className}
       </option>
    })
  }
  render(){
    return (
        <form
          className="assignment-form"
          onSubmit={this.handleSubmit}>
          <div className="left-side">
          <label>
            Class Name:
            <select name="className">
              {this.getClassNames()}
            </select>
          </label>
            <label>
              Assignment Name:
              <input type="text" name="assignmentName"></input>
            </label>
            <label>
              Assignment Subject:
              <input type="text" name="assignmentSubject"></input>
            </label>
            <label>
              Assignment Objectives:
              <textarea type="textarea" name="objectives"></textarea>
            </label>
            </div>
            <div className="right-side">
            <label>
              Assignment Instructions:
              <textarea type="textarea" name="instructions"></textarea>
            </label>
            <label>
              Assignment Points Possible:
              <input type="text" name="pointsPossible"></input>
            </label>
            <label>
              Assigned:
              <input type="date" name="assignDate"></input>
            </label>
            <label>
              Due Date:
              <input type="date" name="dueDate"></input>
            </label>
            </div>
          <button type="submit" value="Submit">Create Assignment</button>
        </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    classes: state.auth.currentUser.classes
  };
};

export default connect(mapStateToProps)(TeacherAssignmentForm);
