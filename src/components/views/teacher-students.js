import React from 'react';
import TeacherStudentsBar from './teacher-students-bar';
import { connect } from 'react-redux';

export class TeacherStudents extends React.Component {
    createGradeBars = () => {
        const studentIds = this.props.user.classes.find(each => each.className === this.props.class).studentIds;
        const relevantAssignments = this.props.userdata.all.filter(each => each.className === this.props.class);
        const allStudents = relevantAssignments.reduce((newArray, assignment) => 
            [...newArray, ...assignment.students], [])

        const relevantPoints = relevantAssignments.reduce((points, assignment) => 
            points + assignment.points, 0)
        
        const studentGrades = allStudents.reduce((obj, student) => {
            obj[student.username]
                ? obj[student.username] += student.pointsEarned
                : obj[student.username] = student.pointsEarned
            return obj
        }, {})

        return <TeacherStudentsBar points={relevantPoints} studentIds={studentIds} studentGrades={studentGrades} />
    }

    render() {
        return (
            <div className="teacher-students-container">
                <h2>Teacher Students</h2>
                {this.props.class !== 'all' ? this.createGradeBars() : ''}
            </div>
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