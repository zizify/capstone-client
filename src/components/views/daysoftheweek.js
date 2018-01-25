import React from 'react';

export default function DaysOfTheWeek(props) {
  return (
    <div className="daysoftheweek">
      <nav>
        <ul className="daysoftheweek-buttons">
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="2"
              // onClick={() => props.clickDayLink()}
            >
              Mon
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="3"
              // onClick={() => props.clickDayLink()}
            >
              Tue
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="4"
              // onClick={() => props.clickDayLink()}
            >
              Wed
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="5"
              // onClick={() => props.clickDayLink()}
            >
              Thur
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="6"
              // onClick={() => props.clickDayLink()}
            >
              Fri
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="7"
              // onClick={() => props.clickAllLink()}
            >
              All
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}