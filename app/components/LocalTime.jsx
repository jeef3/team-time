import React, { PropTypes } from 'react';

const propTypes = {
  time: PropTypes.object.isRequired,
};

function LocalTime({ time }) {
  return <div className="c-LocalTime">{time.format('LLLL')}</div>;
}

LocalTime.propTypes = propTypes;

export default LocalTime;
