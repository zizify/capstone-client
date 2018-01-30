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
      console.log(each.className);
      return <option
        key={index}
         value={each.className}>{each.className}
       </option>
    })
  }
  render(){
    console.log(this.props)
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select name="classes">
              {this.getClassNames()}
            </select>
          </label>
          <label>
            Student Usernames:
            <textarea type="textarea" name="usernames" />
          </label>
          <input type="submit" value="Submit" />
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
