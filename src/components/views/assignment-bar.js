import React from 'react';
import Collapsible from 'react-collapsible';

export default function AssignmentBar(props){
  let bars = props.bars;
  console.log('BARS', bars)
  const mappedBars = bars.map((each, index) => {
    return (
      <Collapsible
        trigger={`${each.className}${each.title}${each.dueDate.date}`}
        className="student-assignment-card"
        key={index}
        >
      <div className="assignment__details">
        <h3>{each.subject}</h3>
        <h3>Goals</h3>
          <h4>{each.goals}</h4>
        <h3>{each.comments}</h3>
      </div>
    </Collapsible>
    )
  })
  return (
    <div>{mappedBars}</div>
  )
  }