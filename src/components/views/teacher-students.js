import React from 'react';
import TeacherStudentsBar from './teacher-students-bar';
import { connect } from 'react-redux';

export class TeacherStudents extends React.Component {
    createClassesObjects = () => {
        let classes = this.props.user.classes.slice();

        for (let i = 0; i < classes.length; i++) {
            classes[i].points = 0;
            classes[i].relevantAssignments = this.props.userdata.all.filter(each => each.className === classes[i].className);
            for (let j = 0; j < classes[i].relevantAssignments.length; j++) {
                classes[i].points += classes[i].relevantAssignments[j].points;
            }
        }

        if (this.props.class !== 'all') {
            let classObject = classes.filter(each => each.className === this.props.class)[0]
            classObject.studentGrades = {}
            for (let i = 0; i < classObject.studentIds.length; i++) {
                classObject.studentGrades[[classObject.studentIds[i]]] = 0
                for (let j = 0; j < classObject.relevantAssignments.length; j++) {
                    let relevantStudent = classObject.relevantAssignments[j].students.filter(each => each.username === classObject.studentIds[i])[0];
                    
                    if (relevantStudent.grade) {
                        classObject.studentGrades[[classObject.studentIds[i]]] += relevantStudent.pointsEarned
                    }
                }
            }
            return <TeacherStudentsBar points={classObject.points} studentIds={classObject.studentIds} studentGrades={classObject.studentGrades} />
        }
    }

    render() {
        return (
            <div className="teacher-students-container">
                <h2>Teacher Students</h2>
                {this.createClassesObjects()}
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