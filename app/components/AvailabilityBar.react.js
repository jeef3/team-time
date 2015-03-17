'use strict';

import React from 'react';

function barCalc(span) {
  var ratio = 100 / 24;
  return {
    left: (ratio * span.start) + '%',
    width: (ratio * span.duration) + '%'
  };
}

class AvailabilityBar extends React.Component {
  render() {
    var availability;
    if (!this.props.person.availability) {
      availability = {};
    } else {
      availability = this.props.person.availability[this.props.time.format('dddd').toLowerCase()];
    }

    var awake = { start: 7, duration: 14 };

    var availableBar;
    if (availability) {
      availableBar = (
        <div className="c-AvailabilityBar__Available"
          style={barCalc(availability)}></div>
      );
    }

    return (
      <div className="c-AvailabilityBar">
        <div className="c-AvailabilityBar__Unavailable"></div>
        <div className="c-AvailabilityBar__Awake" style={barCalc(awake)}></div>
        {availableBar}

        <div className="c-AvailabilityBar__Day">{this.props.time.format('dddd')}</div>
      </div>
    );
  }
}

export default AvailabilityBar;
