'use strict';

import React from 'react';

class Person extends React.Component {
  render() {
    var person = this.props.person;

    return (
      <li className="c-Person">
        <div className="c-Person__Avatar o-avatar"></div>
        <div className="c-Person__Name">{person.name}</div>
        <div className="c-Person__City">{person.city}</div>
        <div className="c-Person__Time">{person.time.format('HH:mm')}</div>
      </li>
    );
  }
}

export default Person;
