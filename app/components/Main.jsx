import React, { Component } from 'react';
import moment from 'moment-timezone';

import PeopleStore from '../stores/PeopleStore';
import AvailabilityBar from './AvailabilityBar.jsx';
import LocalTime from './LocalTime.jsx';
import Person from './Person.jsx';
import { attachTimezone, sortByTimezone, getLocalOffset, getOffset } from '../timezone';

function getState() {
  const now = moment();

  const people = PeopleStore.all()
    .map(attachTimezone.bind(null, now))
    .sort(sortByTimezone);

  return { now, people };
}

class Main extends Component {
  constructor() {
    this.state = getState();

    setInterval(() => {
      this.setState(getState());
    }, 10000);
  }

  render() {
    const today = this.state.now;
    const yesterday = today.clone().subtract(1, 'day');
    const dayBefore = yesterday.clone().subtract(1, 'day');
    const tomorrow = today.clone().add(1, 'day');

    const ratio = 100 / 24;

    const hourMarkers = [];

    // Zoom is at 50%, so double the number of markers
    for (let h = 0; h < 24; h++) {
      hourMarkers.push(
        <div
          key={h}
          className={'c-Availability__Hour'}
          style={{
            left: `${(h * ratio)}%`,
          }}
        />
      );
    }

    return (
      <div className="c-Main">
        <LocalTime time={today} />

        <div className="c-Availability">
          <div className="c-Availability__People">
            {this.state.people.map(person => (
              <Person key={person._id} person={person} />
            ))}
          </div>

          <div className="c-Availability__List">
            <div className="c-Availability__ZoomContainer">
              <div className="c-Availability__PanContainer">
                <div
                  className="c-Availability__LocalOffsetContainer"
                  style={{ transform: `translateX(${getLocalOffset(today)}%)` }}
                >
                  <div
                    className="c-Availability__Background"
                    style={{ transform: 'translateX(-100%)' }}
                  >
                    {hourMarkers}
                  </div>
                  <div className="c-Availability__Background">
                    {hourMarkers}
                  </div>
                  <div
                    className="c-Availability__Background"
                    style={{ transform: 'translateX(100%)' }}
                  >
                    {hourMarkers}
                  </div>

                  {this.state.people.map((person) => {
                    const localOffset = getOffset(today, person.time);

                    return (
                      <div
                        key={person._id}
                        className="c-Availability__Row"
                        style={{ transform: `translateX(${localOffset}%)` }}
                      >
                        <div
                          className="c-Availability__Day"
                          style={{ transform: 'translateX(-200%)' }}
                        >
                          <AvailabilityBar person={person} time={dayBefore} />
                        </div>
                        <div
                          className="c-Availability__Day"
                          style={{ transform: 'translateX(-100%)' }}
                        >
                          <AvailabilityBar person={person} time={yesterday} />
                        </div>
                        <div
                          className="c-Availability__Day"
                          style={{ transform: 'translateX(0)' }}
                        >
                          <AvailabilityBar person={person} time={today} />
                        </div>
                        <div
                          className="c-Availability__Day"
                          style={{ transform: 'translateX(100%)' }}
                        >
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
