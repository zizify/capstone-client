import React from 'react';
import Collapsible from 'react-collapsible';

export default function TeacherGradeBar(props) {
  const onSubmit = e => {
    e.preventDefault();
    e.target.teacherComment.value = '';
  };
  console.log('teacherGradesBar', props.students);
  const studentGradesBar = props.students.map((each, index) => {
    return (
      <Collapsible
        trigger={`${each.username}${each.grade}%${each.pointsEarned}`}
        key={index}
      >
        <input type="number" id="points" size="1" />
        <label>
          {studentGradesBar}
          <textarea type="textarea" id="teacherComment" name="teacherComment"  onChange={e => console.log(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </Collapsible>
    );
  });
  return (
    <form
    onSubmit={onSubmit}>
      {studentGradesBar}
    </form>
  );
}
