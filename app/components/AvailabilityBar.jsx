import React, { PropTypes } from 'react';

import { barCalc } from '../barCalc';

const propTypes = {
  person: PropTypes.object,
  time: PropTypes.object,
};

function AvailabilityBar({ person, time }) {
  let availability;
  if (!person.availability) {
    availability = {};
  } else {
    availability = person.availability[time.format('dddd').toLowerCase()];
  }

  const awake = { start: 7, duration: 14 };

  let availableBar;
  if (availability) {
    availableBar = (
      <div
        className="c-AvailabilityBar__Available"
        style={barCalc(availability)}
      />
    );
  }

  return (
    <div className="c-AvailabilityBar">
      <div className="c-AvailabilityBar__Unavailable"></div>
      <div className="c-AvailabilityBar__Awake" style={barCalc(awake)}></div>
      {availableBar}

      <div className="c-AvailabilityBar__Day">{time.format('dddd')}</div>
    </div>
  );
}

AvailabilityBar.propTypes = propTypes;

export default AvailabilityBar;
