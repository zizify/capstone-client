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
        <form onSubmit={this.handleSubmit}>
          <label>
            ClassName:
            <input type="text" name="name" />
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

export default connect()(TeacherClassForm);
