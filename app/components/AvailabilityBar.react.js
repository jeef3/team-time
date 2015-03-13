'use strict';

import React from 'react';

class AvailabilityBar extends React.Component {
  render() {
    var barCalc = function (span) {
      return {
        left: '0%',
        width: '10%'
      };
    };

    var availability = this.props.person.availability[this.props.time.format('dddd').toLowerCase()];

    var awake = { start: 7, duration: 14 };
    var awakeStart = 2 + (4 * awake.start) + '%';
    var awakeDuration = (4 * awake.duration) + '%';

    var availableStart = 2 + (4 * availability.start) + '%';
    var availableDuration = (4 * availability.duration) + '%';

    return (
      <div className="c-AvailabilityBar" style={{width: '300px'}}>
        <div className="c-AvailabilityBar__Unavailable"></div>
        <div className="c-AvailabilityBar__Awake"
            style={{left: awakeStart, width: awakeDuration}}></div>
        <div className="c-AvailabilityBar__Available"
            style={{left: availableStart, width: availableDuration}}></div>

        <div className="c-AvailabilityBar__Day">{this.props.time.format('dddd')}</div>
      </div>
    );
  }
}

export default AvailabilityBar;
