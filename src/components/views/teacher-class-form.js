import React from 'react';
import { fetchCreateNewClass } from '../../actions/teachers.js';
import { connect } from 'react-redux';

export class TeacherClassForm extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(fetchCreateNewClass(e));
  }
  render(){
    return (
        <form
          className="class-form"
           onSubmit={this.handleSubmit}>
          <label>
            ClassName:
            <input placeholder="Enter Class Name" type="text" name="name" />
          </label>
          <label>
            Student Usernames:
            <textarea placeholder="Enter Student Usernames Separated by a comma space" type="textarea" name="usernames" />
          </label>
          <button type="submit" value="Submit">Create Class</button>
        </form>
    )
  }
}

export default connect()(TeacherClassForm);
