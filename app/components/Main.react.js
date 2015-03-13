'use strict';

import React from 'react';
import moment from 'moment-timezone';

import PeopleStore from '../stores/PeopleStore';
import AvailabilityBar from './AvailabilityBar.react';

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
    var today = this.state.now;

    return (
      <div>
        <div>{today.format('LLLL')}</div>

        <ul className="c-People">
          {this.state.people.map((person, i) => {
            return <li key={i}>{person.name}</li>;
          })}
        </ul>

        <ul className="c-Availability" style={{listStyle: 'none'}}>
          {this.state.people.map((person, i) => {
            var now = this.state.now.clone().tz(person.tz);
            var yesterday = now.clone().subtract(1, 'day');
            var tomorrow = now.clone().add(1, 'day');

            return (
              <li key={i} style={{clear: 'both'}}>
                <AvailabilityBar person={person} time={yesterday} />
                <AvailabilityBar person={person} time={now} />
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
