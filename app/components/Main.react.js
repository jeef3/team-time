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

function getLocalOffset(localTime) {
  var offset = 0;
  offset = offset - (localTime.hours() * 60);
  offset = offset - localTime.minutes();
  var percentShift = (offset / 60) * (100/24);

  return percentShift;
}

function getOffset(localTime, compareTime) {
  var offset = (localTime.utcOffset() - compareTime.utcOffset());
  var percentShift = (offset / 60) * (100/24);

  return percentShift;
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

    var ratio = 100 / 24;

    var hourMarkers = [];
    // Zoom is at 50%, so double the number of markers
    for (let h = 0; h < 24; h++) {
      hourMarkers.push(
        <div className={'c-Availability__Hour'}
            style={{
              left: `${(h * ratio)}%`,
            }}></div>
      );
    }

    return (
      <div className="c-Main">
        <LocalTime time={today} />

        <div className="c-Availability">
          <div className="c-Availability__People">
            {this.state.people.map((person) => {
              return <Person key={person._id} person={person} />
            })}
          </div>

          <div className="c-Availability__List">
            <div className="c-Availability__ZoomContainer">
              <div className="c-Availability__PanContainer">
                <div className="c-Availability__LocalOffsetContainer" style={{
                      WebkitTransform: `translateX(${getLocalOffset(today)}%)`
                    }}>

                  <div className="c-Availability__Background" style={{
                        WebkitTransform: 'translateX(-100%)'
                      }}>
                    {hourMarkers}
                  </div>
                  <div className="c-Availability__Background">
                    {hourMarkers}
                  </div>
                  <div className="c-Availability__Background" style={{
                        WebkitTransform: 'translateX(100%)'
                      }}>
                    {hourMarkers}
                  </div>

                  {this.state.people.map((person) => {
                    var localOffset = getOffset(today, person.time);

                    return (
                      <div key={person._id} className="c-Availability__Row" style={{
                            WebkitTransform: `translateX(${localOffset}%)`
                          }}>
                        <div className="c-Availability__Day"
                            style={{WebkitTransform: `translateX(-200%)`}}>
                          <AvailabilityBar person={person} time={dayBefore} />
                        </div>
                        <div className="c-Availability__Day"
                            style={{WebkitTransform: `translateX(-100%)`}}>
                          <AvailabilityBar person={person} time={yesterday} />
                        </div>
                        <div className="c-Availability__Day"
                            style={{WebkitTransform: `translateX(0)`}}>
                          <AvailabilityBar person={person} time={today} />
                        </div>
                        <div className="c-Availability__Day"
                            style={{WebkitTransform: `translateX(100%)`}}>
                          <AvailabilityBar person={person} time={tomorrow} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="c-Availability__CurrentTimeMarker"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
