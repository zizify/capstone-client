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
              onClick={(e) => props.clickDayLink(e)}
            >
              Mon
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="3"
              onClick={(e) => props.clickDayLink(e)}
            >
              Tue
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="4"
              onClick={(e) => props.clickDayLink(e)}
            >
              Wed
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="5"
              onClick={(e) => props.clickDayLink(e)}
            >
              Thur
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="6"
              onClick={(e) => props.clickDayLink(e)}
            >
              Fri
            </button>
          </li>
          <li>
            <button
              className="daysoftheweek-button"
              type="button"
              id="7"
              onClick={(e) => props.clickAllLink(e)}
            >
              All
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}