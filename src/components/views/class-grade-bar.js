import React from 'react';

export default function ClassGradeBar(props) {
    let points;
    let pointsEarned;
    let classAverage;
    let letterGrade;

    if (props.relevantClass) {
        points = props.relevantClass.points;
        pointsEarned = props.relevantClass.pointsEarned;
        classAverage = points ? pointsEarned/points : 0;
        
        if (classAverage === 100) {
            letterGrade = 'A+';
        } else if (classAverage < 100 && classAverage >= 90) {
            letterGrade = 'A';
        } else if (classAverage < 90 && classAverage >= 80) {
            letterGrade = 'B';
        } else if (classAverage < 80 && classAverage >= 70) {
            letterGrade = 'C';
        } else if (classAverage < 70 && classAverage >= 60) {
            letterGrade = 'D';
        } else {
            letterGrade = 'F';
        }
    }

    return (
        <div className="class-grade-bar-container">
            <ul className="class-grades">
                <li className="class-average">
                    <h3>{classAverage}%</h3>
                </li>
                <li className="letter-grade">
                    <h3>{letterGrade}</h3>
                </li>
            </ul>
        </div>
    )
}