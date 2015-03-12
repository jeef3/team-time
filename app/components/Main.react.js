'use strict';

import React from 'react';
import moment from 'moment-timezone';

import PeopleStore from '../stores/PeopleStore';

function getState() {
  var now = moment();

  return {
    now: now,
    people: PeopleStore.all()
  };
}

class Main extends React.Component {
  constructor() {
    this.state = getState();

    setInterval(() => {
      this.setState(getState());
    }, 1000);
  }

  render() {
    var localTime = this.state.now.tz('Pacific/Auckland').format('LTS');

    return (
      <div>
        <div>{localTime}</div>
        <ul>
          {this.state.people.map((person, i) => {
            var displayTime = this.state.now.tz(person.tz).format('HH:mm:ss');
            return <div key={i}>{person.name} - {displayTime}</div>;
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
