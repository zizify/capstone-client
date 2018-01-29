import React from 'react';

export default function DaysWeek(props) {
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
            className="days-week-button"
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
    <div className="days-week">
      <nav>
        <ul className="days-week-buttons">{dayButtons()}</ul>
      </nav>
    </div>
  );
}
