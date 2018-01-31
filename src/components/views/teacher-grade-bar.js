import React from 'react';
import Collapsible from 'react-collapsible';
import { fetchTeacherComment } from '../../actions/teachers.js'; 

export default function TeacherGradeBar(props) {
  const onSubmit = e => {
    e.preventDefault();
    //props.dispatch(fetchTeacherComment(e, props.students[0].username, props.id))
    e.target.teacherComment.value = '';
  };
  console.log('teacherGradesBar', props);
  const studentGradesBar = props.students.map((each, index) => {
    return (
      <Collapsible
        trigger={`${each.username} ${each.grade}% ${each.pointsEarned}`}
        key={index}
      >
        <form onSubmit={e => onSubmit(e)}>
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
  return <div>{studentGradesBar} </div>;
}


//POST /assignments/teacher/update/:id