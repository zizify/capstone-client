import React from 'react';

export default function ClassGradeBar(props) {
    let points;
    let pointsEarned;
    let classAverage;
    let letterGrade;
    let classAverageString;

    if (props.relevantClass) {
        points = props.relevantClass.points;
        pointsEarned = props.relevantClass.pointsEarned;
        classAverage = points ? (pointsEarned/points)*100 : 0;
        classAverageString = classAverage.toString();

        
        if (classAverage <= 100 && classAverage >= 90) {
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

        if (classAverage === 100 || ['6', '7', '8', '9'].includes(classAverageString[0]) && ['7', '8', '9'].includes(classAverageString[1])) {
            letterGrade += '+';
        } else if (['6', '7', '8', '9'].includes(classAverageString[0]) && ['0', '1', '2'].includes(classAverageString.toString()[1])) {
            letterGrade += '-';
        }
    }

    return (
        <div className="class-grade-bar-container">
            <div className="class-grades">
                <div className="class-average">
                    <h3>{classAverage}%</h3>
                </div>
                <div className="letter-grade">
                    <h3>{letterGrade}</h3>
                </div>
            </div>
        </div>
    )
}