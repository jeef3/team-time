'use strict';

import React from 'react';

function barCalc(span) {
  var ratio = 100 / 24;
  return {
    left: (ratio * span.start) + '%',
    width: (ratio * span.duration) + '%'
  };
}

function barOffset(tz) {
  return ((tz.utcOffset() / 60) * 4) + '%';
}

class AvailabilityBar extends React.Component {
  render() {
    var availability = this.props.person.availability[this.props.time.format('dddd').toLowerCase()];

    var awake = { start: 7, duration: 14 };

    var availableBar;
    if (availability) {
      availableBar = (
        <div className="c-AvailabilityBar__Available"
          style={barCalc(availability)}></div>
      );
    }

    var tz = this.props.time.clone().tz(this.props.person.tz);
    var offset = barOffset(tz);
    var styles = {
      width: '300px',
      WebkitTransform: `translateX(${offset})`
    }

    return (
      <div className="c-AvailabilityBar" style={styles}>
        <div className="c-AvailabilityBar__Unavailable"></div>
        <div className="c-AvailabilityBar__Awake" style={barCalc(awake)}></div>
        {availableBar}

        <div className="c-AvailabilityBar__Day">{this.props.time.format('dddd')}</div>
      </div>
    );
  }
}

export default AvailabilityBar;
