import React from 'react';

export default class TeacherAssignmentForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value, e.target.usernames.value);
    const userIds = e.target.usernames.value.split(', ')
    const authToken = localStorage.authToken;
    fetch('http://localhost:8080/api/users/class/create', {
      method: 'POST',
      body: JSON.stringify({
        className: e.target.name.value,
        userIds
      }),
      headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`
    }
    })
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
