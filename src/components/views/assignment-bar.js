import React from 'react';
export default function AssignmentBar(props){
  let bars = props.bars;
  const mappedBars = bars.map((each, index) => {
    return (
      <div 
        className="assignment"
        key={index}
        >
      <div className="assignment__header">
        <h3>{each.className}</h3>
        <h3>{each.title}</h3>
        <h3>{each.dueDate.date}</h3>
      </div>
      <div className="assignment__details">
        <h3>{each.subject}</h3>
        <h3>Goals</h3>
          <h4>{each.goals}</h4>
        <h3>{each.comments}</h3>
      </div>
    </div>
    )
  })
  return (
    <h1>{mappedBars}</h1>
  )
  }