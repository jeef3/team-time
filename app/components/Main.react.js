'use strict';

import React from 'react';
import moment from 'moment-timezone';

import PeopleStore from '../stores/PeopleStore';
import AvailabilityBar from './AvailabilityBar.react';

function attachTimezone(now, person) {
  person.time = now.clone().tz(person.tz);
  return person;
}

function sortByTimezone(a, b) {
  return b.time.utcOffset() - a.time.utcOffset();
}

function getState() {
  var now = moment();

  var people = PeopleStore.all()
    .map(attachTimezone.bind(null, now))
    .sort(sortByTimezone);

  return { now, people };
}

class Main extends React.Component {
  constructor() {
    this.state = getState();

    setInterval(() => {
      this.setState(getState());
    }, 1000);
  }

  render() {
    var today = this.state.now;
    var yesterday = today.clone().subtract(1, 'day');
    var tomorrow = today.clone().add(1, 'day');

    return (
      <div>
        <div>{today.format('LLLL')}</div>

        <ul className="c-People">
          {this.state.people.map((person, i) => {
            return <li key={i}>{person.name} - {person.time.format('LLLL')}</li>;
          })}
        </ul>

        <ul className="c-Availability" style={{listStyle: 'none'}}>
          {this.state.people.map((person, i) => {
            return (
              <li key={i} style={{clear: 'both'}}>
                <AvailabilityBar person={person} time={yesterday} />
                <AvailabilityBar person={person} time={today} />
                <AvailabilityBar person={person} time={tomorrow} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
