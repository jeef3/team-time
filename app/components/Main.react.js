'use strict';

import React from 'react';
import moment from 'moment-timezone';

import PeopleStore from '../stores/PeopleStore';
import AvailabilityBar from './AvailabilityBar.react';
import LocalTime from './LocalTime.react';
import Person from './Person.react';

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
        <LocalTime time={today} />

        <ul className="c-People">
          {this.state.people.map((person, i) => {
            return <Person key={i} person={person} />;
          })}
        </ul>

        <div className="c-AvailabilityWindow">
          <ul className="c-Availability">
            {this.state.people.map((person, i) => {
              return (
                <li key={i} className="c-Availability__Row">
                  <AvailabilityBar person={person} time={yesterday} />
                  <AvailabilityBar person={person} time={today} />
                  <AvailabilityBar person={person} time={tomorrow} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
