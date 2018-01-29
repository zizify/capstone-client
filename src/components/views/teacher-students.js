import React from 'react';
import { connect } from 'react-redux';

export class TeacherStudents extends React.Component {
    render() {
        console.log(this.props);
        return (
            <h2>Teacher Students</h2>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        userdata: state.teachers.data.teacher
    };
  };
  
  export default connect(mapStateToProps)(TeacherStudents);