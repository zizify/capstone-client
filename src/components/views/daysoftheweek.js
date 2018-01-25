import React from 'react';

export default function DaysOfTheWeek(props) {
  const dayButtons = () => {
    const buttonProps = [
      ['Mon', '2'],
      ['Tue', '3'],
      ['Wed', '4'],
      ['Thur', '5'],
      ['Fri', '6'],
      ['All', '0']
    ];
    return buttonProps.map((button, index) => {
      return (
        <li key={index}>
          <button
            className="daysoftheweek-button"
            type="button"
            id={button[1]}
            onClick={e => props.clickDayLink(e)}
          >
            {button[0]}
          </button>
        </li>
      );
    });
  };
  return (
    <div className="daysoftheweek">
      <nav>
        <ul className="daysoftheweek-buttons">{dayButtons()}</ul>
      </nav>
    </div>
  );
}
