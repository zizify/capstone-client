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
        trigger={`${each.username} ${each.grade}% ${each.pointsEarned}`}
        key={index}
      >
        <form onSubmit={e => this.onSubmit(e, each.username)}>
          <input type="number" id="pointsEarned" size="1" />
          <label>
            <textarea
              type="textarea"
              id="teacherComment"
              name="teacherComment"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Collapsible>
    );
  });
}

  render() {
    return <div>{this.studentGradesBar(this.props.students)} </div>;
  }
}

export default connect()(TeacherGradeBar);
