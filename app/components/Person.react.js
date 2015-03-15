'use strict';

import React from 'react';

class Person extends React.Component {
  render() {
    var person = this.props.person;

    return (
      <li className="c-Person">
        <div className="c-Person__Avatar o-avatar"
            style={{backgroundImage: `url(${person.avatar})`}}></div>
        <div className="c-Person__Name u-truncate">{person.name}</div>
        <div className="c-Person__City u-truncate">{person.city}</div>
        <div className="c-Person__Time">{person.time.format('HH:mm')}</div>
      </li>
    );
  }
}

export default Person;
