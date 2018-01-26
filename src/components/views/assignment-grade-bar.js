import React from 'react';

export default function AssignmentGradeBar(props) {
  const bars = props.bars
  const mappedBars = bars.map((each, index) => {
    return (
    <div
      key={index}
      className="assignment__gradebar">
      <h3>{each.title}</h3>
      <h3>{each.points}</h3>
      <h3>{each.pointsEarned}/{each.points}</h3>
    </div>
    )
  })
  return (
    <div className="assignment__gradebar-wrapper">
      {mappedBars}
    </div>
  )
}