import React from 'react';
import Collapsible from 'react-collapsible';
import { fetchTeacherComment } from '../../actions/teachers.js';
import { connect } from 'react-redux';

export class TeacherGradeBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e, student) => {
    e.preventDefault();
    this.props.dispatch(fetchTeacherComment(e, student, this.props.id))
    e.target.teacherComment.value = '';
  };

  studentGradesBar = students => {
    return students.map((each, index) => {
    return (
      <Collapsible
        className="collapsible-teacher-grade-form"
        trigger={`${each.username} ${each.grade}% ${each.pointsEarned}`}
        key={index}
      >
        <form onSubmit={e => this.onSubmit(e, each.username)}>
          <input  placeholder="Enter Points Earned" type="number" id="pointsEarned" size="1" />
          <label>
            <textarea
              placeholder="Enter Any Comments"
              type="textarea"
              id="teacherComment"
              name="teacherComment"
            />
          </label>
          <button type="submit" value="Submit">Submit Grade</button>
        </form>
      </Collapsible>
    );
  });
}

  render() {
    return <div
        className="teacher-assignments-grades-bar"
      >{this.studentGradesBar(this.props.students)} </div>;
  }
}

export default connect()(TeacherGradeBar);
