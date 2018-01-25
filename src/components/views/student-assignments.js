import React from 'react';
import DaysOfTheWeek from './daysoftheweek';

export default class StudentAssignments extends React.Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      all: false
    };
  }

  clickDayLink = e => {
    this.setState({
      day: parseInt(e.target.id, 10),
      all: false
    });
  };

  clickAllLink = e => {
    this.setState({
      day: parseInt(e.target.id, 10),
      all: true
    });
  };

  render() {
    console.log('ST+++', this.state)
    return (
      <div>
        <DaysOfTheWeek 
          clickDayLink={this.clickDayLink}
          clickAllLink={this.clickAllLink}
        />
      </div>
    );
  }
}
