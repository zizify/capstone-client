import React from 'react';
import DaysOfTheWeek from './daysoftheweek';
import AssignmentBar from './assignment-bar';

export default class StudentAssignments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0
    };
  }

  clickDayLink = e => {
    this.setState({
      day: parseInt(e.target.id, 10),
      all: false
    });
  };

  findRelevantAssignments = view => {
    let date = '';

    if (view === 'new') {
      date = 'assignDate'
    } else if (view === 'upcoming') {
      date = 'dueDate'
    }

    let relevantAssignments = this.state.day 
        ? this.props.assignments.filter(each => each[date].weekday === this.state.day) 
        : this.props.assignments;
    return relevantAssignments;
  }

  render() {
    let relevantAssignments = this.findRelevantAssignments(this.props.view);
    return (
      <div>
        <DaysOfTheWeek clickDayLink={this.clickDayLink} />
        {/* change the props here */}
        <AssignmentBar bars={relevantAssignments}/>
      </div>
    );
  }
}
