import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import { fetchStudentData } from '../actions/students';
import { fetchTeacherData } from '../actions/teachers';

export default function UserColumn(props) {
  
  const buttonClick = e => {
    props.updateView(e.target.value)
  }

  const buttons = () => {
    if(props.currentUser.isTeacher) {
      const teacherButtonText = [['assignments', 'Assignments'], ['teacher-grades', 'Grades'], ['students', 'Students']]
      return teacherButtonText.map((each, index) => {
        return (
          <button
            key={index}
            value={each[0]}
            onClick={buttonClick}
          >{each[1]}</button>
        )
      })
    }
    else {
    const studentButtonText = [['new', 'New'], ['upcoming', 'Upcoming'], ['student-grades', 'Grades']]
      return studentButtonText.map((each, index) => {
        return (
          <button
            key={index}
            value={each[0]}
            onClick={buttonClick}
          >{each[1]}</button>
        )
      })
    }
  } 

  if (!props) {
      return <h1>Loading....</h1>
    }
    
      return ( 
      <div className="user-column">
        <h1>User Column</h1>
        <img src="https://cdn7.bigcommerce.com/s-fkt3i18h/product_images/uploaded_images/reading.png?t=1516737669&_ga=2.25683967.332062381.1516737598-1817016180.1514945206"></img>
        <h2>{`Hello, ${props.currentUser.firstName}!`}</h2>
          {buttons()}
        </div>
      )
  }