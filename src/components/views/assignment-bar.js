import React from 'react';
import Collapsible from 'react-collapsible';
import moment from 'moment';

export default function AssignmentBar(props){
  let bars = props.bars;
  const mappedBars = bars.map((each, index) => {
    return (
      <Collapsible
        trigger={`${each.className} | ${each.title} | ${moment(each.dueDate.date).format('dddd, MMMM D')}`}
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
    <div
      className="teacher-assignment-card-container"
      >{mappedBars}</div>
  )
  }
