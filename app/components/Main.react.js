'use strict';

import React from 'react';

import PeopleStore from '../stores/PeopleStore';

function getState() {
  return {
    people: PeopleStore.all()
  };
}

class Main extends React.Component {
  constructor() {
    this.state = getState();
  }

  render() {
    return (
      <ul>
        {this.state.people.map((person, i) => {
          return <div key={i}>{person.name}</div>;
        })}
      </ul>
    );
  }
}

export default Main;
