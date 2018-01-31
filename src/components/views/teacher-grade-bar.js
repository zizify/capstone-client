import React from 'react';

export default function TeacherGradeBar(props) {
  const onSubmit = e => {
    e.preventDefault();
  };
  console.log('teacherGradesBar', props.students);
  const studentData = props.students.map((each, index)=> {
    console.log(each.username)
  } )
  return (
    <form
      onSubmit={e => {
        onSubmit(e);
      }}
    >
      <label>
       {props.students[0].username}
        <textarea type="textarea" name="usernames" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
