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

  render() {
    return (
      <div>
        <DaysOfTheWeek clickDayLink={this.clickDayLink} />
        <AssignmentBar bars={this.props.assignments}/>
      </div>
    );
  }
}
