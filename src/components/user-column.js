import React from 'react';
import { connect } from 'react-redux';

export class UserColumn extends React.Component {
  buttons = () => {
    if (this.props.user.isTeacher) {
      const teacherButtonText = [['assignments', 'Assignments'], ['teacher-grades', 'Grades'], ['students', 'Students']]
      return teacherButtonText.map((each, index) => {
        return (
          <button
            key={index}
            value={each[0]}
            onClick={e => this.props.updateView(e.target.value)}
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
            onClick={e => this.props.updateView(e.target.value)}
          >{each[1]}</button>
        )
      })
    }
  }

  render() {
    if (!this.props) {
        return <h1>Loading....</h1>
      }
    
    return ( 
      <div className="user-column">
        <h1>User Column</h1>
        <img src="https://cdn7.bigcommerce.com/s-fkt3i18h/product_images/uploaded_images/reading.png?t=1516737669&_ga=2.25683967.332062381.1516737598-1817016180.1514945206" alt="Chalktalk logo"></img>
        <h2>{`Hello, ${this.props.user.firstName}!`}</h2>
          {this.buttons()}
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(UserColumn);