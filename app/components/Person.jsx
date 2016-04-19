import React, { PropTypes } from 'react';

const propTypes = {
  person: PropTypes.object.isRequired,
};

function Person({ person }) {
  return (
    <div className="c-Person">
      <div
        className="c-Person__Avatar o-avatar"
        style={{ backgroundImage: `url(${person.avatar})` }}
      />
      <div className="c-Person__Name u-truncate">{person.name}</div>
      <div className="c-Person__City u-truncate">{person.city}</div>
      <div className="c-Person__Time">{person.time.format('HH:mm')}</div>
    </div>
  );
}

Person.propTypes = propTypes;

export default Person;
