'use strict';

class PeopleStore {
  constructor() {
    this.people = window.people;
  }

  all() {
    return this.people;
  }
}

export default new PeopleStore();
