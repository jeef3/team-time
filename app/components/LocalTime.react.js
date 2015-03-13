'use strict';

import React from 'react';

class LocalTime extends React.Component {
  render() {
    return <div className="c-LocalTime">{this.props.time.format('LLLL')}</div>;
  }
}

export default LocalTime;
