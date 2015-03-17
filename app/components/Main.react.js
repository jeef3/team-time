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
    }, 10000);
  }

  render() {
    var today = this.state.now;
    var yesterday = today.clone().subtract(1, 'day');
    var dayBefore = yesterday.clone().subtract(1, 'day');
    var tomorrow = today.clone().add(1, 'day');

    return (
      <div className="c-Main">
        <LocalTime time={today} />

        <div className="c-Availability">
          <ul className="c-Availability__People">
            {this.state.people.map((person) => {
              return <Person key={person._id} person={person} />
            })}
          </ul>

          <ul className="c-Availability__List">
            {this.state.people.map((person) => {
              // var offset = barOffset(person.time);
              var offset = (today.utcOffset() - person.time.utcOffset());
              offset = offset - (today.hours() * 60);
              offset = offset - today.minutes();
              var percentShift = (offset / 60) * (100/24);


              var todayOffset = percentShift;
              var yesterdayOffset = todayOffset - 100;
              var dayBeforeOffset = yesterdayOffset - 100;
              var tomorrowOffset = todayOffset + 100;

              return (
                <li key={person._id} className="c-Availability__Row">
                  <div className="c-Availability__Day"
                      style={{WebkitTransform: `translateX(${dayBeforeOffset}%)`}}>
                    <AvailabilityBar person={person} time={dayBefore} />
                  </div>
                  <div className="c-Availability__Day"
                      style={{WebkitTransform: `translateX(${yesterdayOffset}%)`}}>
                    <AvailabilityBar person={person} time={yesterday} />
                  </div>
                  <div className="c-Availability__Day"
                      style={{WebkitTransform: `translateX(${todayOffset}%)`}}>
                    <AvailabilityBar person={person} time={today} />
                  </div>
                  <div className="c-Availability__Day"
                      style={{WebkitTransform: `translateX(${tomorrowOffset}%)`}}>
                    <AvailabilityBar person={person} time={tomorrow} />
                  </div>
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
