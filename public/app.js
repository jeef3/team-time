(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire((typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null));

function barCalc(span) {
  var ratio = 100 / 24;
  return {
    left: ratio * span.start + "%",
    width: ratio * span.duration + "%"
  };
}

var AvailabilityBar = (function (_React$Component) {
  function AvailabilityBar() {
    _classCallCheck(this, AvailabilityBar);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(AvailabilityBar, _React$Component);

  _createClass(AvailabilityBar, {
    render: {
      value: function render() {
        var availability;
        if (!this.props.person.availability) {
          availability = {};
        } else {
          availability = this.props.person.availability[this.props.time.format("dddd").toLowerCase()];
        }

        var awake = { start: 7, duration: 14 };

        var availableBar;
        if (availability) {
          availableBar = React.createElement("div", { className: "c-AvailabilityBar__Available",
            style: barCalc(availability) });
        }

        return React.createElement("div", { className: "c-AvailabilityBar" }, React.createElement("div", { className: "c-AvailabilityBar__Unavailable" }), React.createElement("div", { className: "c-AvailabilityBar__Awake", style: barCalc(awake) }), availableBar, React.createElement("div", { className: "c-AvailabilityBar__Day" }, this.props.time.format("dddd")));
      }
    }
  });

  return AvailabilityBar;
})(React.Component);

module.exports = AvailabilityBar;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire((typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null));

var LocalTime = (function (_React$Component) {
  function LocalTime() {
    _classCallCheck(this, LocalTime);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(LocalTime, _React$Component);

  _createClass(LocalTime, {
    render: {
      value: function render() {
        return React.createElement("div", { className: "c-LocalTime" }, this.props.time.format("LLLL"));
      }
    }
  });

  return LocalTime;
})(React.Component);

module.exports = LocalTime;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire((typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null));

var moment = _interopRequire(require("moment-timezone"));

var PeopleStore = _interopRequire(require("../stores/PeopleStore"));

var AvailabilityBar = _interopRequire(require("./AvailabilityBar.react"));

var LocalTime = _interopRequire(require("./LocalTime.react"));

var Person = _interopRequire(require("./Person.react"));

function attachTimezone(now, person) {
  person.time = now.clone().tz(person.tz);
  return person;
}

function sortByTimezone(a, b) {
  return b.time.utcOffset() - a.time.utcOffset();
}

function getState() {
  var now = moment();

  var people = PeopleStore.all().map(attachTimezone.bind(null, now)).sort(sortByTimezone);

  return { now: now, people: people };
}

var Main = (function (_React$Component) {
  function Main() {
    var _this = this;

    _classCallCheck(this, Main);

    this.state = getState();

    setInterval(function () {
      _this.setState(getState());
    }, 10000);
  }

  _inherits(Main, _React$Component);

  _createClass(Main, {
    render: {
      value: function render() {
        var today = this.state.now;
        var yesterday = today.clone().subtract(1, "day");
        var dayBefore = yesterday.clone().subtract(1, "day");
        var tomorrow = today.clone().add(1, "day");

        var globalOffset = 0;
        // Zoom as at 50%, so half the offset
        globalOffset = (globalOffset - today.minutes() * (100 / 24) / 60) / 2;

        // Zoom is at 50%, so half the ratio
        var ratio = 100 / 48;

        var hourMarkers = [];
        // Zoom is at 50%, so double the number of markers
        for (var h = 0; h < 48; h++) {
          hourMarkers.push(React.createElement("div", { className: "c-Availability__Hour c-Availability__Hour--" + h,
            style: {
              left: "" + (h * ratio + globalOffset) + "%" } }));
        }

        return React.createElement("div", { className: "c-Main" }, React.createElement(LocalTime, { time: today }), React.createElement("div", { className: "c-Availability" }, React.createElement("ul", { className: "c-Availability__People" }, this.state.people.map(function (person) {
          return React.createElement(Person, { key: person._id, person: person });
        })), React.createElement("ul", { className: "c-Availability__List" }, hourMarkers, this.state.people.map(function (person) {
          // var offset = barOffset(person.time);
          var offset = today.utcOffset() - person.time.utcOffset();
          offset = offset - today.hours() * 60;
          offset = offset - today.minutes();
          var percentShift = offset / 60 * (100 / 24);

          var todayOffset = percentShift;
          var yesterdayOffset = todayOffset - 100;
          var dayBeforeOffset = yesterdayOffset - 100;
          var tomorrowOffset = todayOffset + 100;

          return React.createElement("li", { key: person._id, className: "c-Availability__Row" }, React.createElement("div", { className: "c-Availability__Day",
            style: { WebkitTransform: "translateX(" + dayBeforeOffset + "%)" } }, React.createElement(AvailabilityBar, { person: person, time: dayBefore })), React.createElement("div", { className: "c-Availability__Day",
            style: { WebkitTransform: "translateX(" + yesterdayOffset + "%)" } }, React.createElement(AvailabilityBar, { person: person, time: yesterday })), React.createElement("div", { className: "c-Availability__Day",
            style: { WebkitTransform: "translateX(" + todayOffset + "%)" } }, React.createElement(AvailabilityBar, { person: person, time: today })), React.createElement("div", { className: "c-Availability__Day",
            style: { WebkitTransform: "translateX(" + tomorrowOffset + "%)" } }, React.createElement(AvailabilityBar, { person: person, time: tomorrow })));
        }))));
      }
    }
  });

  return Main;
})(React.Component);

module.exports = Main;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../stores/PeopleStore":5,"./AvailabilityBar.react":1,"./LocalTime.react":2,"./Person.react":4,"moment-timezone":7}],4:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire((typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null));

var Person = (function (_React$Component) {
  function Person() {
    _classCallCheck(this, Person);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Person, _React$Component);

  _createClass(Person, {
    render: {
      value: function render() {
        var person = this.props.person;

        return React.createElement("li", { className: "c-Person" }, React.createElement("div", { className: "c-Person__Avatar o-avatar",
          style: { backgroundImage: "url(" + person.avatar + ")" } }), React.createElement("div", { className: "c-Person__Name u-truncate" }, person.name), React.createElement("div", { className: "c-Person__City u-truncate" }, person.city), React.createElement("div", { className: "c-Person__Time" }, person.time.format("HH:mm")));
      }
    }
  });

  return Person;
})(React.Component);

module.exports = Person;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var PeopleStore = (function () {
  function PeopleStore() {
    _classCallCheck(this, PeopleStore);

    this.people = window.people;
  }

  _createClass(PeopleStore, {
    all: {
      value: function all() {
        return this.people;
      }
    }
  });

  return PeopleStore;
})();

module.exports = new PeopleStore();

},{}],6:[function(require,module,exports){
module.exports={
	"version": "2015a",
	"zones": [
		"Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q",
		"Africa/Accra|LMT GMT GHST|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE",
		"Africa/Addis_Ababa|LMT EAT BEAT BEAUT|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ",
		"Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0",
		"Africa/Bangui|LMT WAT|-d.A -10|01|-22y0d.A",
		"Africa/Bissau|LMT WAT GMT|12.k 10 0|012|-2ldWV.E 2xonV.E",
		"Africa/Blantyre|LMT CAT|-2a.k -20|01|-2GJea.k",
		"Africa/Cairo|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0 1o10 jz0 gN0 pb0 1qN0 dX0 e10 xz0 1o10 bb0 e10 An0 1o10 5z0 e10 FX0 1o10 2L0 e10 IL0 1C10 Lz0 1wp0 TX0 1qN0 WL0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0",
		"Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|012121212121212121312121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uo0 e00 DA0 11A0 rA0 e00 Jc0 WM0 m00 gM0 M00 WM0 jc0 e00 RA0 11A0 dA0 e00 Uo0 11A0 800 gM0 Xc0 11A0 5c0 e00 17A0 WM0 2o0 e00 1ao0 19A0 1g00 16M0 1iM0 1400 1lA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qo0 1200 1kM0 14M0 1i00",
		"Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1y7p0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Africa/El_Aaiun|LMT WAT WET WEST|Q.M 10 0 -10|0123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uo0 e00 DA0 11A0 rA0 e00 Jc0 WM0 m00 gM0 M00 WM0 jc0 e00 RA0 11A0 dA0 e00 Uo0 11A0 800 gM0 Xc0 11A0 5c0 e00 17A0 WM0 2o0 e00 1ao0 19A0 1g00 16M0 1iM0 1400 1lA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qo0 1200 1kM0 14M0 1i00",
		"Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0",
		"Africa/Juba|LMT CAT CAST EAT|-2a.8 -20 -30 -30|01212121212121212121212121212121213|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0",
		"Africa/Monrovia|MMT LRT GMT|H.8 I.u 0|012|-23Lzg.Q 29s01.m",
		"Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0",
		"Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00",
		"Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00",
		"Africa/Windhoek|SWAT SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|012134545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2GJdu 1Ajdu 1cL0 1SqL0 9NA0 11D0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0",
		"America/Adak|NST NWT NPT BST BDT AHST HAST HADT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Anchorage|CAT CAWT CAPT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Anguilla|LMT AST|46.4 40|01|-2kNvR.U",
		"America/Antigua|LMT EST AST|47.c 50 40|012|-2kNvQ.M 1yxAQ.M",
		"America/Araguaina|LMT BRT BRST|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0",
		"America/Argentina/Buenos_Aires|CMT ART ARST ART ARST|4g.M 40 30 30 20|0121212121212121212121212121212121212121213434343434343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0",
		"America/Argentina/Catamarca|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0",
		"America/Argentina/Cordoba|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0",
		"America/Argentina/Jujuy|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 g0p0 10M0 j3c0 uL0",
		"America/Argentina/La_Rioja|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0",
		"America/Argentina/Mendoza|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|0121212121212121212121212121212121212121213434345656543235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 g0p0 10M0 agM0 Op0 7TX0 uL0",
		"America/Argentina/Rio_Gallegos|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0",
		"America/Argentina/Salta|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0",
		"America/Argentina/San_Juan|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ak00 m10 8lb0 uL0",
		"America/Argentina/San_Luis|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456536353465653|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 kin0 10M0 ak00 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0",
		"America/Argentina/Tucuman|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|012121212121212121212121212121212121212121343434345434323534343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 4N0 8BX0 uL0 1qN0 WL0",
		"America/Argentina/Ushuaia|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ajA0 8p0 8zb0 uL0",
		"America/Aruba|LMT ANT AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d",
		"America/Asuncion|AMT PYT PYT PYST|3O.E 40 30 30|012131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0",
		"America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0",
		"America/Bahia|LMT BRT BRST|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0",
		"America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
		"America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0",
		"America/Belem|LMT BRT BRST|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0",
		"America/Belize|LMT CST CHDT CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0",
		"America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0",
		"America/Boa_Vista|LMT AMT AMST|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0",
		"America/Bogota|BMT COT COST|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0",
		"America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Cambridge_Bay|zzz MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Campo_Grande|LMT AMT AMST|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0",
		"America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0",
		"America/Caracas|CMT VET VET|4r.E 4u 40|0121|-2kV7w.k 28KM2.k 1IwOu",
		"America/Cayenne|LMT GFT GFT|3t.k 40 30|012|-2mrwu.E 2gWou.E",
		"America/Cayman|KMT EST|57.b 50|01|-2l1uQ.N",
		"America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
		"America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0",
		"America/Creston|MST PST|70 80|010|-29DR0 43B0",
		"America/Cuiaba|LMT AMT AMST|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0",
		"America/Danmarkshavn|LMT WGT WGST GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0",
		"America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0",
		"America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|01234252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 Jy10 SL0 dnB0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Eirunepe|LMT ACT ACST AMT|4D.s 50 40 40|0121212121212121212121212121212131|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0",
		"America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0",
		"America/Ensenada|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOP0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Fortaleza|LMT BRT BRST|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0",
		"America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Godthab|LMT WGT WGST|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|0121212121212121212121212121212121212121212121212121212121212121212121212123|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0",
		"America/Guayaquil|QMT ECT|5e 50|01|-1yVSK",
		"America/Guyana|LMT GBGT GYT GYT GYT|3Q.E 3J 3J 30 40|01234|-2dvU7.k 24JzQ.k mlc0 Bxbf",
		"America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0",
		"America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0",
		"America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Inuvik|zzz PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Iqaluit|zzz EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0",
		"America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/La_Paz|CMT BOST BOT|4w.A 3w.A 40|012|-1x37r.o 13b0",
		"America/Lima|LMT PET PEST|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0",
		"America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp0 1Vb0 3dB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Maceio|LMT BRT BRST|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0",
		"America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0",
		"America/Manaus|LMT AMT AMST|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0",
		"America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0",
		"America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
		"America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
		"America/Metlakatla|PST PWT PPT PDT|80 70 70 70|0120303030303030303030303030303030|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0",
		"America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
		"America/Miquelon|LMT AST PMST PMDT|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
		"America/Montevideo|MMT UYT UYHST UYST UYT UYHST|3I.I 3u 30 20 30 2u|012121212121212121212121213434343434345454543453434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10",
		"America/Montreal|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-28tR0 bV0 2m30 1in0 121u 1nb0 1g10 11z0 1o0u 11zu 1o0u 11zu 3VAu Rzu 1qMu WLu 1qMu WLu 1qKu WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kO0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Noronha|LMT FNT FNST|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0",
		"America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Panama|CMT EST|5j.A 50|01|-2uduE.o",
		"America/Pangnirtung|zzz AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Paramaribo|LMT PMT PMT NEGT SRT SRT|3E.E 3E.Q 3E.A 3u 3u 30|012345|-2nDUj.k Wqo0.c qanX.I 1dmLN.o lzc0",
		"America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0",
		"America/Port-au-Prince|PPMT EST EDT|4N 50 40|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Porto_Acre|LMT ACT ACST AMT|4v.c 50 40 40|01212121212121212121212121212131|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0",
		"America/Porto_Velho|LMT AMT AMST|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0",
		"America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0",
		"America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Rankin_Inlet|zzz CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Recife|LMT BRT BRST|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0",
		"America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0",
		"America/Resolute|zzz CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Santa_Isabel|LMT MST PST PDT PWT PPT|7D.s 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOP0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0",
		"America/Santarem|LMT AMT AMST BRT|3C.M 40 30 30|0121212121212121212121212121213|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0",
		"America/Santiago|SMT CLT CLT CLST CLST CLT|4G.K 50 40 40 30 30|010203131313131313124242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424245|-2q5Th.e fNch.e 5gLG.K 21bh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9UK0 1Je0 Qen0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0",
		"America/Santo_Domingo|SDMT EST EDT EHDT AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00",
		"America/Sao_Paulo|LMT BRT BRST|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0",
		"America/Scoresbysund|LMT CGT CGST EGST EGT|1r.Q 20 10 0 10|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0",
		"America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0",
		"America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 1Be0 xDz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"America/Yellowknife|zzz MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"Antarctica/Casey|zzz AWST CAST|0 -80 -b0|012121|-2q00 1DjS0 T90 40P0 KL0",
		"Antarctica/Davis|zzz DAVT DAVT|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0",
		"Antarctica/DumontDUrville|zzz PMT DDUT|0 -a0 -a0|0102|-U0o0 cfq0 bFm0",
		"Antarctica/Macquarie|AEST AEDT zzz MIST|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0",
		"Antarctica/Mawson|zzz MAWT MAWT|0 -60 -50|012|-CEo0 2fyk0",
		"Antarctica/McMurdo|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00",
		"Antarctica/Palmer|zzz ARST ART ART ARST CLT CLST CLT|0 30 40 30 20 40 30 30|012121212123435656565656565656565656565656565656565656565656565656565656565656567|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0",
		"Antarctica/Rothera|zzz ROTT|0 30|01|gOo0",
		"Antarctica/Syowa|zzz SYOT|0 -30|01|-vs00",
		"Antarctica/Troll|zzz UTC CEST|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Antarctica/Vostok|zzz VOST|0 -60|01|-tjA0",
		"Arctic/Longyearbyen|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Asia/Aden|LMT AST|-36.Q -30|01|-TvD6.Q",
		"Asia/Almaty|LMT ALMT ALMT ALMST|-57.M -50 -60 -70|0123232323232323232323232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3Cl0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0",
		"Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0",
		"Asia/Anadyr|LMT ANAT ANAT ANAST ANAST ANAST ANAT|-bN.U -c0 -d0 -e0 -d0 -c0 -b0|01232414141414141414141561414141414141414141414141414141414141561|-1PcbN.U eUnN.U 23CL0 1db0 1cN0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0",
		"Asia/Aqtau|LMT FORT FORT SHET SHET SHEST AQTT AQTST AQTST AQTT|-3l.4 -40 -50 -50 -60 -60 -50 -60 -50 -40|012345353535353535353536767676898989898989898989896|-1Pc3l.4 eUnl.4 1jcL0 JDc0 1cL0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cN0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 RW0",
		"Asia/Aqtobe|LMT AKTT AKTT AKTST AKTT AQTT AQTST|-3M.E -40 -50 -60 -60 -50 -60|01234323232323232323232565656565656565656565656565|-1Pc3M.E eUnM.E 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0",
		"Asia/Ashgabat|LMT ASHT ASHT ASHST ASHST TMT TMT|-3R.w -40 -50 -60 -50 -40 -50|012323232323232323232324156|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 ba0 xC0",
		"Asia/Baghdad|BMT AST ADT|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0",
		"Asia/Bahrain|LMT GST AST|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8",
		"Asia/Baku|LMT BAKT BAKT BAKST BAKST AZST AZT AZT AZST|-3j.o -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245657878787878787878787878787878787878787878787878787878787878787878787878787878787878787|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 10K0 c30 1cJ0 1cL0 8wu0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Asia/Bangkok|BMT ICT|-6G.4 -70|01|-218SG.4",
		"Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0",
		"Asia/Bishkek|LMT FRUT FRUT FRUST FRUST KGT KGST KGT|-4W.o -50 -60 -70 -60 -50 -60 -60|01232323232323232323232456565656565656565656565656567|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11c0 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 T8u",
		"Asia/Brunei|LMT BNT BNT|-7D.E -7u -80|012|-1KITD.E gDc9.E",
		"Asia/Calcutta|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0",
		"Asia/Chita|LMT YAKT YAKT YAKST YAKST YAKT IRKT|-7x.Q -80 -90 -a0 -90 -a0 -80|012323232323232323232324123232323232323232323232323232323232323256|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Choibalsan|LMT ULAT ULAT CHOST CHOT CHOT|-7C -70 -80 -a0 -90 -80|012343434343434343434343434343434343434343434345|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0",
		"Asia/Chongqing|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0",
		"Asia/Colombo|MMT IST IHST IST LKT LKT|-5j.w -5u -60 -6u -6u -60|01231451|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu",
		"Asia/Dacca|HMT BURT IST DACT BDT BDST|-5R.k -6u -5u -60 -60 -70|01213454|-18LFR.k 1unn.k HB0 m6n0 LqMu 1x6n0 1i00",
		"Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0",
		"Asia/Dili|LMT TLT JST TLT WITA|-8m.k -80 -90 -90 -80|012343|-2le8m.k 1dnXm.k 8HA0 1ew00 Xld0",
		"Asia/Dubai|LMT GST|-3F.c -40|01|-21JfF.c",
		"Asia/Dushanbe|LMT DUST DUST DUSST DUSST TJT|-4z.c -50 -60 -70 -60 -50|0123232323232323232323245|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 14N0",
		"Asia/Gaza|EET EET EEST IST IDT|-20 -30 -30 -20 -30|010101010102020202020202020202023434343434343434343434343430202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0",
		"Asia/Hebron|EET EET EEST IST IDT|-20 -30 -30 -20 -30|01010101010202020202020202020202343434343434343434343434343020202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0",
		"Asia/Ho_Chi_Minh|LMT PLMT ICT IDT JST|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0",
		"Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0",
		"Asia/Hovd|LMT HOVT HOVT HOVST|-66.A -60 -70 -80|01232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0",
		"Asia/Irkutsk|IMT IRKT IRKT IRKST IRKST IRKT|-6V.5 -70 -80 -90 -80 -90|012323232323232323232324123232323232323232323232323232323232323252|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Istanbul|IMT EET EEST TRST TRT|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1df0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Asia/Jakarta|BMT JAVT WIB JST WIB WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu",
		"Asia/Jayapura|LMT WIT ACST|-9m.M -90 -9u|0121|-1uu9m.M sMMm.M L4nu",
		"Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0",
		"Asia/Kabul|AFT AFT|-40 -4u|01|-10Qs0",
		"Asia/Kamchatka|LMT PETT PETT PETST PETST|-ay.A -b0 -c0 -d0 -c0|01232323232323232323232412323232323232323232323232323232323232412|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0",
		"Asia/Karachi|LMT IST IST KART PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy01 1cL0 dK0X 11b0 1610 1jX0",
		"Asia/Kashgar|LMT XJT|-5O.k -60|01|-1GgtO.k",
		"Asia/Kathmandu|LMT IST NPT|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g",
		"Asia/Khandyga|LMT YAKT YAKT YAKST YAKST VLAT VLAST VLAT YAKT|-92.d -80 -90 -a0 -90 -a0 -b0 -b0 -a0|01232323232323232323232412323232323232323232323232565656565656565782|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0",
		"Asia/Krasnoyarsk|LMT KRAT KRAT KRAST KRAST KRAT|-6b.q -60 -70 -80 -70 -80|012323232323232323232324123232323232323232323232323232323232323252|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Kuala_Lumpur|SMT MALT MALST MALT MALT JST MYT|-6T.p -70 -7k -7k -7u -90 -80|01234546|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu 1so1u",
		"Asia/Kuching|LMT BORT BORT BORTST JST MYT|-7l.k -7u -80 -8k -90 -80|01232323232323232425|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0 1so10",
		"Asia/Macao|LMT MOT MOST CST|-7y.k -80 -90 -80|0121212121212121212121212121212121212121213|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0 KEp0",
		"Asia/Magadan|LMT MAGT MAGT MAGST MAGST MAGT|-a3.c -a0 -b0 -c0 -b0 -c0|012323232323232323232324123232323232323232323232323232323232323251|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Makassar|LMT MMT WITA JST|-7V.A -7V.A -80 -90|01232|-21JjV.A vfc0 myLV.A 8ML0",
		"Asia/Manila|PHT PHST JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0",
		"Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Asia/Novokuznetsk|LMT KRAT KRAT KRAST KRAST NOVST NOVT NOVT|-5M.M -60 -70 -80 -70 -70 -60 -70|012323232323232323232324123232323232323232323232323232323232325672|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0 8Hz0",
		"Asia/Novosibirsk|LMT NOVT NOVT NOVST NOVST|-5v.E -60 -70 -80 -70|0123232323232323232323241232341414141414141414141414141414141414121|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Omsk|LMT OMST OMST OMSST OMSST OMST|-4R.u -50 -60 -70 -60 -70|012323232323232323232324123232323232323232323232323232323232323252|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Oral|LMT URAT URAT URAST URAT URAST ORAT ORAST ORAT|-3p.o -40 -50 -60 -60 -50 -40 -50 -50|012343232323232323251516767676767676767676767676768|-1Pc3p.o eUnp.o 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 2UK0 Fz0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 RW0",
		"Asia/Pontianak|LMT PMT WIB JST WIB WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu",
		"Asia/Pyongyang|LMT KST JCST JST KST|-8n -8u -90 -90 -90|01234|-2um8n 97XR 12FXu jdA0",
		"Asia/Qyzylorda|LMT KIZT KIZT KIZST KIZT QYZT QYZT QYZST|-4l.Q -40 -50 -60 -60 -50 -60 -70|012343232323232323232325676767676767676767676767676|-1Pc4l.Q eUol.Q 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2UK0 dC0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0",
		"Asia/Rangoon|RMT BURT JST MMT|-6o.E -6u -90 -6u|0123|-21Jio.E SmnS.E 7j9u",
		"Asia/Sakhalin|LMT JCST JST SAKT SAKST SAKST SAKT|-9u.M -90 -90 -b0 -c0 -b0 -a0|0123434343434343434343435634343434343565656565656565656565656565636|-2AGVu.M 1iaMu.M je00 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o10 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Samarkand|LMT SAMT SAMT SAMST TAST UZST UZT|-4r.R -40 -50 -60 -60 -60 -50|01234323232323232323232356|-1Pc4r.R eUor.R 23CL0 1db0 1cM0 1dc0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11x0 bf0",
		"Asia/Seoul|LMT KST JCST JST KST KDT KDT|-8r.Q -8u -90 -90 -90 -9u -a0|01234151515151515146464|-2um8r.Q 97XV.Q 12FXu jjA0 kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0",
		"Asia/Singapore|SMT MALT MALST MALT MALT JST SGT SGT|-6T.p -70 -7k -7k -7u -90 -7u -80|012345467|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu Mspu DTA0",
		"Asia/Srednekolymsk|LMT MAGT MAGT MAGST MAGST MAGT SRET|-ae.Q -a0 -b0 -c0 -b0 -c0 -b0|012323232323232323232324123232323232323232323232323232323232323256|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Taipei|JWST JST CST CDT|-80 -90 -80 -90|01232323232323232323232323232323232323232|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0",
		"Asia/Tashkent|LMT TAST TAST TASST TASST UZST UZT|-4B.b -50 -60 -70 -60 -60 -50|01232323232323232323232456|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 11y0 bf0",
		"Asia/Tbilisi|TBMT TBIT TBIT TBIST TBIST GEST GET GET GEST|-2X.b -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245656565787878787878787878567|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 3y0 19f0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cM0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0",
		"Asia/Tehran|LMT TMT IRST IRST IRDT IRDT|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0",
		"Asia/Thimbu|LMT IST BTT|-5W.A -5u -60|012|-Su5W.A 1BGMs.A",
		"Asia/Tokyo|JCST JST JDT|-90 -90 -a0|0121212121|-1iw90 pKq0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0",
		"Asia/Ulaanbaatar|LMT ULAT ULAT ULAST|-77.w -70 -80 -90|01232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0",
		"Asia/Ust-Nera|LMT YAKT YAKT MAGST MAGT MAGST MAGT MAGT VLAT VLAT|-9w.S -80 -90 -c0 -b0 -b0 -a0 -c0 -b0 -a0|0123434343434343434343456434343434343434343434343434343434343434789|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0",
		"Asia/Vladivostok|LMT VLAT VLAT VLAST VLAST VLAT|-8L.v -90 -a0 -b0 -a0 -b0|012323232323232323232324123232323232323232323232323232323232323252|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Yakutsk|LMT YAKT YAKT YAKST YAKST YAKT|-8C.W -80 -90 -a0 -90 -a0|012323232323232323232324123232323232323232323232323232323232323252|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Yekaterinburg|LMT PMT SVET SVET SVEST SVEST YEKT YEKST YEKT|-42.x -3J.5 -40 -50 -60 -50 -50 -60 -60|0123434343434343434343435267676767676767676767676767676767676767686|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Asia/Yerevan|LMT YERT YERT YERST YERST AMST AMT AMT AMST|-2W -30 -40 -50 -40 -40 -30 -40 -50|0123232323232323232323245656565657878787878787878787878787878787|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1am0 2r0 1cJ0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fb0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0",
		"Atlantic/Azores|HMT AZOT AZOST AZOMT AZOT AZOST WET|1S.w 20 10 0 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545456545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"Atlantic/Canary|LMT CANT WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Atlantic/Cape_Verde|LMT CVT CVST CVT|1y.4 20 10 10|01213|-2xomp.U 1qOMp.U 7zX0 1djf0",
		"Atlantic/Faeroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Atlantic/Madeira|FMT MADT MADST MADMT WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Atlantic/Reykjavik|LMT IST ISST GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0",
		"Atlantic/South_Georgia|GST|20|0|",
		"Atlantic/Stanley|SMT FKT FKST FKT FKST|3P.o 40 30 30 20|0121212121212134343212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 U10 1qM0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10",
		"Australia/ACT|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0",
		"Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0",
		"Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0",
		"Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0",
		"Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0",
		"Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0",
		"Australia/Eucla|ACWST ACWDT|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0",
		"Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0",
		"Australia/LHI|AEST LHST LHDT LHDT|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu",
		"Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0",
		"Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0",
		"Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0",
		"CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"Chile/EasterIsland|EMT EASST EAST EASST EAST EAST|7h.s 60 70 50 60 50|0121212121212121212121212121212134343434343434343434343434343434343434343434343434343434343434343435|-1uSgG.w nHUG.w op0 9UK0 RXB0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11b0 o0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1ld0 14n0 1qN0 11z0 1cN0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 1wn0",
		"EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"EST|EST|50|0|",
		"EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"Eire|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g5X0 14p0 1wn0 17d0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Etc/GMT+0|GMT|0|0|",
		"Etc/GMT+1|GMT+1|10|0|",
		"Etc/GMT+10|GMT+10|a0|0|",
		"Etc/GMT+11|GMT+11|b0|0|",
		"Etc/GMT+12|GMT+12|c0|0|",
		"Etc/GMT+2|GMT+2|20|0|",
		"Etc/GMT+3|GMT+3|30|0|",
		"Etc/GMT+4|GMT+4|40|0|",
		"Etc/GMT+5|GMT+5|50|0|",
		"Etc/GMT+6|GMT+6|60|0|",
		"Etc/GMT+7|GMT+7|70|0|",
		"Etc/GMT+8|GMT+8|80|0|",
		"Etc/GMT+9|GMT+9|90|0|",
		"Etc/GMT-1|GMT-1|-10|0|",
		"Etc/GMT-10|GMT-10|-a0|0|",
		"Etc/GMT-11|GMT-11|-b0|0|",
		"Etc/GMT-12|GMT-12|-c0|0|",
		"Etc/GMT-13|GMT-13|-d0|0|",
		"Etc/GMT-14|GMT-14|-e0|0|",
		"Etc/GMT-2|GMT-2|-20|0|",
		"Etc/GMT-3|GMT-3|-30|0|",
		"Etc/GMT-4|GMT-4|-40|0|",
		"Etc/GMT-5|GMT-5|-50|0|",
		"Etc/GMT-6|GMT-6|-60|0|",
		"Etc/GMT-7|GMT-7|-70|0|",
		"Etc/GMT-8|GMT-8|-80|0|",
		"Etc/GMT-9|GMT-9|-90|0|",
		"Etc/UCT|UCT|0|0|",
		"Etc/UTC|UTC|0|0|",
		"Europe/Amsterdam|AMT NST NEST NET CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Belfast|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Bratislava|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Busingen|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|0123232323232323232345454676767676767676767623232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1ty0 2bD0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET FET|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454545454676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1cJ0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|01010101010101010101010121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-28dd0 11A0 1go0 19A0 1co0 1dA0 b1A0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 iyo0 Rc0 18o0 1hc0 1io0 1a00 14o0 5aL0 MM0 1vc0 17A0 1i00 1bc0 1eo0 17d0 1in0 17A0 6hA0 10N0 XIL0 1a10 1in0 17d0 19X0 1cN0 1fz0 1a10 1fX0 1cp0 1cO0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 1cM0 1cM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1cp0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Minsk|MMT EET MSK CEST CET MSD EEST FET|-1O -20 -30 -20 -10 -40 -30 -30|012343432525252525252525252616161616161616161616161616161616161616172|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cK0 1cM0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hy0",
		"Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Moscow|MMT MMT MST MDST MSD MSK MSM EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c20 imv.j 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rU0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2as10 M00 1cM0 1cM0 14o0 1o00 WM0 1qM0 17c0 1cM0 M3A0 5M20 WM0 1fA0 1cM0 16K0 1iO0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 Lz0 1C10 Lz0 1EN0 Lz0 1C10 Lz0 1zd0 Oo0 1C00 On0 1C10 Lz0 1zd0 On0 1C10 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Samara|LMT SAMT SAMT KUYT KUYST MSD MSK EEST KUYT SAMST SAMST|-3k.k -30 -40 -40 -50 -40 -30 -30 -30 -50 -40|012343434343434343435656782929292929292929292929292929292929292a12|-22WNk.k qHak.k bcn0 1Qqo0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cN0 8o0 14j0 1cL0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qN0 WM0",
		"Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0",
		"Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646464647373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Volgograd|LMT TSAT STAT STAT VOLT VOLST VOLST VOLT MSK MSK|-2V.E -30 -30 -40 -40 -50 -40 -30 -40 -30|012345454545454545454676748989898989898989898989898989898989898989|-21IqV.E cLXV.E cEM0 1gqn0 Lco0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 2pz0 1cJ0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0",
		"Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"Europe/Zaporozhye|CUT EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"HST|HST|a0|0|",
		"Indian/Chagos|LMT IOT IOT|-4N.E -50 -60|012|-2xosN.E 3AGLN.E",
		"Indian/Christmas|CXT|-70|0|",
		"Indian/Cocos|CCT|-6u|0|",
		"Indian/Kerguelen|zzz TFT|0 -50|01|-MG00",
		"Indian/Mahe|LMT SCT|-3F.M -40|01|-2yO3F.M",
		"Indian/Maldives|MMT MVT|-4S -50|01|-olgS",
		"Indian/Mauritius|LMT MUT MUST|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0",
		"Indian/Reunion|LMT RET|-3F.Q -40|01|-2mDDF.Q",
		"Kwajalein|MHT KWAT MHT|-b0 c0 -c0|012|-AX0 W9X0",
		"MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
		"MST|MST|70|0|",
		"MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"NZ-CHAT|CHAST CHAST CHADT|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00",
		"PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
		"Pacific/Apia|LMT WSST SST SDT WSDT WSST|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00",
		"Pacific/Bougainville|PGT JST BST|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0",
		"Pacific/Chuuk|CHUT|-a0|0|",
		"Pacific/Efate|LMT VUT VUST|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0",
		"Pacific/Enderbury|PHOT PHOT PHOT|c0 b0 -d0|012|nIc0 B8n0",
		"Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0",
		"Pacific/Fiji|LMT FJT FJST|-bT.I -c0 -d0|012121212121212121212121212121212121212121212121212121212121212|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 xA0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1SM0",
		"Pacific/Funafuti|TVT|-c0|0|",
		"Pacific/Galapagos|LMT ECT GALT|5W.o 50 60|012|-1yVS1.A 2dTz1.A",
		"Pacific/Gambier|LMT GAMT|8X.M 90|01|-2jof0.c",
		"Pacific/Guadalcanal|LMT SBT|-aD.M -b0|01|-2joyD.M",
		"Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0",
		"Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0",
		"Pacific/Kiritimati|LINT LINT LINT|aE a0 -e0|012|nIaE B8nk",
		"Pacific/Kosrae|KOST KOST|-b0 -c0|010|-AX0 1bdz0",
		"Pacific/Majuro|MHT MHT|-b0 -c0|01|-AX0",
		"Pacific/Marquesas|LMT MART|9i 9u|01|-2joeG",
		"Pacific/Midway|NST NDT BST SST|b0 a0 b0 b0|01023|-x3N0 An0 pJd0 EyM0",
		"Pacific/Nauru|LMT NRT JST NRT|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu",
		"Pacific/Niue|NUT NUT NUT|bk bu b0|012|-KfME 17y0a",
		"Pacific/Norfolk|NMT NFT|-bc -bu|01|-Kgbc",
		"Pacific/Noumea|LMT NCT NCST|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0",
		"Pacific/Pago_Pago|LMT NST BST SST|bm.M b0 b0 b0|0123|-2nDMB.c 2gVzB.c EyM0",
		"Pacific/Palau|PWT|-90|0|",
		"Pacific/Pitcairn|PNT PST|8u 80|01|18Vku",
		"Pacific/Pohnpei|PONT|-b0|0|",
		"Pacific/Port_Moresby|PGT|-a0|0|",
		"Pacific/Rarotonga|CKT CKHST CKT|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu",
		"Pacific/Saipan|MPT MPT ChST|-90 -a0 -a0|012|-AV0 1g2n0",
		"Pacific/Tahiti|LMT TAHT|9W.g a0|01|-2joe1.I",
		"Pacific/Tarawa|GILT|-c0|0|",
		"Pacific/Tongatapu|TOT TOT TOST|-ck -d0 -e0|01212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0",
		"Pacific/Wake|WAKT|-c0|0|",
		"Pacific/Wallis|WFT|-c0|0|",
		"WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"
	],
	"links": [
		"Africa/Abidjan|Africa/Bamako",
		"Africa/Abidjan|Africa/Banjul",
		"Africa/Abidjan|Africa/Conakry",
		"Africa/Abidjan|Africa/Dakar",
		"Africa/Abidjan|Africa/Freetown",
		"Africa/Abidjan|Africa/Lome",
		"Africa/Abidjan|Africa/Nouakchott",
		"Africa/Abidjan|Africa/Ouagadougou",
		"Africa/Abidjan|Africa/Sao_Tome",
		"Africa/Abidjan|Africa/Timbuktu",
		"Africa/Abidjan|Atlantic/St_Helena",
		"Africa/Addis_Ababa|Africa/Asmara",
		"Africa/Addis_Ababa|Africa/Asmera",
		"Africa/Addis_Ababa|Africa/Dar_es_Salaam",
		"Africa/Addis_Ababa|Africa/Djibouti",
		"Africa/Addis_Ababa|Africa/Kampala",
		"Africa/Addis_Ababa|Africa/Mogadishu",
		"Africa/Addis_Ababa|Africa/Nairobi",
		"Africa/Addis_Ababa|Indian/Antananarivo",
		"Africa/Addis_Ababa|Indian/Comoro",
		"Africa/Addis_Ababa|Indian/Mayotte",
		"Africa/Bangui|Africa/Brazzaville",
		"Africa/Bangui|Africa/Douala",
		"Africa/Bangui|Africa/Kinshasa",
		"Africa/Bangui|Africa/Lagos",
		"Africa/Bangui|Africa/Libreville",
		"Africa/Bangui|Africa/Luanda",
		"Africa/Bangui|Africa/Malabo",
		"Africa/Bangui|Africa/Niamey",
		"Africa/Bangui|Africa/Porto-Novo",
		"Africa/Blantyre|Africa/Bujumbura",
		"Africa/Blantyre|Africa/Gaborone",
		"Africa/Blantyre|Africa/Harare",
		"Africa/Blantyre|Africa/Kigali",
		"Africa/Blantyre|Africa/Lubumbashi",
		"Africa/Blantyre|Africa/Lusaka",
		"Africa/Blantyre|Africa/Maputo",
		"Africa/Cairo|Egypt",
		"Africa/Johannesburg|Africa/Maseru",
		"Africa/Johannesburg|Africa/Mbabane",
		"Africa/Juba|Africa/Khartoum",
		"Africa/Tripoli|Libya",
		"America/Adak|America/Atka",
		"America/Adak|US/Aleutian",
		"America/Anchorage|US/Alaska",
		"America/Anguilla|America/Dominica",
		"America/Anguilla|America/Grenada",
		"America/Anguilla|America/Guadeloupe",
		"America/Anguilla|America/Marigot",
		"America/Anguilla|America/Montserrat",
		"America/Anguilla|America/Port_of_Spain",
		"America/Anguilla|America/St_Barthelemy",
		"America/Anguilla|America/St_Kitts",
		"America/Anguilla|America/St_Lucia",
		"America/Anguilla|America/St_Thomas",
		"America/Anguilla|America/St_Vincent",
		"America/Anguilla|America/Tortola",
		"America/Anguilla|America/Virgin",
		"America/Argentina/Buenos_Aires|America/Buenos_Aires",
		"America/Argentina/Catamarca|America/Argentina/ComodRivadavia",
		"America/Argentina/Catamarca|America/Catamarca",
		"America/Argentina/Cordoba|America/Cordoba",
		"America/Argentina/Cordoba|America/Rosario",
		"America/Argentina/Jujuy|America/Jujuy",
		"America/Argentina/Mendoza|America/Mendoza",
		"America/Aruba|America/Curacao",
		"America/Aruba|America/Kralendijk",
		"America/Aruba|America/Lower_Princes",
		"America/Atikokan|America/Coral_Harbour",
		"America/Chicago|US/Central",
		"America/Denver|America/Shiprock",
		"America/Denver|Navajo",
		"America/Denver|US/Mountain",
		"America/Detroit|US/Michigan",
		"America/Edmonton|Canada/Mountain",
		"America/Ensenada|America/Tijuana",
		"America/Ensenada|Mexico/BajaNorte",
		"America/Fort_Wayne|America/Indiana/Indianapolis",
		"America/Fort_Wayne|America/Indianapolis",
		"America/Fort_Wayne|US/East-Indiana",
		"America/Halifax|Canada/Atlantic",
		"America/Havana|Cuba",
		"America/Indiana/Knox|America/Knox_IN",
		"America/Indiana/Knox|US/Indiana-Starke",
		"America/Jamaica|Jamaica",
		"America/Kentucky/Louisville|America/Louisville",
		"America/Los_Angeles|US/Pacific",
		"America/Los_Angeles|US/Pacific-New",
		"America/Manaus|Brazil/West",
		"America/Mazatlan|Mexico/BajaSur",
		"America/Mexico_City|Mexico/General",
		"America/New_York|US/Eastern",
		"America/Noronha|Brazil/DeNoronha",
		"America/Phoenix|US/Arizona",
		"America/Porto_Acre|America/Rio_Branco",
		"America/Porto_Acre|Brazil/Acre",
		"America/Regina|Canada/East-Saskatchewan",
		"America/Regina|Canada/Saskatchewan",
		"America/Santiago|Chile/Continental",
		"America/Sao_Paulo|Brazil/East",
		"America/St_Johns|Canada/Newfoundland",
		"America/Toronto|Canada/Eastern",
		"America/Vancouver|Canada/Pacific",
		"America/Whitehorse|Canada/Yukon",
		"America/Winnipeg|Canada/Central",
		"Antarctica/McMurdo|Antarctica/South_Pole",
		"Antarctica/McMurdo|NZ",
		"Antarctica/McMurdo|Pacific/Auckland",
		"Arctic/Longyearbyen|Atlantic/Jan_Mayen",
		"Arctic/Longyearbyen|Europe/Oslo",
		"Asia/Aden|Asia/Kuwait",
		"Asia/Aden|Asia/Riyadh",
		"Asia/Ashgabat|Asia/Ashkhabad",
		"Asia/Bahrain|Asia/Qatar",
		"Asia/Bangkok|Asia/Phnom_Penh",
		"Asia/Bangkok|Asia/Vientiane",
		"Asia/Calcutta|Asia/Kolkata",
		"Asia/Chongqing|Asia/Chungking",
		"Asia/Chongqing|Asia/Harbin",
		"Asia/Chongqing|Asia/Shanghai",
		"Asia/Chongqing|PRC",
		"Asia/Dacca|Asia/Dhaka",
		"Asia/Dubai|Asia/Muscat",
		"Asia/Ho_Chi_Minh|Asia/Saigon",
		"Asia/Hong_Kong|Hongkong",
		"Asia/Istanbul|Europe/Istanbul",
		"Asia/Istanbul|Turkey",
		"Asia/Jerusalem|Asia/Tel_Aviv",
		"Asia/Jerusalem|Israel",
		"Asia/Kashgar|Asia/Urumqi",
		"Asia/Kathmandu|Asia/Katmandu",
		"Asia/Macao|Asia/Macau",
		"Asia/Makassar|Asia/Ujung_Pandang",
		"Asia/Nicosia|Europe/Nicosia",
		"Asia/Seoul|ROK",
		"Asia/Singapore|Singapore",
		"Asia/Taipei|ROC",
		"Asia/Tehran|Iran",
		"Asia/Thimbu|Asia/Thimphu",
		"Asia/Tokyo|Japan",
		"Asia/Ulaanbaatar|Asia/Ulan_Bator",
		"Atlantic/Faeroe|Atlantic/Faroe",
		"Atlantic/Reykjavik|Iceland",
		"Australia/ACT|Australia/Canberra",
		"Australia/ACT|Australia/NSW",
		"Australia/ACT|Australia/Sydney",
		"Australia/Adelaide|Australia/South",
		"Australia/Brisbane|Australia/Queensland",
		"Australia/Broken_Hill|Australia/Yancowinna",
		"Australia/Darwin|Australia/North",
		"Australia/Hobart|Australia/Tasmania",
		"Australia/LHI|Australia/Lord_Howe",
		"Australia/Melbourne|Australia/Victoria",
		"Australia/Perth|Australia/West",
		"Chile/EasterIsland|Pacific/Easter",
		"Eire|Europe/Dublin",
		"Etc/GMT+0|Etc/GMT",
		"Etc/GMT+0|Etc/GMT-0",
		"Etc/GMT+0|Etc/GMT0",
		"Etc/GMT+0|Etc/Greenwich",
		"Etc/GMT+0|GMT",
		"Etc/GMT+0|GMT+0",
		"Etc/GMT+0|GMT-0",
		"Etc/GMT+0|GMT0",
		"Etc/GMT+0|Greenwich",
		"Etc/UCT|UCT",
		"Etc/UTC|Etc/Universal",
		"Etc/UTC|Etc/Zulu",
		"Etc/UTC|UTC",
		"Etc/UTC|Universal",
		"Etc/UTC|Zulu",
		"Europe/Belfast|Europe/Guernsey",
		"Europe/Belfast|Europe/Isle_of_Man",
		"Europe/Belfast|Europe/Jersey",
		"Europe/Belfast|Europe/London",
		"Europe/Belfast|GB",
		"Europe/Belfast|GB-Eire",
		"Europe/Belgrade|Europe/Ljubljana",
		"Europe/Belgrade|Europe/Podgorica",
		"Europe/Belgrade|Europe/Sarajevo",
		"Europe/Belgrade|Europe/Skopje",
		"Europe/Belgrade|Europe/Zagreb",
		"Europe/Bratislava|Europe/Prague",
		"Europe/Busingen|Europe/Vaduz",
		"Europe/Busingen|Europe/Zurich",
		"Europe/Chisinau|Europe/Tiraspol",
		"Europe/Helsinki|Europe/Mariehamn",
		"Europe/Lisbon|Portugal",
		"Europe/Moscow|W-SU",
		"Europe/Rome|Europe/San_Marino",
		"Europe/Rome|Europe/Vatican",
		"Europe/Warsaw|Poland",
		"Kwajalein|Pacific/Kwajalein",
		"NZ-CHAT|Pacific/Chatham",
		"Pacific/Chuuk|Pacific/Truk",
		"Pacific/Chuuk|Pacific/Yap",
		"Pacific/Honolulu|Pacific/Johnston",
		"Pacific/Honolulu|US/Hawaii",
		"Pacific/Pago_Pago|Pacific/Samoa",
		"Pacific/Pago_Pago|US/Samoa",
		"Pacific/Pohnpei|Pacific/Ponape"
	]
}
},{}],7:[function(require,module,exports){
var moment = module.exports = require("./moment-timezone");
moment.tz.load(require('./data/packed/latest.json'));

},{"./data/packed/latest.json":6,"./moment-timezone":8}],8:[function(require,module,exports){
//! moment-timezone.js
//! version : 0.3.1
//! author : Tim Wood
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if (typeof define === 'function' && define.amd) {
		define(['moment'], factory);                 // AMD
	} else if (typeof exports === 'object') {
		module.exports = factory(require('moment')); // Node
	} else {
		factory(root.moment);                        // Browser
	}
}(this, function (moment) {
	"use strict";

	// Do not load moment-timezone a second time.
	if (moment.tz !== undefined) { return moment; }

	var VERSION = "0.3.1",
		zones = {},
		links = {},

		momentVersion = moment.version.split('.'),
		major = +momentVersion[0],
		minor = +momentVersion[1];

	// Moment.js version check
	if (major < 2 || (major === 2 && minor < 6)) {
		logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
	}

	/************************************
		Unpacking
	************************************/

	function charCodeToInt(charCode) {
		if (charCode > 96) {
			return charCode - 87;
		} else if (charCode > 64) {
			return charCode - 29;
		}
		return charCode - 48;
	}

	function unpackBase60(string) {
		var i = 0,
			parts = string.split('.'),
			whole = parts[0],
			fractional = parts[1] || '',
			multiplier = 1,
			num,
			out = 0,
			sign = 1;

		// handle negative numbers
		if (string.charCodeAt(0) === 45) {
			i = 1;
			sign = -1;
		}

		// handle digits before the decimal
		for (i; i < whole.length; i++) {
			num = charCodeToInt(whole.charCodeAt(i));
			out = 60 * out + num;
		}

		// handle digits after the decimal
		for (i = 0; i < fractional.length; i++) {
			multiplier = multiplier / 60;
			num = charCodeToInt(fractional.charCodeAt(i));
			out += num * multiplier;
		}

		return out * sign;
	}

	function arrayToInt (array) {
		for (var i = 0; i < array.length; i++) {
			array[i] = unpackBase60(array[i]);
		}
	}

	function intToUntil (array, length) {
		for (var i = 0; i < length; i++) {
			array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
		}

		array[length - 1] = Infinity;
	}

	function mapIndices (source, indices) {
		var out = [], i;

		for (i = 0; i < indices.length; i++) {
			out[i] = source[indices[i]];
		}

		return out;
	}

	function unpack (string) {
		var data = string.split('|'),
			offsets = data[2].split(' '),
			indices = data[3].split(''),
			untils  = data[4].split(' ');

		arrayToInt(offsets);
		arrayToInt(indices);
		arrayToInt(untils);

		intToUntil(untils, indices.length);

		return {
			name    : data[0],
			abbrs   : mapIndices(data[1].split(' '), indices),
			offsets : mapIndices(offsets, indices),
			untils  : untils
		};
	}

	/************************************
		Zone object
	************************************/

	function Zone (packedString) {
		if (packedString) {
			this._set(unpack(packedString));
		}
	}

	Zone.prototype = {
		_set : function (unpacked) {
			this.name    = unpacked.name;
			this.abbrs   = unpacked.abbrs;
			this.untils  = unpacked.untils;
			this.offsets = unpacked.offsets;
		},

		_index : function (timestamp) {
			var target = +timestamp,
				untils = this.untils,
				i;

			for (i = 0; i < untils.length; i++) {
				if (target < untils[i]) {
					return i;
				}
			}
		},

		parse : function (timestamp) {
			var target  = +timestamp,
				offsets = this.offsets,
				untils  = this.untils,
				max     = untils.length - 1,
				offset, offsetNext, offsetPrev, i;

			for (i = 0; i < max; i++) {
				offset     = offsets[i];
				offsetNext = offsets[i + 1];
				offsetPrev = offsets[i ? i - 1 : i];

				if (offset < offsetNext && tz.moveAmbiguousForward) {
					offset = offsetNext;
				} else if (offset > offsetPrev && tz.moveInvalidForward) {
					offset = offsetPrev;
				}

				if (target < untils[i] - (offset * 60000)) {
					return offsets[i];
				}
			}

			return offsets[max];
		},

		abbr : function (mom) {
			return this.abbrs[this._index(mom)];
		},

		offset : function (mom) {
			return this.offsets[this._index(mom)];
		}
	};

	/************************************
		Global Methods
	************************************/

	function normalizeName (name) {
		return (name || '').toLowerCase().replace(/\//g, '_');
	}

	function addZone (packed) {
		var i, zone, zoneName;

		if (typeof packed === "string") {
			packed = [packed];
		}

		for (i = 0; i < packed.length; i++) {
			zone = new Zone(packed[i]);
			zoneName = normalizeName(zone.name);
			zones[zoneName] = zone;
			upgradeLinksToZones(zoneName);
		}
	}

	function getZone (name) {
		return zones[normalizeName(name)] || null;
	}

	function getNames () {
		var i, out = [];

		for (i in zones) {
			if (zones.hasOwnProperty(i) && zones[i]) {
				out.push(zones[i].name);
			}
		}

		return out.sort();
	}

	function addLink (aliases) {
		var i, alias;

		if (typeof aliases === "string") {
			aliases = [aliases];
		}

		for (i = 0; i < aliases.length; i++) {
			alias = aliases[i].split('|');
			pushLink(alias[0], alias[1]);
			pushLink(alias[1], alias[0]);
		}
	}

	function upgradeLinksToZones (zoneName) {
		if (!links[zoneName]) {
			return;
		}

		var i,
			zone = zones[zoneName],
			linkNames = links[zoneName];

		for (i = 0; i < linkNames.length; i++) {
			copyZoneWithName(zone, linkNames[i]);
		}

		links[zoneName] = null;
	}

	function copyZoneWithName (zone, name) {
		var linkZone = zones[normalizeName(name)] = new Zone();
		linkZone._set(zone);
		linkZone.name = name;
	}

	function pushLink (zoneName, linkName) {
		zoneName = normalizeName(zoneName);

		if (zones[zoneName]) {
			copyZoneWithName(zones[zoneName], linkName);
		} else {
			links[zoneName] = links[zoneName] || [];
			links[zoneName].push(linkName);
		}
	}

	function loadData (data) {
		addZone(data.zones);
		addLink(data.links);
		tz.dataVersion = data.version;
	}

	function zoneExists (name) {
		if (!zoneExists.didShowError) {
			zoneExists.didShowError = true;
				logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
		}
		return !!getZone(name);
	}

	function needsOffset (m) {
		return !!(m._a && (m._tzm === undefined));
	}

	function logError (message) {
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			console.error(message);
		}
	}

	/************************************
		moment.tz namespace
	************************************/

	function tz (input) {
		var args = Array.prototype.slice.call(arguments, 0, -1),
			name = arguments[arguments.length - 1],
			zone = getZone(name),
			out  = moment.utc.apply(null, args);

		if (zone && !moment.isMoment(input) && needsOffset(out)) {
			out.add(zone.parse(out), 'minutes');
		}

		out.tz(name);

		return out;
	}

	tz.version      = VERSION;
	tz.dataVersion  = '';
	tz._zones       = zones;
	tz._links       = links;
	tz.add          = addZone;
	tz.link         = addLink;
	tz.load         = loadData;
	tz.zone         = getZone;
	tz.zoneExists   = zoneExists; // deprecated in 0.1.0
	tz.names        = getNames;
	tz.Zone         = Zone;
	tz.unpack       = unpack;
	tz.unpackBase60 = unpackBase60;
	tz.needsOffset  = needsOffset;
	tz.moveInvalidForward   = true;
	tz.moveAmbiguousForward = false;

	/************************************
		Interface with Moment.js
	************************************/

	var fn = moment.fn;

	moment.tz = tz;

	moment.defaultZone = null;

	moment.updateOffset = function (mom, keepTime) {
		var offset;
		if (mom._z === undefined) {
			mom._z = moment.defaultZone;
		}
		if (mom._z) {
			offset = mom._z.offset(mom);
			if (Math.abs(offset) < 16) {
				offset = offset / 60;
			}
			if (mom.utcOffset !== undefined) {
				mom.utcOffset(-offset, keepTime);
			} else {
				mom.zone(offset, keepTime);
			}
		}
	};

	fn.tz = function (name) {
		if (name) {
			this._z = getZone(name);
			if (this._z) {
				moment.updateOffset(this);
			} else {
				logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
			}
			return this;
		}
		if (this._z) { return this._z.name; }
	};

	function abbrWrap (old) {
		return function () {
			if (this._z) { return this._z.abbr(this); }
			return old.call(this);
		};
	}

	function resetZoneWrap (old) {
		return function () {
			this._z = null;
			return old.apply(this, arguments);
		};
	}

	fn.zoneName = abbrWrap(fn.zoneName);
	fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
	fn.utc      = resetZoneWrap(fn.utc);

	moment.tz.setDefault = function(name) {
		if (major < 2 || (major === 2 && minor < 9)) {
			logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
		}
		moment.defaultZone = name ? getZone(name) : null;
		return moment;
	};

	// Cloning a moment should include the _z property.
	var momentProperties = moment.momentProperties;
	if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
		// moment 2.8.1+
		momentProperties.push('_z');
		momentProperties.push('_a');
	} else if (momentProperties) {
		// moment 2.7.0
		momentProperties._z = null;
	}

	// INJECT DATA

	return moment;
}));

},{"moment":9}],9:[function(require,module,exports){
(function (global){
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.9.0',
        // the global-scope this is NOT the global object in Node.js
        globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenOffsetMs = /[\+\-]?\d+/, // 1234567890123
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = this.utcOffset(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            x    : function () {
                return this.valueOf();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],

        updateInProgress = false;

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // thie is not supposed to happen
            return hour;
        }
    }

    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            moment.updateOffset(this);
            updateInProgress = false;
        }
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 24 ||
                    (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 ||
                                           m._a[SECOND] !== 0 ||
                                           m._a[MILLISECOND] !== 0)) ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0 &&
                    m._pf.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/utcOffset equivalent to
    // model.
    function makeAs(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (moment.isMoment(input) || isDate(input) ?
                    +input : +moment(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            moment.updateOffset(res, false);
            return res;
        } else {
            return moment(input).local();
        }
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
            // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _ordinalParseLenient.
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName, format, strict) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
                this._longMonthsParse = [];
                this._shortMonthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                mom = moment.utc([2000, i]);
                if (strict && !this._longMonthsParse[i]) {
                    this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                    this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
                }
                if (!strict && !this._monthsParse[i]) {
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                    return i;
                } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                    return i;
                } else if (!strict && this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LTS : 'h:mm:ss A',
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },


        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom, now) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom, [now]) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',
        _ordinalParse : /\d{1,2}/,

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        firstDayOfWeek : function () {
            return this._week.dow;
        },

        firstDayOfYear : function () {
            return this._week.doy;
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'x':
            return parseTokenOffsetMs;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function utcOffsetFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(
                            input.match(/\d{1,2}/)[0], 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._meridiem = input;
            // config._isPm = config._locale.isPM(input);
            break;
        // HOUR
        case 'h' : // fall through to hh
        case 'hh' :
            config._pf.bigHour = true;
            /* falls through */
        case 'H' : // fall through to HH
        case 'HH' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX OFFSET (MILLISECONDS)
        case 'x':
            config._d = new Date(toInt(input));
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = utcOffsetFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day || normalizedInput.date,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
            config._pf.bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR],
                config._meridiem);
        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f,
            res;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        res = new Moment(config);
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    moment.isDate = isDate;

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d - ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                if ('function' === typeof Date.prototype.toISOString) {
                    // native implementation is ~50x faster, use it when we can
                    return this.toDate().toISOString();
                } else {
                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
                }
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.utcOffset(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.subtract(this._dateUtcOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
                anchor, diff, output, daysAdjust;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month' || units === 'quarter') {
                output = monthDiff(this, that);
                if (units === 'quarter') {
                    output = output / 3;
                } else if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = this - that;
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're locat/utc/offset
            // or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this, moment(now)));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            if (units === undefined || units === 'millisecond') {
                return this;
            }
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return inputMs < +this.clone().startOf(units);
            }
        },

        isBefore: function (input, units) {
            var inputMs;
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                inputMs = moment.isMoment(input) ? +input : +moment(input);
                return +this.clone().endOf(units) < inputMs;
            }
        },

        isBetween: function (from, to, units) {
            return this.isAfter(from, units) && this.isBefore(to, units);
        },

        isSame: function (input, units) {
            var inputMs;
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                inputMs = +moment(input);
                return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
            }
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        zone : deprecate(
                'moment().zone is deprecated, use moment().utcOffset instead. ' +
                'https://github.com/moment/moment/issues/1779',
                function (input, keepLocalTime) {
                    if (input != null) {
                        if (typeof input !== 'string') {
                            input = -input;
                        }

                        this.utcOffset(input, keepLocalTime);

                        return this;
                    } else {
                        return -this.utcOffset();
                    }
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        utcOffset : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = utcOffsetFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateUtcOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.add(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(input - offset, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }

                return this;
            } else {
                return this._isUTC ? offset : this._dateUtcOffset();
            }
        },

        isLocal : function () {
            return !this._isUTC;
        },

        isUtcOffset : function () {
            return this._isUTC;
        },

        isUtc : function () {
            return this._isUTC && this._offset === 0;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.utcOffset(this._tzm);
            } else if (typeof this._i === 'string') {
                this.utcOffset(utcOffsetFromString(this._i));
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).utcOffset();
            }

            return (this.utcOffset() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            var unit;
            if (typeof units === 'object') {
                for (unit in units) {
                    this.set(unit, units[unit]);
                }
            }
            else {
                units = normalizeUnits(units);
                if (typeof this[units] === 'function') {
                    this[units](value);
                }
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },

        lang : deprecate(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),

        localeData : function () {
            return this._locale;
        },

        _dateUtcOffset : function () {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }

    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    // alias isUtc for dev-friendliness
    moment.fn.isUTC = moment.fn.isUtc;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(yearsToDays(this._months / 12));
                switch (units) {
                    case 'week': return days / 7 + this._milliseconds / 6048e5;
                    case 'day': return days + this._milliseconds / 864e5;
                    case 'hour': return days * 24 + this._milliseconds / 36e5;
                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        },

        toJSON : function () {
            return this.toISOString();
        }
    });

    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define(function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire((typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null));

var Main = _interopRequire(require("./components/Main.react"));

// Application root element
React.render(React.createElement(Main, null), document.getElementById("app"));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/Main.react":3}]},{},[10])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamVmZmtuYWdncy9wcm9qZWN0cy90ZWFtLXRpbWUvYXBwL2NvbXBvbmVudHMvQXZhaWxhYmlsaXR5QmFyLnJlYWN0LmpzIiwiL1VzZXJzL2plZmZrbmFnZ3MvcHJvamVjdHMvdGVhbS10aW1lL2FwcC9jb21wb25lbnRzL0xvY2FsVGltZS5yZWFjdC5qcyIsIi9Vc2Vycy9qZWZma25hZ2dzL3Byb2plY3RzL3RlYW0tdGltZS9hcHAvY29tcG9uZW50cy9NYWluLnJlYWN0LmpzIiwiL1VzZXJzL2plZmZrbmFnZ3MvcHJvamVjdHMvdGVhbS10aW1lL2FwcC9jb21wb25lbnRzL1BlcnNvbi5yZWFjdC5qcyIsIi9Vc2Vycy9qZWZma25hZ2dzL3Byb2plY3RzL3RlYW0tdGltZS9hcHAvc3RvcmVzL1Blb3BsZVN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL21vbWVudC10aW1lem9uZS9kYXRhL3BhY2tlZC9sYXRlc3QuanNvbiIsIm5vZGVfbW9kdWxlcy9tb21lbnQtdGltZXpvbmUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbW9tZW50LXRpbWV6b25lL21vbWVudC10aW1lem9uZS5qcyIsIm5vZGVfbW9kdWxlcy9tb21lbnQtdGltZXpvbmUvbm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztJQ0VPLEtBQUssMkJBQU0sT0FBTzs7QUFFekIsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3JCLE1BQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDckIsU0FBTztBQUNMLFFBQUksRUFBRSxBQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFJLEdBQUc7QUFDaEMsU0FBSyxFQUFFLEFBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUksR0FBRztHQUNyQyxDQUFDO0NBQ0g7O0lBRUssZUFBZTtXQUFmLGVBQWU7MEJBQWYsZUFBZTs7Ozs7OztZQUFmLGVBQWU7O2VBQWYsZUFBZTtBQUNuQixVQUFNO2FBQUEsa0JBQUc7QUFDUCxZQUFJLFlBQVksQ0FBQztBQUNqQixZQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO0FBQ25DLHNCQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ25CLE1BQU07QUFDTCxzQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUM3Rjs7QUFFRCxZQUFJLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDOztBQUV2QyxZQUFJLFlBQVksQ0FBQztBQUNqQixZQUFJLFlBQVksRUFBRTtBQUNoQixzQkFBWSxHQUNWLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsU0FBQyxFQUFBLDhCQUFVO0FBQ2IsaUJBQUEsRUFBSyxPQUFFLENBQU8sWUFBQyxDQUFZLEVBQUcsQ0FBTSxBQUN2QyxDQUFDO1NBQ0g7O0FBRUQsZUFDRSxLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUksRUFBQSxFQUFBLFNBQUMsRUFBQSxtQkFBVSxFQUFBLEVBQ2IsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxTQUFDLEVBQUEsZ0NBQVUsRUFBQSxDQUFpQyxFQUNoRCxLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUksRUFBQSxFQUFBLFNBQUMsRUFBQSwwQkFBVSxFQUFBLEtBQTJCLEVBQUEsT0FBTyxDQUFBLEtBQVEsQ0FBQSxFQUFBLENBQUEsRUFDeEQsWUFBWSxFQUViLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsU0FBQyxFQUFBLHdCQUFVLEVBQUEsRUFBeUIsSUFBQyxDQUFBLEtBQUssQ0FBQSxJQUFNLENBQUEsTUFBSyxDQUFBLE1BQU8sQ0FBQSxDQUFNLENBQ2xFLENBQ047T0FDSDs7OztTQTVCRyxlQUFlO0dBQVMsS0FBSyxDQUFDLFNBQVM7O2lCQStCOUIsZUFBZTs7Ozs7Ozs7Ozs7Ozs7OztJQ3pDdkIsS0FBSywyQkFBTSxPQUFPOztJQUVuQixTQUFTO1dBQVQsU0FBUzswQkFBVCxTQUFTOzs7Ozs7O1lBQVQsU0FBUzs7ZUFBVCxTQUFTO0FBQ2IsVUFBTTthQUFBLGtCQUFHO0FBQ1AsZUFBTyxLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUksRUFBQSxFQUFBLFNBQUMsRUFBQSxhQUFVLEVBQUEsRUFBYyxJQUFDLENBQUEsS0FBSyxDQUFBLElBQU0sQ0FBQSxNQUFLLENBQUEsTUFBTyxDQUFBLENBQU0sQ0FBUTtPQUMzRTs7OztTQUhHLFNBQVM7R0FBUyxLQUFLLENBQUMsU0FBUzs7aUJBTXhCLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNSakIsS0FBSywyQkFBTSxPQUFPOztJQUNsQixNQUFNLDJCQUFNLGlCQUFpQjs7SUFFN0IsV0FBVywyQkFBTSx1QkFBdUI7O0lBQ3hDLGVBQWUsMkJBQU0seUJBQXlCOztJQUM5QyxTQUFTLDJCQUFNLG1CQUFtQjs7SUFDbEMsTUFBTSwyQkFBTSxnQkFBZ0I7O0FBRW5DLFNBQVMsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDbkMsUUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4QyxTQUFPLE1BQU0sQ0FBQztDQUNmOztBQUVELFNBQVMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDNUIsU0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Q0FDaEQ7O0FBRUQsU0FBUyxRQUFRLEdBQUc7QUFDbEIsTUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7O0FBRW5CLE1BQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FDM0IsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFeEIsU0FBTyxFQUFFLEdBQUcsRUFBSCxHQUFHLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBRSxDQUFDO0NBQ3hCOztJQUVLLElBQUk7QUFDRyxXQURQLElBQUksR0FDTTs7OzBCQURWLElBQUk7O0FBRU4sUUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQzs7QUFFeEIsZUFBVyxDQUFDLFlBQU07QUFDaEIsWUFBSyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUMzQixFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ1g7O1lBUEcsSUFBSTs7ZUFBSixJQUFJO0FBU1IsVUFBTTthQUFBLGtCQUFHO0FBQ1AsWUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDM0IsWUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakQsWUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDckQsWUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRTNDLFlBQUksWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFFckIsb0JBQVksR0FBSSxDQUFDLFlBQVksR0FBRyxBQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxHQUFHLEdBQUMsRUFBRSxDQUFBLEFBQUMsR0FBSSxFQUFFLENBQUEsR0FBSSxDQUFDLEFBQUMsQ0FBQzs7O0FBR3hFLFlBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7O0FBRXJCLFlBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQzs7QUFFckIsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMzQixxQkFBVyxDQUFDLElBQUksQ0FDZCxLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUksRUFBQSxFQUFBLFNBQUMsa0RBQVcsQ0FBQSxBQUErQztBQUMzRCxpQkFBQSxFQUFLO0FBQ0gsa0JBQUksUUFBSyxBQUFDLENBQUMsR0FBRyxLQUFLLEdBQUksWUFBWSxDQUFBLE1BQUcsRUFDckMsRUFBTSxDQUFBLENBQ2QsQ0FBQztTQUNIOztBQUVELGVBQ0UsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxTQUFDLEVBQUEsUUFBVSxFQUFBLEVBQ2IsS0FBQSxDQUFBLGFBQUEsQ0FBQyxTQUFTLEVBQUEsRUFBQSxJQUFDLEVBQUEsS0FBTSxFQUFBLENBQU0sRUFFdkIsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxTQUFDLEVBQUEsZ0JBQVUsRUFBQSxFQUNiLEtBQUEsQ0FBQSxhQUFBLENBQUEsSUFBRyxFQUFBLEVBQUEsU0FBQyxFQUFBLHdCQUFVLEVBQUEsRUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLEVBQUs7QUFDakMsaUJBQU8sS0FBQSxDQUFBLGFBQUEsQ0FBQyxNQUFNLEVBQUEsRUFBQSxHQUFDLEVBQUEsTUFBSyxDQUFBLEdBQU8sRUFBRyxNQUFFLEVBQUEsTUFBUSxFQUFBLENBQUEsQ0FBQTtTQUN6QyxDQUFFLENBQ0EsRUFFTCxLQUFBLENBQUEsYUFBQSxDQUFBLElBQUcsRUFBQSxFQUFBLFNBQUMsRUFBQSxzQkFBVSxFQUFBLEVBQ1gsV0FBVyxFQUVYLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sRUFBSzs7QUFFakMsY0FBSSxNQUFNLEdBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEFBQUMsQ0FBQztBQUMzRCxnQkFBTSxHQUFHLE1BQU0sR0FBSSxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxBQUFDLENBQUM7QUFDdkMsZ0JBQU0sR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2xDLGNBQUksWUFBWSxHQUFHLEFBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSyxHQUFHLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQzs7QUFHNUMsY0FBSSxXQUFXLEdBQUcsWUFBWSxDQUFDO0FBQy9CLGNBQUksZUFBZSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDeEMsY0FBSSxlQUFlLEdBQUcsZUFBZSxHQUFHLEdBQUcsQ0FBQztBQUM1QyxjQUFJLGNBQWMsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDOztBQUV2QyxpQkFDRSxLQUFBLENBQUEsYUFBQSxDQUFBLElBQUcsRUFBQSxFQUFBLEdBQUMsRUFBQSxNQUFLLENBQUEsR0FBTyxFQUFHLFNBQUUsRUFBQSxxQkFBVSxFQUFBLEVBQzdCLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsU0FBQyxFQUFBLHFCQUFVO0FBQ1gsaUJBQUEsRUFBSyxFQUFFLGVBQUMsa0JBQWlCLGVBQWMsT0FBZSxFQUFJLEVBQUcsRUFDL0QsS0FBQSxDQUFBLGFBQUEsQ0FBQyxlQUFlLEVBQUEsRUFBQSxNQUFDLEVBQUEsTUFBUSxFQUFNLElBQUUsRUFBQSxTQUFNLEVBQUEsQ0FBQSxDQUNuQyxFQUNOLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsU0FBQyxFQUFBLHFCQUFVO0FBQ1gsaUJBQUEsRUFBSyxFQUFFLGVBQUMsa0JBQWlCLGVBQWMsT0FBZSxFQUFJLEVBQUcsRUFDL0QsS0FBQSxDQUFBLGFBQUEsQ0FBQyxlQUFlLEVBQUEsRUFBQSxNQUFDLEVBQUEsTUFBUSxFQUFNLElBQUUsRUFBQSxTQUFNLEVBQUEsQ0FBQSxDQUNuQyxFQUNOLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsU0FBQyxFQUFBLHFCQUFVO0FBQ1gsaUJBQUEsRUFBSyxFQUFFLGVBQUMsa0JBQWlCLFdBQWMsT0FBVyxFQUFJLEVBQUcsRUFDM0QsS0FBQSxDQUFBLGFBQUEsQ0FBQyxlQUFlLEVBQUEsRUFBQSxNQUFDLEVBQUEsTUFBUSxFQUFNLElBQUUsRUFBQSxLQUFNLEVBQUEsQ0FBQSxDQUNuQyxFQUNOLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsU0FBQyxFQUFBLHFCQUFVO0FBQ1gsaUJBQUEsRUFBSyxFQUFFLGVBQUMsa0JBQWlCLGNBQWMsT0FBYyxFQUFJLEVBQUcsRUFDOUQsS0FBQSxDQUFBLGFBQUEsQ0FBQyxlQUFlLEVBQUEsRUFBQSxNQUFDLEVBQUEsTUFBUSxFQUFNLElBQUUsRUFBQSxRQUFNLEVBQUEsQ0FBQSxDQUNuQyxDQUNILENBQ0w7U0FDSCxDQUFFLENBQ0EsQ0FDRCxDQUNGLENBQ047T0FDSDs7OztTQXJGRyxJQUFJO0dBQVMsS0FBSyxDQUFDLFNBQVM7O2lCQXdGbkIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztJQ25IWixLQUFLLDJCQUFNLE9BQU87O0lBRW5CLE1BQU07V0FBTixNQUFNOzBCQUFOLE1BQU07Ozs7Ozs7WUFBTixNQUFNOztlQUFOLE1BQU07QUFDVixVQUFNO2FBQUEsa0JBQUc7QUFDUCxZQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFL0IsZUFDRSxLQUFBLENBQUEsYUFBQSxDQUFBLElBQUcsRUFBQSxFQUFBLFNBQUMsRUFBQSxVQUFVLEVBQUEsRUFDWixLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUksRUFBQSxFQUFBLFNBQUMsRUFBQSwyQkFBVTtBQUNYLGVBQUEsRUFBSyxFQUFFLGVBQUMsV0FBaUIsTUFBTyxDQUFNLE1BQUMsTUFBTSxFQUFHLEVBQUcsQ0FBTSxFQUM3RCxLQUFBLENBQUEsYUFBQSxDQUFBLEtBQUksRUFBQSxFQUFBLFNBQUMsRUFBQSwyQkFBVSxFQUFBLEVBQTRCLE1BQUMsQ0FBQSxJQUFPLENBQUEsRUFDbkQsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFJLEVBQUEsRUFBQSxTQUFDLEVBQUEsMkJBQVUsRUFBQSxFQUE0QixNQUFDLENBQUEsSUFBTyxDQUFBLEVBQ25ELEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBSSxFQUFBLEVBQUEsU0FBQyxFQUFBLGdCQUFVLEVBQUEsRUFBaUIsTUFBQyxDQUFBLElBQU8sQ0FBQSxNQUFLLENBQUEsT0FBTyxDQUFBLENBQU8sQ0FDeEQsQ0FDTDtPQUNIOzs7O1NBYkcsTUFBTTtHQUFTLEtBQUssQ0FBQyxTQUFTOztpQkFnQnJCLE1BQU07Ozs7Ozs7Ozs7O0lDbEJmLFdBQVc7QUFDSixXQURQLFdBQVcsR0FDRDswQkFEVixXQUFXOztBQUViLFFBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztHQUM3Qjs7ZUFIRyxXQUFXO0FBS2YsT0FBRzthQUFBLGVBQUc7QUFDSixlQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7T0FDcEI7Ozs7U0FQRyxXQUFXOzs7aUJBVUYsSUFBSSxXQUFXLEVBQUU7OztBQ1poQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1a0JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGJhckNhbGMoc3Bhbikge1xuICB2YXIgcmF0aW8gPSAxMDAgLyAyNDtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiAocmF0aW8gKiBzcGFuLnN0YXJ0KSArICclJyxcbiAgICB3aWR0aDogKHJhdGlvICogc3Bhbi5kdXJhdGlvbikgKyAnJSdcbiAgfTtcbn1cblxuY2xhc3MgQXZhaWxhYmlsaXR5QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciBhdmFpbGFiaWxpdHk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnBlcnNvbi5hdmFpbGFiaWxpdHkpIHtcbiAgICAgIGF2YWlsYWJpbGl0eSA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICBhdmFpbGFiaWxpdHkgPSB0aGlzLnByb3BzLnBlcnNvbi5hdmFpbGFiaWxpdHlbdGhpcy5wcm9wcy50aW1lLmZvcm1hdCgnZGRkZCcpLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cblxuICAgIHZhciBhd2FrZSA9IHsgc3RhcnQ6IDcsIGR1cmF0aW9uOiAxNCB9O1xuXG4gICAgdmFyIGF2YWlsYWJsZUJhcjtcbiAgICBpZiAoYXZhaWxhYmlsaXR5KSB7XG4gICAgICBhdmFpbGFibGVCYXIgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1BdmFpbGFiaWxpdHlCYXJfX0F2YWlsYWJsZVwiXG4gICAgICAgICAgc3R5bGU9e2JhckNhbGMoYXZhaWxhYmlsaXR5KX0+PC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtQXZhaWxhYmlsaXR5QmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1BdmFpbGFiaWxpdHlCYXJfX1VuYXZhaWxhYmxlXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1BdmFpbGFiaWxpdHlCYXJfX0F3YWtlXCIgc3R5bGU9e2JhckNhbGMoYXdha2UpfT48L2Rpdj5cbiAgICAgICAge2F2YWlsYWJsZUJhcn1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtQXZhaWxhYmlsaXR5QmFyX19EYXlcIj57dGhpcy5wcm9wcy50aW1lLmZvcm1hdCgnZGRkZCcpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdmFpbGFiaWxpdHlCYXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExvY2FsVGltZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjLUxvY2FsVGltZVwiPnt0aGlzLnByb3BzLnRpbWUuZm9ybWF0KCdMTExMJyl9PC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsVGltZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuaW1wb3J0IFBlb3BsZVN0b3JlIGZyb20gJy4uL3N0b3Jlcy9QZW9wbGVTdG9yZSc7XG5pbXBvcnQgQXZhaWxhYmlsaXR5QmFyIGZyb20gJy4vQXZhaWxhYmlsaXR5QmFyLnJlYWN0JztcbmltcG9ydCBMb2NhbFRpbWUgZnJvbSAnLi9Mb2NhbFRpbWUucmVhY3QnO1xuaW1wb3J0IFBlcnNvbiBmcm9tICcuL1BlcnNvbi5yZWFjdCc7XG5cbmZ1bmN0aW9uIGF0dGFjaFRpbWV6b25lKG5vdywgcGVyc29uKSB7XG4gIHBlcnNvbi50aW1lID0gbm93LmNsb25lKCkudHoocGVyc29uLnR6KTtcbiAgcmV0dXJuIHBlcnNvbjtcbn1cblxuZnVuY3Rpb24gc29ydEJ5VGltZXpvbmUoYSwgYikge1xuICByZXR1cm4gYi50aW1lLnV0Y09mZnNldCgpIC0gYS50aW1lLnV0Y09mZnNldCgpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgdmFyIG5vdyA9IG1vbWVudCgpO1xuXG4gIHZhciBwZW9wbGUgPSBQZW9wbGVTdG9yZS5hbGwoKVxuICAgIC5tYXAoYXR0YWNoVGltZXpvbmUuYmluZChudWxsLCBub3cpKVxuICAgIC5zb3J0KHNvcnRCeVRpbWV6b25lKTtcblxuICByZXR1cm4geyBub3csIHBlb3BsZSB9O1xufVxuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKGdldFN0YXRlKCkpO1xuICAgIH0sIDEwMDAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdG9kYXkgPSB0aGlzLnN0YXRlLm5vdztcbiAgICB2YXIgeWVzdGVyZGF5ID0gdG9kYXkuY2xvbmUoKS5zdWJ0cmFjdCgxLCAnZGF5Jyk7XG4gICAgdmFyIGRheUJlZm9yZSA9IHllc3RlcmRheS5jbG9uZSgpLnN1YnRyYWN0KDEsICdkYXknKTtcbiAgICB2YXIgdG9tb3Jyb3cgPSB0b2RheS5jbG9uZSgpLmFkZCgxLCAnZGF5Jyk7XG5cbiAgICB2YXIgZ2xvYmFsT2Zmc2V0ID0gMDtcbiAgICAvLyBab29tIGFzIGF0IDUwJSwgc28gaGFsZiB0aGUgb2Zmc2V0XG4gICAgZ2xvYmFsT2Zmc2V0ID0gKChnbG9iYWxPZmZzZXQgLSAodG9kYXkubWludXRlcygpICogKDEwMC8yNCkpIC8gNjApIC8gMik7XG5cbiAgICAvLyBab29tIGlzIGF0IDUwJSwgc28gaGFsZiB0aGUgcmF0aW9cbiAgICB2YXIgcmF0aW8gPSAxMDAgLyA0ODtcblxuICAgIHZhciBob3VyTWFya2VycyA9IFtdO1xuICAgIC8vIFpvb20gaXMgYXQgNTAlLCBzbyBkb3VibGUgdGhlIG51bWJlciBvZiBtYXJrZXJzXG4gICAgZm9yIChsZXQgaCA9IDA7IGggPCA0ODsgaCsrKSB7XG4gICAgICBob3VyTWFya2Vycy5wdXNoKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGMtQXZhaWxhYmlsaXR5X19Ib3VyIGMtQXZhaWxhYmlsaXR5X19Ib3VyLS0ke2h9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGxlZnQ6IGAkeyhoICogcmF0aW8pICsgZ2xvYmFsT2Zmc2V0fSVgLFxuICAgICAgICAgICAgfX0+PC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtTWFpblwiPlxuICAgICAgICA8TG9jYWxUaW1lIHRpbWU9e3RvZGF5fSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1BdmFpbGFiaWxpdHlcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYy1BdmFpbGFiaWxpdHlfX1Blb3BsZVwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucGVvcGxlLm1hcCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8UGVyc29uIGtleT17cGVyc29uLl9pZH0gcGVyc29uPXtwZXJzb259IC8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImMtQXZhaWxhYmlsaXR5X19MaXN0XCI+XG4gICAgICAgICAgICB7aG91ck1hcmtlcnN9XG5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBlb3BsZS5tYXAoKHBlcnNvbikgPT4ge1xuICAgICAgICAgICAgICAvLyB2YXIgb2Zmc2V0ID0gYmFyT2Zmc2V0KHBlcnNvbi50aW1lKTtcbiAgICAgICAgICAgICAgdmFyIG9mZnNldCA9ICh0b2RheS51dGNPZmZzZXQoKSAtIHBlcnNvbi50aW1lLnV0Y09mZnNldCgpKTtcbiAgICAgICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IC0gKHRvZGF5LmhvdXJzKCkgKiA2MCk7XG4gICAgICAgICAgICAgIG9mZnNldCA9IG9mZnNldCAtIHRvZGF5Lm1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgdmFyIHBlcmNlbnRTaGlmdCA9IChvZmZzZXQgLyA2MCkgKiAoMTAwLzI0KTtcblxuXG4gICAgICAgICAgICAgIHZhciB0b2RheU9mZnNldCA9IHBlcmNlbnRTaGlmdDtcbiAgICAgICAgICAgICAgdmFyIHllc3RlcmRheU9mZnNldCA9IHRvZGF5T2Zmc2V0IC0gMTAwO1xuICAgICAgICAgICAgICB2YXIgZGF5QmVmb3JlT2Zmc2V0ID0geWVzdGVyZGF5T2Zmc2V0IC0gMTAwO1xuICAgICAgICAgICAgICB2YXIgdG9tb3Jyb3dPZmZzZXQgPSB0b2RheU9mZnNldCArIDEwMDtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BlcnNvbi5faWR9IGNsYXNzTmFtZT1cImMtQXZhaWxhYmlsaXR5X19Sb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1BdmFpbGFiaWxpdHlfX0RheVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tXZWJraXRUcmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7ZGF5QmVmb3JlT2Zmc2V0fSUpYH19PlxuICAgICAgICAgICAgICAgICAgICA8QXZhaWxhYmlsaXR5QmFyIHBlcnNvbj17cGVyc29ufSB0aW1lPXtkYXlCZWZvcmV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1BdmFpbGFiaWxpdHlfX0RheVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tXZWJraXRUcmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7eWVzdGVyZGF5T2Zmc2V0fSUpYH19PlxuICAgICAgICAgICAgICAgICAgICA8QXZhaWxhYmlsaXR5QmFyIHBlcnNvbj17cGVyc29ufSB0aW1lPXt5ZXN0ZXJkYXl9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1BdmFpbGFiaWxpdHlfX0RheVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tXZWJraXRUcmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dG9kYXlPZmZzZXR9JSlgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxBdmFpbGFiaWxpdHlCYXIgcGVyc29uPXtwZXJzb259IHRpbWU9e3RvZGF5fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtQXZhaWxhYmlsaXR5X19EYXlcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7V2Via2l0VHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RvbW9ycm93T2Zmc2V0fSUpYH19PlxuICAgICAgICAgICAgICAgICAgICA8QXZhaWxhYmlsaXR5QmFyIHBlcnNvbj17cGVyc29ufSB0aW1lPXt0b21vcnJvd30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUGVyc29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwZXJzb24gPSB0aGlzLnByb3BzLnBlcnNvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwiYy1QZXJzb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLVBlcnNvbl9fQXZhdGFyIG8tYXZhdGFyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cGVyc29uLmF2YXRhcn0pYH19PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtUGVyc29uX19OYW1lIHUtdHJ1bmNhdGVcIj57cGVyc29uLm5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1QZXJzb25fX0NpdHkgdS10cnVuY2F0ZVwiPntwZXJzb24uY2l0eX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLVBlcnNvbl9fVGltZVwiPntwZXJzb24udGltZS5mb3JtYXQoJ0hIOm1tJyl9PC9kaXY+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQZW9wbGVTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGVvcGxlID0gd2luZG93LnBlb3BsZTtcbiAgfVxuXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wZW9wbGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBlb3BsZVN0b3JlKCk7XG4iLCJtb2R1bGUuZXhwb3J0cz17XG5cdFwidmVyc2lvblwiOiBcIjIwMTVhXCIsXG5cdFwiem9uZXNcIjogW1xuXHRcdFwiQWZyaWNhL0FiaWRqYW58TE1UIEdNVHxnLjggMHwwMXwtMmxkWEguUVwiLFxuXHRcdFwiQWZyaWNhL0FjY3JhfExNVCBHTVQgR0hTVHwuUSAwIC1rfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMjZCYlguOCA2dHpYLjggTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFDMGsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFDMGsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFDMGsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFDMGsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FIDFDMGsgTW5FIDFCQWsgTW5FIDFCQWsgTW5FXCIsXG5cdFx0XCJBZnJpY2EvQWRkaXNfQWJhYmF8TE1UIEVBVCBCRUFUIEJFQVVUfC0yci5nIC0zMCAtMnUgLTJKfDAxMjMxfC0xRjNDci5nIDNEenIuZyBva011IE1GWEpcIixcblx0XHRcIkFmcmljYS9BbGdpZXJzfFBNVCBXRVQgV0VTVCBDRVQgQ0VTVHwtOS5sIDAgLTEwIC0xMCAtMjB8MDEyMTIxMjEyMTIxMjEyMTM0MzQzMTMxMjEyMzQzMTIxM3wtMm5jbzkubCBjTmI5LmwgSEEwIDE5QTAgMWlNMCAxMWMwIDFvbzAgV28wIDFyYzAgUU0wIDFFTTAgVU0wIERBMCBJbW8wIHJkMCBEZTAgOVh6MCAxZmIwIDFhcDAgMTZLMCAyeW8wIG1FcDAgaHdMMCBqeEEwIDExQTAgZERkMCAxN2IwIDExQjAgMWNOMCAyRHkwIDFjTjAgMWZCMCAxY0wwXCIsXG5cdFx0XCJBZnJpY2EvQmFuZ3VpfExNVCBXQVR8LWQuQSAtMTB8MDF8LTIyeTBkLkFcIixcblx0XHRcIkFmcmljYS9CaXNzYXV8TE1UIFdBVCBHTVR8MTIuayAxMCAwfDAxMnwtMmxkV1YuRSAyeG9uVi5FXCIsXG5cdFx0XCJBZnJpY2EvQmxhbnR5cmV8TE1UIENBVHwtMmEuayAtMjB8MDF8LTJHSmVhLmtcIixcblx0XHRcIkFmcmljYS9DYWlyb3xFRVQgRUVTVHwtMjAgLTMwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMWJJTzAgdmIwIDFpcDAgMTF6MCAxaU4wIDFuejAgMTJwMCAxcHowIDEwTjAgMXB6MCAxNnAwIDFqejAgczNkMCBWejAgMW9OMCAxMWIwIDFvTzAgMTBOMCAxcHowIDEwTjAgMXBiMCAxME4wIDFwYjAgMTBOMCAxcGIwIDEwTjAgMXB6MCAxME4wIDFwYjAgMTBOMCAxcGIwIDExZDAgMW9MMCAxMWQwIDFwYjAgMTFkMCAxb0wwIDExZDAgMW9MMCAxMWQwIDFvTDAgMTFkMCAxcGIwIDExZDAgMW9MMCAxMWQwIDFvTDAgMTFkMCAxb0wwIDExZDAgMXBiMCAxMWQwIDFvTDAgMTFkMCAxb0wwIDExZDAgMW9MMCAxMWQwIDFwYjAgMTFkMCAxb0wwIDExZDAgMVdMMCByZDAgMVJ6MCB3cDAgMXBiMCAxMWQwIDFvTDAgMTFkMCAxb0wwIDExZDAgMW9MMCAxMWQwIDFwYjAgMTFkMCAxcUwwIFhkMCAxb0wwIDExZDAgMW9MMCAxMWQwIDFwYjAgMTFkMCAxb0wwIDExZDAgMW9MMCAxMWQwIDFueTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCBXTDAgMXFOMCBSYjAgMXdwMCBPbjAgMXpkMCBMejAgMUVOMCBGYjAgYzEwIDhuMCA4TmQwIGdMMCBlMTAgbW4wIDFvMTAganowIGdOMCBwYjAgMXFOMCBkWDAgZTEwIHh6MCAxbzEwIGJiMCBlMTAgQW4wIDFvMTAgNXowIGUxMCBGWDAgMW8xMCAyTDAgZTEwIElMMCAxQzEwIEx6MCAxd3AwIFRYMCAxcU4wIFdMMCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MFwiLFxuXHRcdFwiQWZyaWNhL0Nhc2FibGFuY2F8TE1UIFdFVCBXRVNUIENFVHx1LmsgMCAtMTAgLTEwfDAxMjEyMTIxMjEyMTIxMjEyMTMxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMmdNbnQuRSAxMzBMdC5FIHJiMCBEZDAgZFZiMCBiNnAwIFRYMCBFb0IwIExMMCBnbmQwIHJ6MCA0M2QwIEFMMCAxTmQwIFhYMCAxQ3AwIHB6MCBkRXAwIDRtbjAgU3lOMCBBTDAgMU5kMCB3bjAgMUZCMCBEYjAgMXpkMCBMejAgMU5mMCB3TTAgY28wIGdvMCAxbzAwIHMwMCBkQTAgdmMwIDExQTAgQTAwIGUwMCB5MDAgMTFBMCB1bzAgZTAwIERBMCAxMUEwIHJBMCBlMDAgSmMwIFdNMCBtMDAgZ00wIE0wMCBXTTAgamMwIGUwMCBSQTAgMTFBMCBkQTAgZTAwIFVvMCAxMUEwIDgwMCBnTTAgWGMwIDExQTAgNWMwIGUwMCAxN0EwIFdNMCAybzAgZTAwIDFhbzAgMTlBMCAxZzAwIDE2TTAgMWlNMCAxNDAwIDFsQTAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFvMCAxMjAwIDFrTTAgMTRNMCAxaTAwXCIsXG5cdFx0XCJBZnJpY2EvQ2V1dGF8V0VUIFdFU1QgQ0VUIENFU1R8MCAtMTAgLTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzJ8LTI1S04wIDExejAgZHJkMCAxOG8wIDNJMDAgMTdjMCAxZkEwIDFhMDAgMWlvMCAxYTAwIDF5N3AwIExMMCBnbmQwIHJ6MCA0M2QwIEFMMCAxTmQwIFhYMCAxQ3AwIHB6MCBkRXAwIDRWQjAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJBZnJpY2EvRWxfQWFpdW58TE1UIFdBVCBXRVQgV0VTVHxRLk0gMTAgMCAtMTB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMnwtMXJEejcuYyAxR1ZBNy5jIDZMMCBBTDAgMU5kMCBYWDAgMUNwMCBwejAgMWNCQjAgQUwwIDFOZDAgd24wIDFGQjAgRGIwIDF6ZDAgTHowIDFOZjAgd00wIGNvMCBnbzAgMW8wMCBzMDAgZEEwIHZjMCAxMUEwIEEwMCBlMDAgeTAwIDExQTAgdW8wIGUwMCBEQTAgMTFBMCByQTAgZTAwIEpjMCBXTTAgbTAwIGdNMCBNMDAgV00wIGpjMCBlMDAgUkEwIDExQTAgZEEwIGUwMCBVbzAgMTFBMCA4MDAgZ00wIFhjMCAxMUEwIDVjMCBlMDAgMTdBMCBXTTAgMm8wIGUwMCAxYW8wIDE5QTAgMWcwMCAxNk0wIDFpTTAgMTQwMCAxbEEwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxbzAgMTIwMCAxa00wIDE0TTAgMWkwMFwiLFxuXHRcdFwiQWZyaWNhL0pvaGFubmVzYnVyZ3xTQVNUIFNBU1QgU0FTVHwtMXUgLTIwIC0zMHwwMTIxMjF8LTJHSmR1IDFBamR1IDFjTDAgMWNOMCAxY0wwXCIsXG5cdFx0XCJBZnJpY2EvSnViYXxMTVQgQ0FUIENBU1QgRUFUfC0yYS44IC0yMCAtMzAgLTMwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEzfC0xeVcyYS44IDF6SzBhLjggMTZMMCAxaU4wIDE3YjAgMWpkMCAxN2IwIDFpcDAgMTd6MCAxaTEwIDE3WDAgMWhCMCAxOG4wIDFoZDAgMTliMCAxZ3AwIDE5ejAgMWlOMCAxN2IwIDFpcDAgMTd6MCAxaTEwIDE4bjAgMWhkMCAxOEwwIDFnTjAgMTliMCAxZ3AwIDE5ejAgMWlOMCAxN3owIDFpMTAgMTdYMCB5R2QwXCIsXG5cdFx0XCJBZnJpY2EvTW9ucm92aWF8TU1UIExSVCBHTVR8SC44IEkudSAwfDAxMnwtMjNMemcuUSAyOXMwMS5tXCIsXG5cdFx0XCJBZnJpY2EvTmRqYW1lbmF8TE1UIFdBVCBXQVNUfC0xMC5jIC0xMCAtMjB8MDEyMXwtMmxlMTAuYyAySjNjMC5jIFduMFwiLFxuXHRcdFwiQWZyaWNhL1RyaXBvbGl8TE1UIENFVCBDRVNUIEVFVHwtUS5JIC0xMCAtMjAgLTIwfDAxMjEyMTIxMzEyMTIxMjEyMTIxMjEyMTIxMzEyMzEyM3wtMjFKY1EuSSAxaG5CUS5JIHZ4MCA0aVAwIHh4MCA0ZU4wIEJiMCA3aXAwIFUwbjAgQTEwIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWRiMCAxZU4wIDFiYjAgMWUxMCAxY0wwIDFjMTAgMWRiMCAxZGQwIDFkYjAgMWNOMCAxZGIwIDFxMTAgZkFuMCAxZXAwIDFkYjAgQUtxMCBUQTAgMW8wMFwiLFxuXHRcdFwiQWZyaWNhL1R1bmlzfFBNVCBDRVQgQ0VTVHwtOS5sIC0xMCAtMjB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMm5jbzkubCAxOHBhOS5sIDFxTTAgREEwIDNUYzAgMTFCMCAxemUwIFdNMCA3ejAgM2QwIDE0TDAgMWNOMCAxZjkwIDFhcjAgMTZKMCAxZ1hCMCBXTTAgMXJBMCAxMWMwIG53bzAgS28wIDFjTTAgMWNNMCAxckEwIDEwTTAgenVNMCAxME4wIDFhTjAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDBcIixcblx0XHRcIkFmcmljYS9XaW5kaG9la3xTV0FUIFNBU1QgU0FTVCBDQVQgV0FUIFdBU1R8LTF1IC0yMCAtMzAgLTIwIC0xMCAtMjB8MDEyMTM0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1fC0yR0pkdSAxQWpkdSAxY0wwIDFTcUwwIDlOQTAgMTFEMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgMTFCMCAxblgwIDExQjBcIixcblx0XHRcIkFtZXJpY2EvQWRha3xOU1QgTldUIE5QVCBCU1QgQkRUIEFIU1QgSEFTVCBIQURUfGIwIGEwIGEwIGIwIGEwIGEwIGEwIDkwfDAxMjAzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQ1Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3NnwtMTdTWDAgOHdXMCBpQjAgUWxiMCA1Mk8wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgY20wIDEwcTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvQW5jaG9yYWdlfENBVCBDQVdUIENBUFQgQUhTVCBBSERUIFlTVCBBS1NUIEFLRFR8YTAgOTAgOTAgYTAgOTAgOTAgOTAgODB8MDEyMDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDU2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2fC0xN1QwMCA4d1gwIGlBMCBRbGIwIDUyTzAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgczEwIDFWejAgTEIwIDFCWDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCBjbTAgMTBxMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Bbmd1aWxsYXxMTVQgQVNUfDQ2LjQgNDB8MDF8LTJrTnZSLlVcIixcblx0XHRcIkFtZXJpY2EvQW50aWd1YXxMTVQgRVNUIEFTVHw0Ny5jIDUwIDQwfDAxMnwtMmtOdlEuTSAxeXhBUS5NXCIsXG5cdFx0XCJBbWVyaWNhL0FyYWd1YWluYXxMTVQgQlJUIEJSU1R8M2MuTSAzMCAyMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0yZ2x3TC5jIEhkS0wuYyAxY2MwIDFlMTAgMWJYMCBFemQwIFNvMCAxdkEwIE1uMCAxQkIwIE1MMCAxQkIwIHpYMCBxZTEwIHhiMCAyZXAwIG56MCAxQzEwIHpYMCAxQzEwIExYMCAxQzEwIE1uMCBIMjEwIFJiMCAxdEIwIElMMCAxRmQwIEZYMCAxRU4wIEZYMCAxSEIwIEx6MCBkTU4wIEx6MCAxemQwIFJiMCAxd04wIFduMCAxdEIwIFJiMCAxdEIwIFdMMCAxdEIwIFJiMCAxemQwIE9uMCAxSEIwIEZYMCBueTEwIEx6MFwiLFxuXHRcdFwiQW1lcmljYS9BcmdlbnRpbmEvQnVlbm9zX0FpcmVzfENNVCBBUlQgQVJTVCBBUlQgQVJTVHw0Zy5NIDQwIDMwIDMwIDIwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTM0MzQzNDM0MzQzNDMyMzQzNDN8LTIwVUhILmMgcEtuSC5jIE1uMCAxaU4wIFRiMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIE1uMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIE1uMCBNTjAgMmp6MCBNTjAgNGxYMCB1MTAgNUxiMCAxcEIwIEZuejAgdTEwIHVMMCAxdmQwIFNMMCAxdmQwIFNMMCAxdmQwIDE3ejAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIGFzbjAgRGIwIHp2ZDAgQnowIDF0QjAgVFgwIDF3cDAgUmIwIDF3cDAgUmIwIDF3cDAgVFgwIGcwcDAgMTBNMCBqM2MwIHVMMCAxcU4wIFdMMFwiLFxuXHRcdFwiQW1lcmljYS9BcmdlbnRpbmEvQ2F0YW1hcmNhfENNVCBBUlQgQVJTVCBBUlQgQVJTVCBXQVJUfDRnLk0gNDAgMzAgMzAgMjAgNDB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMzQzNDM0MzQ1NDM0MzIzNTM0M3wtMjBVSEguYyBwS25ILmMgTW4wIDFpTjAgVGIwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTW4wIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTW4wIE1OMCAyanowIE1OMCA0bFgwIHUxMCA1TGIwIDFwQjAgRm56MCB1MTAgdUwwIDF2ZDAgU0wwIDF2ZDAgU0wwIDF2ZDAgMTd6MCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgYXNuMCBEYjAgenZkMCBCejAgMXRCMCBUWDAgMXdwMCBSYjAgMXdxMCBSYTAgMXdwMCBUWDAgZzBwMCAxME0wIGFrbzAgN0IwIDh6YjAgdUwwXCIsXG5cdFx0XCJBbWVyaWNhL0FyZ2VudGluYS9Db3Jkb2JhfENNVCBBUlQgQVJTVCBBUlQgQVJTVCBXQVJUfDRnLk0gNDAgMzAgMzAgMjAgNDB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMzQzNDM0MzQ1NDM0MzIzNDM0M3wtMjBVSEguYyBwS25ILmMgTW4wIDFpTjAgVGIwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTW4wIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTW4wIE1OMCAyanowIE1OMCA0bFgwIHUxMCA1TGIwIDFwQjAgRm56MCB1MTAgdUwwIDF2ZDAgU0wwIDF2ZDAgU0wwIDF2ZDAgMTd6MCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgYXNuMCBEYjAgenZkMCBCejAgMXRCMCBUWDAgMXdwMCBSYjAgMXdxMCBSYTAgMXdwMCBUWDAgZzBwMCAxME0wIGozYzAgdUwwIDFxTjAgV0wwXCIsXG5cdFx0XCJBbWVyaWNhL0FyZ2VudGluYS9KdWp1eXxDTVQgQVJUIEFSU1QgQVJUIEFSU1QgV0FSVCBXQVJTVHw0Zy5NIDQwIDMwIDMwIDIwIDQwIDMwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTM0MzQzNDU2NTQzNDMyMzQzfC0yMFVISC5jIHBLbkguYyBNbjAgMWlOMCBUYjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgTU4wIDJqejAgTU4wIDRsWDAgdTEwIDVMYjAgMXBCMCBGbnowIHUxMCB1TDAgMXZkMCBTTDAgMXZkMCBTTDAgMXZkMCAxN3owIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCBhc24wIERiMCB6dmQwIEJ6MCAxdEIwIFRYMCAxemUwIFRYMCAxbGQwIFdLMCAxd3AwIFRYMCBnMHAwIDEwTTAgajNjMCB1TDBcIixcblx0XHRcIkFtZXJpY2EvQXJnZW50aW5hL0xhX1Jpb2phfENNVCBBUlQgQVJTVCBBUlQgQVJTVCBXQVJUfDRnLk0gNDAgMzAgMzAgMjAgNDB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMzQzNDM0MzQ1MzQzNDMyMzUzNDN8LTIwVUhILmMgcEtuSC5jIE1uMCAxaU4wIFRiMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIE1uMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIE1uMCBNTjAgMmp6MCBNTjAgNGxYMCB1MTAgNUxiMCAxcEIwIEZuejAgdTEwIHVMMCAxdmQwIFNMMCAxdmQwIFNMMCAxdmQwIDE3ejAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIGFzbjAgRGIwIHp2ZDAgQnowIDF0QjAgVFgwIDF3cDAgUW4wIHFPMCAxNm4wIFJiMCAxd3AwIFRYMCBnMHAwIDEwTTAgYWtvMCA3QjAgOHpiMCB1TDBcIixcblx0XHRcIkFtZXJpY2EvQXJnZW50aW5hL01lbmRvemF8Q01UIEFSVCBBUlNUIEFSVCBBUlNUIFdBUlQgV0FSU1R8NGcuTSA0MCAzMCAzMCAyMCA0MCAzMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEzNDM0MzQ1NjU2NTQzMjM1MzQzfC0yMFVISC5jIHBLbkguYyBNbjAgMWlOMCBUYjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgTU4wIDJqejAgTU4wIDRsWDAgdTEwIDVMYjAgMXBCMCBGbnowIHUxMCB1TDAgMXZkMCBTTDAgMXZkMCBTTDAgMXZkMCAxN3owIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCBhc24wIERiMCB6dmQwIEJ6MCAxdEIwIFRYMCAxdTIwIFNMMCAxdmQwIFRiMCAxd3AwIFRXMCBnMHAwIDEwTTAgYWdNMCBPcDAgN1RYMCB1TDBcIixcblx0XHRcIkFtZXJpY2EvQXJnZW50aW5hL1Jpb19HYWxsZWdvc3xDTVQgQVJUIEFSU1QgQVJUIEFSU1QgV0FSVHw0Zy5NIDQwIDMwIDMwIDIwIDQwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTM0MzQzNDM0MzQzNDMyMzUzNDN8LTIwVUhILmMgcEtuSC5jIE1uMCAxaU4wIFRiMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIE1uMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIExYMCAxQzEwIE1uMCBNTjAgMmp6MCBNTjAgNGxYMCB1MTAgNUxiMCAxcEIwIEZuejAgdTEwIHVMMCAxdmQwIFNMMCAxdmQwIFNMMCAxdmQwIDE3ejAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIGFzbjAgRGIwIHp2ZDAgQnowIDF0QjAgVFgwIDF3cDAgUmIwIDF3cDAgUmIwIDF3cDAgVFgwIGcwcDAgMTBNMCBha28wIDdCMCA4emIwIHVMMFwiLFxuXHRcdFwiQW1lcmljYS9BcmdlbnRpbmEvU2FsdGF8Q01UIEFSVCBBUlNUIEFSVCBBUlNUIFdBUlR8NGcuTSA0MCAzMCAzMCAyMCA0MHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEzNDM0MzQzNDU0MzQzMjM0M3wtMjBVSEguYyBwS25ILmMgTW4wIDFpTjAgVGIwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTW4wIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTFgwIDFDMTAgTW4wIE1OMCAyanowIE1OMCA0bFgwIHUxMCA1TGIwIDFwQjAgRm56MCB1MTAgdUwwIDF2ZDAgU0wwIDF2ZDAgU0wwIDF2ZDAgMTd6MCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgYXNuMCBEYjAgenZkMCBCejAgMXRCMCBUWDAgMXdwMCBSYjAgMXdxMCBSYTAgMXdwMCBUWDAgZzBwMCAxME0wIGozYzAgdUwwXCIsXG5cdFx0XCJBbWVyaWNhL0FyZ2VudGluYS9TYW5fSnVhbnxDTVQgQVJUIEFSU1QgQVJUIEFSU1QgV0FSVHw0Zy5NIDQwIDMwIDMwIDIwIDQwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTM0MzQzNDM0NTM0MzQzMjM1MzQzfC0yMFVISC5jIHBLbkguYyBNbjAgMWlOMCBUYjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgTU4wIDJqejAgTU4wIDRsWDAgdTEwIDVMYjAgMXBCMCBGbnowIHUxMCB1TDAgMXZkMCBTTDAgMXZkMCBTTDAgMXZkMCAxN3owIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCBhc24wIERiMCB6dmQwIEJ6MCAxdEIwIFRYMCAxd3AwIFFuMCBxTzAgMTZuMCBSYjAgMXdwMCBUWDAgZzBwMCAxME0wIGFrMDAgbTEwIDhsYjAgdUwwXCIsXG5cdFx0XCJBbWVyaWNhL0FyZ2VudGluYS9TYW5fTHVpc3xDTVQgQVJUIEFSU1QgQVJUIEFSU1QgV0FSVCBXQVJTVHw0Zy5NIDQwIDMwIDMwIDIwIDQwIDMwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTM0MzQzNDU2NTM2MzUzNDY1NjUzfC0yMFVISC5jIHBLbkguYyBNbjAgMWlOMCBUYjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgTU4wIDJqejAgTU4wIDRsWDAgdTEwIDVMYjAgMXBCMCBGbnowIHUxMCB1TDAgMXZkMCBTTDAgMXZkMCBTTDAgMXZkMCAxN3owIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCBhc24wIERiMCB6dmQwIEJ6MCAxdEIwIFhYMCAxcTIwIFNMMCBBTjAga2luMCAxME0wIGFrMDAgbTEwIDhsYjAgOEwwIGpkMCAxcU4wIFdMMCAxcU4wXCIsXG5cdFx0XCJBbWVyaWNhL0FyZ2VudGluYS9UdWN1bWFufENNVCBBUlQgQVJTVCBBUlQgQVJTVCBXQVJUfDRnLk0gNDAgMzAgMzAgMjAgNDB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMzQzNDM0MzQ1NDM0MzIzNTM0MzQzfC0yMFVISC5jIHBLbkguYyBNbjAgMWlOMCBUYjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgTU4wIDJqejAgTU4wIDRsWDAgdTEwIDVMYjAgMXBCMCBGbnowIHUxMCB1TDAgMXZkMCBTTDAgMXZkMCBTTDAgMXZkMCAxN3owIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCBhc24wIERiMCB6dmQwIEJ6MCAxdEIwIFRYMCAxd3AwIFJiMCAxd3EwIFJhMCAxd3AwIFRYMCBnMHAwIDEwTTAgYWtvMCA0TjAgOEJYMCB1TDAgMXFOMCBXTDBcIixcblx0XHRcIkFtZXJpY2EvQXJnZW50aW5hL1VzaHVhaWF8Q01UIEFSVCBBUlNUIEFSVCBBUlNUIFdBUlR8NGcuTSA0MCAzMCAzMCAyMCA0MHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEzNDM0MzQzNDM0MzQzMjM1MzQzfC0yMFVISC5jIHBLbkguYyBNbjAgMWlOMCBUYjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBMWDAgMUMxMCBNbjAgTU4wIDJqejAgTU4wIDRsWDAgdTEwIDVMYjAgMXBCMCBGbnowIHUxMCB1TDAgMXZkMCBTTDAgMXZkMCBTTDAgMXZkMCAxN3owIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCBhc24wIERiMCB6dmQwIEJ6MCAxdEIwIFRYMCAxd3AwIFJiMCAxd3AwIFJiMCAxd3AwIFRYMCBnMHAwIDEwTTAgYWpBMCA4cDAgOHpiMCB1TDBcIixcblx0XHRcIkFtZXJpY2EvQXJ1YmF8TE1UIEFOVCBBU1R8NHouTCA0dSA0MHwwMTJ8LTJrVjdvLmQgMjhLTFMuZFwiLFxuXHRcdFwiQW1lcmljYS9Bc3VuY2lvbnxBTVQgUFlUIFBZVCBQWVNUfDNPLkUgNDAgMzAgMzB8MDEyMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzfC0xeDU4OS5rIDFES005LmsgM0NMMCAzRGQwIDEwTDAgMXBCMCAxMG4wIDFwQjAgMTBuMCAxcEIwIDFjTDAgMWRkMCAxZGIwIDFkZDAgMWNMMCAxZGQwIDFjTDAgMWRkMCAxY0wwIDFkZDAgMWRiMCAxZGQwIDFjTDAgMWRkMCAxY0wwIDFkZDAgMWNMMCAxZGQwIDFkYjAgMWRkMCAxY0wwIDFsQjAgMTRuMCAxZGQwIDFjTDAgMWZkMCBXTDAgMXJkMCAxYUwwIDFkQjAgWHowIDFxcDAgWGIwIDFxTjAgMTBMMCAxckIwIFRYMCAxdEIwIFdMMCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDFjTDAgV04wIDFxTDAgMTFCMCAxblgwIDFpcDAgV0wwIDFxTjAgV0wwIDFxTjAgV0wwIDF0QjAgVFgwIDF0QjAgVFgwIDF0QjAgMTlYMCAxYTEwIDFmejAgMWExMCAxZnowIDFjTjAgMTdiMCAxaXAwIDE3YjAgMWlwMCAxN2IwIDFpcDAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxOVgwIDFpcDAgMTdiMCAxaXAwIDE3YjAgMWlwMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxOVgwIDFpcDAgMTdiMCAxaXAwIDE3YjAgMWlwMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWlwMCAxN2IwIDFpcDAgMTdiMCAxaXAwIDE5WDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWlwMCAxN2IwIDFpcDAgMTdiMCAxaXAwXCIsXG5cdFx0XCJBbWVyaWNhL0F0aWtva2FufENTVCBDRFQgQ1dUIENQVCBFU1R8NjAgNTAgNTAgNTAgNTB8MDEwMTIzNHwtMjVUUTAgMWluMCBSbmIwIDNqZTAgOHgzMCBpdzBcIixcblx0XHRcIkFtZXJpY2EvQmFoaWF8TE1UIEJSVCBCUlNUfDJ5LjQgMzAgMjB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJnbHhwLlUgSGRMcC5VIDFjYzAgMWUxMCAxYlgwIEV6ZDAgU28wIDF2QTAgTW4wIDFCQjAgTUwwIDFCQjAgelgwIHFlMTAgeGIwIDJlcDAgbnowIDFDMTAgelgwIDFDMTAgTFgwIDFDMTAgTW4wIEgyMTAgUmIwIDF0QjAgSUwwIDFGZDAgRlgwIDFFTjAgRlgwIDFIQjAgTHowIDFFTjAgTHowIDFDMTAgSUwwIDFIQjAgRGIwIDFIQjAgT24wIDF6ZDAgT24wIDF6ZDAgTHowIDF6ZDAgUmIwIDF3TjAgV24wIDF0QjAgUmIwIDF0QjAgV0wwIDF0QjAgUmIwIDF6ZDAgT24wIDFIQjAgRlgwIGw1QjAgUmIwXCIsXG5cdFx0XCJBbWVyaWNhL0JhaGlhX0JhbmRlcmFzfExNVCBNU1QgQ1NUIFBTVCBNRFQgQ0RUfDcxIDcwIDYwIDgwIDYwIDUwfDAxMjEyMTIxMzE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTJ8LTFVUUYwIGRlTDAgOGxjMCAxN2MwIDEwTTAgMWRkMCBvdFgwIGdtTjAgUDJOMCAxM1ZkMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxZkIwIFdMMCAxZkIwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5XMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMFwiLFxuXHRcdFwiQW1lcmljYS9CYXJiYWRvc3xMTVQgQk1UIEFTVCBBRFR8M1cudCAzVy50IDQwIDMwfDAxMjMyMzIzMjMyfC0xUTBJMS52IGpzTTAgMU9EQzEudiBJTDAgMWlwMCAxN2IwIDFpcDAgMTdiMCAxbGQwIDEzYjBcIixcblx0XHRcIkFtZXJpY2EvQmVsZW18TE1UIEJSVCBCUlNUfDNkLlUgMzAgMjB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0yZ2x3Sy40IEhkS0suNCAxY2MwIDFlMTAgMWJYMCBFemQwIFNvMCAxdkEwIE1uMCAxQkIwIE1MMCAxQkIwIHpYMCBxZTEwIHhiMCAyZXAwIG56MCAxQzEwIHpYMCAxQzEwIExYMCAxQzEwIE1uMCBIMjEwIFJiMCAxdEIwIElMMCAxRmQwIEZYMFwiLFxuXHRcdFwiQW1lcmljYS9CZWxpemV8TE1UIENTVCBDSERUIENEVHw1US5NIDYwIDV1IDUwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEzMTMxfC0ya0J1Ny5jIGZQQTcuYyBPbnUgMXpjdSBSYnUgMXdvdSBSYnUgMXdvdSBSYnUgMXpjdSBPbnUgMXpjdSBPbnUgMXpjdSBSYnUgMXdvdSBSYnUgMXdvdSBSYnUgMXdvdSBSYnUgMXpjdSBPbnUgMXpjdSBPbnUgMXpjdSBSYnUgMXdvdSBSYnUgMXdvdSBSYnUgMXpjdSBPbnUgMXpjdSBPbnUgMXpjdSBPbnUgMXpjdSBSYnUgMXdvdSBSYnUgMXdvdSBSYnUgMXpjdSBPbnUgMXpjdSBPbnUgMXpjdSBSYnUgMXdvdSBSYnUgMWYwTXUgcW4wIGx4QjAgbW4wXCIsXG5cdFx0XCJBbWVyaWNhL0JsYW5jLVNhYmxvbnxBU1QgQURUIEFXVCBBUFR8NDAgMzAgMzAgMzB8MDEwMjMwfC0yNVRTMCAxaW4wIFVHcDAgOHg1MCBpdTBcIixcblx0XHRcIkFtZXJpY2EvQm9hX1Zpc3RhfExNVCBBTVQgQU1TVHw0Mi5FIDQwIDMwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJnbHZWLmsgSGRLVi5rIDFjYzAgMWUxMCAxYlgwIEV6ZDAgU28wIDF2QTAgTW4wIDFCQjAgTUwwIDFCQjAgelgwIHFlMTAgeGIwIDJlcDAgbnowIDFDMTAgelgwIDFDMTAgTFgwIDFDMTAgTW4wIEgyMTAgUmIwIDF0QjAgSUwwIDFGZDAgRlgwIHNtcDAgV0wwIDF0QjAgMkwwXCIsXG5cdFx0XCJBbWVyaWNhL0JvZ290YXxCTVQgQ09UIENPU1R8NFUuZyA1MCA0MHwwMTIxfC0yZWI3My5JIDM4eW8zLkkgMmVuMFwiLFxuXHRcdFwiQW1lcmljYS9Cb2lzZXxQU1QgUERUIE1TVCBNV1QgTVBUIE1EVHw4MCA3MCA3MCA2MCA2MCA2MHwwMTAxMDIzNDI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyfC0yNjFxMCAxblgwIDExQjAgMW5YMCA4QzEwIEpDTDAgOHgyMCBpeDAgUXdOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIERkMCAxS24wIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9DYW1icmlkZ2VfQmF5fHp6eiBNU1QgTVdUIE1QVCBNRERUIE1EVCBDU1QgQ0RUIEVTVHwwIDcwIDYwIDYwIDUwIDYwIDYwIDUwIDUwfDAxMjMxNDE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTU2Nzg2NTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTF8LTIxSmMwIFJPOTAgOHgyMCBpeDAgTENMMCAxZkEwIHpnTzAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFBMCAxblgwIDJLMCBXUTAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL0NhbXBvX0dyYW5kZXxMTVQgQU1UIEFNU1R8M0MucyA0MCAzMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTJ8LTJnbHdsLncgSGRMbC53IDFjYzAgMWUxMCAxYlgwIEV6ZDAgU28wIDF2QTAgTW4wIDFCQjAgTUwwIDFCQjAgelgwIHFlMTAgeGIwIDJlcDAgbnowIDFDMTAgelgwIDFDMTAgTFgwIDFDMTAgTW4wIEgyMTAgUmIwIDF0QjAgSUwwIDFGZDAgRlgwIDFFTjAgRlgwIDFIQjAgTHowIDFFTjAgTHowIDFDMTAgSUwwIDFIQjAgRGIwIDFIQjAgT24wIDF6ZDAgT24wIDF6ZDAgTHowIDF6ZDAgUmIwIDF3TjAgV24wIDF0QjAgUmIwIDF0QjAgV0wwIDF0QjAgUmIwIDF6ZDAgT24wIDFIQjAgRlgwIDFDMTAgTHowIDFJcDAgSFgwIDF6ZDAgT24wIDFIQjAgSUwwIDF3cDAgT24wIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgT24wIDF6ZDAgUmIwIDF6ZDAgTHowIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgT24wIDF6ZDAgT24wIDF6ZDAgT24wIDFDMTAgTHowIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgT24wIDF6ZDAgUmIwIDF3cDAgT24wIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgT24wIDF6ZDAgT24wIDF6ZDAgT24wIDFDMTAgTHowIDFDMTAgTHowIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgUmIwIDF3cDAgT24wIDFDMTAgTHowIDFDMTAgT24wIDF6ZDBcIixcblx0XHRcIkFtZXJpY2EvQ2FuY3VufExNVCBDU1QgRVNUIEVEVCBDRFR8NUwuNCA2MCA1MCA0MCA1MHwwMTIzMjMyMzQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDEyfC0xVVFHMCAycTJvMCB5TEIwIDFsYjAgMTRwMCAxbGIwIDE0cDAgTHowIHhCMCAxNHAwIDFuWDAgMTFCMCAxblgwIDFmQjAgV0wwIDFmQjAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCBEZDBcIixcblx0XHRcIkFtZXJpY2EvQ2FyYWNhc3xDTVQgVkVUIFZFVHw0ci5FIDR1IDQwfDAxMjF8LTJrVjd3LmsgMjhLTTIuayAxSXdPdVwiLFxuXHRcdFwiQW1lcmljYS9DYXllbm5lfExNVCBHRlQgR0ZUfDN0LmsgNDAgMzB8MDEyfC0ybXJ3dS5FIDJnV291LkVcIixcblx0XHRcIkFtZXJpY2EvQ2F5bWFufEtNVCBFU1R8NTcuYiA1MHwwMXwtMmwxdVEuTlwiLFxuXHRcdFwiQW1lcmljYS9DaGljYWdvfENTVCBDRFQgRVNUIENXVCBDUFR8NjAgNTAgNTAgNTAgNTB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMTAxMDEwMTAxMDM0MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8LTI2MXMwIDFuWDAgMTFCMCAxblgwIDF3cDAgVFgwIFdOMCAxcUwwIDFjTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDExejAgMW8xMCAxMXowIDExQjAgMUh6MCAxNHAwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgUkIwIDh4MzAgaXcwIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9DaGlodWFodWF8TE1UIE1TVCBDU1QgQ0RUIE1EVHw3NC5rIDcwIDYwIDUwIDYwfDAxMjEyMTIzMjMyNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDF8LTFVUUYwIGRlTDAgOGxjMCAxN2MwIDEwTTAgMWRkMCAyelFOMCAxbGIwIDE0cDAgMWxiMCAxNHEwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxZkIwIFdMMCAxZkIwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMFwiLFxuXHRcdFwiQW1lcmljYS9Db3N0YV9SaWNhfFNKTVQgQ1NUIENEVHw1QS5kIDYwIDUwfDAxMjEyMTIxMjF8LTFYZDZuLkwgMmx1MG4uTCBEYjAgMUtwMCBEYjAgcFJCMCAxNWIwIDFrcDAgbUwwXCIsXG5cdFx0XCJBbWVyaWNhL0NyZXN0b258TVNUIFBTVHw3MCA4MHwwMTB8LTI5RFIwIDQzQjBcIixcblx0XHRcIkFtZXJpY2EvQ3VpYWJhfExNVCBBTVQgQU1TVHwzSS5rIDQwIDMwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTJ8LTJnbHdmLkUgSGRMZi5FIDFjYzAgMWUxMCAxYlgwIEV6ZDAgU28wIDF2QTAgTW4wIDFCQjAgTUwwIDFCQjAgelgwIHFlMTAgeGIwIDJlcDAgbnowIDFDMTAgelgwIDFDMTAgTFgwIDFDMTAgTW4wIEgyMTAgUmIwIDF0QjAgSUwwIDFGZDAgRlgwIDFFTjAgRlgwIDFIQjAgTHowIDFFTjAgTHowIDFDMTAgSUwwIDFIQjAgRGIwIDFIQjAgT24wIDF6ZDAgT24wIDF6ZDAgTHowIDF6ZDAgUmIwIDF3TjAgV24wIDF0QjAgUmIwIDF0QjAgV0wwIDF0QjAgUmIwIDF6ZDAgT24wIDFIQjAgRlgwIDRhMTAgSFgwIDF6ZDAgT24wIDFIQjAgSUwwIDF3cDAgT24wIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgT24wIDF6ZDAgUmIwIDF6ZDAgTHowIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgT24wIDF6ZDAgT24wIDF6ZDAgT24wIDFDMTAgTHowIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgT24wIDF6ZDAgUmIwIDF3cDAgT24wIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgT24wIDF6ZDAgT24wIDF6ZDAgT24wIDFDMTAgTHowIDFDMTAgTHowIDFDMTAgTHowIDFDMTAgT24wIDF6ZDAgUmIwIDF3cDAgT24wIDFDMTAgTHowIDFDMTAgT24wIDF6ZDBcIixcblx0XHRcIkFtZXJpY2EvRGFubWFya3NoYXZufExNVCBXR1QgV0dTVCBHTVR8MWUuRSAzMCAyMCAwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEzfC0yYTVXSi5rIDJ6NWZKLmsgMTlVMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCBEQzBcIixcblx0XHRcIkFtZXJpY2EvRGF3c29ufFlTVCBZRFQgWVdUIFlQVCBZRERUIFBTVCBQRFR8OTAgODAgODAgODAgNzAgODAgNzB8MDEwMTAyMzA0MDU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NXwtMjVUTjAgMWluMCAxbzEwIDEzVjAgU2VyMCA4eDAwIGl6MCBMQ0wwIDFmQTAganJBMCBmTmQwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9EYXdzb25fQ3JlZWt8UFNUIFBEVCBQV1QgUFBUIE1TVHw4MCA3MCA3MCA3MCA3MHwwMTAyMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE0fC0yNVRPMCAxaW4wIFVHcDAgOHgxMCBpeTAgM05CMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIE1MMFwiLFxuXHRcdFwiQW1lcmljYS9EZW52ZXJ8TVNUIE1EVCBNV1QgTVBUfDcwIDYwIDYwIDYwfDAxMDEwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yNjFyMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIG1uMCBPcmQwIDh4MjAgaXgwIExDTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9EZXRyb2l0fExNVCBDU1QgRVNUIEVXVCBFUFQgRURUfDV3LmIgNjAgNTAgNDAgNDAgNDB8MDEyMzQyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTJ8LTJDZ2lyLk4gcGVxci5OIDE1NkwwIDh4NDAgaXYwIDZmZDAgMTF6MCBKeTEwIFNMMCBkbkIwIDFjTDAgczEwIDFWejAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9FZG1vbnRvbnxMTVQgTVNUIE1EVCBNV1QgTVBUfDd4LlEgNzAgNjAgNjAgNjB8MDEyMTIxMjEyMTIxMjEzNDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJ5ZDRxLjggc2hkcS44IDFpbjAgMTdkMCBoejAgMmRCMCAxZnowIDFhMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDExejAgSUdOMCA4eDIwIGl4MCAzTkIwIDExejAgTEZCMCAxY0wwIDNDcDAgMWNMMCA2Nk4wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL0VpcnVuZXBlfExNVCBBQ1QgQUNTVCBBTVR8NEQucyA1MCA0MCA0MHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTMxfC0yZ2x2ay53IEhkTGsudyAxY2MwIDFlMTAgMWJYMCBFemQwIFNvMCAxdkEwIE1uMCAxQkIwIE1MMCAxQkIwIHpYMCBxZTEwIHhiMCAyZXAwIG56MCAxQzEwIHpYMCAxQzEwIExYMCAxQzEwIE1uMCBIMjEwIFJiMCAxdEIwIElMMCAxRmQwIEZYMCBkUEIwIE9uMCB5VGQwIGQ1WDBcIixcblx0XHRcIkFtZXJpY2EvRWxfU2FsdmFkb3J8TE1UIENTVCBDRFR8NVUuTSA2MCA1MHwwMTIxMjF8LTFYaUczLmMgMkZ2YzMuYyBXTDAgMXFOMCBXTDBcIixcblx0XHRcIkFtZXJpY2EvRW5zZW5hZGF8TE1UIE1TVCBQU1QgUERUIFBXVCBQUFR8N00uNCA3MCA4MCA3MCA3MCA3MHwwMTIxMjMyNDUyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzJ8LTFVUUUwIDRQWDAgOG1NMCA4bGMwIFNOMCAxY0wwIHBIQjAgODNyMCB6STAgNU8xMCAxUnowIGNPUDAgMTF6MCAxbzEwIDExejAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCBCVXAwIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgVTEwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvRm9ydF9XYXluZXxDU1QgQ0RUIENXVCBDUFQgRVNUIEVEVHw2MCA1MCA1MCA1MCA1MCA0MHwwMTAxMDEwMjMwMTAxMDEwMTAxMDEwMTAxMDEwNDA0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTR8LTI2MXMwIDFuWDAgMTFCMCAxblgwIFFJMTAgRGIwIFJCMCA4eDMwIGl3MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgNVR6MCAxbzEwIHFMYjAgMWNMMCAxY04wIDFjTDAgMXFoZDAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Gb3J0YWxlemF8TE1UIEJSVCBCUlNUfDJ5IDMwIDIwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJnbHhxIEhkTHEgMWNjMCAxZTEwIDFiWDAgRXpkMCBTbzAgMXZBMCBNbjAgMUJCMCBNTDAgMUJCMCB6WDAgcWUxMCB4YjAgMmVwMCBuejAgMUMxMCB6WDAgMUMxMCBMWDAgMUMxMCBNbjAgSDIxMCBSYjAgMXRCMCBJTDAgMUZkMCBGWDAgMUVOMCBGWDAgMUhCMCBMejAgbnNwMCBXTDAgMXRCMCA1ejAgMm1OMCBPbjBcIixcblx0XHRcIkFtZXJpY2EvR2xhY2VfQmF5fExNVCBBU1QgQURUIEFXVCBBUFR8M1guTSA0MCAzMCAzMCAzMHwwMTIxMzQxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJJc0kwLmMgQ3dPMC5jIDFpbjAgVUdwMCA4eDUwIGl1MCBpcTEwIDExejAgSmcxMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Hb2R0aGFifExNVCBXR1QgV0dTVHwzcS5VIDMwIDIwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJhNVV4LjQgMno1ZHguNCAxOVUwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkFtZXJpY2EvR29vc2VfQmF5fE5TVCBORFQgTlNUIE5EVCBOV1QgTlBUIEFTVCBBRFQgQUREVHwzdS5RIDJ1LlEgM3UgMnUgMnUgMnUgNDAgMzAgMjB8MDEwMjMyMzIzMjMyMzIzMjQ1MjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzI2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY4Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2fC0yNVRTdC44IDFpbjAgRFhiMCAySGJYLjggV0wwIDFxTjAgV0wwIDFxTjAgV0wwIDF0QjAgVFgwIDF0QjAgV0wwIDFxTjAgV0wwIDFxTjAgN1VIdSBpdHUgMXRCMCBXTDAgMXFOMCBXTDAgMXFOMCBXTDAgMXFOMCBXTDAgMXRCMCBXTDAgMWxkMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgUzEwIGcwdSAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRuMSAxbGIwIDE0cDAgMW5XMCAxMUMwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpjWCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9HcmFuZF9UdXJrfEtNVCBFU1QgRURUIEFTVHw1Ny5iIDUwIDQwIDQwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjN8LTJsMXVRLk4gMkhIQlEuTiAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL0d1YXRlbWFsYXxMTVQgQ1NUIENEVHw2Mi40IDYwIDUwfDAxMjEyMTIxMjF8LTI0S2hWLlUgMmVmWFYuVSBBbjAgbXRkMCBOejAgaWZCMCAxN2IwIHpEQjAgMTF6MFwiLFxuXHRcdFwiQW1lcmljYS9HdWF5YXF1aWx8UU1UIEVDVHw1ZSA1MHwwMXwtMXlWU0tcIixcblx0XHRcIkFtZXJpY2EvR3V5YW5hfExNVCBHQkdUIEdZVCBHWVQgR1lUfDNRLkUgM0ogM0ogMzAgNDB8MDEyMzR8LTJkdlU3LmsgMjRKelEuayBtbGMwIEJ4YmZcIixcblx0XHRcIkFtZXJpY2EvSGFsaWZheHxMTVQgQVNUIEFEVCBBV1QgQVBUfDRlLm8gNDAgMzAgMzAgMzB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEzNDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMklzSEouQSB4enpKLkEgMWRiMCAzSTMwIDFpbjAgM0hYMCBJTDAgMUUxMCBNTDAgMXlOMCBQYjAgMUJkMCBNbjAgMUJkMCBSejAgMXcxMCBYYjAgMXcxMCBMWDAgMXcxMCBYYjAgMXcxMCBMejAgMUMxMCBKejAgMUUxMCBPTDAgMXlOMCBVbjAgMXFwMCBYYjAgMXFwMCAxMVgwIDF3MTAgTHowIDFIQjAgTFgwIDFDMTAgRlgwIDF3MTAgWGIwIDFxcDAgWGIwIDFCQjAgTFgwIDF0ZDAgWGIwIDFxcDAgWGIwIFJmMCA4eDUwIGl1MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgM1FwMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDNRcDAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCA2aTEwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9IYXZhbmF8SE1UIENTVCBDRFR8NXQuQSA1MCA0MHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTFNZXV1Lm8gNzJ6dS5vIE1MMCBzbGQwIEFuMCAxTmQwIERiMCAxTmQwIEFuMCA2RXAwIEFuMCAxTmQwIEFuMCBKRGQwIE1uMCAxQXAwIE9uMCAxZmQwIDExWDAgMXFOMCBXTDAgMXdwMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxNG4wIDFsZDAgMTRMMCAxa04wIDE1YjAgMWtwMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWZCMCAxMXowIDE0cDAgMW5YMCAxMUIwIDFuWDAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxNG4wIDFsZDAgMTRuMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMWExMCAxaW4wIDFhMTAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxN2MwIDFvMDAgMTFBMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxMUEwIDZpMDAgUmMwIDF3bzAgVTAwIDF0QTAgUmMwIDF3bzAgVTAwIDF3bzAgVTAwIDF6YzAgVTAwIDFxTTAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzBcIixcblx0XHRcIkFtZXJpY2EvSGVybW9zaWxsb3xMTVQgTVNUIENTVCBQU1QgTURUfDduLlEgNzAgNjAgODAgNjB8MDEyMTIxMjEzMTQxNDE0MXwtMVVRRjAgZGVMMCA4bGMwIDE3YzAgMTBNMCAxZGQwIG90WDAgZ21OMCBQMk4wIDEzVmQwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMFwiLFxuXHRcdFwiQW1lcmljYS9JbmRpYW5hL0tub3h8Q1NUIENEVCBDV1QgQ1BUIEVTVHw2MCA1MCA1MCA1MCA1MHwwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDQwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTQxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yNjFzMCAxblgwIDExQjAgMW5YMCBTZ04wIDh4MzAgaXcwIDNOQjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAzQ24wIDh3cDAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCBzMTAgMVZ6MCBMQjAgMUJYMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgejhvMCAxbzAwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL0luZGlhbmEvTWFyZW5nb3xDU1QgQ0RUIENXVCBDUFQgRVNUIEVEVHw2MCA1MCA1MCA1MCA1MCA0MHwwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTA0NTQ1NDU0NTQ1NDE0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0fC0yNjFzMCAxblgwIDExQjAgMW5YMCBTZ04wIDh4MzAgaXcwIGR5TjAgMTF6MCA2ZmQwIDExejAgMW8xMCAxMXowIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBqcnowIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVkEwIExBMCAxQlgwIDFlNnAwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvSW5kaWFuYS9QZXRlcnNidXJnfENTVCBDRFQgQ1dUIENQVCBFU1QgRURUfDYwIDUwIDUwIDUwIDUwIDQwfDAxMDEwMjMwMTAxMDEwMTAxMDEwMTAxMDEwMTA0MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTQxMDE0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0fC0yNjFzMCAxblgwIDExQjAgMW5YMCBTZ04wIDh4MzAgaXcwIG5qWDAgV04wIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgM0ZiMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgczEwIDFWejAgTEIwIDFCWDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxOWNvMCAxbzAwIFJkMCAxemIwIE9vMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL0luZGlhbmEvVGVsbF9DaXR5fENTVCBDRFQgQ1dUIENQVCBFU1QgRURUfDYwIDUwIDUwIDUwIDUwIDQwfDAxMDEwMjMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwNDU0NTQxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yNjFzMCAxblgwIDExQjAgMW5YMCBTZ04wIDh4MzAgaXcwIDFvMTAgMTF6MCBnMHAwIDExejAgMW8xMCAxMXowIDFxTDAgV04wIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDFmejAgMWNOMCBXTDAgMXFOMCAxY0wwIDFjTjAgMWNMMCAxY04wIGNhTDAgMWNMMCAxY04wIDFjTDAgMXFoZDAgMW8wMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9JbmRpYW5hL1ZldmF5fENTVCBDRFQgQ1dUIENQVCBFU1QgRURUfDYwIDUwIDUwIDUwIDUwIDQwfDAxMDEwMjMwNDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NHwtMjYxczAgMW5YMCAxMUIwIDFuWDAgU2dOMCA4eDMwIGl3MCBrUEIwIEF3bjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxbG5kMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL0luZGlhbmEvVmluY2VubmVzfENTVCBDRFQgQ1dUIENQVCBFU1QgRURUfDYwIDUwIDUwIDUwIDUwIDQwfDAxMDEwMjMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwNDU0NTQxMDE0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0fC0yNjFzMCAxblgwIDExQjAgMW5YMCBTZ04wIDh4MzAgaXcwIDFvMTAgMTF6MCBnMHAwIDExejAgMW8xMCAxMXowIDFxTDAgV04wIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDFmejAgMWNOMCBXTDAgMXFOMCAxY0wwIDFjTjAgMWNMMCAxY04wIGNhTDAgMWNMMCAxY04wIDFjTDAgMXFoZDAgMW8wMCBSZDAgMXpiMCBPbzAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9JbmRpYW5hL1dpbmFtYWN8Q1NUIENEVCBDV1QgQ1BUIEVTVCBFRFR8NjAgNTAgNTAgNTAgNTAgNDB8MDEwMTAyMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTA0NTQ1NDEwNTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTR8LTI2MXMwIDFuWDAgMTFCMCAxblgwIFNnTjAgOHgzMCBpdzAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIGpyejAgMWNMMCAxY04wIDFjTDAgMXFoZDAgMW8wMCBSZDAgMXphMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9JbnV2aWt8enp6IFBTVCBQRERUIE1TVCBNRFR8MCA4MCA2MCA3MCA2MHwwMTIxMzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzfC1GbkEwIHRXVTAgMWZBMCB3UGUwIDJwejAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL0lxYWx1aXR8enp6IEVXVCBFUFQgRVNUIEVERFQgRURUIENTVCBDRFR8MCA0MCA0MCA1MCAzMCA0MCA2MCA1MHwwMTIzNDM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzU2NzM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1MzUzNTM1M3wtMTZLMDAgN25YMCBpdjAgTENMMCAxZkEwIHpnTzAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFDMCAxblgwIDExQTAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL0phbWFpY2F8S01UIEVTVCBFRFR8NTcuYiA1MCA0MHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0ybDF1US5OIDJ1TTFRLk4gMVZ6MCBMQjAgMUJYMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowXCIsXG5cdFx0XCJBbWVyaWNhL0p1bmVhdXxQU1QgUFdUIFBQVCBQRFQgWURUIFlTVCBBS1NUIEFLRFR8ODAgNzAgNzAgNzAgODAgOTAgOTAgODB8MDEyMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzA0MDMwMzAzNTY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzZ8LTE3VDIwIDh4MTAgaXkwIFZvMTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgczEwIDFWejAgTEIwIDFCWDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNNMCAxY00wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCBjbzAgMTBxMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9LZW50dWNreS9Mb3Vpc3ZpbGxlfENTVCBDRFQgQ1dUIENQVCBFU1QgRURUfDYwIDUwIDUwIDUwIDUwIDQwfDAxMDEwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE0NTQ1NDU0NTQ1NDU0MTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTR8LTI2MXMwIDFuWDAgMTFCMCAxblgwIDNGZDAgTmIwIExQZDAgMTF6MCBSQjAgOHgzMCBpdzAgQmIwIDEwTjAgMmJCMCA4aW4wIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIHh6MCBnc28wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCBzMTAgMVZBMCBMQTAgMUJYMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvS2VudHVja3kvTW9udGljZWxsb3xDU1QgQ0RUIENXVCBDUFQgRVNUIEVEVHw2MCA1MCA1MCA1MCA1MCA0MHwwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxNDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0fC0yNjFzMCAxblgwIDExQjAgMW5YMCBTZ04wIDh4MzAgaXcwIFNXcDAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUEwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9MYV9QYXp8Q01UIEJPU1QgQk9UfDR3LkEgM3cuQSA0MHwwMTJ8LTF4MzdyLm8gMTNiMFwiLFxuXHRcdFwiQW1lcmljYS9MaW1hfExNVCBQRVQgUEVTVHw1OC5BIDUwIDQwfDAxMjEyMTIxMjEyMTIxMjF8LTJ0eUdQLm8gMWJEelAubyB6WDAgMWFOMCAxY0wwIDFjTjAgMWNMMCAxUHJCMCB6WDAgMU8xMCB6WDAgNkdwMCB6WDAgOThwMCB6WDBcIixcblx0XHRcIkFtZXJpY2EvTG9zX0FuZ2VsZXN8UFNUIFBEVCBQV1QgUFBUfDgwIDcwIDcwIDcwfDAxMDEwMjMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMjYxcTAgMW5YMCAxMUIwIDFuWDAgU2dOMCA4eDEwIGl5MCA1V3AwIDFWYjAgM2RCMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9NYWNlaW98TE1UIEJSVCBCUlNUfDJtLlEgMzAgMjB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0yZ2x4Qi44IEhkTEIuOCAxY2MwIDFlMTAgMWJYMCBFemQwIFNvMCAxdkEwIE1uMCAxQkIwIE1MMCAxQkIwIHpYMCBxZTEwIHhiMCAyZXAwIG56MCAxQzEwIHpYMCAxQzEwIExYMCAxQzEwIE1uMCBIMjEwIFJiMCAxdEIwIElMMCAxRmQwIEZYMCAxRU4wIEZYMCAxSEIwIEx6MCBkTU4wIEx6MCA4UTEwIFdMMCAxdEIwIDV6MCAybU4wIE9uMFwiLFxuXHRcdFwiQW1lcmljYS9NYW5hZ3VhfE1NVCBDU1QgRVNUIENEVHw1Si5jIDYwIDUwIDUwfDAxMjEzMTMxMjEyMTMxMzF8LTFxdWllLk0gMXlBTWUuTSA0bW4wIDlVcDAgRHowIDFLMTAgRHowIHMzRjAgMUtIMCBEQjAgOUluMCBrOHAwIDE5WDAgMW8zMCAxMXkwXCIsXG5cdFx0XCJBbWVyaWNhL01hbmF1c3xMTVQgQU1UIEFNU1R8NDAuNCA0MCAzMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMmdsdlguVSBIZEtYLlUgMWNjMCAxZTEwIDFiWDAgRXpkMCBTbzAgMXZBMCBNbjAgMUJCMCBNTDAgMUJCMCB6WDAgcWUxMCB4YjAgMmVwMCBuejAgMUMxMCB6WDAgMUMxMCBMWDAgMUMxMCBNbjAgSDIxMCBSYjAgMXRCMCBJTDAgMUZkMCBGWDAgZFBCMCBPbjBcIixcblx0XHRcIkFtZXJpY2EvTWFydGluaXF1ZXxGRk1UIEFTVCBBRFR8NDQuayA0MCAzMHwwMTIxfC0ybVBUVC5FIDJMUGJULkUgMTlYMFwiLFxuXHRcdFwiQW1lcmljYS9NYXRhbW9yb3N8TE1UIENTVCBDRFR8NkUgNjAgNTB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMVVRRzAgMkZqQzAgMW5YMCBpNnAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDFmQjAgV0wwIDFmQjAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgVTEwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvTWF6YXRsYW58TE1UIE1TVCBDU1QgUFNUIE1EVHw3NS5FIDcwIDYwIDgwIDYwfDAxMjEyMTIxMzE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDF8LTFVUUYwIGRlTDAgOGxjMCAxN2MwIDEwTTAgMWRkMCBvdFgwIGdtTjAgUDJOMCAxM1ZkMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxZkIwIFdMMCAxZkIwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMFwiLFxuXHRcdFwiQW1lcmljYS9NZW5vbWluZWV8Q1NUIENEVCBDV1QgQ1BUIEVTVHw2MCA1MCA1MCA1MCA1MHwwMTAxMDIzMDEwMTA0MTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMjYxczAgMW5YMCAxMUIwIDFuWDAgU2dOMCA4eDMwIGl3MCAxbzEwIDExejAgTENOMCAxZnowIDY0MTAgOUpiMCAxY00wIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9NZXJpZGF8TE1UIENTVCBFU1QgQ0RUfDVXLnMgNjAgNTAgNTB8MDEyMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMXwtMVVRRzAgMnEybzAgMmh6MCB3dTMwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDFmQjAgV0wwIDFmQjAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwXCIsXG5cdFx0XCJBbWVyaWNhL01ldGxha2F0bGF8UFNUIFBXVCBQUFQgUERUfDgwIDcwIDcwIDcwfDAxMjAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzB8LTE3VDIwIDh4MTAgaXkwIFZvMTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgczEwIDFWejAgTEIwIDFCWDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MFwiLFxuXHRcdFwiQW1lcmljYS9NZXhpY29fQ2l0eXxMTVQgTVNUIENTVCBDRFQgQ1dUfDZBLkEgNzAgNjAgNTAgNTB8MDEyMTIxMjMyMzI0MjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyfC0xVVFGMCBkZUwwIDhsYzAgMTdjMCAxME0wIDFkZDAgZ0VuMCBUWDAgM3hkMCBKYjAgNnpCMCBTTDAgZTVkMCAxN2IwIDFQZmYwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDFmQjAgV0wwIDFmQjAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwXCIsXG5cdFx0XCJBbWVyaWNhL01pcXVlbG9ufExNVCBBU1QgUE1TVCBQTURUfDNJLkUgNDAgMzAgMjB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyfC0ybUtrZi5rIDJMVEFmLmsgZ1ExMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Nb25jdG9ufEVTVCBBU1QgQURUIEFXVCBBUFR8NTAgNDAgMzAgMzAgMzB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTM0MTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0ySXNIMCBDd04wIDFpbjAgekFvMCBBbjAgMU5kMCBBbjAgMU5kMCBBbjAgMU5kMCBBbjAgMU5kMCBBbjAgMU5kMCBBbjAgMUsxMCBMejAgMXpCMCBOWDAgMXUxMCBXbjAgUzIwIDh4NTAgaXUwIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgMTF6MCAxbzEwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgM0NwMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0bjEgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmVYIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvTW9udGVycmV5fExNVCBDU1QgQ0RUfDZGLmcgNjAgNTB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMVVRRzAgMkZqQzAgMW5YMCBpNnAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDFmQjAgV0wwIDFmQjAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwXCIsXG5cdFx0XCJBbWVyaWNhL01vbnRldmlkZW98TU1UIFVZVCBVWUhTVCBVWVNUIFVZVCBVWUhTVHwzSS5JIDN1IDMwIDIwIDMwIDJ1fDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMzQzNDM0MzQzNDM0NTQ1NDU0MzQ1MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0M3wtMjBVSWYuZyA4anpKLmcgMWNMdSAxZGN1IDFjTHUgMWRjdSAxY0x1IGlyY3UgMTF6dSAxbzB1IDExenUgMW8wdSAxMXp1IDFxTXUgV0x1IDFxTXUgV0x1IDFxTXUgV0x1IDFxTXUgMTF6dSAxbzB1IDExenUgTkF1IDExYnUgMmlNdSB6V3UgRHExMCAxOVgwIHBkMCBqejAgY20xMCAxOVgwIDFmQjAgMW9uMCAxMWQwIDFvTDAgMW5CMCAxZnp1IDFhb3UgMWZ6dSAxYW91IDFmenUgM25BdSBKYjAgM01OMCAxU0x1IDRqenUgMlBCMCBMYjAgM0RkMCAxcGIwIGl4ZDAgQW4wIDFNTjAgQW4wIDF3cDAgT24wIDF3cDAgUmIwIDF6ZDAgT24wIDF3cDAgUmIwIHM4cDAgMWZCMCAxaXAwIDExejAgMWxkMCAxNG4wIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxNG4wIDFsZDAgMTRuMCAxbGQwIDE0bjAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxNG4wIDFsZDAgMTRuMCAxbGQwIDE0bjAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDE0bjAgMWxkMCAxNG4wIDFsZDAgMTRuMCAxbGQwIDE0bjAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDE0bjAgMWxkMCAxNG4wIDFsZDAgMTRuMCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTRuMCAxbGQwIDE0bjAgMWxkMCAxNG4wIDFsZDAgMTRuMCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTBcIixcblx0XHRcIkFtZXJpY2EvTW9udHJlYWx8RVNUIEVEVCBFV1QgRVBUfDUwIDQwIDQwIDQwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEyMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yOHRSMCBiVjAgMm0zMCAxaW4wIDEyMXUgMW5iMCAxZzEwIDExejAgMW8wdSAxMXp1IDFvMHUgMTF6dSAzVkF1IFJ6dSAxcU11IFdMdSAxcU11IFdMdSAxcUt1IFdMMCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCA0a08wIDh4NDAgaXYwIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMW8xMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9OYXNzYXV8TE1UIEVTVCBFRFR8NTkudSA1MCA0MHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJrTnVPLnUgMjZYZE8udSAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL05ld19Zb3JrfEVTVCBFRFQgRVdUIEVQVHw1MCA0MCA0MCA0MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMjYxdDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIDFhMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDExejAgMW8xMCAxMXowIFJCMCA4eDQwIGl2MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCBzMTAgMVZ6MCBMQjAgMUJYMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvTmlwaWdvbnxFU1QgRURUIEVXVCBFUFR8NTAgNDAgNDAgNDB8MDEwMTIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yNVRSMCAxaW4wIFJuYjAgM2plMCA4eDQwIGl2MCAxOXlOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvTm9tZXxOU1QgTldUIE5QVCBCU1QgQkRUIFlTVCBBS1NUIEFLRFR8YjAgYTAgYTAgYjAgYTAgOTAgOTAgODB8MDEyMDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDU2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2fC0xN1NYMCA4d1cwIGlCMCBRbGIwIDUyTzAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgczEwIDFWejAgTEIwIDFCWDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCBjbDAgMTBxMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Ob3JvbmhhfExNVCBGTlQgRk5TVHwyOS5FIDIwIDEwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJnbHhPLmsgSGRLTy5rIDFjYzAgMWUxMCAxYlgwIEV6ZDAgU28wIDF2QTAgTW4wIDFCQjAgTUwwIDFCQjAgelgwIHFlMTAgeGIwIDJlcDAgbnowIDFDMTAgelgwIDFDMTAgTFgwIDFDMTAgTW4wIEgyMTAgUmIwIDF0QjAgSUwwIDFGZDAgRlgwIDFFTjAgRlgwIDFIQjAgTHowIG5zcDAgV0wwIDF0QjAgMkwwIDJwQjAgT24wXCIsXG5cdFx0XCJBbWVyaWNhL05vcnRoX0Rha290YS9CZXVsYWh8TVNUIE1EVCBNV1QgTVBUIENTVCBDRFR8NzAgNjAgNjAgNjAgNjAgNTB8MDEwMTAyMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0fC0yNjFyMCAxblgwIDExQjAgMW5YMCBTZ04wIDh4MjAgaXgwIFF3TjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCBzMTAgMVZ6MCBMQjAgMUJYMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT28wIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvTm9ydGhfRGFrb3RhL0NlbnRlcnxNU1QgTURUIE1XVCBNUFQgQ1NUIENEVHw3MCA2MCA2MCA2MCA2MCA1MHwwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTR8LTI2MXIwIDFuWDAgMTFCMCAxblgwIFNnTjAgOHgyMCBpeDAgUXdOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRvMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Ob3J0aF9EYWtvdGEvTmV3X1NhbGVtfE1TVCBNRFQgTVdUIE1QVCBDU1QgQ0RUfDcwIDYwIDYwIDYwIDYwIDUwfDAxMDEwMjMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NHwtMjYxcjAgMW5YMCAxMUIwIDFuWDAgU2dOMCA4eDIwIGl4MCBRd04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgczEwIDFWejAgTEIwIDFCWDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0bzAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL09qaW5hZ2F8TE1UIE1TVCBDU1QgQ0RUIE1EVHw2Vi5FIDcwIDYwIDUwIDYwfDAxMjEyMTIzMjMyNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDF8LTFVUUYwIGRlTDAgOGxjMCAxN2MwIDEwTTAgMWRkMCAyelFOMCAxbGIwIDE0cDAgMWxiMCAxNHEwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxZkIwIFdMMCAxZkIwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIFUxMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL1BhbmFtYXxDTVQgRVNUfDVqLkEgNTB8MDF8LTJ1ZHVFLm9cIixcblx0XHRcIkFtZXJpY2EvUGFuZ25pcnR1bmd8enp6IEFTVCBBV1QgQVBUIEFERFQgQURUIEVEVCBFU1QgQ1NUIENEVHwwIDQwIDMwIDMwIDIwIDMwIDQwIDUwIDYwIDUwfDAxMjMxNDE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE2NzY3Njc2NzY4OTc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2N3wtMVhpTTAgUG5HMCA4eDUwIGl1MCBMQ0wwIDFmQTAgemdPMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxbzAwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUMwIDFuWDAgMTFBMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvUGFyYW1hcmlib3xMTVQgUE1UIFBNVCBORUdUIFNSVCBTUlR8M0UuRSAzRS5RIDNFLkEgM3UgM3UgMzB8MDEyMzQ1fC0ybkRVai5rIFdxbzAuYyBxYW5YLkkgMWRtTE4ubyBsemMwXCIsXG5cdFx0XCJBbWVyaWNhL1Bob2VuaXh8TVNUIE1EVCBNV1R8NzAgNjAgNjB8MDEwMTAyMDIwMTB8LTI2MXIwIDFuWDAgMTFCMCAxblgwIFNnTjAgNEFsMSBBcDAgMWRiMCBTV3FYIDFjTDBcIixcblx0XHRcIkFtZXJpY2EvUG9ydC1hdS1QcmluY2V8UFBNVCBFU1QgRURUfDROIDUwIDQwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTI4UkhiIDJGbk1iIDE5WDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDE0bzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTRvMCAxbGMwIDE0bzAgMWxjMCBpNm4wIDFuWDAgMTFCMCAxblgwIGQ0MzAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Qb3J0b19BY3JlfExNVCBBQ1QgQUNTVCBBTVR8NHYuYyA1MCA0MCA0MHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEzMXwtMmdsdnMuTSBIZExzLk0gMWNjMCAxZTEwIDFiWDAgRXpkMCBTbzAgMXZBMCBNbjAgMUJCMCBNTDAgMUJCMCB6WDAgcWUxMCB4YjAgMmVwMCBuejAgMUMxMCB6WDAgMUMxMCBMWDAgMUMxMCBNbjAgSDIxMCBSYjAgMXRCMCBJTDAgMUZkMCBGWDAgTkJkMCBkNVgwXCIsXG5cdFx0XCJBbWVyaWNhL1BvcnRvX1ZlbGhvfExNVCBBTVQgQU1TVHw0Zi5BIDQwIDMwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMmdsdkkubyBIZEtJLm8gMWNjMCAxZTEwIDFiWDAgRXpkMCBTbzAgMXZBMCBNbjAgMUJCMCBNTDAgMUJCMCB6WDAgcWUxMCB4YjAgMmVwMCBuejAgMUMxMCB6WDAgMUMxMCBMWDAgMUMxMCBNbjAgSDIxMCBSYjAgMXRCMCBJTDAgMUZkMCBGWDBcIixcblx0XHRcIkFtZXJpY2EvUHVlcnRvX1JpY298QVNUIEFXVCBBUFR8NDAgMzAgMzB8MDEyMHwtMTdsVTAgN1hUMCBpdTBcIixcblx0XHRcIkFtZXJpY2EvUmFpbnlfUml2ZXJ8Q1NUIENEVCBDV1QgQ1BUfDYwIDUwIDUwIDUwfDAxMDEyMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMjVUUTAgMWluMCBSbmIwIDNqZTAgOHgzMCBpdzAgMTl5TjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbWVyaWNhL1Jhbmtpbl9JbmxldHx6enogQ1NUIENERFQgQ0RUIEVTVHwwIDYwIDQwIDUwIDUwfDAxMjEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzQzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMXwtdkRjMCBrZXUwIDFmQTAgemdPMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvUmVjaWZlfExNVCBCUlQgQlJTVHwyai5BIDMwIDIwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJnbHhFLm8gSGRMRS5vIDFjYzAgMWUxMCAxYlgwIEV6ZDAgU28wIDF2QTAgTW4wIDFCQjAgTUwwIDFCQjAgelgwIHFlMTAgeGIwIDJlcDAgbnowIDFDMTAgelgwIDFDMTAgTFgwIDFDMTAgTW4wIEgyMTAgUmIwIDF0QjAgSUwwIDFGZDAgRlgwIDFFTjAgRlgwIDFIQjAgTHowIG5zcDAgV0wwIDF0QjAgMkwwIDJwQjAgT24wXCIsXG5cdFx0XCJBbWVyaWNhL1JlZ2luYXxMTVQgTVNUIE1EVCBNV1QgTVBUIENTVHw2Vy5BIDcwIDYwIDYwIDYwIDYwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTM0MTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxNXwtMkFENTEubyB1SGUxLm8gMWluMCBzMkwwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDExejAgNjZOMCAxY0wwIDFjTjAgMTlYMCAxZkIwIDFjTDAgMWZCMCAxY0wwIDFjTjAgMWNMMCBNMzAgOHgyMCBpeDAgMWlwMCAxY0wwIDFpcDAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCAxMXowIDFvMTAgMTF6MCAzTkIwIDFjTDAgMWNOMFwiLFxuXHRcdFwiQW1lcmljYS9SZXNvbHV0ZXx6enogQ1NUIENERFQgQ0RUIEVTVHwwIDYwIDQwIDUwIDUwfDAxMjEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzQzMTMxMzEzMTMxMzQzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMXwtU25BMCBHV1MwIDFmQTAgemdPMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvU2FudGFfSXNhYmVsfExNVCBNU1QgUFNUIFBEVCBQV1QgUFBUfDdELnMgNzAgODAgNzAgNzAgNzB8MDEyMTIzMjQ1MjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyfC0xVVFFMCA0UFgwIDhtTTAgOGxjMCBTTjAgMWNMMCBwSEIwIDgzcjAgekkwIDVPMTAgMVJ6MCBjT1AwIDExejAgMW8xMCAxMXowIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgQlVwMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMFwiLFxuXHRcdFwiQW1lcmljYS9TYW50YXJlbXxMTVQgQU1UIEFNU1QgQlJUfDNDLk0gNDAgMzAgMzB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxM3wtMmdsd2wuYyBIZExsLmMgMWNjMCAxZTEwIDFiWDAgRXpkMCBTbzAgMXZBMCBNbjAgMUJCMCBNTDAgMUJCMCB6WDAgcWUxMCB4YjAgMmVwMCBuejAgMUMxMCB6WDAgMUMxMCBMWDAgMUMxMCBNbjAgSDIxMCBSYjAgMXRCMCBJTDAgMUZkMCBGWDAgTkJkMFwiLFxuXHRcdFwiQW1lcmljYS9TYW50aWFnb3xTTVQgQ0xUIENMVCBDTFNUIENMU1QgQ0xUfDRHLksgNTAgNDAgNDAgMzAgMzB8MDEwMjAzMTMxMzEzMTMxMzEzMTI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQ1fC0ycTVUaC5lIGZOY2guZSA1Z0xHLksgMjFiaC5lIGpSQUcuSyAxcGJoLmUgMTFkMCAxb0wwIDExZDAgMW9MMCAxMWQwIDFvTDAgMTFkMCAxcGIwIDExZDAgbkhYMCBvcDAgOVVLMCAxSmUwIFFlbjAgV0wwIDF6ZDAgT24wIDFpcDAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMWxkMCAxNG4wIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIFdMMCAxcU4wIDFjTDAgMWNOMCAxMXowIDFsZDAgMTRuMCAxcU4wIDExejAgMWNOMCAxOVgwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDE3YjAgMWlwMCAxMXowIDFpcDAgMWZ6MCAxZkIwIDExejAgMXFOMCBXTDAgMXFOMCBXTDAgMXFOMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCAxN2IwIDFpcDAgMTF6MCAxbzEwIDE5WDAgMWZCMCAxblgwIEcxMCAxRUwwIE9wMCAxemIwIFJkMCAxd24wIFJkMCAxd24wXCIsXG5cdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298U0RNVCBFU1QgRURUIEVIRFQgQVNUfDRFIDUwIDQwIDR1IDQwfDAxMjEzMTMxMzEzMTMxNDE0fC0xdHRqayAxbEpNayBNbjAgNnNwMCBMYnUgMUNvdSB5THUgMVJBdSB3THUgMVFNdSB4enUgMVEwdSB4WHUgMVBBdSAxM2pCMCBlMDBcIixcblx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfExNVCBCUlQgQlJTVHwzNi5zIDMwIDIwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMnwtMmdsd1IudyBIZEtSLncgMWNjMCAxZTEwIDFiWDAgRXpkMCBTbzAgMXZBMCBNbjAgMUJCMCBNTDAgMUJCMCB6WDAgcFRkMCBQWDAgMmVwMCBuejAgMUMxMCB6WDAgMUMxMCBMWDAgMUMxMCBNbjAgSDIxMCBSYjAgMXRCMCBJTDAgMUZkMCBGWDAgMUVOMCBGWDAgMUhCMCBMejAgMUVOMCBMejAgMUMxMCBJTDAgMUhCMCBEYjAgMUhCMCBPbjAgMXpkMCBPbjAgMXpkMCBMejAgMXpkMCBSYjAgMXdOMCBXbjAgMXRCMCBSYjAgMXRCMCBXTDAgMXRCMCBSYjAgMXpkMCBPbjAgMUhCMCBGWDAgMUMxMCBMejAgMUlwMCBIWDAgMXpkMCBPbjAgMUhCMCBJTDAgMXdwMCBPbjAgMUMxMCBMejAgMUMxMCBPbjAgMXpkMCBPbjAgMXpkMCBSYjAgMXpkMCBMejAgMUMxMCBMejAgMUMxMCBPbjAgMXpkMCBPbjAgMXpkMCBPbjAgMXpkMCBPbjAgMUMxMCBMejAgMUMxMCBMejAgMUMxMCBPbjAgMXpkMCBPbjAgMXpkMCBSYjAgMXdwMCBPbjAgMUMxMCBMejAgMUMxMCBPbjAgMXpkMCBPbjAgMXpkMCBPbjAgMXpkMCBPbjAgMUMxMCBMejAgMUMxMCBMejAgMUMxMCBMejAgMUMxMCBPbjAgMXpkMCBSYjAgMXdwMCBPbjAgMUMxMCBMejAgMUMxMCBPbjAgMXpkMFwiLFxuXHRcdFwiQW1lcmljYS9TY29yZXNieXN1bmR8TE1UIENHVCBDR1NUIEVHU1QgRUdUfDFyLlEgMjAgMTAgMCAxMHwwMTIxMzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0fC0yYTVXdy44IDJ6NWV3LjggMWEwMCAxY0swIDFjTDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJBbWVyaWNhL1NpdGthfFBTVCBQV1QgUFBUIFBEVCBZU1QgQUtTVCBBS0RUfDgwIDcwIDcwIDcwIDkwIDkwIDgwfDAxMjAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzQ1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1fC0xN1QyMCA4eDEwIGl5MCBWbzEwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgY28wIDEwcTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvU3RfSm9obnN8TlNUIE5EVCBOU1QgTkRUIE5XVCBOUFQgTkREVHwzdS5RIDJ1LlEgM3UgMnUgMnUgMnUgMXV8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIzMjMyMzIzMjMyMzIzMjQ1MjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjYyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzJ8LTI4b2l0LjggMTRMMCAxbkIwIDFpbjAgMWdtMCBEejAgMUpCMCAxY0wwIDFjTjAgMWNMMCAxZkIwIDE5WDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxY0wwIDFjTjAgMWNMMCAxZkIwIDE5WDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxY0wwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMTBPMCBlS1guOCAxOVgwIDFpcTAgV0wwIDFxTjAgV0wwIDFxTjAgV0wwIDF0QjAgVFgwIDF0QjAgV0wwIDFxTjAgV0wwIDFxTjAgN1VIdSBpdHUgMXRCMCBXTDAgMXFOMCBXTDAgMXFOMCBXTDAgMXFOMCBXTDAgMXRCMCBXTDAgMWxkMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRuMSAxbGIwIDE0cDAgMW5XMCAxMUMwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpjWCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Td2lmdF9DdXJyZW50fExNVCBNU1QgTURUIE1XVCBNUFQgQ1NUfDdiLmsgNzAgNjAgNjAgNjAgNjB8MDEyMTM0MTIxMjEyMTIxMjEyMTIxMjE1fC0yQUQ0TS5FIHVIZE0uRSAxaW4wIFVHcDAgOHgyMCBpeDAgMW8xMCAxN2IwIDFpcDAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIGlzTjAgMWNMMCAzQ3AwIDFjTDAgMWNOMCAxMXowIDFxTjAgV0wwIHBNcDBcIixcblx0XHRcIkFtZXJpY2EvVGVndWNpZ2FscGF8TE1UIENTVCBDRFR8NU0uUSA2MCA1MHwwMTIxMjEyMXwtMVdHR2IuOCAyRVRjYi44IFdMMCAxcU4wIFdMMCBHUmQwIEFMMFwiLFxuXHRcdFwiQW1lcmljYS9UaHVsZXxMTVQgQVNUIEFEVHw0ei44IDQwIDMwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMmE1VG8uUSAzMU5Cby5RIDFjTDAgMWNOMCAxY0wwIDFmQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvVGh1bmRlcl9CYXl8Q1NUIEVTVCBFV1QgRVBUIEVEVHw2MCA1MCA0MCA0MCA0MHwwMTIzMTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxfC0ycTVTMCAxaWFOMCA4eDQwIGl2MCBYTkIwIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAzQ3AwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9Ub3JvbnRvfEVTVCBFRFQgRVdUIEVQVHw1MCA0MCA0MCA0MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMjMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMjVUUjAgMWluMCAxMVd1IDFuenUgMWZEMCBXSjAgMXdyMCBOYjAgMUFwMCBPbjAgMXpkMCBPbjAgMXdwMCBUWDAgMXRCMCBUWDAgMXRCMCBUWDAgMXRCMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgNGtNMCA4eDQwIGl2MCAxbzEwIDExejAgMW5YMCAxMXowIDFvMTAgMTF6MCAxbzEwIDFxTDAgMTFEMCAxblgwIDExQjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCAxMXowIDFvMTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIkFtZXJpY2EvVmFuY291dmVyfFBTVCBQRFQgUFdUIFBQVHw4MCA3MCA3MCA3MHwwMTAyMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yNVRPMCAxaW4wIFVHcDAgOHgxMCBpeTAgMW8xMCAxN2IwIDFpcDAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9XaGl0ZWhvcnNlfFlTVCBZRFQgWVdUIFlQVCBZRERUIFBTVCBQRFR8OTAgODAgODAgODAgNzAgODAgNzB8MDEwMTAyMzA0MDU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NXwtMjVUTjAgMWluMCAxbzEwIDEzVjAgU2VyMCA4eDAwIGl6MCBMQ0wwIDFmQTAgMUJlMCB4RHowIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9XaW5uaXBlZ3xDU1QgQ0RUIENXVCBDUFR8NjAgNTAgNTAgNTB8MDEwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yYUlpMCBXTDAgM05EMCAxaW4wIEphcDAgUmIwIGFDTjAgOHgzMCBpdzAgMXRCMCAxMXowIDFpcDAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFyZDAgMTBMMCAxb3AwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMWNMMCAxY04wIDExejAgNmkxMCBXTDAgNmkxMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMTRvMCAxbGMwIDE0bzAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDE0bzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxNG8wIDFvMDAgMTFBMCAxbzAwIDExQTAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9ZYWt1dGF0fFlTVCBZV1QgWVBUIFlEVCBBS1NUIEFLRFR8OTAgODAgODAgODAgOTAgODB8MDEyMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTR8LTE3VDEwIDh4MDAgaXowIFZvMTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgczEwIDFWejAgTEIwIDFCWDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCBjbjAgMTBxMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQW1lcmljYS9ZZWxsb3drbmlmZXx6enogTVNUIE1XVCBNUFQgTUREVCBNRFR8MCA3MCA2MCA2MCA1MCA2MHwwMTIzMTQxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTE1MTUxNTF8LTFwZEEwIGhpeDAgOHgyMCBpeDAgTENMMCAxZkEwIHpnTzAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBbnRhcmN0aWNhL0Nhc2V5fHp6eiBBV1NUIENBU1R8MCAtODAgLWIwfDAxMjEyMXwtMnEwMCAxRGpTMCBUOTAgNDBQMCBLTDBcIixcblx0XHRcIkFudGFyY3RpY2EvRGF2aXN8enp6IERBVlQgREFWVHwwIC03MCAtNTB8MDEwMTIxMjF8LXZ5bzAgaVh0MCBhbGowIDFEN3YwIFZCMCAzV24wIEtOMFwiLFxuXHRcdFwiQW50YXJjdGljYS9EdW1vbnREVXJ2aWxsZXx6enogUE1UIEREVVR8MCAtYTAgLWEwfDAxMDJ8LVUwbzAgY2ZxMCBiRm0wXCIsXG5cdFx0XCJBbnRhcmN0aWNhL01hY3F1YXJpZXxBRVNUIEFFRFQgenp6IE1JU1R8LWEwIC1iMCAwIC1iMHwwMTAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEzfC0yOUU4MCAxOVgwIDRTTDAgMWF5eTAgTHZzMCAxY00wIDFvMDAgUmMwIDF3bzAgUmMwIDF3bzAgVTAwIDF3bzAgTEEwIDFDMDAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgMTFBMCAxcU0wIFdNMCAxcU0wIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxd28wIFdNMCAxdEEwIFdNMCAxdEEwIFUwMCAxdEEwIFUwMCAxdEEwIDExQTAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMTFBMCAxbzAwIDFpbzAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWNNMCAxYTAwIDFpbzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wXCIsXG5cdFx0XCJBbnRhcmN0aWNhL01hd3Nvbnx6enogTUFXVCBNQVdUfDAgLTYwIC01MHwwMTJ8LUNFbzAgMmZ5azBcIixcblx0XHRcIkFudGFyY3RpY2EvTWNNdXJkb3xOWk1UIE5aU1QgTlpTVCBOWkRUfC1idSAtY3UgLWMwIC1kMHwwMTAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyM3wtMUdDVnUgTHowIDF0QjAgMTF6dSAxbzB1IDExenUgMW8wdSAxMXp1IDFvMHUgMTRudSAxbGN1IDE0bnUgMWxjdSAxbGJ1IDExQXUgMW5YdSAxMUF1IDFuWHUgMTFBdSAxblh1IDExQXUgMW5YdSAxMUF1IDFxTHUgV011IDFxTHUgMTFBdSAxbjFidSBJTTAgMUMwMCBSYzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBSYzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBSYzAgMXpjMCBPbzAgMXFNMCAxNG8wIDFsYzAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxN2MwIDFpbzAgMTdjMCAxaW8wIDE3YzAgMWlvMCAxN2MwIDFsYzAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxN2MwIDFpbzAgMTdjMCAxaW8wIDE3YzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbGMwIDE3YzAgMWlvMCAxN2MwIDFpbzAgMTdjMCAxaW8wIDE3YzAgMWlvMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxY00wIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxY00wIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWlvMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWZBMCAxYTAwIDFmQTAgMWEwMFwiLFxuXHRcdFwiQW50YXJjdGljYS9QYWxtZXJ8enp6IEFSU1QgQVJUIEFSVCBBUlNUIENMVCBDTFNUIENMVHwwIDMwIDQwIDMwIDIwIDQwIDMwIDMwfDAxMjEyMTIxMjEyMzQzNTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2N3wtY2FvMCBuRDAgMXZkMCBTTDAgMXZkMCAxN3owIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCBhc24wIERiMCBqc04wIDE0TjAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCBXTDAgMXFOMCAxY0wwIDFjTjAgMTF6MCAxbGQwIDE0bjAgMXFOMCAxMXowIDFjTjAgMTlYMCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCAxN2IwIDFpcDAgMTF6MCAxaXAwIDFmejAgMWZCMCAxMXowIDFxTjAgV0wwIDFxTjAgV0wwIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgMTdiMCAxaXAwIDExejAgMW8xMCAxOVgwIDFmQjAgMW5YMCBHMTAgMUVMMCBPcDAgMXpiMCBSZDAgMXduMCBSZDAgMXduMFwiLFxuXHRcdFwiQW50YXJjdGljYS9Sb3RoZXJhfHp6eiBST1RUfDAgMzB8MDF8Z09vMFwiLFxuXHRcdFwiQW50YXJjdGljYS9TeW93YXx6enogU1lPVHwwIC0zMHwwMXwtdnMwMFwiLFxuXHRcdFwiQW50YXJjdGljYS9Ucm9sbHx6enogVVRDIENFU1R8MCAwIC0yMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwxcHVvMCBoZDAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkFudGFyY3RpY2EvVm9zdG9rfHp6eiBWT1NUfDAgLTYwfDAxfC10akEwXCIsXG5cdFx0XCJBcmN0aWMvTG9uZ3llYXJieWVufENFVCBDRVNUfC0xMCAtMjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yYXdNMCBRbTAgVzZvMCA1cGYwIFdNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgd0pjMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMXFNMCBXTTAgenBjMCAxYTAwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkFzaWEvQWRlbnxMTVQgQVNUfC0zNi5RIC0zMHwwMXwtVHZENi5RXCIsXG5cdFx0XCJBc2lhL0FsbWF0eXxMTVQgQUxNVCBBTE1UIEFMTVNUfC01Ny5NIC01MCAtNjAgLTcwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzJ8LTFQYzU3Lk0gZVVvNy5NIDIzQ0wwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgM0NsMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMFwiLFxuXHRcdFwiQXNpYS9BbW1hbnxMTVQgRUVUIEVFU1R8LTJuLkkgLTIwIC0zMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0xeVcybi5JIDFIaU1uLkkgS0wwIDFvTjAgMTFiMCAxb04wIDExYjAgMXBkMCAxZHowIDFjcDAgMTFiMCAxb3AwIDExYjAgZk8xMCAxZGIwIDFlMTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFwZDAgMTBuMCAxbGQwIDE0bjAgMWhCMCAxNWIwIDFpcDAgMTlYMCAxY04wIDFjTDAgMWNOMCAxN2IwIDFsZDAgMTRvMCAxbGMwIDE3YzAgMWlvMCAxN2MwIDFpbzAgMTdjMCAxU28wIHkwMCAxZmMwIDFkYzAgMWNvMCAxZGMwIDFjTTAgMWNNMCAxY00wIDFvMDAgMTFBMCAxbGMwIDE3YzAgMWNNMCAxY00wIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCA0YlgwIERkMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTBcIixcblx0XHRcIkFzaWEvQW5hZHlyfExNVCBBTkFUIEFOQVQgQU5BU1QgQU5BU1QgQU5BU1QgQU5BVHwtYk4uVSAtYzAgLWQwIC1lMCAtZDAgLWMwIC1iMHwwMTIzMjQxNDE0MTQxNDE0MTQxNDE0MTU2MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTU2MXwtMVBjYk4uVSBlVW5OLlUgMjNDTDAgMWRiMCAxY04wIDFkYzAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFOMCBXTTBcIixcblx0XHRcIkFzaWEvQXF0YXV8TE1UIEZPUlQgRk9SVCBTSEVUIFNIRVQgU0hFU1QgQVFUVCBBUVRTVCBBUVRTVCBBUVRUfC0zbC40IC00MCAtNTAgLTUwIC02MCAtNjAgLTUwIC02MCAtNTAgLTQwfDAxMjM0NTM1MzUzNTM1MzUzNTM1MzUzNjc2NzY3Njg5ODk4OTg5ODk4OTg5ODk4OTg5NnwtMVBjM2wuNCBlVW5sLjQgMWpjTDAgSkRjMCAxY0wwIDFkYzAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAyVUswIEZ6MCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY04wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBSVzBcIixcblx0XHRcIkFzaWEvQXF0b2JlfExNVCBBS1RUIEFLVFQgQUtUU1QgQUtUVCBBUVRUIEFRVFNUfC0zTS5FIC00MCAtNTAgLTYwIC02MCAtNTAgLTYwfDAxMjM0MzIzMjMyMzIzMjMyMzIzMjMyNTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1fC0xUGMzTS5FIGVVbk0uRSAyM0NMMCAxZGIwIDFjTTAgMWRjMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDJVSzAgRnowIDFjTDAgMWNRMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wXCIsXG5cdFx0XCJBc2lhL0FzaGdhYmF0fExNVCBBU0hUIEFTSFQgQVNIU1QgQVNIU1QgVE1UIFRNVHwtM1IudyAtNDAgLTUwIC02MCAtNTAgLTQwIC01MHwwMTIzMjMyMzIzMjMyMzIzMjMyMzIzMjQxNTZ8LTFQYzNSLncgZVVuUi53IDIzQ0wwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY04wIGJhMCB4QzBcIixcblx0XHRcIkFzaWEvQmFnaGRhZHxCTVQgQVNUIEFEVHwtMlYuQSAtMzAgLTQwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMjZCZVYuQSAyQUNuVi5BIDExYjAgMWNwMCAxZHowIDFkZDAgMWRiMCAxY04wIDFjcDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxZGUwIDFkYzAgMWRjMCAxZGMwIDFjTTAgMWRjMCAxY00wIDFkYzAgMWNNMCAxZGMwIDFkYzAgMWRjMCAxY00wIDFkYzAgMWNNMCAxZGMwIDFjTTAgMWRjMCAxZGMwIDFkYzAgMWNNMCAxZGMwIDFjTTAgMWRjMCAxY00wIDFkYzAgMWRjMCAxZGMwIDFjTTAgMWRjMCAxY00wIDFkYzAgMWNNMCAxZGMwXCIsXG5cdFx0XCJBc2lhL0JhaHJhaW58TE1UIEdTVCBBU1R8LTNxLjggLTQwIC0zMHwwMTJ8LTIxSmZxLjggMjdCWHEuOFwiLFxuXHRcdFwiQXNpYS9CYWt1fExNVCBCQUtUIEJBS1QgQkFLU1QgQkFLU1QgQVpTVCBBWlQgQVpUIEFaU1R8LTNqLm8gLTMwIC00MCAtNTAgLTQwIC00MCAtMzAgLTQwIC01MHwwMTIzMjMyMzIzMjMyMzIzMjMyMzIzMjQ1NjU3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3fC0xUGMzai5vIDFqVW9qLm8gV0NMMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMTBLMCBjMzAgMWNKMCAxY0wwIDh3dTAgMW8wMCAxMXowIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkFzaWEvQmFuZ2tva3xCTVQgSUNUfC02Ry40IC03MHwwMXwtMjE4U0cuNFwiLFxuXHRcdFwiQXNpYS9CZWlydXR8RUVUIEVFU1R8LTIwIC0zMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8LTIxYXEwIDFvbjAgMTQxMCAxZGIwIDE5QjAgMWluMCAxaXAwIFdMMCAxbFFwMCAxMWIwIDFvTjAgMTFiMCAxb04wIDExYjAgMXBkMCAxMWIwIDFvTjAgMTFiMCBxNk4wIEVuMCAxb04wIDExYjAgMW9OMCAxMWIwIDFvTjAgMTFiMCAxcGQwIDExYjAgMW9OMCAxMWIwIDFvcDAgMTFiMCBkQTEwIDE3YjAgMWlOMCAxN2IwIDFpTjAgMTdiMCAxaU4wIDE3YjAgMXZCMCBTTDAgMW1wMCAxM3owIDFpTjAgMTdiMCAxaU4wIDE3YjAgMWpkMCAxMm4wIDFhMTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFmQjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIFdOMCAxcUwwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIFdOMCAxcUwwIFdOMCAxcUwwIDExQjAgMW5YMCAxMUIwIDFuWDBcIixcblx0XHRcIkFzaWEvQmlzaGtla3xMTVQgRlJVVCBGUlVUIEZSVVNUIEZSVVNUIEtHVCBLR1NUIEtHVHwtNFcubyAtNTAgLTYwIC03MCAtNjAgLTUwIC02MCAtNjB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzI0NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1Njd8LTFQYzRXLm8gZVVuVy5vIDIzQ0wwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxMWMwIDF0WDAgMTdiMCAxaXAwIDE3YjAgMWlwMCAxN2IwIDFpcDAgMTdiMCAxaXAwIDE5WDAgMWNQdSAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIFQ4dVwiLFxuXHRcdFwiQXNpYS9CcnVuZWl8TE1UIEJOVCBCTlR8LTdELkUgLTd1IC04MHwwMTJ8LTFLSVRELkUgZ0RjOS5FXCIsXG5cdFx0XCJBc2lhL0NhbGN1dHRhfEhNVCBCVVJUIElTVCBJU1R8LTVSLmsgLTZ1IC01dSAtNnV8MDEyMzJ8LTE4TEZSLmsgMXVubi5rIEhCMCA3elgwXCIsXG5cdFx0XCJBc2lhL0NoaXRhfExNVCBZQUtUIFlBS1QgWUFLU1QgWUFLU1QgWUFLVCBJUktUfC03eC5RIC04MCAtOTAgLWEwIC05MCAtYTAgLTgwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyNDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzI1NnwtMjFRN3guUSBwQW54LlEgMjNDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh6MFwiLFxuXHRcdFwiQXNpYS9DaG9pYmFsc2FufExNVCBVTEFUIFVMQVQgQ0hPU1QgQ0hPVCBDSE9UfC03QyAtNzAgLTgwIC1hMCAtOTAgLTgwfDAxMjM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0NXwtMkFQSEMgMlVrb0MgY0tuMCAxZGEwIDFkZDAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFmQjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDZoRDAgMTF6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDNEYjBcIixcblx0XHRcIkFzaWEvQ2hvbmdxaW5nfENTVCBDRFR8LTgwIC05MHwwMTAxMDEwMTAxMDEwMTAxMHwtMWMxSTAgTFgwIDE2cDAgMWp6MCAxTXlwMCBSYjAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MFwiLFxuXHRcdFwiQXNpYS9Db2xvbWJvfE1NVCBJU1QgSUhTVCBJU1QgTEtUIExLVHwtNWoudyAtNXUgLTYwIC02dSAtNnUgLTYwfDAxMjMxNDUxfC0yek90ai53IDFyRmJOLncgMXp6dSA3QXB1IDIzZHowIDExenUgbjNjdVwiLFxuXHRcdFwiQXNpYS9EYWNjYXxITVQgQlVSVCBJU1QgREFDVCBCRFQgQkRTVHwtNVIuayAtNnUgLTV1IC02MCAtNjAgLTcwfDAxMjEzNDU0fC0xOExGUi5rIDF1bm4uayBIQjAgbTZuMCBMcU11IDF4Nm4wIDFpMDBcIixcblx0XHRcIkFzaWEvRGFtYXNjdXN8TE1UIEVFVCBFRVNUfC0ycC5jIC0yMCAtMzB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTIxSmVwLmMgSGVwLmMgMTdiMCAxaXAwIDE3YjAgMWlwMCAxN2IwIDFpcDAgMTlYMCAxeFJCMCAxMVgwIDFvTjAgMTBMMCAxcEIwIDExYjAgMW9OMCAxMEwwIDFtcDAgMTNYMCAxb04wIDExYjAgMXBkMCAxMWIwIDFvTjAgMTFiMCAxb04wIDExYjAgMW9OMCAxMWIwIDFwZDAgMTFiMCAxb04wIDExYjAgMW9OMCAxMWIwIDFvTjAgMTFiMCAxcGQwIDExYjAgMW9OMCBOYjAgMUFOMCBOYjAgYmNwMCAxOVgwIDFncDAgMTlYMCAzbGQwIDF4WDAgVmQwIDFCejAgU3AwIDF2WDAgMTBwMCAxZHowIDFjTjAgMWNMMCAxZGIwIDFkYjAgMWcxMCAxYW4wIDFhcDAgMWRiMCAxZmQwIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWRiMCAxY3AwIDFkejAgMWMxMCAxZFgwIDFjTjAgMWRiMCAxZGQwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxZGIwIDFjTjAgMWRiMCAxY04wIDE5ejAgMWZCMCAxcUwwIDExQjAgMW9uMCBXcDAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIFdOMCAxcUwwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIDFxTDBcIixcblx0XHRcIkFzaWEvRGlsaXxMTVQgVExUIEpTVCBUTFQgV0lUQXwtOG0uayAtODAgLTkwIC05MCAtODB8MDEyMzQzfC0ybGU4bS5rIDFkblhtLmsgOEhBMCAxZXcwMCBYbGQwXCIsXG5cdFx0XCJBc2lhL0R1YmFpfExNVCBHU1R8LTNGLmMgLTQwfDAxfC0yMUpmRi5jXCIsXG5cdFx0XCJBc2lhL0R1c2hhbmJlfExNVCBEVVNUIERVU1QgRFVTU1QgRFVTU1QgVEpUfC00ei5jIC01MCAtNjAgLTcwIC02MCAtNTB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzI0NXwtMVBjNHouYyBlVW56LmMgMjNDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDE0TjBcIixcblx0XHRcIkFzaWEvR2F6YXxFRVQgRUVUIEVFU1QgSVNUIElEVHwtMjAgLTMwIC0zMCAtMjAgLTMwfDAxMDEwMTAxMDEwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMHwtMWMycTAgNVJiMCAxMHIwIDFweDAgMTBOMCAxcHowIDE2cDAgMWpCMCAxNnAwIDFqeDAgcEJkMCBWejAgMW9OMCAxMWIwIDFvTzAgMTBOMCAxcHowIDEwTjAgMXBiMCAxME4wIDFwYjAgMTBOMCAxcGIwIDEwTjAgMXB6MCAxME4wIDFwYjAgMTBOMCAxcGIwIDExZDAgMW9MMCBkVzAgaGZCMCBEYjAgMWZCMCBSYjAgbnBCMCAxMXowIDFDMTAgSUwwIDFzMTAgMTBuMCAxbzEwIFdMMCAxemQwIE9uMCAxbGQwIDExejAgMW8xMCAxNG4wIDFvMTAgMTRuMCAxbmQwIDEybjAgMW5kMCBYejAgMXExMCAxMm4wIE0xMCBDMDAgMTdjMCAxaW8wIDE3YzAgMWlvMCAxN2MwIDFvMDAgMWNMMCAxZkIwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxN2MwIDFpbzAgMThOMCAxYnowIDE5ejAgMWdwMCAxNjEwIDFpTDAgMTF6MCAxbzEwIDE0bzAgMWxBMSBTS1ggMXhkMSBNS1ggMUFOMCAxYTAwIDFmQTAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxOVgwIDFmQjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxY0wwIDFjTjAgMWNMMFwiLFxuXHRcdFwiQXNpYS9IZWJyb258RUVUIEVFVCBFRVNUIElTVCBJRFR8LTIwIC0zMCAtMzAgLTIwIC0zMHwwMTAxMDEwMTAxMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMHwtMWMycTAgNVJiMCAxMHIwIDFweDAgMTBOMCAxcHowIDE2cDAgMWpCMCAxNnAwIDFqeDAgcEJkMCBWejAgMW9OMCAxMWIwIDFvTzAgMTBOMCAxcHowIDEwTjAgMXBiMCAxME4wIDFwYjAgMTBOMCAxcGIwIDEwTjAgMXB6MCAxME4wIDFwYjAgMTBOMCAxcGIwIDExZDAgMW9MMCBkVzAgaGZCMCBEYjAgMWZCMCBSYjAgbnBCMCAxMXowIDFDMTAgSUwwIDFzMTAgMTBuMCAxbzEwIFdMMCAxemQwIE9uMCAxbGQwIDExejAgMW8xMCAxNG4wIDFvMTAgMTRuMCAxbmQwIDEybjAgMW5kMCBYejAgMXExMCAxMm4wIE0xMCBDMDAgMTdjMCAxaW8wIDE3YzAgMWlvMCAxN2MwIDFvMDAgMWNMMCAxZkIwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxN2MwIDFpbzAgMThOMCAxYnowIDE5ejAgMWdwMCAxNjEwIDFpTDAgMTJMMCAxbU4wIDE0bzAgMWxjMCBUYjAgMXhkMSBNS1ggYkIwIGNuMCAxY04wIDFhMDAgMWZBMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxZkIwIDE5WDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDFjTDAgMWNOMCAxY0wwXCIsXG5cdFx0XCJBc2lhL0hvX0NoaV9NaW5ofExNVCBQTE1UIElDVCBJRFQgSlNUfC03Ni5FIC03Ni51IC03MCAtODAgLTkwfDAxMjM0MjMyMzJ8LTJ5Qzc2LkUgYkswMC5hIDFoN2I2LnUgNWx6MCAxOG8wIDNPcTAgazViMCBhVzAwIEJBTTBcIixcblx0XHRcIkFzaWEvSG9uZ19Lb25nfExNVCBIS1QgSEtTVCBKU1R8LTdBLkcgLTgwIC05MCAtOTB8MDEyMTMxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMkNGSEEuRyAxc0VQNi5HIDFjTDAgeWx1IDkzWDAgMXFRdSAxdFgwIFJkMCAxSW4wIE5CMCAxY0wwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWtMMCAxNE4wIDFuWDAgVTEwIDF0ejAgVTEwIDF3bjAgUmQwIDF3bjAgVTEwIDF0ejAgVTEwIDF0ejAgVTEwIDF0ejAgVTEwIDF3bjAgUmQwIDF3bjAgUmQwIDF3bjAgVTEwIDF0ejAgVTEwIDF0ejAgMTdkMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgczEwIDFWejAgMWNOMCAxY0wwIDFjTjAgMWNMMCA2ZmQwIDE0bjBcIixcblx0XHRcIkFzaWEvSG92ZHxMTVQgSE9WVCBIT1ZUIEhPVlNUfC02Ni5BIC02MCAtNzAgLTgwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyfC0yQVBHNi5BIDJVa282LkEgY0tuMCAxZGIwIDFkZDAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFmQjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDZoRDAgMTF6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowXCIsXG5cdFx0XCJBc2lhL0lya3V0c2t8SU1UIElSS1QgSVJLVCBJUktTVCBJUktTVCBJUktUfC02Vi41IC03MCAtODAgLTkwIC04MCAtOTB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzI0MTIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjUyfC0yMXpHVi41IHBqWFYuNSAyM0NMMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNOMCBJTTAgclUwIDFjTDAgMWNRMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCA4SHowXCIsXG5cdFx0XCJBc2lhL0lzdGFuYnVsfElNVCBFRVQgRUVTVCBUUlNUIFRSVHwtMVUuVSAtMjAgLTMwIC00MCAtMzB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjM0MzQzNDM0MzQyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0yb2dOVS5VIGR6elUuVSAxMWIwIDh0QjAgMW9uMCAxNDEwIDFkYjAgMTlCMCAxaW4wIDNSZDAgVW4wIDFvTjAgMTFiMCB6U3AwIENMMCBtTjAgMVZ6MCAxZ04wIDFwejAgNVJkMCAxZnowIDF5cDAgTUwwIDFrcDAgMTdiMCAxaXAwIDE3YjAgMWZCMCAxOVgwIDFqQjAgMThMMCAxaXAwIDE3ejAgcWRkMCB4WDAgM1MxMCBUejAgZEExMCAxMXowIDFvMTAgMTF6MCAxcU4wIDExejAgMXplMCAxMUIwIFdNMCAxcU8wIFdJMCAxblgwIDFyQjAgMTBMMCAxMUIwIDFpbjAgMTdkMCAxaW4wIDJwWDAgMTlFMCAxZlUwIDE2UTAgMWlJMCAxNlEwIDFpSTAgMVZkMCBwYjAgM0twMCAxNG8wIDFkZjAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNMMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV08wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgWGMwIDFxbzAgV00wIDFxTTAgMTFBMCAxbzAwIDEyMDAgMW5BMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJBc2lhL0pha2FydGF8Qk1UIEpBVlQgV0lCIEpTVCBXSUIgV0lCfC03Ny5jIC03ayAtN3UgLTkwIC04MCAtNzB8MDEyMzI0MjV8LTFRMFRrIGx1TTAgbVB6TyA4dld1IDZrcHUgNFBYdSB4aGN1XCIsXG5cdFx0XCJBc2lhL0pheWFwdXJhfExNVCBXSVQgQUNTVHwtOW0uTSAtOTAgLTl1fDAxMjF8LTF1dTltLk0gc01NbS5NIEw0bnVcIixcblx0XHRcIkFzaWEvSmVydXNhbGVtfEpNVCBJU1QgSURUIElERFR8LTJrLkUgLTIwIC0zMCAtNDB8MDEyMTIxMjEyMTIxMzIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTI2QmVrLkUgU3lNay5FIDVSYjAgMTByMCAxcHgwIDEwTjAgMXB6MCAxNnAwIDFqQjAgMTZwMCAxangwIDNMQjAgRW0wIG9yMCAxY24wIDFkQjAgMTZuMCAxME8wIDFqYTAgMXRDMCAxNG8wIDFjTTAgMWEwMCAxMUEwIDFOYTAgQW4wIDFNUDAgQUowIDFLcDAgTEMwIDFvbzAgV2wwIEVRTjAgRGIwIDFmQjAgUmIwIG5wQjAgMTF6MCAxQzEwIElMMCAxczEwIDEwbjAgMW8xMCBXTDAgMXpkMCBPbjAgMWxkMCAxMXowIDFvMTAgMTRuMCAxbzEwIDE0bjAgMW5kMCAxMm4wIDFuZDAgWHowIDFxMTAgMTJuMCAxaEIwIDFkWDAgMWVwMCAxYUwwIDFlTjAgMTdYMCAxbmYwIDExejAgMXRCMCAxOVcwIDFlMTAgMTdiMCAxZXAwIDFnTDAgMThOMCAxZnowIDFlTjAgMTdiMCAxZ3EwIDFnbjAgMTlkMCAxZHowIDFjMTAgMTdYMCAxaEIwIDFnbjAgMTlkMCAxZHowIDFjMTAgMTdYMCAxa3AwIDFkejAgMWMxMCAxYUwwIDFlTjAgMW9MMCAxME4wIDFvTDAgMTBOMCAxb0wwIDEwTjAgMXJ6MCBXMTAgMXJ6MCBXMTAgMXJ6MCAxME4wIDFvTDAgMTBOMCAxb0wwIDEwTjAgMXJ6MCBXMTAgMXJ6MCBXMTAgMXJ6MCAxME4wIDFvTDAgMTBOMCAxb0wwIDEwTjAgMW9MMCAxME4wIDFyejAgVzEwIDFyejAgVzEwIDFyejAgMTBOMCAxb0wwIDEwTjAgMW9MMCAxME4wIDFyejAgVzEwIDFyejAgVzEwIDFyejAgVzEwIDFyejAgMTBOMCAxb0wwIDEwTjAgMW9MMFwiLFxuXHRcdFwiQXNpYS9LYWJ1bHxBRlQgQUZUfC00MCAtNHV8MDF8LTEwUXMwXCIsXG5cdFx0XCJBc2lhL0thbWNoYXRrYXxMTVQgUEVUVCBQRVRUIFBFVFNUIFBFVFNUfC1heS5BIC1iMCAtYzAgLWQwIC1jMHwwMTIzMjMyMzIzMjMyMzIzMjMyMzIzMjQxMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjQxMnwtMVNMS3kuQSBpdlh5LkEgMjNDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFOMCBXTTBcIixcblx0XHRcIkFzaWEvS2FyYWNoaXxMTVQgSVNUIElTVCBLQVJUIFBLVCBQS1NUfC00cy5jIC01dSAtNnUgLTUwIC01MCAtNjB8MDEyMTM0NTQ1NDU0fC0yeG9zcy5jIDFxT0tXLmMgN3pYMCBldXAwIExxTXUgMWZ5MDEgMWNMMCBkSzBYIDExYjAgMTYxMCAxalgwXCIsXG5cdFx0XCJBc2lhL0thc2hnYXJ8TE1UIFhKVHwtNU8uayAtNjB8MDF8LTFHZ3RPLmtcIixcblx0XHRcIkFzaWEvS2F0aG1hbmR1fExNVCBJU1QgTlBUfC01Ri5nIC01dSAtNUp8MDEyfC0yMUpoRi5nIDJFR01iLmdcIixcblx0XHRcIkFzaWEvS2hhbmR5Z2F8TE1UIFlBS1QgWUFLVCBZQUtTVCBZQUtTVCBWTEFUIFZMQVNUIFZMQVQgWUFLVHwtOTIuZCAtODAgLTkwIC1hMCAtOTAgLWEwIC1iMCAtYjAgLWEwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyNDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyNTY1NjU2NTY1NjU2NTY1NzgyfC0yMVE5Mi5kIHBBcDIuZCAyM0NMMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNOMCBJTTAgclUwIDFjTDAgMWNRMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgcUswIHlOMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxN1YwIDd6RDBcIixcblx0XHRcIkFzaWEvS3Jhc25veWFyc2t8TE1UIEtSQVQgS1JBVCBLUkFTVCBLUkFTVCBLUkFUfC02Yi5xIC02MCAtNzAgLTgwIC03MCAtODB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzI0MTIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjUyfC0yMUhpYi5xIHByQWIucSAyM0NMMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNOMCBJTTAgclUwIDFjTDAgMWNRMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCA4SHowXCIsXG5cdFx0XCJBc2lhL0t1YWxhX0x1bXB1cnxTTVQgTUFMVCBNQUxTVCBNQUxUIE1BTFQgSlNUIE1ZVHwtNlQucCAtNzAgLTdrIC03ayAtN3UgLTkwIC04MHwwMTIzNDU0NnwtMkJnNlQucCAxN2FuVC5wIDdoWEUgZE0wMCAxN2JPIDhGeXUgMXNvMXVcIixcblx0XHRcIkFzaWEvS3VjaGluZ3xMTVQgQk9SVCBCT1JUIEJPUlRTVCBKU1QgTVlUfC03bC5rIC03dSAtODAgLThrIC05MCAtODB8MDEyMzIzMjMyMzIzMjMyMzI0MjV8LTFLSVRsLmsgZ0RiUC5rIDZ5bnUgQW5FIDFPMGsgQW5FIDFOQWsgQW5FIDFOQWsgQW5FIDFOQWsgQW5FIDFPMGsgQW5FIDFOQWsgQW5FIHBBayA4RnowIDFzbzEwXCIsXG5cdFx0XCJBc2lhL01hY2FvfExNVCBNT1QgTU9TVCBDU1R8LTd5LmsgLTgwIC05MCAtODB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxM3wtMmxlN3kuayAxWE8zNC5rIDF3bjAgUmQwIDF3bjAgUjl1IDF3cXUgVTEwIDF0ejAgVFZ1IDF0ejAgMTdndSAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNKdSAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjT3UgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNKdSAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgS0VwMFwiLFxuXHRcdFwiQXNpYS9NYWdhZGFufExNVCBNQUdUIE1BR1QgTUFHU1QgTUFHU1QgTUFHVHwtYTMuYyAtYTAgLWIwIC1jMCAtYjAgLWMwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyNDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzI1MXwtMVBjYTMuYyBlVW8zLmMgMjNDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh6MFwiLFxuXHRcdFwiQXNpYS9NYWthc3NhcnxMTVQgTU1UIFdJVEEgSlNUfC03Vi5BIC03Vi5BIC04MCAtOTB8MDEyMzJ8LTIxSmpWLkEgdmZjMCBteUxWLkEgOE1MMFwiLFxuXHRcdFwiQXNpYS9NYW5pbGF8UEhUIFBIU1QgSlNUfC04MCAtOTAgLTkwfDAxMDIwMTAxMHwtMWtKSTAgQUwwIGNLMTAgNjVYMCBtWEIwIHZYMCBWSzEwIDFkYjBcIixcblx0XHRcIkFzaWEvTmljb3NpYXxMTVQgRUVUIEVFU1R8LTJkLnMgLTIwIC0zMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMVZjMmQucyAyYTNjZC5zIDFjTDAgMXFwMCBYejAgMTlCMCAxOVgwIDFmQjAgMWRiMCAxY3AwIDFjTDAgMWZCMCAxOVgwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFmQjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxbzMwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkFzaWEvTm92b2t1em5ldHNrfExNVCBLUkFUIEtSQVQgS1JBU1QgS1JBU1QgTk9WU1QgTk9WVCBOT1ZUfC01TS5NIC02MCAtNzAgLTgwIC03MCAtNzAgLTYwIC03MHwwMTIzMjMyMzIzMjMyMzIzMjMyMzIzMjQxMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjU2NzJ8LTFQY3RNLk0gZVVMTS5NIDIzQ0wwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY04wIElNMCByVTAgMWNMMCAxY1EwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTjAgV00wIDhIejBcIixcblx0XHRcIkFzaWEvTm92b3NpYmlyc2t8TE1UIE5PVlQgTk9WVCBOT1ZTVCBOT1ZTVHwtNXYuRSAtNjAgLTcwIC04MCAtNzB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzI0MTIzMjM0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDE0MTQxNDEyMXwtMjFRbnYuRSBwQUZ2LkUgMjNDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgbWwwIE9zMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh6MFwiLFxuXHRcdFwiQXNpYS9PbXNrfExNVCBPTVNUIE9NU1QgT01TU1QgT01TU1QgT01TVHwtNFIudSAtNTAgLTYwIC03MCAtNjAgLTcwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyNDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzI1MnwtMjI0c1IudSBwTUxSLnUgMjNDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh6MFwiLFxuXHRcdFwiQXNpYS9PcmFsfExNVCBVUkFUIFVSQVQgVVJBU1QgVVJBVCBVUkFTVCBPUkFUIE9SQVNUIE9SQVR8LTNwLm8gLTQwIC01MCAtNjAgLTYwIC01MCAtNDAgLTUwIC01MHwwMTIzNDMyMzIzMjMyMzIzMjMyNTE1MTY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njh8LTFQYzNwLm8gZVVucC5vIDIzQ0wwIDFkYjAgMWNNMCAxZGMwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNOMCAxY00wIDFmQTAgMlVLMCBGejAgMWNMMCAxY1EwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgUlcwXCIsXG5cdFx0XCJBc2lhL1BvbnRpYW5ha3xMTVQgUE1UIFdJQiBKU1QgV0lCIFdJVEEgV0lCfC03aC5rIC03aC5rIC03dSAtOTAgLTgwIC04MCAtNzB8MDEyMzI0MjU2fC0ydWE3aC5rIFhFMDAgbXVuTC5rIDhSYXUgNmtwdSA0UFh1IHhoY3UgV3FudVwiLFxuXHRcdFwiQXNpYS9QeW9uZ3lhbmd8TE1UIEtTVCBKQ1NUIEpTVCBLU1R8LThuIC04dSAtOTAgLTkwIC05MHwwMTIzNHwtMnVtOG4gOTdYUiAxMkZYdSBqZEEwXCIsXG5cdFx0XCJBc2lhL1F5enlsb3JkYXxMTVQgS0laVCBLSVpUIEtJWlNUIEtJWlQgUVlaVCBRWVpUIFFZWlNUfC00bC5RIC00MCAtNTAgLTYwIC02MCAtNTAgLTYwIC03MHwwMTIzNDMyMzIzMjMyMzIzMjMyMzIzMjU2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzZ8LTFQYzRsLlEgZVVvbC5RIDIzQ0wwIDFkYjAgMWNNMCAxZGMwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMlVLMCBkQzAgclUwIDFjTDAgMWNRMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wXCIsXG5cdFx0XCJBc2lhL1Jhbmdvb258Uk1UIEJVUlQgSlNUIE1NVHwtNm8uRSAtNnUgLTkwIC02dXwwMTIzfC0yMUppby5FIFNtblMuRSA3ajl1XCIsXG5cdFx0XCJBc2lhL1Nha2hhbGlufExNVCBKQ1NUIEpTVCBTQUtUIFNBS1NUIFNBS1NUIFNBS1R8LTl1Lk0gLTkwIC05MCAtYjAgLWMwIC1iMCAtYTB8MDEyMzQzNDM0MzQzNDM0MzQzNDM0MzQzNTYzNDM0MzQzNDM0MzU2NTY1NjU2NTY1NjU2NTY1NjU2NTY1NjU2NTYzNnwtMkFHVnUuTSAxaWFNdS5NIGplMDAgMXFGYTAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMTAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh6MFwiLFxuXHRcdFwiQXNpYS9TYW1hcmthbmR8TE1UIFNBTVQgU0FNVCBTQU1TVCBUQVNUIFVaU1QgVVpUfC00ci5SIC00MCAtNTAgLTYwIC02MCAtNjAgLTUwfDAxMjM0MzIzMjMyMzIzMjMyMzIzMjMyMzU2fC0xUGM0ci5SIGVVb3IuUiAyM0NMMCAxZGIwIDFjTTAgMWRjMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMTF4MCBiZjBcIixcblx0XHRcIkFzaWEvU2VvdWx8TE1UIEtTVCBKQ1NUIEpTVCBLU1QgS0RUIEtEVHwtOHIuUSAtOHUgLTkwIC05MCAtOTAgLTl1IC1hMHwwMTIzNDE1MTUxNTE1MTUxNTE0NjQ2NHwtMnVtOHIuUSA5N1hWLlEgMTJGWHUgampBMCBrS28wIDJJMHUgT0wwIDFGQjAgUmIwIDFxTjAgVFgwIDF0QjAgVFgwIDF0QjAgVFgwIDF0QjAgVFgwIDJhcDAgMTJGQnUgMTFBMCAxbzAwIDExQTBcIixcblx0XHRcIkFzaWEvU2luZ2Fwb3JlfFNNVCBNQUxUIE1BTFNUIE1BTFQgTUFMVCBKU1QgU0dUIFNHVHwtNlQucCAtNzAgLTdrIC03ayAtN3UgLTkwIC03dSAtODB8MDEyMzQ1NDY3fC0yQmc2VC5wIDE3YW5ULnAgN2hYRSBkTTAwIDE3Yk8gOEZ5dSBNc3B1IERUQTBcIixcblx0XHRcIkFzaWEvU3JlZG5la29seW1za3xMTVQgTUFHVCBNQUdUIE1BR1NUIE1BR1NUIE1BR1QgU1JFVHwtYWUuUSAtYTAgLWIwIC1jMCAtYjAgLWMwIC1iMHwwMTIzMjMyMzIzMjMyMzIzMjMyMzIzMjQxMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyNTZ8LTFQY2FlLlEgZVVvZS5RIDIzQ0wwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY04wIElNMCByVTAgMWNMMCAxY1EwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDhIejBcIixcblx0XHRcIkFzaWEvVGFpcGVpfEpXU1QgSlNUIENTVCBDRFR8LTgwIC05MCAtODAgLTkwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyfC0xaXc4MCBqb00wIDF5bzAgVHowIDFpcDAgMWpYMCAxY04wIDExYjAgMW9OMCAxMWIwIDFvTjAgMTFiMCAxb04wIDExYjAgMTBOMCAxQlgwIDEwcDAgMXB6MCAxMHAwIDFwejAgMTBwMCAxZGIwIDFkZDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxQkIwIE1MMCAxQmQwIE1MMCB1cTEwIDFkYjAgMWNOMCAxZGIwIDk3QjAgQUwwXCIsXG5cdFx0XCJBc2lhL1Rhc2hrZW50fExNVCBUQVNUIFRBU1QgVEFTU1QgVEFTU1QgVVpTVCBVWlR8LTRCLmIgLTUwIC02MCAtNzAgLTYwIC02MCAtNTB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzI0NTZ8LTFQYzRCLmIgZVVuQi5iIDIzQ0wwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxMXkwIGJmMFwiLFxuXHRcdFwiQXNpYS9UYmlsaXNpfFRCTVQgVEJJVCBUQklUIFRCSVNUIFRCSVNUIEdFU1QgR0VUIEdFVCBHRVNUfC0yWC5iIC0zMCAtNDAgLTUwIC00MCAtNDAgLTMwIC00MCAtNTB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzI0NTY1NjU2NTc4Nzg3ODc4Nzg3ODc4Nzg3ODU2N3wtMVBjMlguYiAxalVuWC5iIFdDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDN5MCAxOWYwIDFjSzAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTTAgMWNMMCAxZkIwIDNOejAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgQW4wIE9zMCBXTTBcIixcblx0XHRcIkFzaWEvVGVocmFufExNVCBUTVQgSVJTVCBJUlNUIElSRFQgSVJEVHwtM3AuSSAtM3AuSSAtM3UgLTQwIC01MCAtNHV8MDEyMzQzMjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTI1MjUyNTJ8LTJidERwLkkgMWQzYzAgMWh1TFQuSSBUWHUgMXB6MCBzTjAgdkF1IDFjTDAgMWRCMCAxZW4wIHBOQjAgVUwwIDFjTjAgMWR6MCAxY3AwIDFkejAgMWNwMCAxZHowIDFjcDAgMWR6MCAxY3AwIDFkejAgMWNOMCAxZHowIDFjcDAgMWR6MCAxY3AwIDFkejAgMWNwMCAxZHowIDFjTjAgMWR6MCAxY3AwIDFkejAgMWNwMCAxZHowIDFjcDAgMWR6MCAxY04wIDFkejAgNjRwMCAxZHowIDFjTjAgMWR6MCAxY3AwIDFkejAgMWNwMCAxZHowIDFjcDAgMWR6MCAxY04wIDFkejAgMWNwMCAxZHowIDFjcDAgMWR6MCAxY3AwIDFkejAgMWNOMCAxZHowIDFjcDAgMWR6MCAxY3AwIDFkejAgMWNwMCAxZHowIDFjTjAgMWR6MCAxY3AwIDFkejAgMWNwMCAxZHowIDFjcDAgMWR6MCAxY04wIDFkejAgMWNwMCAxZHowIDFjcDAgMWR6MCAxY3AwIDFkejAgMWNwMCAxZHowIDFjTjAgMWR6MCAxY3AwIDFkejAgMWNwMCAxZHowIDFjcDAgMWR6MCAxY04wIDFkejAgMWNwMCAxZHowIDFjcDAgMWR6MCAxY3AwIDFkejBcIixcblx0XHRcIkFzaWEvVGhpbWJ1fExNVCBJU1QgQlRUfC01Vy5BIC01dSAtNjB8MDEyfC1TdTVXLkEgMUJHTXMuQVwiLFxuXHRcdFwiQXNpYS9Ub2t5b3xKQ1NUIEpTVCBKRFR8LTkwIC05MCAtYTB8MDEyMTIxMjEyMXwtMWl3OTAgcEtxMCBRTDAgMWxCMCAxM1gwIDF6QjAgTlgwIDF6QjAgTlgwXCIsXG5cdFx0XCJBc2lhL1VsYWFuYmFhdGFyfExNVCBVTEFUIFVMQVQgVUxBU1R8LTc3LncgLTcwIC04MCAtOTB8MDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzJ8LTJBUEg3LncgMlVrbzcudyBjS24wIDFkYjAgMWRkMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWZCMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgNmhEMCAxMXowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejBcIixcblx0XHRcIkFzaWEvVXN0LU5lcmF8TE1UIFlBS1QgWUFLVCBNQUdTVCBNQUdUIE1BR1NUIE1BR1QgTUFHVCBWTEFUIFZMQVR8LTl3LlMgLTgwIC05MCAtYzAgLWIwIC1iMCAtYTAgLWMwIC1iMCAtYTB8MDEyMzQzNDM0MzQzNDM0MzQzNDM0MzQ1NjQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDc4OXwtMjFROXcuUyBwQXB3LlMgMjNDTDAgMWQ5MCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMTdWMCA3ekQwXCIsXG5cdFx0XCJBc2lhL1ZsYWRpdm9zdG9rfExNVCBWTEFUIFZMQVQgVkxBU1QgVkxBU1QgVkxBVHwtOEwudiAtOTAgLWEwIC1iMCAtYTAgLWIwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyNDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzI1MnwtMVNKSUwudiBpdFhMLnYgMjNDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh6MFwiLFxuXHRcdFwiQXNpYS9ZYWt1dHNrfExNVCBZQUtUIFlBS1QgWUFLU1QgWUFLU1QgWUFLVHwtOEMuVyAtODAgLTkwIC1hMCAtOTAgLWEwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyNDEyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzI1MnwtMjFROEMuVyBwQW9DLlcgMjNDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTjAgSU0wIHJVMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh6MFwiLFxuXHRcdFwiQXNpYS9ZZWthdGVyaW5idXJnfExNVCBQTVQgU1ZFVCBTVkVUIFNWRVNUIFNWRVNUIFlFS1QgWUVLU1QgWUVLVHwtNDIueCAtM0ouNSAtNDAgLTUwIC02MCAtNTAgLTUwIC02MCAtNjB8MDEyMzQzNDM0MzQzNDM0MzQzNDM0MzQzNTI2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY4NnwtMmFnNDIueCA3bVFoLnMgcUJ2Si41IDIzQ0wwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY04wIElNMCByVTAgMWNMMCAxY1EwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDhIejBcIixcblx0XHRcIkFzaWEvWWVyZXZhbnxMTVQgWUVSVCBZRVJUIFlFUlNUIFlFUlNUIEFNU1QgQU1UIEFNVCBBTVNUfC0yVyAtMzAgLTQwIC01MCAtNDAgLTQwIC0zMCAtNDAgLTUwfDAxMjMyMzIzMjMyMzIzMjMyMzIzMjMyNDU2NTY1NjU2NTc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODc4Nzg3ODd8LTFQYzJXIDFqVW5XIFdDTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFhbTAgMnIwIDFjSjAgMWNMMCAxY1EwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAzRmIwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMFwiLFxuXHRcdFwiQXRsYW50aWMvQXpvcmVzfEhNVCBBWk9UIEFaT1NUIEFaT01UIEFaT1QgQVpPU1QgV0VUfDFTLncgMjAgMTAgMCAxMCAwIDB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMzIxMjMyMTIzMjEyMzIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjE0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTY1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTR8LTJsZFc1LnMgYVBYNS5zIFNwMCBMWDAgMXZjMCBUYzAgMXVNMCBTTTAgMXZjMCBUYzAgMXZjMCBTTTAgMXZjMCA2NjAwIDFjbzAgM0UwMCAxN2MwIDFmQTAgMWEwMCAxaW8wIDFhMDAgMWlvMCAxN2MwIDNJMDAgMTdjMCAxY00wIDFjTTAgM0ZjMCAxY00wIDFhMDAgMWZBMCAxaW8wIDE3YzAgMWNNMCAxY00wIDFhMDAgMWZBMCAxaW8wIDFxTTAgRGMwIDF0QTAgMWNNMCAxZGMwIDE0MDAgZ0wwIElNMCBzMTAgVTAwIGRYMCBSYzAgcGQwIFJjMCBnTDAgT28wIHBkMCBSYzAgZ0wwIE9vMCBwZDAgMTRvMCAxY00wIDFjUDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDNDbzAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgcUlsMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTjAgMWNMMCAxY04wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNOMCAxY0wwIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkF0bGFudGljL0Jlcm11ZGF8TE1UIEFTVCBBRFR8NGouaSA0MCAzMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0xQm5SRS5HIDFMVGJFLkcgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJBdGxhbnRpYy9DYW5hcnl8TE1UIENBTlQgV0VUIFdFU1R8MTEuQSAxMCAwIC0xMHwwMTIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMnwtMVV0YVcubyBYUEFXLm8gMWxBSzAgMWExMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJBdGxhbnRpYy9DYXBlX1ZlcmRlfExNVCBDVlQgQ1ZTVCBDVlR8MXkuNCAyMCAxMCAxMHwwMTIxM3wtMnhvbXAuVSAxcU9NcC5VIDd6WDAgMWRqZjBcIixcblx0XHRcIkF0bGFudGljL0ZhZXJvZXxMTVQgV0VUIFdFU1R8ci40IDAgLTEwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0ydVNudy5VIDJXZ293LlUgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkF0bGFudGljL01hZGVpcmF8Rk1UIE1BRFQgTUFEU1QgTUFETVQgV0VUIFdFU1R8MTcuQSAxMCAwIC0xMCAwIC0xMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIzMjEyMzIxMjMyMTIzMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NHwtMmxkV1EubyBhUFdRLm8gU3AwIExYMCAxdmMwIFRjMCAxdU0wIFNNMCAxdmMwIFRjMCAxdmMwIFNNMCAxdmMwIDY2MDAgMWNvMCAzRTAwIDE3YzAgMWZBMCAxYTAwIDFpbzAgMWEwMCAxaW8wIDE3YzAgM0kwMCAxN2MwIDFjTTAgMWNNMCAzRmMwIDFjTTAgMWEwMCAxZkEwIDFpbzAgMTdjMCAxY00wIDFjTTAgMWEwMCAxZkEwIDFpbzAgMXFNMCBEYzAgMXRBMCAxY00wIDFkYzAgMTQwMCBnTDAgSU0wIHMxMCBVMDAgZFgwIFJjMCBwZDAgUmMwIGdMMCBPbzAgcGQwIFJjMCBnTDAgT28wIHBkMCAxNG8wIDFjTTAgMWNQMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgM0NvMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCBxSWwwIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNOMCAxY0wwIDFjTjAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY04wIDFjTDAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiQXRsYW50aWMvUmV5a2phdmlrfExNVCBJU1QgSVNTVCBHTVR8MXMgMTAgMCAwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxM3wtMnVXbXcgbWZhdyAxQmQwIE1MMCAxTEIwIENuMCAxTEIwIDNmWDAgQzEwIEhyWDAgMWNPMCBMQjAgMUVMMCBMQTAgMUMwMCBPbzAgMXdvMCBSYzAgMXdvMCBSYzAgMXdvMCBSYzAgMXpjMCBPbzAgMXpjMCAxNG8wIDFsYzAgMTRvMCAxbGMwIDE0bzAgMW8wMCAxMUEwIDFsYzAgMTRvMCAxbzAwIDE0bzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxNG8wIDFvMDAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxNG8wIDFvMDAgMTRvMCAxbGMwIDE0bzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbGMwIDE0bzAgMW8wMCAxNG8wXCIsXG5cdFx0XCJBdGxhbnRpYy9Tb3V0aF9HZW9yZ2lhfEdTVHwyMHwwfFwiLFxuXHRcdFwiQXRsYW50aWMvU3RhbmxleXxTTVQgRktUIEZLU1QgRktUIEZLU1R8M1AubyA0MCAzMCAzMCAyMHwwMTIxMjEyMTIxMjEyMTM0MzQzMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyfC0ya0p3OC5BIDEyYkE4LkEgMTlYMCAxZkIwIDE5WDAgMWlwMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWZCMCBDbjAgMUNjMTAgV0wwIDFxTDAgVTEwIDF0ejAgVTEwIDFxTTAgV04wIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgV04wIDF0ejAgVTEwIDF0ejAgV04wIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgV04wIDF0ejAgV04wIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgV04wIDFxTjAgVTEwIDF3bjAgUmQwIDF3bjAgVTEwIDF0ejAgVTEwIDF0ejAgVTEwIDF0ejAgVTEwIDF0ejAgVTEwIDF3bjAgVTEwIDF0ejAgVTEwIDF0ejAgVTEwXCIsXG5cdFx0XCJBdXN0cmFsaWEvQUNUfEFFU1QgQUVEVHwtYTAgLWIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDF8LTI5M2xYIHhjWCAxMGpkMCB5TDAgMWNOMCAxY0wwIDFmQjAgMTlYMCAxN2MxMCBMQTAgMUMwMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBSYzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCAxNG8wIDFvMDAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgVTAwIDFxTTAgV00wIDF0QTAgV00wIDF0QTAgVTAwIDF0QTAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxMUEwIDFvMDAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgV00wIDFxTTAgMTRvMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTBcIixcblx0XHRcIkF1c3RyYWxpYS9BZGVsYWlkZXxBQ1NUIEFDRFR8LTl1IC1hdXwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxfC0yOTNsdCB4Y1ggMTBqZDAgeUwwIDFjTjAgMWNMMCAxZkIwIDE5WDAgMTdjMTAgTEEwIDFDMDAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgVTAwIDFxTTAgV00wIDF0QTAgV00wIDF0QTAgVTAwIDF0QTAgVTAwIDF0QTAgT28wIDF6YzAgV00wIDFxTTAgUmMwIDF6YzAgVTAwIDF0QTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCBXTTAgMXFNMCAxNG8wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMFwiLFxuXHRcdFwiQXVzdHJhbGlhL0JyaXNiYW5lfEFFU1QgQUVEVHwtYTAgLWIwfDAxMDEwMTAxMDEwMTAxMDEwfC0yOTNsWCB4Y1ggMTBqZDAgeUwwIDFjTjAgMWNMMCAxZkIwIDE5WDAgMTdjMTAgTEEwIEgxQTAgT28wIDF6YzAgT28wIDF6YzAgT28wXCIsXG5cdFx0XCJBdXN0cmFsaWEvQnJva2VuX0hpbGx8QUNTVCBBQ0RUfC05dSAtYXV8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMXwtMjkzbHQgeGNYIDEwamQwIHlMMCAxY04wIDFjTDAgMWZCMCAxOVgwIDE3YzEwIExBMCAxQzAwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIFJjMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIDE0bzAgMW8wMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBVMDAgMXFNMCBXTTAgMXRBMCBXTTAgMXRBMCBVMDAgMXRBMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBSYzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIFdNMCAxcU0wIDE0bzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wXCIsXG5cdFx0XCJBdXN0cmFsaWEvQ3VycmllfEFFU1QgQUVEVHwtYTAgLWIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDF8LTI5RTgwIDE5WDAgMTBqZDAgeUwwIDFjTjAgMWNMMCAxZkIwIDE5WDAgMTdjMTAgTEEwIDFDMDAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgMTFBMCAxcU0wIFdNMCAxcU0wIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxd28wIFdNMCAxdEEwIFdNMCAxdEEwIFUwMCAxdEEwIFUwMCAxdEEwIDExQTAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMTFBMCAxbzAwIDFpbzAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWNNMCAxYTAwIDFpbzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTBcIixcblx0XHRcIkF1c3RyYWxpYS9EYXJ3aW58QUNTVCBBQ0RUfC05dSAtYXV8MDEwMTAxMDEwfC0yOTNsdCB4Y1ggMTBqZDAgeUwwIDFjTjAgMWNMMCAxZkIwIDE5WDBcIixcblx0XHRcIkF1c3RyYWxpYS9FdWNsYXxBQ1dTVCBBQ1dEVHwtOEogLTlKfDAxMDEwMTAxMDEwMTAxMDEwMTB8LTI5M2tJIHhjWCAxMGpkMCB5TDAgMWNOMCAxY0wwIDFnU3AwIE9vMCBsNUEwIE9vMCBpSkEwIEcwMCB6VTAwIElNMCAxcU0wIDExQTAgMW8wMCAxMUEwXCIsXG5cdFx0XCJBdXN0cmFsaWEvSG9iYXJ0fEFFU1QgQUVEVHwtYTAgLWIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMXwtMjlFODAgMTlYMCAxMGpkMCB5TDAgMWNOMCAxY0wwIDFmQjAgMTlYMCBWZkIwIDFjTTAgMW8wMCBSYzAgMXdvMCBSYzAgMXdvMCBVMDAgMXdvMCBMQTAgMUMwMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBSYzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCAxMUEwIDFxTTAgV00wIDFxTTAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF3bzAgV00wIDF0QTAgV00wIDF0QTAgVTAwIDF0QTAgVTAwIDF0QTAgMTFBMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxY00wIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxMUEwIDFvMDAgMWlvMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxY00wIDFhMDAgMWlvMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMFwiLFxuXHRcdFwiQXVzdHJhbGlhL0xISXxBRVNUIExIU1QgTEhEVCBMSERUfC1hMCAtYXUgLWJ1IC1iMHwwMTIxMjEyMTIxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzMTMxMzEzfHJhQzAgMXpkdSBSYjAgMXpkMCBPbjAgMXpkMCBPbjAgMXpkMCBPbjAgMXpkMCBUWHUgMXFNdSBXTHUgMXRBdSBXTHUgMXRBdSBUWHUgMXRBdSBPbnUgMXpjdSBPbnUgMXpjdSBPbnUgMXpjdSBSYnUgMXpjdSBPbnUgMXpjdSBPbnUgMXpjdSAxMXp1IDFvMHUgMTF6dSAxbzB1IDExenUgMW8wdSAxMXp1IDFxTXUgV0x1IDExQXUgMW5YdSAxcU11IDExenUgMW8wdSAxMXp1IDFvMHUgMTF6dSAxcU11IFdMdSAxcU11IDExenUgMW8wdSBXTHUgMXFNdSAxNG51IDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWNMdSAxZkF1IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWNMdSAxZkF1IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWZ6dSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFmQXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFmQXUgMWNMdSAxY011IDFjTHUgMWNNdVwiLFxuXHRcdFwiQXVzdHJhbGlhL0xpbmRlbWFufEFFU1QgQUVEVHwtYTAgLWIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMjkzbFggeGNYIDEwamQwIHlMMCAxY04wIDFjTDAgMWZCMCAxOVgwIDE3YzEwIExBMCBIMUEwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIFJjMCAxemMwIE9vMFwiLFxuXHRcdFwiQXVzdHJhbGlhL01lbGJvdXJuZXxBRVNUIEFFRFR8LWEwIC1iMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxfC0yOTNsWCB4Y1ggMTBqZDAgeUwwIDFjTjAgMWNMMCAxZkIwIDE5WDAgMTdjMTAgTEEwIDFDMDAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgUmMwIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgVTAwIDFxTTAgV00wIDFxTTAgMTFBMCAxdEEwIFUwMCAxdEEwIFUwMCAxdEEwIE9vMCAxemMwIE9vMCAxemMwIFJjMCAxemMwIE9vMCAxemMwIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMTFBMCAxbzAwIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIFdNMCAxcU0wIDE0bzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wXCIsXG5cdFx0XCJBdXN0cmFsaWEvUGVydGh8QVdTVCBBV0RUfC04MCAtOTB8MDEwMTAxMDEwMTAxMDEwMTAxMHwtMjkzalggeGNYIDEwamQwIHlMMCAxY04wIDFjTDAgMWdTcDAgT28wIGw1QTAgT28wIGlKQTAgRzAwIHpVMDAgSU0wIDFxTTAgMTFBMCAxbzAwIDExQTBcIixcblx0XHRcIkNFVHxDRVQgQ0VTVHwtMTAgLTIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yYUZlMCAxMWQwIDFpTzAgMTFBMCAxbzAwIDExQTAgUXJjMCA2aTAwIFdNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDE2TTAgMWdNTTAgMWEwMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFmQTAgMWEwMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJDU1Q2Q0RUfENTVCBDRFQgQ1dUIENQVHw2MCA1MCA1MCA1MHwwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8LTI2MXMwIDFuWDAgMTFCMCAxblgwIFNnTjAgOHgzMCBpdzAgUXdOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiQ2hpbGUvRWFzdGVySXNsYW5kfEVNVCBFQVNTVCBFQVNUIEVBU1NUIEVBU1QgRUFTVHw3aC5zIDYwIDcwIDUwIDYwIDUwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzV8LTF1U2dHLncgbkhVRy53IG9wMCA5VUswIFJYQjAgV0wwIDF6ZDAgT24wIDFpcDAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMWxkMCAxNG4wIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFxTjAgV0wwIDFxTjAgV0wwIDFxTjAgMTF6MCAxbzEwIDExYjAgbzAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIFdMMCAxcU4wIDFjTDAgMWNOMCAxMXowIDFsZDAgMTRuMCAxcU4wIDExejAgMWNOMCAxOVgwIDFxTjAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxcU4wIFdMMCAxcU4wIDE3YjAgMWlwMCAxMXowIDFpcDAgMWZ6MCAxZkIwIDExejAgMXFOMCBXTDAgMXFOMCBXTDAgMXFOMCBXTDAgMXFOMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMXFOMCBXTDAgMXFOMCAxN2IwIDFpcDAgMTF6MCAxbzEwIDE5WDAgMWZCMCAxblgwIEcxMCAxRUwwIE9wMCAxemIwIFJkMCAxd24wIFJkMCAxd24wXCIsXG5cdFx0XCJFRVR8RUVUIEVFU1R8LTIwIC0zMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8aERCMCAxYTAwIDFmQTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxYTAwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkVTVHxFU1R8NTB8MHxcIixcblx0XHRcIkVTVDVFRFR8RVNUIEVEVCBFV1QgRVBUfDUwIDQwIDQwIDQwfDAxMDEwMjMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMjYxdDAgMW5YMCAxMUIwIDFuWDAgU2dOMCA4eDQwIGl2MCBRd04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgczEwIDFWejAgTEIwIDFCWDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwXCIsXG5cdFx0XCJFaXJlfERNVCBJU1QgR01UIEJTVCBJU1R8cC5sIC15LkQgMCAtMTAgLTEwfDAxMjMyMzIzMjMyMzI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyNDI0MjQyfC0yYXg5eS5EIFJjMCAxZnp5LkQgMTRNMCAxZmMwIDFnMDAgMWNvMCAxZGMwIDFjbzAgMW9vMCAxNDAwIDFkYzAgMTlBMCAxaW8wIDFpbzAgV00wIDFvMDAgMTRvMCAxbzAwIDE3YzAgMWlvMCAxN2MwIDFmQTAgMWEwMCAxbGMwIDE3YzAgMWlvMCAxN2MwIDFmQTAgMWEwMCAxaW8wIDE3YzAgMWlvMCAxN2MwIDFmQTAgMWNNMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFpbzAgMXFNMCBEYzAgZzVYMCAxNHAwIDF3bjAgMTdkMCAxaW8wIDExQTAgMW8wMCAxN2MwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWZBMCAxYTAwIDE3YzAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxbGMwIDE3YzAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFhMDAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDF0QTAgSU0wIDkwbzAgVTAwIDF0QTAgVTAwIDF0QTAgVTAwIDF0QTAgVTAwIDF0QTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDF0QTAgVTAwIDF0QTAgVTAwIDF0QTAgMTF6MCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxNG8wIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdGMvR01UKzB8R01UfDB8MHxcIixcblx0XHRcIkV0Yy9HTVQrMXxHTVQrMXwxMHwwfFwiLFxuXHRcdFwiRXRjL0dNVCsxMHxHTVQrMTB8YTB8MHxcIixcblx0XHRcIkV0Yy9HTVQrMTF8R01UKzExfGIwfDB8XCIsXG5cdFx0XCJFdGMvR01UKzEyfEdNVCsxMnxjMHwwfFwiLFxuXHRcdFwiRXRjL0dNVCsyfEdNVCsyfDIwfDB8XCIsXG5cdFx0XCJFdGMvR01UKzN8R01UKzN8MzB8MHxcIixcblx0XHRcIkV0Yy9HTVQrNHxHTVQrNHw0MHwwfFwiLFxuXHRcdFwiRXRjL0dNVCs1fEdNVCs1fDUwfDB8XCIsXG5cdFx0XCJFdGMvR01UKzZ8R01UKzZ8NjB8MHxcIixcblx0XHRcIkV0Yy9HTVQrN3xHTVQrN3w3MHwwfFwiLFxuXHRcdFwiRXRjL0dNVCs4fEdNVCs4fDgwfDB8XCIsXG5cdFx0XCJFdGMvR01UKzl8R01UKzl8OTB8MHxcIixcblx0XHRcIkV0Yy9HTVQtMXxHTVQtMXwtMTB8MHxcIixcblx0XHRcIkV0Yy9HTVQtMTB8R01ULTEwfC1hMHwwfFwiLFxuXHRcdFwiRXRjL0dNVC0xMXxHTVQtMTF8LWIwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTEyfEdNVC0xMnwtYzB8MHxcIixcblx0XHRcIkV0Yy9HTVQtMTN8R01ULTEzfC1kMHwwfFwiLFxuXHRcdFwiRXRjL0dNVC0xNHxHTVQtMTR8LWUwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTJ8R01ULTJ8LTIwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTN8R01ULTN8LTMwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTR8R01ULTR8LTQwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTV8R01ULTV8LTUwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTZ8R01ULTZ8LTYwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTd8R01ULTd8LTcwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTh8R01ULTh8LTgwfDB8XCIsXG5cdFx0XCJFdGMvR01ULTl8R01ULTl8LTkwfDB8XCIsXG5cdFx0XCJFdGMvVUNUfFVDVHwwfDB8XCIsXG5cdFx0XCJFdGMvVVRDfFVUQ3wwfDB8XCIsXG5cdFx0XCJFdXJvcGUvQW1zdGVyZGFtfEFNVCBOU1QgTkVTVCBORVQgQ0VTVCBDRVR8LWoudyAtMWoudyAtMWsgLWsgLTIwIC0xMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTIzMjMyMzQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDV8LTJhRmNqLncgMTFiMCAxaVAwIDExQTAgMWlvMCAxY00wIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFjbzAgMWlvMCAxeW8wIFBjMCAxYTAwIDFmQTAgMUJjMCBNbzAgMXRjMCBVbzAgMXRBMCBVMDAgMXVvMCBXMDAgMXMwMCBWQTAgMXNvMCBWYzAgMXNNMCBVTTAgMXdvMCBSYzAgMXUwMCBXbzAgMXJBMCBXMDAgMXMwMCBWQTAgMXNNMCBVTTAgMXcwMCBmVjAgQkNYLncgMXRBMCBVMDAgMXUwMCBXbzAgMXNtMCA2MDFrIFdNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDE2TTAgMWdNTTAgMWEwMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFmQTAgMWEwMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvQW5kb3JyYXxXRVQgQ0VUIENFU1R8MCAtMTAgLTIwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtVUJBMCAxeElOMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvQXRoZW5zfEFNVCBFRVQgRUVTVCBDRVNUIENFVHwtMXkuUSAtMjAgLTMwIC0yMCAtMTB8MDEyMTIzNDM0MTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0yYTYxeC5RIENOYnguUSBtbjAga1UxMCA5YjAgM0VzMCBYYTAgMWZiMCAxZGQwIGszWDAgTnowIFNDcDAgMXZjMCBTTzAgMWNNMCAxYTAwIDFhbzAgMWZjMCAxYTEwIDFmRzAgMWNnMCAxZFgwIDFiWDAgMWNRMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL0JlbGZhc3R8R01UIEJTVCBCRFNUfDAgLTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTIxMjEyMTIxMjEwMTAxMjEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yYXhhMCBSYzAgMWZBMCAxNE0wIDFmYzAgMWcwMCAxY28wIDFkYzAgMWNvMCAxb28wIDE0MDAgMWRjMCAxOUEwIDFpbzAgMWlvMCBXTTAgMW8wMCAxNG8wIDFvMDAgMTdjMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFsYzAgMTdjMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxaW8wIDE3YzAgMWZBMCAxY00wIDFpbzAgMTdjMCAxZkEwIDFhMDAgMWlvMCAxN2MwIDFpbzAgMTdjMCAxZkEwIDFhMDAgMWlvMCAxcU0wIERjMCAyUnowIERjMCAxemMwIE9vMCAxemMwIFJjMCAxd28wIDE3YzAgMWlNMCBGQTAgeEIwIDFmQTAgMWEwMCAxNG8wIGJiMCBMQTAgeEIwIFJjMCAxd28wIDExQTAgMW8wMCAxN2MwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWZBMCAxYTAwIDE3YzAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxbGMwIDE3YzAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFhMDAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDF0QTAgSU0wIDkwbzAgVTAwIDF0QTAgVTAwIDF0QTAgVTAwIDF0QTAgVTAwIDF0QTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDF0QTAgVTAwIDF0QTAgVTAwIDF0QTAgMTF6MCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxNG8wIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvQmVsZ3JhZGV8Q0VUIENFU1R8LTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMTlSQzAgM0lQMCBXTTAgMWZBMCAxY00wIDFjTTAgMXJjMCBRbzAgMXZtbzAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvQmVybGlufENFVCBDRVNUIENFTVR8LTEwIC0yMCAtMzB8MDEwMTAxMDEwMTAxMDEyMTAxMDEyMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8LTJhRmUwIDExZDAgMWlPMCAxMUEwIDFvMDAgMTFBMCBRcmMwIDZpMDAgV00wIDFmQTAgMWNNMCAxY00wIDFjTTAga0wwIE5jMCBtMTAgV00wIDFhbzAgMWNwMCBkWDAganowIERkMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFlaEEwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL0JyYXRpc2xhdmF8Q0VUIENFU1R8LTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8LTJhRmUwIDExZDAgMWlPMCAxMUEwIDFvMDAgMTFBMCBRcmMwIDZpMDAgV00wIDFmQTAgMWNNMCAxNk0wIDFsYzAgMXRBMCAxN0EwIDExYzAgMWlvMCAxN2MwIDFpbzAgMTdjMCAxZmMwIDFhbzAgMWJOYzAgMWNNMCAxZkEwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL0JydXNzZWxzfFdFVCBDRVQgQ0VTVCBXRVNUfDAgLTEwIC0yMCAtMTB8MDEyMTIxMjEwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMXwtMmVoYzAgM3pYMCAxMWMwIDFpTzAgMTFBMCAxbzAwIDExQTAgbXkwIEljMCAxcU0wIFJjMCAxRU0wIFVNMCAxdTAwIDEwbzAgMWlvMCAxaW8wIDE3YzAgMWEwMCAxZkEwIDFjTTAgMWNNMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFpbzAgMWEzMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxY00wIDFjTTAgMWEwMCAxaW8wIDFjTTAgMWNNMCAxYTAwIDFmQTAgMWlvMCAxN2MwIDFjTTAgMWNNMCAxYTAwIDFmQTAgMWlvMCAxcU0wIERjMCB5MDAgNVduMCBXTTAgMWZBMCAxY00wIDE2TTAgMWlNMCAxNk0wIDFDMDAgVW8wIDFlZW8wIDFhMDAgMWZBMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL0J1Y2hhcmVzdHxCTVQgRUVUIEVFU1R8LTFJLm8gLTIwIC0zMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0xeEFwSS5vIDIwTEkubyBSQTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFBeGMwIE9uMCAxZkEwIDFhMTAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjSzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNMMCAxY04wIDFjTDAgMWZCMCAxblgwIDExRTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL0J1ZGFwZXN0fENFVCBDRVNUfC0xMCAtMjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMmFGZTAgMTFkMCAxaU8wIDExQTAgMWlwMCAxN2IwIDFvcDAgMXRiMCBRMm0wIDNOZTAgV00wIDFmQTAgMWNNMCAxY00wIDFvSjAgMWRjMCAxMDMwIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFhMDAgMWlNMCAxZkEwIDhIYTAgUmIwIDF3TjAgUmIwIDFCQjAgTHowIDFDMjAgTEIwIFNOWDAgMWExMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvQnVzaW5nZW58Q0VUIENFU1R8LTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMTlMYzAgMTFBMCAxbzAwIDExQTAgMXhHMTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkV1cm9wZS9DaGlzaW5hdXxDTVQgQk1UIEVFVCBFRVNUIENFU1QgQ0VUIE1TSyBNU0R8LTFUIC0xSS5vIC0yMCAtMzAgLTIwIC0xMCAtMzAgLTQwfDAxMjMyMzIzMjMyMzIzMjMyMzIzNDU0NTQ2NzY3Njc2NzY3Njc2NzY3Njc2MjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzIzMjMyMzJ8LTI2amRUIHdHTWEuQSAyMExJLm8gUkEwIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAyN0EwIDJlbjAgMzlnMCBXTTAgMWZBMCAxY00wIFY5MCAxdDd6MCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMXR5MCAyYkQwIDFjTTAgMWNLMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFmQjAgMW5YMCAxMUUwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkV1cm9wZS9Db3BlbmhhZ2VufENFVCBDRVNUfC0xMCAtMjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMmF6QzAgVHowIFZ1TzAgNjBxMCBXTTAgMWZBMCAxY00wIDFjTTAgMWNNMCBTMDAgMUhBMCBOYzAgMUMwMCBEYzAgMU5jMCBBbzAgMWg1QTAgMWEwMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvR2licmFsdGFyfEdNVCBCU1QgQkRTVCBDRVQgQ0VTVHwwIC0xMCAtMjAgLTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTIxMjEyMTIxMjEwMTAxMjEwMTAxMDEwMTAxMDEwMTAxMDEwMzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDN8LTJheGEwIFJjMCAxZkEwIDE0TTAgMWZjMCAxZzAwIDFjbzAgMWRjMCAxY28wIDFvbzAgMTQwMCAxZGMwIDE5QTAgMWlvMCAxaW8wIFdNMCAxbzAwIDE0bzAgMW8wMCAxN2MwIDFpbzAgMTdjMCAxZkEwIDFhMDAgMWxjMCAxN2MwIDFpbzAgMTdjMCAxZkEwIDFhMDAgMWlvMCAxN2MwIDFpbzAgMTdjMCAxZkEwIDFjTTAgMWlvMCAxN2MwIDFmQTAgMWEwMCAxaW8wIDE3YzAgMWlvMCAxN2MwIDFmQTAgMWEwMCAxaW8wIDFxTTAgRGMwIDJSejAgRGMwIDF6YzAgT28wIDF6YzAgUmMwIDF3bzAgMTdjMCAxaU0wIEZBMCB4QjAgMWZBMCAxYTAwIDE0bzAgYmIwIExBMCB4QjAgUmMwIDF3bzAgMTFBMCAxbzAwIDE3YzAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDAgMTdjMCAxZkEwIDFhMDAgMWlvMCAxN2MwIDFsYzAgMTdjMCAxZkEwIDEwSnowIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkV1cm9wZS9IZWxzaW5raXxITVQgRUVUIEVFU1R8LTFELk4gLTIwIC0zMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxfC0xV3VORC5OIE9VTEQuTiAxZEEwIDF4R3EwIDFjTTAgMWNNMCAxY00wIDFjTjAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvS2FsaW5pbmdyYWR8Q0VUIENFU1QgQ0VUIENFU1QgTVNLIE1TRCBFRVNUIEVFVCBGRVR8LTEwIC0yMCAtMjAgLTMwIC0zMCAtNDAgLTMwIC0yMCAtMzB8MDEwMTAxMDEwMTAxMDIzMjQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc2NzY3Njc4N3wtMmFGZTAgMTFkMCAxaU8wIDExQTAgMW8wMCAxMUEwIFFyYzAgNmkwMCBXTTAgMWZBMCAxY00wIDFjTTAgQW0wIExiMCAxZW4wIG9wMCAxcE56MCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNOMCAxY0owIDFjTDAgMWNRMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCA4SHowXCIsXG5cdFx0XCJFdXJvcGUvS2lldnxLTVQgRUVUIE1TSyBDRVNUIENFVCBNU0QgRUVTVHwtMjIuNCAtMjAgLTMwIC0yMCAtMTAgLTQwIC0zMHwwMTIzNDM0MjUyNTI1MjUyNTI1MjUyNTI1MjU2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxfC0xUGMyMi40IGVVbzIuNCBybnowIDJIZzAgV00wIDFmQTAgZGEwIDF2NG0wIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIERiMCAzMjIwIDFjSzAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjUTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvTGlzYm9ufExNVCBXRVQgV0VTVCBXRU1UIENFVCBDRVNUfEEuSiAwIC0xMCAtMjAgLTEwIC0yMHwwMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIzMjEyMzIxMjMyMTIzMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTQxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjQ1NDU0NTQyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJsZFhuLmYgYVBXbi5mIFNwMCBMWDAgMXZjMCBUYzAgMXVNMCBTTTAgMXZjMCBUYzAgMXZjMCBTTTAgMXZjMCA2NjAwIDFjbzAgM0UwMCAxN2MwIDFmQTAgMWEwMCAxaW8wIDFhMDAgMWlvMCAxN2MwIDNJMDAgMTdjMCAxY00wIDFjTTAgM0ZjMCAxY00wIDFhMDAgMWZBMCAxaW8wIDE3YzAgMWNNMCAxY00wIDFhMDAgMWZBMCAxaW8wIDFxTTAgRGMwIDF0QTAgMWNNMCAxZGMwIDE0MDAgZ0wwIElNMCBzMTAgVTAwIGRYMCBSYzAgcGQwIFJjMCBnTDAgT28wIHBkMCBSYzAgZ0wwIE9vMCBwZDAgMTRvMCAxY00wIDFjUDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDNDbzAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgcHZ5MCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNOMCAxY0wwIDFjTjAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY04wIDFjTDAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL0x1eGVtYm91cmd8TE1UIENFVCBDRVNUIFdFVCBXRVNUIFdFU1QgV0VUfC1vLkEgLTEwIC0yMCAwIC0xMCAtMjAgLTEwfDAxMjEyMTIxMzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQ1NjU2NTEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJERzBvLkEgdDZtby5BIFRCMCAxblgwIFVwMCAxbzIwIDExQTAgclcwIENNMCAxcVAwIFI5MCAxRU8wIFVLMCAxdTIwIDEwbTAgMWlwMCAxaW4wIDE3ZTAgMTlXMCAxZkIwIDFkYjAgMWNwMCAxaW4wIDE3ZDAgMWZ6MCAxYTEwIDFpbjAgMWExMCAxaW4wIDE3ZjAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxY00wIDFjTTAgMWEwMCAxaW8wIDFjTTAgMWNNMCAxYTAwIDFmQTAgMWlvMCAxN2MwIDFjTTAgMWNNMCAxYTAwIDFmQTAgMWlvMCAxcU0wIERjMCB2QTAgNjBMMCBXTTAgMWZBMCAxY00wIDE3YzAgMWlvMCAxNk0wIDFDMDAgVW8wIDFlZW8wIDFhMDAgMWZBMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL01hZHJpZHxXRVQgV0VTVCBXRU1UIENFVCBDRVNUfDAgLTEwIC0yMCAtMTAgLTIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTIxMjEyMTIxMjM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzfC0yOGRkMCAxMUEwIDFnbzAgMTlBMCAxY28wIDFkQTAgYjFBMCAxOG8wIDNJMDAgMTdjMCAxZkEwIDFhMDAgMWlvMCAxYTAwIDFpbzAgMTdjMCBpeW8wIFJjMCAxOG8wIDFoYzAgMWlvMCAxYTAwIDE0bzAgNWFMMCBNTTAgMXZjMCAxN0EwIDFpMDAgMWJjMCAxZW8wIDE3ZDAgMWluMCAxN0EwIDZoQTAgMTBOMCBYSUwwIDFhMTAgMWluMCAxN2QwIDE5WDAgMWNOMCAxZnowIDFhMTAgMWZYMCAxY3AwIDFjTzAgMWNNMCAxZkEwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL01hbHRhfENFVCBDRVNUfC0xMCAtMjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMmFzMTAgTTAwIDFjTTAgMWNNMCAxNG8wIDFvMDAgV00wIDFxTTAgMTdjMCAxY00wIE0zQTAgNU0yMCBXTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxNm0wIDFkZTAgMWxjMCAxNG0wIDFsYzAgV08wIDFxTTAgR1RXMCBPbjAgMUMxMCBMejAgMUMxMCBMejAgMUVOMCBMejAgMUMxMCBMejAgMXpkMCBPbzAgMUMwMCBPbjAgMWNwMCAxY00wIDFsQTAgWGMwIDFxcTAgMTF6MCAxbzEwIDExejAgMW8xMCAxMXowIDFvMTAgMTF6MCAxbzEwIDExejAgMWlOMCAxOXowIDFmQjAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkV1cm9wZS9NaW5za3xNTVQgRUVUIE1TSyBDRVNUIENFVCBNU0QgRUVTVCBGRVR8LTFPIC0yMCAtMzAgLTIwIC0xMCAtNDAgLTMwIC0zMHwwMTIzNDM0MzI1MjUyNTI1MjUyNTI1MjUyNTI2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNzJ8LTFQYzFPIGVVbk8gcU5YMCAzZ1EwIFdNMCAxZkEwIDFjTTAgQWwwIDF0c24wIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAzRmMwIDFjTjAgMWNLMCAxY00wIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh5MFwiLFxuXHRcdFwiRXVyb3BlL01vbmFjb3xQTVQgV0VUIFdFU1QgV0VNVCBDRVQgQ0VTVHwtOS5sIDAgLTEwIC0yMCAtMTAgLTIwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjMyMzIzMjMyMzQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0fC0ybmNvOS5sIGNOYjkubCBIQTAgMTlBMCAxaU0wIDExYzAgMW9vMCBXbzAgMXJjMCBRTTAgMUVNMCBVTTAgMXUwMCAxMG8wIDFpbzAgMXdvMCBSYzAgMWEwMCAxZkEwIDFjTTAgMWNNMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFpbzAgMWEwMCAxaW8wIDE3YzAgMWZBMCAxYTAwIDFpbzAgMTdjMCAxY00wIDFjTTAgMWEwMCAxaW8wIDFjTTAgMWNNMCAxYTAwIDFmQTAgMWlvMCAxN2MwIDFjTTAgMWNNMCAxYTAwIDFmQTAgMWlvMCAxcU0wIERmMCAyUlYwIDExejAgMTFCMCAxemUwIFdNMCAxZkEwIDFjTTAgMWZhMCAxYXEwIDE2TTAgMWVrbjAgMWNMMCAxZkMwIDFhMDAgMWZBMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL01vc2Nvd3xNTVQgTU1UIE1TVCBNRFNUIE1TRCBNU0sgTVNNIEVFVCBFRVNUIE1TS3wtMnUuaCAtMnYuaiAtM3YuaiAtNHYuaiAtNDAgLTMwIC01MCAtMjAgLTMwIC00MHwwMTIxMzIzNDU0NjQ1NzU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTg3NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1OTV8LTJhZzJ1LmggMnB5Vy5XIDFiQTAgMTFYMCBHTjAgMUhiMCBjMjAgaW12LmogM0RBMCBkejAgMTVBMCBjMTAgMnExMCBpTTEwIDIzQ0wwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY04wIElNMCByVTAgMWNMMCAxY1EwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDhIejBcIixcblx0XHRcIkV1cm9wZS9QYXJpc3xQTVQgV0VUIFdFU1QgQ0VTVCBDRVQgV0VNVHwtOS5sIDAgLTEwIC0yMCAtMTAgLTIwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjM0MzQzNTI1NDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzQzNDM0MzR8LTJuY284LmwgY05iOC5sIEhBMCAxOUEwIDFpTTAgMTFjMCAxb28wIFdvMCAxcmMwIFFNMCAxRU0wIFVNMCAxdTAwIDEwbzAgMWlvMCAxd28wIFJjMCAxYTAwIDFmQTAgMWNNMCAxY00wIDFpbzAgMTdjMCAxZkEwIDFhMDAgMWlvMCAxYTAwIDFpbzAgMTdjMCAxZkEwIDFhMDAgMWlvMCAxN2MwIDFjTTAgMWNNMCAxYTAwIDFpbzAgMWNNMCAxY00wIDFhMDAgMWZBMCAxaW8wIDE3YzAgMWNNMCAxY00wIDFhMDAgMWZBMCAxaW8wIDFxTTAgRGYwIElrMCA1TTMwIFdNMCAxZkEwIDFjTTAgVngwIGhCMCAxYXEwIDE2TTAgMWVrbjAgMWNMMCAxZkMwIDFhMDAgMWZBMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL1JpZ2F8Uk1UIExTVCBFRVQgTVNLIENFU1QgQ0VUIE1TRCBFRVNUfC0xQS55IC0yQS55IC0yMCAtMzAgLTIwIC0xMCAtNDAgLTMwfDAxMDEwMjM0NTQ1NDUzNjM2MzYzNjM2MzYzNjM2MzcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MjcyNzI3MnwtMjVUekEueSAxMUEwIDFpTTAga28wIGdXbTAgeURYQS55IDJiWDAgM2ZFMCBXTTAgMWZBMCAxY00wIDFjTTAgNG0wIDFzTHkwIDFkYjAgMWNOMCAxZGIwIDFjTjAgMWRiMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNOMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNOMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgM29vMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL1JvbWV8Q0VUIENFU1R8LTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yYXMxMCBNMDAgMWNNMCAxY00wIDE0bzAgMW8wMCBXTTAgMXFNMCAxN2MwIDFjTTAgTTNBMCA1TTIwIFdNMCAxZkEwIDFjTTAgMTZLMCAxaU8wIDE2bTAgMWRlMCAxbGMwIDE0bTAgMWxjMCBXTzAgMXFNMCBHVFcwIE9uMCAxQzEwIEx6MCAxQzEwIEx6MCAxRU4wIEx6MCAxQzEwIEx6MCAxemQwIE9vMCAxQzAwIE9uMCAxQzEwIEx6MCAxemQwIE9uMCAxQzEwIExBMCAxQzAwIExBMCAxemMwIE9vMCAxQzAwIE9vMCAxemMwIE9vMCAxZkMwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL1NhbWFyYXxMTVQgU0FNVCBTQU1UIEtVWVQgS1VZU1QgTVNEIE1TSyBFRVNUIEtVWVQgU0FNU1QgU0FNU1R8LTNrLmsgLTMwIC00MCAtNDAgLTUwIC00MCAtMzAgLTMwIC0zMCAtNTAgLTQwfDAxMjM0MzQzNDM0MzQzNDM0MzQzNTY1Njc4MjkyOTI5MjkyOTI5MjkyOTI5MjkyOTI5MjkyOTI5MjkyOTI5MmExMnwtMjJXTmsuayBxSGFrLmsgYmNuMCAxUXFvMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTjAgMWNNMCAxZkEwIDFjTTAgMWNOMCA4bzAgMTRqMCAxY0wwIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFOMCBXTTBcIixcblx0XHRcIkV1cm9wZS9TaW1mZXJvcG9sfFNNVCBFRVQgTVNLIENFU1QgQ0VUIE1TRCBFRVNUIE1TS3wtMmcgLTIwIC0zMCAtMjAgLTEwIC00MCAtMzAgLTQwfDAxMjM0MzQzMjUyNTI1MjUyNTI1MjUyNTI1MjE2MTYxNjUyNTI1MjYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE3MnwtMVBjMmcgZVVvZyByRW4wIDJxczAgV00wIDFmQTAgMWNNMCAzVjAgMXUwTDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFRMDAgNGVMMCAxY0wwIDFjTjAgMWNMMCAxY04wIGRYMCBXTDAgMWNOMCAxY0wwIDFmQjAgMW8zMCAxMUIwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTF6MCAxblcwXCIsXG5cdFx0XCJFdXJvcGUvU29maWF8RUVUIENFVCBDRVNUIEVFU1R8LTIwIC0xMCAtMjAgLTMwfDAxMjEyMTAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzMDMwfC0xNjhMMCBXTTAgMWZBMCAxY00wIDFjTTAgMWNOMCAxbUtIMCAxZGQwIDFmYjAgMWFwMCAxZmIwIDFhMjAgMWZ5MCAxYTMwIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNLMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxZkIwIDFuWDAgMTFFMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvU3RvY2tob2xtfENFVCBDRVNUfC0xMCAtMjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8LTJhekMwIFRCMCAyeURlMCAxYTAwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkV1cm9wZS9UYWxsaW5ufFRNVCBDRVQgQ0VTVCBFRVQgTVNLIE1TRCBFRVNUfC0xRCAtMTAgLTIwIC0yMCAtMzAgLTQwIC0zMHwwMTIxMDM0MjEyMTI0NTQ1NDU0NTQ1NDU0NTQ1NDYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjN8LTI2b05EIHRlRCAxMUEwIDFUYTAgNHJYbCBLU0xEIDJGWDAgMkpnMCBXTTAgMWZBMCAxY00wIDE4SjAgMXNUWDAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY04wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzEwIDExQTAgMXFNMCA1UU0wIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkV1cm9wZS9UaXJhbmV8TE1UIENFVCBDRVNUfC0xai5rIC0xMCAtMjB8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJnbEJqLmsgMTRwY2ouayA1TEMwIFdNMCA0TTAgMWZDSzAgMTBuMCAxb3AwIDExejAgMXBkMCAxMXowIDFxTjAgV0wwIDFxcDAgWGIwIDFxcDAgWGIwIDFxcDAgMTF6MCAxbEIwIDExejAgMXFOMCAxMXowIDFpTjAgMTZuMCAxZGQwIDFjTzAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvVXpoZ29yb2R8Q0VUIENFU1QgTVNLIE1TRCBFRVQgRUVTVHwtMTAgLTIwIC0zMCAtNDAgLTIwIC0zMHwwMTAxMDEwMjMyMzIzMjMyMzIzMjMyMzIzMjA0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTR8LTFjcUwwIDZpMDAgV00wIDFmQTAgMWNNMCAxbWwwIDFDcDAgMXIzVzAgMWRiMCAxY04wIDFkYjAgMWNOMCAxZGIwIDFkZDAgMWNPMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFRMDAgMU5mMCAycHcwIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY1EwIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiRXVyb3BlL1ZpZW5uYXxDRVQgQ0VTVHwtMTAgLTIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8LTJhRmUwIDExZDAgMWlPMCAxMUEwIDFvMDAgMTFBMCAzS00wIDE0bzAgTEEwMCA2aTAwIFdNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDQwMCAycU0wIDFhMDAgMWNNMCAxY00wIDFpbzAgMTdjMCAxZ0hhMCAxOVgwIDFjUDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIixcblx0XHRcIkV1cm9wZS9WaWxuaXVzfFdNVCBLTVQgQ0VUIEVFVCBNU0sgQ0VTVCBNU0QgRUVTVHwtMW8gLTF6LkEgLTEwIC0yMCAtMzAgLTIwIC00MCAtMzB8MDEyMzI0NTI1MjU0NjQ2NDY0NjQ2NDY0NjQ2NDY0NjQ3MzczNzM3MzczNzM3MzUyNTM3MzczNzM3MzczNzM3MzczNzM3MzczNzM3MzczNzM3MzczNzM3MzczNzM3MzczNzM3MzczNzM3MzczNzM3MzczNzM3MzczfC0yOTNkbyA2SUxNLm8gMU9vei5BIHp6MCBNZmQwIDI5VzAgM2lzMCBXTTAgMWZBMCAxY00wIExWMCAxdGdMMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNOMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUIwIDFvMDAgMTFBMCAxcU0wIDhpbzAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvVm9sZ29ncmFkfExNVCBUU0FUIFNUQVQgU1RBVCBWT0xUIFZPTFNUIFZPTFNUIFZPTFQgTVNLIE1TS3wtMlYuRSAtMzAgLTMwIC00MCAtNDAgLTUwIC00MCAtMzAgLTQwIC0zMHwwMTIzNDU0NTQ1NDU0NTQ1NDU0NTQ2NzY3NDg5ODk4OTg5ODk4OTg5ODk4OTg5ODk4OTg5ODk4OTg5ODk4OTg5ODl8LTIxSXFWLkUgY0xYVi5FIGNFTTAgMWdxbjAgTGNvMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTjAgMWNNMCAxZkEwIDFjTTAgMnB6MCAxY0owIDFjUTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgOEh6MFwiLFxuXHRcdFwiRXVyb3BlL1dhcnNhd3xXTVQgQ0VUIENFU1QgRUVUIEVFU1R8LTFvIC0xMCAtMjAgLTIwIC0zMHwwMTIxMjEyMzQzMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJjdGRvIDFMWG8gMTFkMCAxaU8wIDExQTAgMW8wMCAxMUEwIDFvbjAgMTFBMCA2enkwIEhXUDAgNUlNMCBXTTAgMWZBMCAxY00wIDFkejAgMW1MMCAxZW4wIDE1QjAgMWFxMCAxbkEwIDExQTAgMWlvMCAxN2MwIDFmQTAgMWEwMCBpRFgwIExBMCAxY00wIDFjTTAgMUMwMCBPbzAgMWNNMCAxY00wIDF6YzAgT28wIDF6YzAgT28wIDF6YzAgT28wIDFDMDAgTEEwIHVzbzAgMWEwMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFmQTAgMWEwMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNOMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwXCIsXG5cdFx0XCJFdXJvcGUvWmFwb3Jvemh5ZXxDVVQgRUVUIE1TSyBDRVNUIENFVCBNU0QgRUVTVHwtMmsgLTIwIC0zMCAtMjAgLTEwIC00MCAtMzB8MDEyMzQzNDI1MjUyNTI1MjUyNTI1MjUyNTI1MjYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjE2MTYxNjF8LTFQYzJrIGVVb2sgcmRiMCAyUkUwIFdNMCAxZkEwIDhtMCAxdjlhMCAxZGIwIDFjTjAgMWRiMCAxY04wIDFkYjAgMWRkMCAxY08wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNLMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY1EwIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiSFNUfEhTVHxhMHwwfFwiLFxuXHRcdFwiSW5kaWFuL0NoYWdvc3xMTVQgSU9UIElPVHwtNE4uRSAtNTAgLTYwfDAxMnwtMnhvc04uRSAzQUdMTi5FXCIsXG5cdFx0XCJJbmRpYW4vQ2hyaXN0bWFzfENYVHwtNzB8MHxcIixcblx0XHRcIkluZGlhbi9Db2Nvc3xDQ1R8LTZ1fDB8XCIsXG5cdFx0XCJJbmRpYW4vS2VyZ3VlbGVufHp6eiBURlR8MCAtNTB8MDF8LU1HMDBcIixcblx0XHRcIkluZGlhbi9NYWhlfExNVCBTQ1R8LTNGLk0gLTQwfDAxfC0yeU8zRi5NXCIsXG5cdFx0XCJJbmRpYW4vTWFsZGl2ZXN8TU1UIE1WVHwtNFMgLTUwfDAxfC1vbGdTXCIsXG5cdFx0XCJJbmRpYW4vTWF1cml0aXVzfExNVCBNVVQgTVVTVHwtM08gLTQwIC01MHwwMTIxMjF8LTJ4b3JPIDM0dW5PIDE0TDAgMTJrcjAgMTF6MFwiLFxuXHRcdFwiSW5kaWFuL1JldW5pb258TE1UIFJFVHwtM0YuUSAtNDB8MDF8LTJtRERGLlFcIixcblx0XHRcIkt3YWphbGVpbnxNSFQgS1dBVCBNSFR8LWIwIGMwIC1jMHwwMTJ8LUFYMCBXOVgwXCIsXG5cdFx0XCJNRVR8TUVUIE1FU1R8LTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwtMmFGZTAgMTFkMCAxaU8wIDExQTAgMW8wMCAxMUEwIFFyYzAgNmkwMCBXTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxNk0wIDFnTU0wIDFhMDAgMWZBMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFhMDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMFwiLFxuXHRcdFwiTVNUfE1TVHw3MHwwfFwiLFxuXHRcdFwiTVNUN01EVHxNU1QgTURUIE1XVCBNUFR8NzAgNjAgNjAgNjB8MDEwMTAyMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfC0yNjFyMCAxblgwIDExQjAgMW5YMCBTZ04wIDh4MjAgaXgwIFF3TjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCBzMTAgMVZ6MCBMQjAgMUJYMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjBcIixcblx0XHRcIk5aLUNIQVR8Q0hBU1QgQ0hBU1QgQ0hBRFR8LWNmIC1jSiAtZEp8MDEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyfC1XcUFmIDFhZGVmIElNMCAxQzAwIFJjMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIFJjMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIFJjMCAxemMwIE9vMCAxcU0wIDE0bzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbGMwIDE3YzAgMWlvMCAxN2MwIDFpbzAgMTdjMCAxaW8wIDE3YzAgMWxjMCAxNG8wIDFsYzAgMTRvMCAxbGMwIDE3YzAgMWlvMCAxN2MwIDFpbzAgMTdjMCAxbGMwIDE0bzAgMWxjMCAxNG8wIDFsYzAgMTdjMCAxaW8wIDE3YzAgMWlvMCAxN2MwIDFpbzAgMTdjMCAxaW8wIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxaW8wIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDAgMWZBMCAxYTAwXCIsXG5cdFx0XCJQU1Q4UERUfFBTVCBQRFQgUFdUIFBQVHw4MCA3MCA3MCA3MHwwMTAxMDIzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8LTI2MXEwIDFuWDAgMTFCMCAxblgwIFNnTjAgOHgxMCBpeTAgUXdOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxY04wIDFjTDAgMWNOMCAxY0wwIHMxMCAxVnowIExCMCAxQlgwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMTRwMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDE0cDAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMFwiLFxuXHRcdFwiUGFjaWZpYy9BcGlhfExNVCBXU1NUIFNTVCBTRFQgV1NEVCBXU1NUfGJxLlUgYnUgYjAgYTAgLWUwIC1kMHwwMTIzMjM0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NDU0NTQ1NHwtMm5ETXguNCAxeVcwMy40IDJyUmJ1IDFmZjAgMWEwMCBDSTAgQVEwIDFjTTAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFjTTAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxaW8wIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDAgMWZBMCAxYTAwXCIsXG5cdFx0XCJQYWNpZmljL0JvdWdhaW52aWxsZXxQR1QgSlNUIEJTVHwtYTAgLTkwIC1iMHwwMTAyfC0xNld5MCA3Q04wIDJNUXAwXCIsXG5cdFx0XCJQYWNpZmljL0NodXVrfENIVVR8LWEwfDB8XCIsXG5cdFx0XCJQYWNpZmljL0VmYXRlfExNVCBWVVQgVlVTVHwtYmQuZyAtYjAgLWMwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjF8LTJsOW5kLmcgMlN6Y2QuZyAxY0wwIDFvTjAgMTBMMCAxZkIwIDE5WDAgMWZCMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxZkIwIEx6MCAxTmQwIEFuMFwiLFxuXHRcdFwiUGFjaWZpYy9FbmRlcmJ1cnl8UEhPVCBQSE9UIFBIT1R8YzAgYjAgLWQwfDAxMnxuSWMwIEI4bjBcIixcblx0XHRcIlBhY2lmaWMvRmFrYW9mb3xUS1QgVEtUfGIwIC1kMHwwMXwxR2ZuMFwiLFxuXHRcdFwiUGFjaWZpYy9GaWppfExNVCBGSlQgRkpTVHwtYlQuSSAtYzAgLWQwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMnwtMmJVelQuSSAzbThOVC5JIExBMCAxRU0wIElNMCBuSmMwIExBMCAxbzAwIFJjMCAxd28wIEFvMCAxTmMwIEFvMCAxUTAwIHh6MCAxU04wIHVNMCAxU00wIHhBMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHhBMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHhBMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxVkEwIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wIHVNMCAxU00wXCIsXG5cdFx0XCJQYWNpZmljL0Z1bmFmdXRpfFRWVHwtYzB8MHxcIixcblx0XHRcIlBhY2lmaWMvR2FsYXBhZ29zfExNVCBFQ1QgR0FMVHw1Vy5vIDUwIDYwfDAxMnwtMXlWUzEuQSAyZFR6MS5BXCIsXG5cdFx0XCJQYWNpZmljL0dhbWJpZXJ8TE1UIEdBTVR8OFguTSA5MHwwMXwtMmpvZjAuY1wiLFxuXHRcdFwiUGFjaWZpYy9HdWFkYWxjYW5hbHxMTVQgU0JUfC1hRC5NIC1iMHwwMXwtMmpveUQuTVwiLFxuXHRcdFwiUGFjaWZpYy9HdWFtfEdTVCBDaFNUfC1hMCAtYTB8MDF8MWZwcTBcIixcblx0XHRcIlBhY2lmaWMvSG9ub2x1bHV8SFNUIEhEVCBIU1R8YXUgOXUgYTB8MDEwMTAyfC0xdGhMdSA4eDAgbGVmMCA4UHowIDQ2cDBcIixcblx0XHRcIlBhY2lmaWMvS2lyaXRpbWF0aXxMSU5UIExJTlQgTElOVHxhRSBhMCAtZTB8MDEyfG5JYUUgQjhua1wiLFxuXHRcdFwiUGFjaWZpYy9Lb3NyYWV8S09TVCBLT1NUfC1iMCAtYzB8MDEwfC1BWDAgMWJkejBcIixcblx0XHRcIlBhY2lmaWMvTWFqdXJvfE1IVCBNSFR8LWIwIC1jMHwwMXwtQVgwXCIsXG5cdFx0XCJQYWNpZmljL01hcnF1ZXNhc3xMTVQgTUFSVHw5aSA5dXwwMXwtMmpvZUdcIixcblx0XHRcIlBhY2lmaWMvTWlkd2F5fE5TVCBORFQgQlNUIFNTVHxiMCBhMCBiMCBiMHwwMTAyM3wteDNOMCBBbjAgcEpkMCBFeU0wXCIsXG5cdFx0XCJQYWNpZmljL05hdXJ1fExNVCBOUlQgSlNUIE5SVHwtYjcuRSAtYnUgLTkwIC1jMHwwMTIxM3wtMVhkbjcuRSBQdnpCLkUgNVJDdSAxb3VKdVwiLFxuXHRcdFwiUGFjaWZpYy9OaXVlfE5VVCBOVVQgTlVUfGJrIGJ1IGIwfDAxMnwtS2ZNRSAxN3kwYVwiLFxuXHRcdFwiUGFjaWZpYy9Ob3Jmb2xrfE5NVCBORlR8LWJjIC1idXwwMXwtS2diY1wiLFxuXHRcdFwiUGFjaWZpYy9Ob3VtZWF8TE1UIE5DVCBOQ1NUfC1iNS5NIC1iMCAtYzB8MDEyMTIxMjF8LTJsOW41Lk0gMkVxTTUuTSB4WDAgMVBCMCB5bjAgSGVQMCBBbzBcIixcblx0XHRcIlBhY2lmaWMvUGFnb19QYWdvfExNVCBOU1QgQlNUIFNTVHxibS5NIGIwIGIwIGIwfDAxMjN8LTJuRE1CLmMgMmdWekIuYyBFeU0wXCIsXG5cdFx0XCJQYWNpZmljL1BhbGF1fFBXVHwtOTB8MHxcIixcblx0XHRcIlBhY2lmaWMvUGl0Y2Fpcm58UE5UIFBTVHw4dSA4MHwwMXwxOFZrdVwiLFxuXHRcdFwiUGFjaWZpYy9Qb2hucGVpfFBPTlR8LWIwfDB8XCIsXG5cdFx0XCJQYWNpZmljL1BvcnRfTW9yZXNieXxQR1R8LWEwfDB8XCIsXG5cdFx0XCJQYWNpZmljL1Jhcm90b25nYXxDS1QgQ0tIU1QgQ0tUfGF1IDl1IGEwfDAxMjEyMTIxMjEyMTIxMjEyMTIxMjEyMTIxMnxseVd1IElMMCAxemN1IE9udSAxemN1IE9udSAxemN1IFJidSAxemN1IE9udSAxemN1IE9udSAxemN1IE9udSAxemN1IE9udSAxemN1IE9udSAxemN1IFJidSAxemN1IE9udSAxemN1IE9udSAxemN1IE9udVwiLFxuXHRcdFwiUGFjaWZpYy9TYWlwYW58TVBUIE1QVCBDaFNUfC05MCAtYTAgLWEwfDAxMnwtQVYwIDFnMm4wXCIsXG5cdFx0XCJQYWNpZmljL1RhaGl0aXxMTVQgVEFIVHw5Vy5nIGEwfDAxfC0yam9lMS5JXCIsXG5cdFx0XCJQYWNpZmljL1RhcmF3YXxHSUxUfC1jMHwwfFwiLFxuXHRcdFwiUGFjaWZpYy9Ub25nYXRhcHV8VE9UIFRPVCBUT1NUfC1jayAtZDAgLWUwfDAxMjEyMTIxfC0xYUIwayAybjVkayAxNUEwIDF3bzAgeHowIDFRMTAgeHowXCIsXG5cdFx0XCJQYWNpZmljL1dha2V8V0FLVHwtYzB8MHxcIixcblx0XHRcIlBhY2lmaWMvV2FsbGlzfFdGVHwtYzB8MHxcIixcblx0XHRcIldFVHxXRVQgV0VTVHwwIC0xMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8aERCMCAxYTAwIDFmQTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxYTAwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDBcIlxuXHRdLFxuXHRcImxpbmtzXCI6IFtcblx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9CYW1ha29cIixcblx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9CYW5qdWxcIixcblx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9Db25ha3J5XCIsXG5cdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvRGFrYXJcIixcblx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9GcmVldG93blwiLFxuXHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL0xvbWVcIixcblx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9Ob3Vha2Nob3R0XCIsXG5cdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvT3VhZ2Fkb3Vnb3VcIixcblx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9TYW9fVG9tZVwiLFxuXHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL1RpbWJ1a3R1XCIsXG5cdFx0XCJBZnJpY2EvQWJpZGphbnxBdGxhbnRpYy9TdF9IZWxlbmFcIixcblx0XHRcIkFmcmljYS9BZGRpc19BYmFiYXxBZnJpY2EvQXNtYXJhXCIsXG5cdFx0XCJBZnJpY2EvQWRkaXNfQWJhYmF8QWZyaWNhL0FzbWVyYVwiLFxuXHRcdFwiQWZyaWNhL0FkZGlzX0FiYWJhfEFmcmljYS9EYXJfZXNfU2FsYWFtXCIsXG5cdFx0XCJBZnJpY2EvQWRkaXNfQWJhYmF8QWZyaWNhL0RqaWJvdXRpXCIsXG5cdFx0XCJBZnJpY2EvQWRkaXNfQWJhYmF8QWZyaWNhL0thbXBhbGFcIixcblx0XHRcIkFmcmljYS9BZGRpc19BYmFiYXxBZnJpY2EvTW9nYWRpc2h1XCIsXG5cdFx0XCJBZnJpY2EvQWRkaXNfQWJhYmF8QWZyaWNhL05haXJvYmlcIixcblx0XHRcIkFmcmljYS9BZGRpc19BYmFiYXxJbmRpYW4vQW50YW5hbmFyaXZvXCIsXG5cdFx0XCJBZnJpY2EvQWRkaXNfQWJhYmF8SW5kaWFuL0NvbW9yb1wiLFxuXHRcdFwiQWZyaWNhL0FkZGlzX0FiYWJhfEluZGlhbi9NYXlvdHRlXCIsXG5cdFx0XCJBZnJpY2EvQmFuZ3VpfEFmcmljYS9CcmF6emF2aWxsZVwiLFxuXHRcdFwiQWZyaWNhL0Jhbmd1aXxBZnJpY2EvRG91YWxhXCIsXG5cdFx0XCJBZnJpY2EvQmFuZ3VpfEFmcmljYS9LaW5zaGFzYVwiLFxuXHRcdFwiQWZyaWNhL0Jhbmd1aXxBZnJpY2EvTGFnb3NcIixcblx0XHRcIkFmcmljYS9CYW5ndWl8QWZyaWNhL0xpYnJldmlsbGVcIixcblx0XHRcIkFmcmljYS9CYW5ndWl8QWZyaWNhL0x1YW5kYVwiLFxuXHRcdFwiQWZyaWNhL0Jhbmd1aXxBZnJpY2EvTWFsYWJvXCIsXG5cdFx0XCJBZnJpY2EvQmFuZ3VpfEFmcmljYS9OaWFtZXlcIixcblx0XHRcIkFmcmljYS9CYW5ndWl8QWZyaWNhL1BvcnRvLU5vdm9cIixcblx0XHRcIkFmcmljYS9CbGFudHlyZXxBZnJpY2EvQnVqdW1idXJhXCIsXG5cdFx0XCJBZnJpY2EvQmxhbnR5cmV8QWZyaWNhL0dhYm9yb25lXCIsXG5cdFx0XCJBZnJpY2EvQmxhbnR5cmV8QWZyaWNhL0hhcmFyZVwiLFxuXHRcdFwiQWZyaWNhL0JsYW50eXJlfEFmcmljYS9LaWdhbGlcIixcblx0XHRcIkFmcmljYS9CbGFudHlyZXxBZnJpY2EvTHVidW1iYXNoaVwiLFxuXHRcdFwiQWZyaWNhL0JsYW50eXJlfEFmcmljYS9MdXNha2FcIixcblx0XHRcIkFmcmljYS9CbGFudHlyZXxBZnJpY2EvTWFwdXRvXCIsXG5cdFx0XCJBZnJpY2EvQ2Fpcm98RWd5cHRcIixcblx0XHRcIkFmcmljYS9Kb2hhbm5lc2J1cmd8QWZyaWNhL01hc2VydVwiLFxuXHRcdFwiQWZyaWNhL0pvaGFubmVzYnVyZ3xBZnJpY2EvTWJhYmFuZVwiLFxuXHRcdFwiQWZyaWNhL0p1YmF8QWZyaWNhL0toYXJ0b3VtXCIsXG5cdFx0XCJBZnJpY2EvVHJpcG9saXxMaWJ5YVwiLFxuXHRcdFwiQW1lcmljYS9BZGFrfEFtZXJpY2EvQXRrYVwiLFxuXHRcdFwiQW1lcmljYS9BZGFrfFVTL0FsZXV0aWFuXCIsXG5cdFx0XCJBbWVyaWNhL0FuY2hvcmFnZXxVUy9BbGFza2FcIixcblx0XHRcIkFtZXJpY2EvQW5ndWlsbGF8QW1lcmljYS9Eb21pbmljYVwiLFxuXHRcdFwiQW1lcmljYS9Bbmd1aWxsYXxBbWVyaWNhL0dyZW5hZGFcIixcblx0XHRcIkFtZXJpY2EvQW5ndWlsbGF8QW1lcmljYS9HdWFkZWxvdXBlXCIsXG5cdFx0XCJBbWVyaWNhL0FuZ3VpbGxhfEFtZXJpY2EvTWFyaWdvdFwiLFxuXHRcdFwiQW1lcmljYS9Bbmd1aWxsYXxBbWVyaWNhL01vbnRzZXJyYXRcIixcblx0XHRcIkFtZXJpY2EvQW5ndWlsbGF8QW1lcmljYS9Qb3J0X29mX1NwYWluXCIsXG5cdFx0XCJBbWVyaWNhL0FuZ3VpbGxhfEFtZXJpY2EvU3RfQmFydGhlbGVteVwiLFxuXHRcdFwiQW1lcmljYS9Bbmd1aWxsYXxBbWVyaWNhL1N0X0tpdHRzXCIsXG5cdFx0XCJBbWVyaWNhL0FuZ3VpbGxhfEFtZXJpY2EvU3RfTHVjaWFcIixcblx0XHRcIkFtZXJpY2EvQW5ndWlsbGF8QW1lcmljYS9TdF9UaG9tYXNcIixcblx0XHRcIkFtZXJpY2EvQW5ndWlsbGF8QW1lcmljYS9TdF9WaW5jZW50XCIsXG5cdFx0XCJBbWVyaWNhL0FuZ3VpbGxhfEFtZXJpY2EvVG9ydG9sYVwiLFxuXHRcdFwiQW1lcmljYS9Bbmd1aWxsYXxBbWVyaWNhL1ZpcmdpblwiLFxuXHRcdFwiQW1lcmljYS9BcmdlbnRpbmEvQnVlbm9zX0FpcmVzfEFtZXJpY2EvQnVlbm9zX0FpcmVzXCIsXG5cdFx0XCJBbWVyaWNhL0FyZ2VudGluYS9DYXRhbWFyY2F8QW1lcmljYS9BcmdlbnRpbmEvQ29tb2RSaXZhZGF2aWFcIixcblx0XHRcIkFtZXJpY2EvQXJnZW50aW5hL0NhdGFtYXJjYXxBbWVyaWNhL0NhdGFtYXJjYVwiLFxuXHRcdFwiQW1lcmljYS9BcmdlbnRpbmEvQ29yZG9iYXxBbWVyaWNhL0NvcmRvYmFcIixcblx0XHRcIkFtZXJpY2EvQXJnZW50aW5hL0NvcmRvYmF8QW1lcmljYS9Sb3NhcmlvXCIsXG5cdFx0XCJBbWVyaWNhL0FyZ2VudGluYS9KdWp1eXxBbWVyaWNhL0p1anV5XCIsXG5cdFx0XCJBbWVyaWNhL0FyZ2VudGluYS9NZW5kb3phfEFtZXJpY2EvTWVuZG96YVwiLFxuXHRcdFwiQW1lcmljYS9BcnViYXxBbWVyaWNhL0N1cmFjYW9cIixcblx0XHRcIkFtZXJpY2EvQXJ1YmF8QW1lcmljYS9LcmFsZW5kaWprXCIsXG5cdFx0XCJBbWVyaWNhL0FydWJhfEFtZXJpY2EvTG93ZXJfUHJpbmNlc1wiLFxuXHRcdFwiQW1lcmljYS9BdGlrb2thbnxBbWVyaWNhL0NvcmFsX0hhcmJvdXJcIixcblx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xVUy9DZW50cmFsXCIsXG5cdFx0XCJBbWVyaWNhL0RlbnZlcnxBbWVyaWNhL1NoaXByb2NrXCIsXG5cdFx0XCJBbWVyaWNhL0RlbnZlcnxOYXZham9cIixcblx0XHRcIkFtZXJpY2EvRGVudmVyfFVTL01vdW50YWluXCIsXG5cdFx0XCJBbWVyaWNhL0RldHJvaXR8VVMvTWljaGlnYW5cIixcblx0XHRcIkFtZXJpY2EvRWRtb250b258Q2FuYWRhL01vdW50YWluXCIsXG5cdFx0XCJBbWVyaWNhL0Vuc2VuYWRhfEFtZXJpY2EvVGlqdWFuYVwiLFxuXHRcdFwiQW1lcmljYS9FbnNlbmFkYXxNZXhpY28vQmFqYU5vcnRlXCIsXG5cdFx0XCJBbWVyaWNhL0ZvcnRfV2F5bmV8QW1lcmljYS9JbmRpYW5hL0luZGlhbmFwb2xpc1wiLFxuXHRcdFwiQW1lcmljYS9Gb3J0X1dheW5lfEFtZXJpY2EvSW5kaWFuYXBvbGlzXCIsXG5cdFx0XCJBbWVyaWNhL0ZvcnRfV2F5bmV8VVMvRWFzdC1JbmRpYW5hXCIsXG5cdFx0XCJBbWVyaWNhL0hhbGlmYXh8Q2FuYWRhL0F0bGFudGljXCIsXG5cdFx0XCJBbWVyaWNhL0hhdmFuYXxDdWJhXCIsXG5cdFx0XCJBbWVyaWNhL0luZGlhbmEvS25veHxBbWVyaWNhL0tub3hfSU5cIixcblx0XHRcIkFtZXJpY2EvSW5kaWFuYS9Lbm94fFVTL0luZGlhbmEtU3RhcmtlXCIsXG5cdFx0XCJBbWVyaWNhL0phbWFpY2F8SmFtYWljYVwiLFxuXHRcdFwiQW1lcmljYS9LZW50dWNreS9Mb3Vpc3ZpbGxlfEFtZXJpY2EvTG91aXN2aWxsZVwiLFxuXHRcdFwiQW1lcmljYS9Mb3NfQW5nZWxlc3xVUy9QYWNpZmljXCIsXG5cdFx0XCJBbWVyaWNhL0xvc19BbmdlbGVzfFVTL1BhY2lmaWMtTmV3XCIsXG5cdFx0XCJBbWVyaWNhL01hbmF1c3xCcmF6aWwvV2VzdFwiLFxuXHRcdFwiQW1lcmljYS9NYXphdGxhbnxNZXhpY28vQmFqYVN1clwiLFxuXHRcdFwiQW1lcmljYS9NZXhpY29fQ2l0eXxNZXhpY28vR2VuZXJhbFwiLFxuXHRcdFwiQW1lcmljYS9OZXdfWW9ya3xVUy9FYXN0ZXJuXCIsXG5cdFx0XCJBbWVyaWNhL05vcm9uaGF8QnJhemlsL0RlTm9yb25oYVwiLFxuXHRcdFwiQW1lcmljYS9QaG9lbml4fFVTL0FyaXpvbmFcIixcblx0XHRcIkFtZXJpY2EvUG9ydG9fQWNyZXxBbWVyaWNhL1Jpb19CcmFuY29cIixcblx0XHRcIkFtZXJpY2EvUG9ydG9fQWNyZXxCcmF6aWwvQWNyZVwiLFxuXHRcdFwiQW1lcmljYS9SZWdpbmF8Q2FuYWRhL0Vhc3QtU2Fza2F0Y2hld2FuXCIsXG5cdFx0XCJBbWVyaWNhL1JlZ2luYXxDYW5hZGEvU2Fza2F0Y2hld2FuXCIsXG5cdFx0XCJBbWVyaWNhL1NhbnRpYWdvfENoaWxlL0NvbnRpbmVudGFsXCIsXG5cdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xCcmF6aWwvRWFzdFwiLFxuXHRcdFwiQW1lcmljYS9TdF9Kb2huc3xDYW5hZGEvTmV3Zm91bmRsYW5kXCIsXG5cdFx0XCJBbWVyaWNhL1Rvcm9udG98Q2FuYWRhL0Vhc3Rlcm5cIixcblx0XHRcIkFtZXJpY2EvVmFuY291dmVyfENhbmFkYS9QYWNpZmljXCIsXG5cdFx0XCJBbWVyaWNhL1doaXRlaG9yc2V8Q2FuYWRhL1l1a29uXCIsXG5cdFx0XCJBbWVyaWNhL1dpbm5pcGVnfENhbmFkYS9DZW50cmFsXCIsXG5cdFx0XCJBbnRhcmN0aWNhL01jTXVyZG98QW50YXJjdGljYS9Tb3V0aF9Qb2xlXCIsXG5cdFx0XCJBbnRhcmN0aWNhL01jTXVyZG98TlpcIixcblx0XHRcIkFudGFyY3RpY2EvTWNNdXJkb3xQYWNpZmljL0F1Y2tsYW5kXCIsXG5cdFx0XCJBcmN0aWMvTG9uZ3llYXJieWVufEF0bGFudGljL0phbl9NYXllblwiLFxuXHRcdFwiQXJjdGljL0xvbmd5ZWFyYnllbnxFdXJvcGUvT3Nsb1wiLFxuXHRcdFwiQXNpYS9BZGVufEFzaWEvS3V3YWl0XCIsXG5cdFx0XCJBc2lhL0FkZW58QXNpYS9SaXlhZGhcIixcblx0XHRcIkFzaWEvQXNoZ2FiYXR8QXNpYS9Bc2hraGFiYWRcIixcblx0XHRcIkFzaWEvQmFocmFpbnxBc2lhL1FhdGFyXCIsXG5cdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9QaG5vbV9QZW5oXCIsXG5cdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9WaWVudGlhbmVcIixcblx0XHRcIkFzaWEvQ2FsY3V0dGF8QXNpYS9Lb2xrYXRhXCIsXG5cdFx0XCJBc2lhL0Nob25ncWluZ3xBc2lhL0NodW5na2luZ1wiLFxuXHRcdFwiQXNpYS9DaG9uZ3Fpbmd8QXNpYS9IYXJiaW5cIixcblx0XHRcIkFzaWEvQ2hvbmdxaW5nfEFzaWEvU2hhbmdoYWlcIixcblx0XHRcIkFzaWEvQ2hvbmdxaW5nfFBSQ1wiLFxuXHRcdFwiQXNpYS9EYWNjYXxBc2lhL0RoYWthXCIsXG5cdFx0XCJBc2lhL0R1YmFpfEFzaWEvTXVzY2F0XCIsXG5cdFx0XCJBc2lhL0hvX0NoaV9NaW5ofEFzaWEvU2FpZ29uXCIsXG5cdFx0XCJBc2lhL0hvbmdfS29uZ3xIb25na29uZ1wiLFxuXHRcdFwiQXNpYS9Jc3RhbmJ1bHxFdXJvcGUvSXN0YW5idWxcIixcblx0XHRcIkFzaWEvSXN0YW5idWx8VHVya2V5XCIsXG5cdFx0XCJBc2lhL0plcnVzYWxlbXxBc2lhL1RlbF9Bdml2XCIsXG5cdFx0XCJBc2lhL0plcnVzYWxlbXxJc3JhZWxcIixcblx0XHRcIkFzaWEvS2FzaGdhcnxBc2lhL1VydW1xaVwiLFxuXHRcdFwiQXNpYS9LYXRobWFuZHV8QXNpYS9LYXRtYW5kdVwiLFxuXHRcdFwiQXNpYS9NYWNhb3xBc2lhL01hY2F1XCIsXG5cdFx0XCJBc2lhL01ha2Fzc2FyfEFzaWEvVWp1bmdfUGFuZGFuZ1wiLFxuXHRcdFwiQXNpYS9OaWNvc2lhfEV1cm9wZS9OaWNvc2lhXCIsXG5cdFx0XCJBc2lhL1Nlb3VsfFJPS1wiLFxuXHRcdFwiQXNpYS9TaW5nYXBvcmV8U2luZ2Fwb3JlXCIsXG5cdFx0XCJBc2lhL1RhaXBlaXxST0NcIixcblx0XHRcIkFzaWEvVGVocmFufElyYW5cIixcblx0XHRcIkFzaWEvVGhpbWJ1fEFzaWEvVGhpbXBodVwiLFxuXHRcdFwiQXNpYS9Ub2t5b3xKYXBhblwiLFxuXHRcdFwiQXNpYS9VbGFhbmJhYXRhcnxBc2lhL1VsYW5fQmF0b3JcIixcblx0XHRcIkF0bGFudGljL0ZhZXJvZXxBdGxhbnRpYy9GYXJvZVwiLFxuXHRcdFwiQXRsYW50aWMvUmV5a2phdmlrfEljZWxhbmRcIixcblx0XHRcIkF1c3RyYWxpYS9BQ1R8QXVzdHJhbGlhL0NhbmJlcnJhXCIsXG5cdFx0XCJBdXN0cmFsaWEvQUNUfEF1c3RyYWxpYS9OU1dcIixcblx0XHRcIkF1c3RyYWxpYS9BQ1R8QXVzdHJhbGlhL1N5ZG5leVwiLFxuXHRcdFwiQXVzdHJhbGlhL0FkZWxhaWRlfEF1c3RyYWxpYS9Tb3V0aFwiLFxuXHRcdFwiQXVzdHJhbGlhL0JyaXNiYW5lfEF1c3RyYWxpYS9RdWVlbnNsYW5kXCIsXG5cdFx0XCJBdXN0cmFsaWEvQnJva2VuX0hpbGx8QXVzdHJhbGlhL1lhbmNvd2lubmFcIixcblx0XHRcIkF1c3RyYWxpYS9EYXJ3aW58QXVzdHJhbGlhL05vcnRoXCIsXG5cdFx0XCJBdXN0cmFsaWEvSG9iYXJ0fEF1c3RyYWxpYS9UYXNtYW5pYVwiLFxuXHRcdFwiQXVzdHJhbGlhL0xISXxBdXN0cmFsaWEvTG9yZF9Ib3dlXCIsXG5cdFx0XCJBdXN0cmFsaWEvTWVsYm91cm5lfEF1c3RyYWxpYS9WaWN0b3JpYVwiLFxuXHRcdFwiQXVzdHJhbGlhL1BlcnRofEF1c3RyYWxpYS9XZXN0XCIsXG5cdFx0XCJDaGlsZS9FYXN0ZXJJc2xhbmR8UGFjaWZpYy9FYXN0ZXJcIixcblx0XHRcIkVpcmV8RXVyb3BlL0R1YmxpblwiLFxuXHRcdFwiRXRjL0dNVCswfEV0Yy9HTVRcIixcblx0XHRcIkV0Yy9HTVQrMHxFdGMvR01ULTBcIixcblx0XHRcIkV0Yy9HTVQrMHxFdGMvR01UMFwiLFxuXHRcdFwiRXRjL0dNVCswfEV0Yy9HcmVlbndpY2hcIixcblx0XHRcIkV0Yy9HTVQrMHxHTVRcIixcblx0XHRcIkV0Yy9HTVQrMHxHTVQrMFwiLFxuXHRcdFwiRXRjL0dNVCswfEdNVC0wXCIsXG5cdFx0XCJFdGMvR01UKzB8R01UMFwiLFxuXHRcdFwiRXRjL0dNVCswfEdyZWVud2ljaFwiLFxuXHRcdFwiRXRjL1VDVHxVQ1RcIixcblx0XHRcIkV0Yy9VVEN8RXRjL1VuaXZlcnNhbFwiLFxuXHRcdFwiRXRjL1VUQ3xFdGMvWnVsdVwiLFxuXHRcdFwiRXRjL1VUQ3xVVENcIixcblx0XHRcIkV0Yy9VVEN8VW5pdmVyc2FsXCIsXG5cdFx0XCJFdGMvVVRDfFp1bHVcIixcblx0XHRcIkV1cm9wZS9CZWxmYXN0fEV1cm9wZS9HdWVybnNleVwiLFxuXHRcdFwiRXVyb3BlL0JlbGZhc3R8RXVyb3BlL0lzbGVfb2ZfTWFuXCIsXG5cdFx0XCJFdXJvcGUvQmVsZmFzdHxFdXJvcGUvSmVyc2V5XCIsXG5cdFx0XCJFdXJvcGUvQmVsZmFzdHxFdXJvcGUvTG9uZG9uXCIsXG5cdFx0XCJFdXJvcGUvQmVsZmFzdHxHQlwiLFxuXHRcdFwiRXVyb3BlL0JlbGZhc3R8R0ItRWlyZVwiLFxuXHRcdFwiRXVyb3BlL0JlbGdyYWRlfEV1cm9wZS9ManVibGphbmFcIixcblx0XHRcIkV1cm9wZS9CZWxncmFkZXxFdXJvcGUvUG9kZ29yaWNhXCIsXG5cdFx0XCJFdXJvcGUvQmVsZ3JhZGV8RXVyb3BlL1NhcmFqZXZvXCIsXG5cdFx0XCJFdXJvcGUvQmVsZ3JhZGV8RXVyb3BlL1Nrb3BqZVwiLFxuXHRcdFwiRXVyb3BlL0JlbGdyYWRlfEV1cm9wZS9aYWdyZWJcIixcblx0XHRcIkV1cm9wZS9CcmF0aXNsYXZhfEV1cm9wZS9QcmFndWVcIixcblx0XHRcIkV1cm9wZS9CdXNpbmdlbnxFdXJvcGUvVmFkdXpcIixcblx0XHRcIkV1cm9wZS9CdXNpbmdlbnxFdXJvcGUvWnVyaWNoXCIsXG5cdFx0XCJFdXJvcGUvQ2hpc2luYXV8RXVyb3BlL1RpcmFzcG9sXCIsXG5cdFx0XCJFdXJvcGUvSGVsc2lua2l8RXVyb3BlL01hcmllaGFtblwiLFxuXHRcdFwiRXVyb3BlL0xpc2JvbnxQb3J0dWdhbFwiLFxuXHRcdFwiRXVyb3BlL01vc2Nvd3xXLVNVXCIsXG5cdFx0XCJFdXJvcGUvUm9tZXxFdXJvcGUvU2FuX01hcmlub1wiLFxuXHRcdFwiRXVyb3BlL1JvbWV8RXVyb3BlL1ZhdGljYW5cIixcblx0XHRcIkV1cm9wZS9XYXJzYXd8UG9sYW5kXCIsXG5cdFx0XCJLd2FqYWxlaW58UGFjaWZpYy9Ld2FqYWxlaW5cIixcblx0XHRcIk5aLUNIQVR8UGFjaWZpYy9DaGF0aGFtXCIsXG5cdFx0XCJQYWNpZmljL0NodXVrfFBhY2lmaWMvVHJ1a1wiLFxuXHRcdFwiUGFjaWZpYy9DaHV1a3xQYWNpZmljL1lhcFwiLFxuXHRcdFwiUGFjaWZpYy9Ib25vbHVsdXxQYWNpZmljL0pvaG5zdG9uXCIsXG5cdFx0XCJQYWNpZmljL0hvbm9sdWx1fFVTL0hhd2FpaVwiLFxuXHRcdFwiUGFjaWZpYy9QYWdvX1BhZ298UGFjaWZpYy9TYW1vYVwiLFxuXHRcdFwiUGFjaWZpYy9QYWdvX1BhZ298VVMvU2Ftb2FcIixcblx0XHRcIlBhY2lmaWMvUG9obnBlaXxQYWNpZmljL1BvbmFwZVwiXG5cdF1cbn0iLCJ2YXIgbW9tZW50ID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9tb21lbnQtdGltZXpvbmVcIik7XG5tb21lbnQudHoubG9hZChyZXF1aXJlKCcuL2RhdGEvcGFja2VkL2xhdGVzdC5qc29uJykpO1xuIiwiLy8hIG1vbWVudC10aW1lem9uZS5qc1xuLy8hIHZlcnNpb24gOiAwLjMuMVxuLy8hIGF1dGhvciA6IFRpbSBXb29kXG4vLyEgbGljZW5zZSA6IE1JVFxuLy8hIGdpdGh1Yi5jb20vbW9tZW50L21vbWVudC10aW1lem9uZVxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0LypnbG9iYWwgZGVmaW5lKi9cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbJ21vbWVudCddLCBmYWN0b3J5KTsgICAgICAgICAgICAgICAgIC8vIEFNRFxuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdtb21lbnQnKSk7IC8vIE5vZGVcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KHJvb3QubW9tZW50KTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBCcm93c2VyXG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKG1vbWVudCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvLyBEbyBub3QgbG9hZCBtb21lbnQtdGltZXpvbmUgYSBzZWNvbmQgdGltZS5cblx0aWYgKG1vbWVudC50eiAhPT0gdW5kZWZpbmVkKSB7IHJldHVybiBtb21lbnQ7IH1cblxuXHR2YXIgVkVSU0lPTiA9IFwiMC4zLjFcIixcblx0XHR6b25lcyA9IHt9LFxuXHRcdGxpbmtzID0ge30sXG5cblx0XHRtb21lbnRWZXJzaW9uID0gbW9tZW50LnZlcnNpb24uc3BsaXQoJy4nKSxcblx0XHRtYWpvciA9ICttb21lbnRWZXJzaW9uWzBdLFxuXHRcdG1pbm9yID0gK21vbWVudFZlcnNpb25bMV07XG5cblx0Ly8gTW9tZW50LmpzIHZlcnNpb24gY2hlY2tcblx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA2KSkge1xuXHRcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuNi4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLiBTZWUgbW9tZW50anMuY29tJyk7XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0VW5wYWNraW5nXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRmdW5jdGlvbiBjaGFyQ29kZVRvSW50KGNoYXJDb2RlKSB7XG5cdFx0aWYgKGNoYXJDb2RlID4gOTYpIHtcblx0XHRcdHJldHVybiBjaGFyQ29kZSAtIDg3O1xuXHRcdH0gZWxzZSBpZiAoY2hhckNvZGUgPiA2NCkge1xuXHRcdFx0cmV0dXJuIGNoYXJDb2RlIC0gMjk7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFyQ29kZSAtIDQ4O1xuXHR9XG5cblx0ZnVuY3Rpb24gdW5wYWNrQmFzZTYwKHN0cmluZykge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdHBhcnRzID0gc3RyaW5nLnNwbGl0KCcuJyksXG5cdFx0XHR3aG9sZSA9IHBhcnRzWzBdLFxuXHRcdFx0ZnJhY3Rpb25hbCA9IHBhcnRzWzFdIHx8ICcnLFxuXHRcdFx0bXVsdGlwbGllciA9IDEsXG5cdFx0XHRudW0sXG5cdFx0XHRvdXQgPSAwLFxuXHRcdFx0c2lnbiA9IDE7XG5cblx0XHQvLyBoYW5kbGUgbmVnYXRpdmUgbnVtYmVyc1xuXHRcdGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDUpIHtcblx0XHRcdGkgPSAxO1xuXHRcdFx0c2lnbiA9IC0xO1xuXHRcdH1cblxuXHRcdC8vIGhhbmRsZSBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsXG5cdFx0Zm9yIChpOyBpIDwgd2hvbGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdG51bSA9IGNoYXJDb2RlVG9JbnQod2hvbGUuY2hhckNvZGVBdChpKSk7XG5cdFx0XHRvdXQgPSA2MCAqIG91dCArIG51bTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsXG5cdFx0Zm9yIChpID0gMDsgaSA8IGZyYWN0aW9uYWwubGVuZ3RoOyBpKyspIHtcblx0XHRcdG11bHRpcGxpZXIgPSBtdWx0aXBsaWVyIC8gNjA7XG5cdFx0XHRudW0gPSBjaGFyQ29kZVRvSW50KGZyYWN0aW9uYWwuY2hhckNvZGVBdChpKSk7XG5cdFx0XHRvdXQgKz0gbnVtICogbXVsdGlwbGllcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0ICogc2lnbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGFycmF5VG9JbnQgKGFycmF5KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXJyYXlbaV0gPSB1bnBhY2tCYXNlNjAoYXJyYXlbaV0pO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGludFRvVW50aWwgKGFycmF5LCBsZW5ndGgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcnJheVtpXSA9IE1hdGgucm91bmQoKGFycmF5W2kgLSAxXSB8fCAwKSArIChhcnJheVtpXSAqIDYwMDAwKSk7IC8vIG1pbnV0ZXMgdG8gbWlsbGlzZWNvbmRzXG5cdFx0fVxuXG5cdFx0YXJyYXlbbGVuZ3RoIC0gMV0gPSBJbmZpbml0eTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1hcEluZGljZXMgKHNvdXJjZSwgaW5kaWNlcykge1xuXHRcdHZhciBvdXQgPSBbXSwgaTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvdXRbaV0gPSBzb3VyY2VbaW5kaWNlc1tpXV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGZ1bmN0aW9uIHVucGFjayAoc3RyaW5nKSB7XG5cdFx0dmFyIGRhdGEgPSBzdHJpbmcuc3BsaXQoJ3wnKSxcblx0XHRcdG9mZnNldHMgPSBkYXRhWzJdLnNwbGl0KCcgJyksXG5cdFx0XHRpbmRpY2VzID0gZGF0YVszXS5zcGxpdCgnJyksXG5cdFx0XHR1bnRpbHMgID0gZGF0YVs0XS5zcGxpdCgnICcpO1xuXG5cdFx0YXJyYXlUb0ludChvZmZzZXRzKTtcblx0XHRhcnJheVRvSW50KGluZGljZXMpO1xuXHRcdGFycmF5VG9JbnQodW50aWxzKTtcblxuXHRcdGludFRvVW50aWwodW50aWxzLCBpbmRpY2VzLmxlbmd0aCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSAgICA6IGRhdGFbMF0sXG5cdFx0XHRhYmJycyAgIDogbWFwSW5kaWNlcyhkYXRhWzFdLnNwbGl0KCcgJyksIGluZGljZXMpLFxuXHRcdFx0b2Zmc2V0cyA6IG1hcEluZGljZXMob2Zmc2V0cywgaW5kaWNlcyksXG5cdFx0XHR1bnRpbHMgIDogdW50aWxzXG5cdFx0fTtcblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRab25lIG9iamVjdFxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gWm9uZSAocGFja2VkU3RyaW5nKSB7XG5cdFx0aWYgKHBhY2tlZFN0cmluZykge1xuXHRcdFx0dGhpcy5fc2V0KHVucGFjayhwYWNrZWRTdHJpbmcpKTtcblx0XHR9XG5cdH1cblxuXHRab25lLnByb3RvdHlwZSA9IHtcblx0XHRfc2V0IDogZnVuY3Rpb24gKHVucGFja2VkKSB7XG5cdFx0XHR0aGlzLm5hbWUgICAgPSB1bnBhY2tlZC5uYW1lO1xuXHRcdFx0dGhpcy5hYmJycyAgID0gdW5wYWNrZWQuYWJicnM7XG5cdFx0XHR0aGlzLnVudGlscyAgPSB1bnBhY2tlZC51bnRpbHM7XG5cdFx0XHR0aGlzLm9mZnNldHMgPSB1bnBhY2tlZC5vZmZzZXRzO1xuXHRcdH0sXG5cblx0XHRfaW5kZXggOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gK3RpbWVzdGFtcCxcblx0XHRcdFx0dW50aWxzID0gdGhpcy51bnRpbHMsXG5cdFx0XHRcdGk7XG5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCB1bnRpbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRhcmdldCA8IHVudGlsc1tpXSkge1xuXHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHBhcnNlIDogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuXHRcdFx0dmFyIHRhcmdldCAgPSArdGltZXN0YW1wLFxuXHRcdFx0XHRvZmZzZXRzID0gdGhpcy5vZmZzZXRzLFxuXHRcdFx0XHR1bnRpbHMgID0gdGhpcy51bnRpbHMsXG5cdFx0XHRcdG1heCAgICAgPSB1bnRpbHMubGVuZ3RoIC0gMSxcblx0XHRcdFx0b2Zmc2V0LCBvZmZzZXROZXh0LCBvZmZzZXRQcmV2LCBpO1xuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcblx0XHRcdFx0b2Zmc2V0ICAgICA9IG9mZnNldHNbaV07XG5cdFx0XHRcdG9mZnNldE5leHQgPSBvZmZzZXRzW2kgKyAxXTtcblx0XHRcdFx0b2Zmc2V0UHJldiA9IG9mZnNldHNbaSA/IGkgLSAxIDogaV07XG5cblx0XHRcdFx0aWYgKG9mZnNldCA8IG9mZnNldE5leHQgJiYgdHoubW92ZUFtYmlndW91c0ZvcndhcmQpIHtcblx0XHRcdFx0XHRvZmZzZXQgPSBvZmZzZXROZXh0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKG9mZnNldCA+IG9mZnNldFByZXYgJiYgdHoubW92ZUludmFsaWRGb3J3YXJkKSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0UHJldjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0YXJnZXQgPCB1bnRpbHNbaV0gLSAob2Zmc2V0ICogNjAwMDApKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9mZnNldHNbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9mZnNldHNbbWF4XTtcblx0XHR9LFxuXG5cdFx0YWJiciA6IGZ1bmN0aW9uIChtb20pIHtcblx0XHRcdHJldHVybiB0aGlzLmFiYnJzW3RoaXMuX2luZGV4KG1vbSldO1xuXHRcdH0sXG5cblx0XHRvZmZzZXQgOiBmdW5jdGlvbiAobW9tKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vZmZzZXRzW3RoaXMuX2luZGV4KG1vbSldO1xuXHRcdH1cblx0fTtcblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0R2xvYmFsIE1ldGhvZHNcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUgKG5hbWUpIHtcblx0XHRyZXR1cm4gKG5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwvL2csICdfJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRab25lIChwYWNrZWQpIHtcblx0XHR2YXIgaSwgem9uZSwgem9uZU5hbWU7XG5cblx0XHRpZiAodHlwZW9mIHBhY2tlZCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cGFja2VkID0gW3BhY2tlZF07XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHBhY2tlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0em9uZSA9IG5ldyBab25lKHBhY2tlZFtpXSk7XG5cdFx0XHR6b25lTmFtZSA9IG5vcm1hbGl6ZU5hbWUoem9uZS5uYW1lKTtcblx0XHRcdHpvbmVzW3pvbmVOYW1lXSA9IHpvbmU7XG5cdFx0XHR1cGdyYWRlTGlua3NUb1pvbmVzKHpvbmVOYW1lKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab25lIChuYW1lKSB7XG5cdFx0cmV0dXJuIHpvbmVzW25vcm1hbGl6ZU5hbWUobmFtZSldIHx8IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROYW1lcyAoKSB7XG5cdFx0dmFyIGksIG91dCA9IFtdO1xuXG5cdFx0Zm9yIChpIGluIHpvbmVzKSB7XG5cdFx0XHRpZiAoem9uZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgem9uZXNbaV0pIHtcblx0XHRcdFx0b3V0LnB1c2goem9uZXNbaV0ubmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dC5zb3J0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRMaW5rIChhbGlhc2VzKSB7XG5cdFx0dmFyIGksIGFsaWFzO1xuXG5cdFx0aWYgKHR5cGVvZiBhbGlhc2VzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRhbGlhc2VzID0gW2FsaWFzZXNdO1xuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBhbGlhc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhbGlhcyA9IGFsaWFzZXNbaV0uc3BsaXQoJ3wnKTtcblx0XHRcdHB1c2hMaW5rKGFsaWFzWzBdLCBhbGlhc1sxXSk7XG5cdFx0XHRwdXNoTGluayhhbGlhc1sxXSwgYWxpYXNbMF0pO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHVwZ3JhZGVMaW5rc1RvWm9uZXMgKHpvbmVOYW1lKSB7XG5cdFx0aWYgKCFsaW5rc1t6b25lTmFtZV0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaSxcblx0XHRcdHpvbmUgPSB6b25lc1t6b25lTmFtZV0sXG5cdFx0XHRsaW5rTmFtZXMgPSBsaW5rc1t6b25lTmFtZV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGlua05hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb3B5Wm9uZVdpdGhOYW1lKHpvbmUsIGxpbmtOYW1lc1tpXSk7XG5cdFx0fVxuXG5cdFx0bGlua3Nbem9uZU5hbWVdID0gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvcHlab25lV2l0aE5hbWUgKHpvbmUsIG5hbWUpIHtcblx0XHR2YXIgbGlua1pvbmUgPSB6b25lc1tub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5ldyBab25lKCk7XG5cdFx0bGlua1pvbmUuX3NldCh6b25lKTtcblx0XHRsaW5rWm9uZS5uYW1lID0gbmFtZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHB1c2hMaW5rICh6b25lTmFtZSwgbGlua05hbWUpIHtcblx0XHR6b25lTmFtZSA9IG5vcm1hbGl6ZU5hbWUoem9uZU5hbWUpO1xuXG5cdFx0aWYgKHpvbmVzW3pvbmVOYW1lXSkge1xuXHRcdFx0Y29weVpvbmVXaXRoTmFtZSh6b25lc1t6b25lTmFtZV0sIGxpbmtOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGlua3Nbem9uZU5hbWVdID0gbGlua3Nbem9uZU5hbWVdIHx8IFtdO1xuXHRcdFx0bGlua3Nbem9uZU5hbWVdLnB1c2gobGlua05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWREYXRhIChkYXRhKSB7XG5cdFx0YWRkWm9uZShkYXRhLnpvbmVzKTtcblx0XHRhZGRMaW5rKGRhdGEubGlua3MpO1xuXHRcdHR6LmRhdGFWZXJzaW9uID0gZGF0YS52ZXJzaW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gem9uZUV4aXN0cyAobmFtZSkge1xuXHRcdGlmICghem9uZUV4aXN0cy5kaWRTaG93RXJyb3IpIHtcblx0XHRcdHpvbmVFeGlzdHMuZGlkU2hvd0Vycm9yID0gdHJ1ZTtcblx0XHRcdFx0bG9nRXJyb3IoXCJtb21lbnQudHouem9uZUV4aXN0cygnXCIgKyBuYW1lICsgXCInKSBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mICFtb21lbnQudHouem9uZSgnXCIgKyBuYW1lICsgXCInKVwiKTtcblx0XHR9XG5cdFx0cmV0dXJuICEhZ2V0Wm9uZShuYW1lKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG5lZWRzT2Zmc2V0IChtKSB7XG5cdFx0cmV0dXJuICEhKG0uX2EgJiYgKG0uX3R6bSA9PT0gdW5kZWZpbmVkKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBsb2dFcnJvciAobWVzc2FnZSkge1xuXHRcdGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdG1vbWVudC50eiBuYW1lc3BhY2Vcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIHR6IChpbnB1dCkge1xuXHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCAtMSksXG5cdFx0XHRuYW1lID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSxcblx0XHRcdHpvbmUgPSBnZXRab25lKG5hbWUpLFxuXHRcdFx0b3V0ICA9IG1vbWVudC51dGMuYXBwbHkobnVsbCwgYXJncyk7XG5cblx0XHRpZiAoem9uZSAmJiAhbW9tZW50LmlzTW9tZW50KGlucHV0KSAmJiBuZWVkc09mZnNldChvdXQpKSB7XG5cdFx0XHRvdXQuYWRkKHpvbmUucGFyc2Uob3V0KSwgJ21pbnV0ZXMnKTtcblx0XHR9XG5cblx0XHRvdXQudHoobmFtZSk7XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblx0dHoudmVyc2lvbiAgICAgID0gVkVSU0lPTjtcblx0dHouZGF0YVZlcnNpb24gID0gJyc7XG5cdHR6Ll96b25lcyAgICAgICA9IHpvbmVzO1xuXHR0ei5fbGlua3MgICAgICAgPSBsaW5rcztcblx0dHouYWRkICAgICAgICAgID0gYWRkWm9uZTtcblx0dHoubGluayAgICAgICAgID0gYWRkTGluaztcblx0dHoubG9hZCAgICAgICAgID0gbG9hZERhdGE7XG5cdHR6LnpvbmUgICAgICAgICA9IGdldFpvbmU7XG5cdHR6LnpvbmVFeGlzdHMgICA9IHpvbmVFeGlzdHM7IC8vIGRlcHJlY2F0ZWQgaW4gMC4xLjBcblx0dHoubmFtZXMgICAgICAgID0gZ2V0TmFtZXM7XG5cdHR6LlpvbmUgICAgICAgICA9IFpvbmU7XG5cdHR6LnVucGFjayAgICAgICA9IHVucGFjaztcblx0dHoudW5wYWNrQmFzZTYwID0gdW5wYWNrQmFzZTYwO1xuXHR0ei5uZWVkc09mZnNldCAgPSBuZWVkc09mZnNldDtcblx0dHoubW92ZUludmFsaWRGb3J3YXJkICAgPSB0cnVlO1xuXHR0ei5tb3ZlQW1iaWd1b3VzRm9yd2FyZCA9IGZhbHNlO1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRJbnRlcmZhY2Ugd2l0aCBNb21lbnQuanNcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdHZhciBmbiA9IG1vbWVudC5mbjtcblxuXHRtb21lbnQudHogPSB0ejtcblxuXHRtb21lbnQuZGVmYXVsdFpvbmUgPSBudWxsO1xuXG5cdG1vbWVudC51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAobW9tLCBrZWVwVGltZSkge1xuXHRcdHZhciBvZmZzZXQ7XG5cdFx0aWYgKG1vbS5feiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRtb20uX3ogPSBtb21lbnQuZGVmYXVsdFpvbmU7XG5cdFx0fVxuXHRcdGlmIChtb20uX3opIHtcblx0XHRcdG9mZnNldCA9IG1vbS5fei5vZmZzZXQobW9tKTtcblx0XHRcdGlmIChNYXRoLmFicyhvZmZzZXQpIDwgMTYpIHtcblx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0IC8gNjA7XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9tLnV0Y09mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG1vbS51dGNPZmZzZXQoLW9mZnNldCwga2VlcFRpbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bW9tLnpvbmUob2Zmc2V0LCBrZWVwVGltZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGZuLnR6ID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0dGhpcy5feiA9IGdldFpvbmUobmFtZSk7XG5cdFx0XHRpZiAodGhpcy5feikge1xuXHRcdFx0XHRtb21lbnQudXBkYXRlT2Zmc2V0KHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nRXJyb3IoXCJNb21lbnQgVGltZXpvbmUgaGFzIG5vIGRhdGEgZm9yIFwiICsgbmFtZSArIFwiLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS90aW1lem9uZS9kb2NzLyMvZGF0YS1sb2FkaW5nLy5cIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3oubmFtZTsgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGFiYnJXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3ouYWJicih0aGlzKTsgfVxuXHRcdFx0cmV0dXJuIG9sZC5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiByZXNldFpvbmVXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5feiA9IG51bGw7XG5cdFx0XHRyZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fVxuXG5cdGZuLnpvbmVOYW1lID0gYWJicldyYXAoZm4uem9uZU5hbWUpO1xuXHRmbi56b25lQWJiciA9IGFiYnJXcmFwKGZuLnpvbmVBYmJyKTtcblx0Zm4udXRjICAgICAgPSByZXNldFpvbmVXcmFwKGZuLnV0Yyk7XG5cblx0bW9tZW50LnR6LnNldERlZmF1bHQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA5KSkge1xuXHRcdFx0bG9nRXJyb3IoJ01vbWVudCBUaW1lem9uZSBzZXREZWZhdWx0KCkgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuOS4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLicpO1xuXHRcdH1cblx0XHRtb21lbnQuZGVmYXVsdFpvbmUgPSBuYW1lID8gZ2V0Wm9uZShuYW1lKSA6IG51bGw7XG5cdFx0cmV0dXJuIG1vbWVudDtcblx0fTtcblxuXHQvLyBDbG9uaW5nIGEgbW9tZW50IHNob3VsZCBpbmNsdWRlIHRoZSBfeiBwcm9wZXJ0eS5cblx0dmFyIG1vbWVudFByb3BlcnRpZXMgPSBtb21lbnQubW9tZW50UHJvcGVydGllcztcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb21lbnRQcm9wZXJ0aWVzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRcdC8vIG1vbWVudCAyLjguMStcblx0XHRtb21lbnRQcm9wZXJ0aWVzLnB1c2goJ196Jyk7XG5cdFx0bW9tZW50UHJvcGVydGllcy5wdXNoKCdfYScpO1xuXHR9IGVsc2UgaWYgKG1vbWVudFByb3BlcnRpZXMpIHtcblx0XHQvLyBtb21lbnQgMi43LjBcblx0XHRtb21lbnRQcm9wZXJ0aWVzLl96ID0gbnVsbDtcblx0fVxuXG5cdC8vIElOSkVDVCBEQVRBXG5cblx0cmV0dXJuIG1vbWVudDtcbn0pKTtcbiIsIi8vISBtb21lbnQuanNcbi8vISB2ZXJzaW9uIDogMi45LjBcbi8vISBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXG4vLyEgbGljZW5zZSA6IE1JVFxuLy8hIG1vbWVudGpzLmNvbVxuXG4oZnVuY3Rpb24gKHVuZGVmaW5lZCkge1xuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgQ29uc3RhbnRzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgdmFyIG1vbWVudCxcbiAgICAgICAgVkVSU0lPTiA9ICcyLjkuMCcsXG4gICAgICAgIC8vIHRoZSBnbG9iYWwtc2NvcGUgdGhpcyBpcyBOT1QgdGhlIGdsb2JhbCBvYmplY3QgaW4gTm9kZS5qc1xuICAgICAgICBnbG9iYWxTY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgd2luZG93ID09PSBnbG9iYWwud2luZG93KSkgPyBnbG9iYWwgOiB0aGlzLFxuICAgICAgICBvbGRHbG9iYWxNb21lbnQsXG4gICAgICAgIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICAgICAgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgICAgICBpLFxuXG4gICAgICAgIFlFQVIgPSAwLFxuICAgICAgICBNT05USCA9IDEsXG4gICAgICAgIERBVEUgPSAyLFxuICAgICAgICBIT1VSID0gMyxcbiAgICAgICAgTUlOVVRFID0gNCxcbiAgICAgICAgU0VDT05EID0gNSxcbiAgICAgICAgTUlMTElTRUNPTkQgPSA2LFxuXG4gICAgICAgIC8vIGludGVybmFsIHN0b3JhZ2UgZm9yIGxvY2FsZSBjb25maWcgZmlsZXNcbiAgICAgICAgbG9jYWxlcyA9IHt9LFxuXG4gICAgICAgIC8vIGV4dHJhIG1vbWVudCBpbnRlcm5hbCBwcm9wZXJ0aWVzIChwbHVnaW5zIHJlZ2lzdGVyIHByb3BzIGhlcmUpXG4gICAgICAgIG1vbWVudFByb3BlcnRpZXMgPSBbXSxcblxuICAgICAgICAvLyBjaGVjayBmb3Igbm9kZUpTXG4gICAgICAgIGhhc01vZHVsZSA9ICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpLFxuXG4gICAgICAgIC8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxuICAgICAgICBhc3BOZXRKc29uUmVnZXggPSAvXlxcLz9EYXRlXFwoKFxcLT9cXGQrKS9pLFxuICAgICAgICBhc3BOZXRUaW1lU3Bhbkpzb25SZWdleCA9IC8oXFwtKT8oPzooXFxkKilcXC4pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKVxcLj8oXFxkezN9KT8pPy8sXG5cbiAgICAgICAgLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbiAgICAgICAgLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuICAgICAgICBpc29EdXJhdGlvblJlZ2V4ID0gL14oLSk/UCg/Oig/OihbMC05LC5dKilZKT8oPzooWzAtOSwuXSopTSk/KD86KFswLTksLl0qKUQpPyg/OlQoPzooWzAtOSwuXSopSCk/KD86KFswLTksLl0qKU0pPyg/OihbMC05LC5dKilTKT8pP3woWzAtOSwuXSopVykkLyxcblxuICAgICAgICAvLyBmb3JtYXQgdG9rZW5zXG4gICAgICAgIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw0fXx4fFh8eno/fFpaP3wuKS9nLFxuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nLFxuXG4gICAgICAgIC8vIHBhcnNpbmcgdG9rZW4gcmVnZXhlc1xuICAgICAgICBwYXJzZVRva2VuT25lT3JUd29EaWdpdHMgPSAvXFxkXFxkPy8sIC8vIDAgLSA5OVxuICAgICAgICBwYXJzZVRva2VuT25lVG9UaHJlZURpZ2l0cyA9IC9cXGR7MSwzfS8sIC8vIDAgLSA5OTlcbiAgICAgICAgcGFyc2VUb2tlbk9uZVRvRm91ckRpZ2l0cyA9IC9cXGR7MSw0fS8sIC8vIDAgLSA5OTk5XG4gICAgICAgIHBhcnNlVG9rZW5PbmVUb1NpeERpZ2l0cyA9IC9bK1xcLV0/XFxkezEsNn0vLCAvLyAtOTk5LDk5OSAtIDk5OSw5OTlcbiAgICAgICAgcGFyc2VUb2tlbkRpZ2l0cyA9IC9cXGQrLywgLy8gbm9uemVybyBudW1iZXIgb2YgZGlnaXRzXG4gICAgICAgIHBhcnNlVG9rZW5Xb3JkID0gL1swLTldKlsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSt8W1xcdTA2MDAtXFx1MDZGRlxcL10rKFxccyo/W1xcdTA2MDAtXFx1MDZGRl0rKXsxLDJ9L2ksIC8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuICAgICAgICBwYXJzZVRva2VuVGltZXpvbmUgPSAvWnxbXFwrXFwtXVxcZFxcZDo/XFxkXFxkL2dpLCAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbiAgICAgICAgcGFyc2VUb2tlblQgPSAvVC9pLCAvLyBUIChJU08gc2VwYXJhdG9yKVxuICAgICAgICBwYXJzZVRva2VuT2Zmc2V0TXMgPSAvW1xcK1xcLV0/XFxkKy8sIC8vIDEyMzQ1Njc4OTAxMjNcbiAgICAgICAgcGFyc2VUb2tlblRpbWVzdGFtcE1zID0gL1tcXCtcXC1dP1xcZCsoXFwuXFxkezEsM30pPy8sIC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG5cbiAgICAgICAgLy9zdHJpY3QgcGFyc2luZyByZWdleGVzXG4gICAgICAgIHBhcnNlVG9rZW5PbmVEaWdpdCA9IC9cXGQvLCAvLyAwIC0gOVxuICAgICAgICBwYXJzZVRva2VuVHdvRGlnaXRzID0gL1xcZFxcZC8sIC8vIDAwIC0gOTlcbiAgICAgICAgcGFyc2VUb2tlblRocmVlRGlnaXRzID0gL1xcZHszfS8sIC8vIDAwMCAtIDk5OVxuICAgICAgICBwYXJzZVRva2VuRm91ckRpZ2l0cyA9IC9cXGR7NH0vLCAvLyAwMDAwIC0gOTk5OVxuICAgICAgICBwYXJzZVRva2VuU2l4RGlnaXRzID0gL1srLV0/XFxkezZ9LywgLy8gLTk5OSw5OTkgLSA5OTksOTk5XG4gICAgICAgIHBhcnNlVG9rZW5TaWduZWROdW1iZXIgPSAvWystXT9cXGQrLywgLy8gLWluZiAtIGluZlxuXG4gICAgICAgIC8vIGlzbyA4NjAxIHJlZ2V4XG4gICAgICAgIC8vIDAwMDAtMDAtMDAgMDAwMC1XMDAgb3IgMDAwMC1XMDAtMCArIFQgKyAwMCBvciAwMDowMCBvciAwMDowMDowMCBvciAwMDowMDowMC4wMDAgKyArMDA6MDAgb3IgKzAwMDAgb3IgKzAwKVxuICAgICAgICBpc29SZWdleCA9IC9eXFxzKig/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzooXFxkXFxkLVxcZFxcZCl8KFdcXGRcXGQkKXwoV1xcZFxcZC1cXGQpfChcXGRcXGRcXGQpKSgoVHwgKShcXGRcXGQoOlxcZFxcZCg6XFxkXFxkKFxcLlxcZCspPyk/KT8pPyhbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC8sXG5cbiAgICAgICAgaXNvRm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJyxcblxuICAgICAgICBpc29EYXRlcyA9IFtcbiAgICAgICAgICAgIFsnWVlZWVlZLU1NLUREJywgL1srLV1cXGR7Nn0tXFxkezJ9LVxcZHsyfS9dLFxuICAgICAgICAgICAgWydZWVlZLU1NLUREJywgL1xcZHs0fS1cXGR7Mn0tXFxkezJ9L10sXG4gICAgICAgICAgICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZHsyfS1cXGQvXSxcbiAgICAgICAgICAgIFsnR0dHRy1bV11XVycsIC9cXGR7NH0tV1xcZHsyfS9dLFxuICAgICAgICAgICAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9L11cbiAgICAgICAgXSxcblxuICAgICAgICAvLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG4gICAgICAgIGlzb1RpbWVzID0gW1xuICAgICAgICAgICAgWydISDptbTpzcy5TU1NTJywgLyhUfCApXFxkXFxkOlxcZFxcZDpcXGRcXGRcXC5cXGQrL10sXG4gICAgICAgICAgICBbJ0hIOm1tOnNzJywgLyhUfCApXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcbiAgICAgICAgICAgIFsnSEg6bW0nLCAvKFR8IClcXGRcXGQ6XFxkXFxkL10sXG4gICAgICAgICAgICBbJ0hIJywgLyhUfCApXFxkXFxkL11cbiAgICAgICAgXSxcblxuICAgICAgICAvLyB0aW1lem9uZSBjaHVua2VyICcrMTA6MDAnID4gWycxMCcsICcwMCddIG9yICctMTUzMCcgPiBbJy0nLCAnMTUnLCAnMzAnXVxuICAgICAgICBwYXJzZVRpbWV6b25lQ2h1bmtlciA9IC8oW1xcK1xcLV18XFxkXFxkKS9naSxcblxuICAgICAgICAvLyBnZXR0ZXIgYW5kIHNldHRlciBuYW1lc1xuICAgICAgICBwcm94eUdldHRlcnNBbmRTZXR0ZXJzID0gJ0RhdGV8SG91cnN8TWludXRlc3xTZWNvbmRzfE1pbGxpc2Vjb25kcycuc3BsaXQoJ3wnKSxcbiAgICAgICAgdW5pdE1pbGxpc2Vjb25kRmFjdG9ycyA9IHtcbiAgICAgICAgICAgICdNaWxsaXNlY29uZHMnIDogMSxcbiAgICAgICAgICAgICdTZWNvbmRzJyA6IDFlMyxcbiAgICAgICAgICAgICdNaW51dGVzJyA6IDZlNCxcbiAgICAgICAgICAgICdIb3VycycgOiAzNmU1LFxuICAgICAgICAgICAgJ0RheXMnIDogODY0ZTUsXG4gICAgICAgICAgICAnTW9udGhzJyA6IDI1OTJlNixcbiAgICAgICAgICAgICdZZWFycycgOiAzMTUzNmU2XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5pdEFsaWFzZXMgPSB7XG4gICAgICAgICAgICBtcyA6ICdtaWxsaXNlY29uZCcsXG4gICAgICAgICAgICBzIDogJ3NlY29uZCcsXG4gICAgICAgICAgICBtIDogJ21pbnV0ZScsXG4gICAgICAgICAgICBoIDogJ2hvdXInLFxuICAgICAgICAgICAgZCA6ICdkYXknLFxuICAgICAgICAgICAgRCA6ICdkYXRlJyxcbiAgICAgICAgICAgIHcgOiAnd2VlaycsXG4gICAgICAgICAgICBXIDogJ2lzb1dlZWsnLFxuICAgICAgICAgICAgTSA6ICdtb250aCcsXG4gICAgICAgICAgICBRIDogJ3F1YXJ0ZXInLFxuICAgICAgICAgICAgeSA6ICd5ZWFyJyxcbiAgICAgICAgICAgIERERCA6ICdkYXlPZlllYXInLFxuICAgICAgICAgICAgZSA6ICd3ZWVrZGF5JyxcbiAgICAgICAgICAgIEUgOiAnaXNvV2Vla2RheScsXG4gICAgICAgICAgICBnZzogJ3dlZWtZZWFyJyxcbiAgICAgICAgICAgIEdHOiAnaXNvV2Vla1llYXInXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FtZWxGdW5jdGlvbnMgPSB7XG4gICAgICAgICAgICBkYXlvZnllYXIgOiAnZGF5T2ZZZWFyJyxcbiAgICAgICAgICAgIGlzb3dlZWtkYXkgOiAnaXNvV2Vla2RheScsXG4gICAgICAgICAgICBpc293ZWVrIDogJ2lzb1dlZWsnLFxuICAgICAgICAgICAgd2Vla3llYXIgOiAnd2Vla1llYXInLFxuICAgICAgICAgICAgaXNvd2Vla3llYXIgOiAnaXNvV2Vla1llYXInXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZm9ybWF0IGZ1bmN0aW9uIHN0cmluZ3NcbiAgICAgICAgZm9ybWF0RnVuY3Rpb25zID0ge30sXG5cbiAgICAgICAgLy8gZGVmYXVsdCByZWxhdGl2ZSB0aW1lIHRocmVzaG9sZHNcbiAgICAgICAgcmVsYXRpdmVUaW1lVGhyZXNob2xkcyA9IHtcbiAgICAgICAgICAgIHM6IDQ1LCAgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgICAgICAgICAgIG06IDQ1LCAgLy8gbWludXRlcyB0byBob3VyXG4gICAgICAgICAgICBoOiAyMiwgIC8vIGhvdXJzIHRvIGRheVxuICAgICAgICAgICAgZDogMjYsICAvLyBkYXlzIHRvIG1vbnRoXG4gICAgICAgICAgICBNOiAxMSAgIC8vIG1vbnRocyB0byB5ZWFyXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gdG9rZW5zIHRvIG9yZGluYWxpemUgYW5kIHBhZFxuICAgICAgICBvcmRpbmFsaXplVG9rZW5zID0gJ0RERCB3IFcgTSBEIGQnLnNwbGl0KCcgJyksXG4gICAgICAgIHBhZGRlZFRva2VucyA9ICdNIEQgSCBoIG0gcyB3IFcnLnNwbGl0KCcgJyksXG5cbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7XG4gICAgICAgICAgICBNICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE1NTSAgOiBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KHRoaXMsIGZvcm1hdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTU1NTSA6IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRCAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgREREICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXlPZlllYXIoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRheSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRkICAgOiBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGRkICA6IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRkZGQgOiBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzKHRoaXMsIGZvcm1hdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdyAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53ZWVrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVyAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgWVkgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMueWVhcigpICUgMTAwLCAyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBZWVlZIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy55ZWFyKCksIDQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFlZWVlZIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy55ZWFyKCksIDUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFlZWVlZWSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMueWVhcigpLCBzaWduID0geSA+PSAwID8gJysnIDogJy0nO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaWduICsgbGVmdFplcm9GaWxsKE1hdGguYWJzKHkpLCA2KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZyAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy53ZWVrWWVhcigpICUgMTAwLCAyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZ2dnIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy53ZWVrWWVhcigpLCA0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZ2dnZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMud2Vla1llYXIoKSwgNSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgR0cgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMCwgMik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgR0dHRyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMuaXNvV2Vla1llYXIoKSwgNCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgR0dHR0cgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLmlzb1dlZWtZZWFyKCksIDUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2Vla2RheSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla2RheSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGEgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKHRoaXMuaG91cnMoKSwgdGhpcy5taW51dGVzKCksIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEEgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKHRoaXMuaG91cnMoKSwgdGhpcy5taW51dGVzKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBIICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdXJzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaCAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbSAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5taW51dGVzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcyAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUyAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9JbnQodGhpcy5taWxsaXNlY29uZHMoKSAvIDEwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU1MgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRvSW50KHRoaXMubWlsbGlzZWNvbmRzKCkgLyAxMCksIDIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFNTUyAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLm1pbGxpc2Vjb25kcygpLCAzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTU1NTIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy5taWxsaXNlY29uZHMoKSwgMyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgWiAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMudXRjT2Zmc2V0KCksXG4gICAgICAgICAgICAgICAgICAgIGIgPSAnKyc7XG4gICAgICAgICAgICAgICAgaWYgKGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSAtYTtcbiAgICAgICAgICAgICAgICAgICAgYiA9ICctJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBsZWZ0WmVyb0ZpbGwodG9JbnQoYSAvIDYwKSwgMikgKyAnOicgKyBsZWZ0WmVyb0ZpbGwodG9JbnQoYSkgJSA2MCwgMik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgWlogICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMudXRjT2Zmc2V0KCksXG4gICAgICAgICAgICAgICAgICAgIGIgPSAnKyc7XG4gICAgICAgICAgICAgICAgaWYgKGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSAtYTtcbiAgICAgICAgICAgICAgICAgICAgYiA9ICctJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBsZWZ0WmVyb0ZpbGwodG9JbnQoYSAvIDYwKSwgMikgKyBsZWZ0WmVyb0ZpbGwodG9JbnQoYSkgJSA2MCwgMik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeiA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy56b25lQWJicigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHp6IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeCAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgWCAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51bml4KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWFydGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVwcmVjYXRpb25zID0ge30sXG5cbiAgICAgICAgbGlzdHMgPSBbJ21vbnRocycsICdtb250aHNTaG9ydCcsICd3ZWVrZGF5cycsICd3ZWVrZGF5c1Nob3J0JywgJ3dlZWtkYXlzTWluJ10sXG5cbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLiBkZmwgY29tZXMgZnJvbVxuICAgIC8vIGRlZmF1bHQuXG4gICAgZnVuY3Rpb24gZGZsKGEsIGIsIGMpIHtcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBhICE9IG51bGwgPyBhIDogYjtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIGEgIT0gbnVsbCA/IGEgOiBiICE9IG51bGwgPyBiIDogYztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignSW1wbGVtZW50IG1lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNPd25Qcm9wKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LCBhbmQgZXM1IHN0YW5kYXJkIGlzIG5vdCB2ZXJ5XG4gICAgICAgIC8vIGhlbHBmdWwuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbXB0eSA6IGZhbHNlLFxuICAgICAgICAgICAgdW51c2VkVG9rZW5zIDogW10sXG4gICAgICAgICAgICB1bnVzZWRJbnB1dCA6IFtdLFxuICAgICAgICAgICAgb3ZlcmZsb3cgOiAtMixcbiAgICAgICAgICAgIGNoYXJzTGVmdE92ZXIgOiAwLFxuICAgICAgICAgICAgbnVsbElucHV0IDogZmFsc2UsXG4gICAgICAgICAgICBpbnZhbGlkTW9udGggOiBudWxsLFxuICAgICAgICAgICAgaW52YWxpZEZvcm1hdCA6IGZhbHNlLFxuICAgICAgICAgICAgdXNlckludmFsaWRhdGVkIDogZmFsc2UsXG4gICAgICAgICAgICBpc286IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJpbnRNc2cobXNnKSB7XG4gICAgICAgIGlmIChtb21lbnQuc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRGVwcmVjYXRpb24gd2FybmluZzogJyArIG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXByZWNhdGUobXNnLCBmbikge1xuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRNc2cobXNnKTtcbiAgICAgICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBmbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVwcmVjYXRlU2ltcGxlKG5hbWUsIG1zZykge1xuICAgICAgICBpZiAoIWRlcHJlY2F0aW9uc1tuYW1lXSkge1xuICAgICAgICAgICAgcHJpbnRNc2cobXNnKTtcbiAgICAgICAgICAgIGRlcHJlY2F0aW9uc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYWRUb2tlbihmdW5jLCBjb3VudCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwoZnVuYy5jYWxsKHRoaXMsIGEpLCBjb3VudCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9yZGluYWxpemVUb2tlbihmdW5jLCBwZXJpb2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChmdW5jLmNhbGwodGhpcywgYSksIHBlcmlvZCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9udGhEaWZmKGEsIGIpIHtcbiAgICAgICAgLy8gZGlmZmVyZW5jZSBpbiBtb250aHNcbiAgICAgICAgdmFyIHdob2xlTW9udGhEaWZmID0gKChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyKSArIChiLm1vbnRoKCkgLSBhLm1vbnRoKCkpLFxuICAgICAgICAgICAgLy8gYiBpcyBpbiAoYW5jaG9yIC0gMSBtb250aCwgYW5jaG9yICsgMSBtb250aClcbiAgICAgICAgICAgIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsICdtb250aHMnKSxcbiAgICAgICAgICAgIGFuY2hvcjIsIGFkanVzdDtcblxuICAgICAgICBpZiAoYiAtIGFuY2hvciA8IDApIHtcbiAgICAgICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmIC0gMSwgJ21vbnRocycpO1xuICAgICAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IgLSBhbmNob3IyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmICsgMSwgJ21vbnRocycpO1xuICAgICAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IyIC0gYW5jaG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtKHdob2xlTW9udGhEaWZmICsgYWRqdXN0KTtcbiAgICB9XG5cbiAgICB3aGlsZSAob3JkaW5hbGl6ZVRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgaSA9IG9yZGluYWxpemVUb2tlbnMucG9wKCk7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW2kgKyAnbyddID0gb3JkaW5hbGl6ZVRva2VuKGZvcm1hdFRva2VuRnVuY3Rpb25zW2ldLCBpKTtcbiAgICB9XG4gICAgd2hpbGUgKHBhZGRlZFRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgaSA9IHBhZGRlZFRva2Vucy5wb3AoKTtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbaSArIGldID0gcGFkVG9rZW4oZm9ybWF0VG9rZW5GdW5jdGlvbnNbaV0sIDIpO1xuICAgIH1cbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9ucy5EREREID0gcGFkVG9rZW4oZm9ybWF0VG9rZW5GdW5jdGlvbnMuRERELCAzKTtcblxuXG4gICAgZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwKGxvY2FsZSwgaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgdmFyIGlzUG07XG5cbiAgICAgICAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUubWVyaWRpZW1Ib3VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUubWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbGUuaXNQTSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFja1xuICAgICAgICAgICAgaXNQbSA9IGxvY2FsZS5pc1BNKG1lcmlkaWVtKTtcbiAgICAgICAgICAgIGlmIChpc1BtICYmIGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzUG0gJiYgaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpZSBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuXG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgQ29uc3RydWN0b3JzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgZnVuY3Rpb24gTG9jYWxlKCkge1xuICAgIH1cblxuICAgIC8vIE1vbWVudCBwcm90b3R5cGUgb2JqZWN0XG4gICAgZnVuY3Rpb24gTW9tZW50KGNvbmZpZywgc2tpcE92ZXJmbG93KSB7XG4gICAgICAgIGlmIChza2lwT3ZlcmZsb3cgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGVja092ZXJmbG93KGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29weUNvbmZpZyh0aGlzLCBjb25maWcpO1xuICAgICAgICB0aGlzLl9kID0gbmV3IERhdGUoK2NvbmZpZy5fZCk7XG4gICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcbiAgICAgICAgLy8gb2JqZWN0cy5cbiAgICAgICAgaWYgKHVwZGF0ZUluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vbWVudC51cGRhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEdXJhdGlvbiBDb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIER1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbiksXG4gICAgICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgICAgICBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDAsXG4gICAgICAgICAgICBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMCxcbiAgICAgICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgMCxcbiAgICAgICAgICAgIGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDAsXG4gICAgICAgICAgICBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VyIHx8IDAsXG4gICAgICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICAgICAgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQgfHwgMCxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZCB8fCAwO1xuXG4gICAgICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXG4gICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9ICttaWxsaXNlY29uZHMgK1xuICAgICAgICAgICAgc2Vjb25kcyAqIDFlMyArIC8vIDEwMDBcbiAgICAgICAgICAgIG1pbnV0ZXMgKiA2ZTQgKyAvLyAxMDAwICogNjBcbiAgICAgICAgICAgIGhvdXJzICogMzZlNTsgLy8gMTAwMCAqIDYwICogNjBcbiAgICAgICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICAgICAgdGhpcy5fZGF5cyA9ICtkYXlzICtcbiAgICAgICAgICAgIHdlZWtzICogNztcbiAgICAgICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAgICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAgICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICAgICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArXG4gICAgICAgICAgICBxdWFydGVycyAqIDMgK1xuICAgICAgICAgICAgeWVhcnMgKiAxMjtcblxuICAgICAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICAgICAgdGhpcy5fbG9jYWxlID0gbW9tZW50LmxvY2FsZURhdGEoKTtcblxuICAgICAgICB0aGlzLl9idWJibGUoKTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIEhlbHBlcnNcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICAgIGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoYiwgaSkpIHtcbiAgICAgICAgICAgICAgICBhW2ldID0gYltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsICd0b1N0cmluZycpKSB7XG4gICAgICAgICAgICBhLnRvU3RyaW5nID0gYi50b1N0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsICd2YWx1ZU9mJykpIHtcbiAgICAgICAgICAgIGEudmFsdWVPZiA9IGIudmFsdWVPZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvcHlDb25maWcodG8sIGZyb20pIHtcbiAgICAgICAgdmFyIGksIHByb3AsIHZhbDtcblxuICAgICAgICBpZiAodHlwZW9mIGZyb20uX2lzQU1vbWVudE9iamVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRvLl9pc0FNb21lbnRPYmplY3QgPSBmcm9tLl9pc0FNb21lbnRPYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmcm9tLl9pICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdG8uX2kgPSBmcm9tLl9pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZnJvbS5fZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRvLl9mID0gZnJvbS5fZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZyb20uX2wgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0by5fbCA9IGZyb20uX2w7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmcm9tLl9zdHJpY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0by5fc3RyaWN0ID0gZnJvbS5fc3RyaWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZnJvbS5fdHptICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdG8uX3R6bSA9IGZyb20uX3R6bTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZyb20uX2lzVVRDICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdG8uX2lzVVRDID0gZnJvbS5faXNVVEM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmcm9tLl9vZmZzZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0by5fb2Zmc2V0ID0gZnJvbS5fb2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZnJvbS5fcGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0by5fcGYgPSBmcm9tLl9wZjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZyb20uX2xvY2FsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRvLl9sb2NhbGUgPSBmcm9tLl9sb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9tZW50UHJvcGVydGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGkgaW4gbW9tZW50UHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHByb3AgPSBtb21lbnRQcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgICAgIHZhbCA9IGZyb21bcHJvcF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0bztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhYnNSb3VuZChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsZWZ0IHplcm8gZmlsbCBhIG51bWJlclxuICAgIC8vIHNlZSBodHRwOi8vanNwZXJmLmNvbS9sZWZ0LXplcm8tZmlsbGluZyBmb3IgcGVyZm9ybWFuY2UgY29tcGFyaXNvblxuICAgIGZ1bmN0aW9uIGxlZnRaZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG5cbiAgICAgICAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICAgICAgICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArIG91dHB1dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgICAgIHZhciByZXMgPSB7bWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDB9O1xuXG4gICAgICAgIHJlcy5tb250aHMgPSBvdGhlci5tb250aCgpIC0gYmFzZS5tb250aCgpICtcbiAgICAgICAgICAgIChvdGhlci55ZWFyKCkgLSBiYXNlLnllYXIoKSkgKiAxMjtcbiAgICAgICAgaWYgKGJhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKS5pc0FmdGVyKG90aGVyKSkge1xuICAgICAgICAgICAgLS1yZXMubW9udGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9ICtvdGhlciAtICsoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpKTtcblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIG90aGVyID0gbWFrZUFzKG90aGVyLCBiYXNlKTtcbiAgICAgICAgaWYgKGJhc2UuaXNCZWZvcmUob3RoZXIpKSB7XG4gICAgICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2Uob3RoZXIsIGJhc2UpO1xuICAgICAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgcmVzLm1vbnRocyA9IC1yZXMubW9udGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvLyBUT0RPOiByZW1vdmUgJ25hbWUnIGFyZyBhZnRlciBkZXByZWNhdGlvbiBpcyByZW1vdmVkXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkZXIoZGlyZWN0aW9uLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsLCBwZXJpb2QpIHtcbiAgICAgICAgICAgIHZhciBkdXIsIHRtcDtcbiAgICAgICAgICAgIC8vaW52ZXJ0IHRoZSBhcmd1bWVudHMsIGJ1dCBjb21wbGFpbiBhYm91dCBpdFxuICAgICAgICAgICAgaWYgKHBlcmlvZCAhPT0gbnVsbCAmJiAhaXNOYU4oK3BlcmlvZCkpIHtcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUobmFtZSwgJ21vbWVudCgpLicgKyBuYW1lICArICcocGVyaW9kLCBudW1iZXIpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgbW9tZW50KCkuJyArIG5hbWUgKyAnKG51bWJlciwgcGVyaW9kKS4nKTtcbiAgICAgICAgICAgICAgICB0bXAgPSB2YWw7IHZhbCA9IHBlcmlvZDsgcGVyaW9kID0gdG1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICt2YWwgOiB2YWw7XG4gICAgICAgICAgICBkdXIgPSBtb21lbnQuZHVyYXRpb24odmFsLCBwZXJpb2QpO1xuICAgICAgICAgICAgYWRkT3JTdWJ0cmFjdER1cmF0aW9uRnJvbU1vbWVudCh0aGlzLCBkdXIsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRPclN1YnRyYWN0RHVyYXRpb25Gcm9tTW9tZW50KG1vbSwgZHVyYXRpb24sIGlzQWRkaW5nLCB1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHMsXG4gICAgICAgICAgICBkYXlzID0gZHVyYXRpb24uX2RheXMsXG4gICAgICAgICAgICBtb250aHMgPSBkdXJhdGlvbi5fbW9udGhzO1xuICAgICAgICB1cGRhdGVPZmZzZXQgPSB1cGRhdGVPZmZzZXQgPT0gbnVsbCA/IHRydWUgOiB1cGRhdGVPZmZzZXQ7XG5cbiAgICAgICAgaWYgKG1pbGxpc2Vjb25kcykge1xuICAgICAgICAgICAgbW9tLl9kLnNldFRpbWUoK21vbS5fZCArIG1pbGxpc2Vjb25kcyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5cykge1xuICAgICAgICAgICAgcmF3U2V0dGVyKG1vbSwgJ0RhdGUnLCByYXdHZXR0ZXIobW9tLCAnRGF0ZScpICsgZGF5cyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9udGhzKSB7XG4gICAgICAgICAgICByYXdNb250aFNldHRlcihtb20sIHJhd0dldHRlcihtb20sICdNb250aCcpICsgbW9udGhzICogaXNBZGRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgICAgIG1vbWVudC51cGRhdGVPZmZzZXQobW9tLCBkYXlzIHx8IG1vbnRocyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpcyBhbiBhcnJheVxuICAgIGZ1bmN0aW9uIGlzQXJyYXkoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEYXRlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBEYXRlXScgfHxcbiAgICAgICAgICAgIGlucHV0IGluc3RhbmNlb2YgRGF0ZTtcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcbiAgICAgICAgdmFyIGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICAgICAgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgICAgIGRpZmZzID0gMCxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSkgfHxcbiAgICAgICAgICAgICAgICAoIWRvbnRDb252ZXJ0ICYmIHRvSW50KGFycmF5MVtpXSkgIT09IHRvSW50KGFycmF5MltpXSkpKSB7XG4gICAgICAgICAgICAgICAgZGlmZnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlmZnMgKyBsZW5ndGhEaWZmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgICAgIGlmICh1bml0cykge1xuICAgICAgICAgICAgdmFyIGxvd2VyZWQgPSB1bml0cy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyguKXMkLywgJyQxJyk7XG4gICAgICAgICAgICB1bml0cyA9IHVuaXRBbGlhc2VzW3VuaXRzXSB8fCBjYW1lbEZ1bmN0aW9uc1tsb3dlcmVkXSB8fCBsb3dlcmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bml0cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdCkge1xuICAgICAgICB2YXIgbm9ybWFsaXplZElucHV0ID0ge30sXG4gICAgICAgICAgICBub3JtYWxpemVkUHJvcCxcbiAgICAgICAgICAgIHByb3A7XG5cbiAgICAgICAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTGlzdChmaWVsZCkge1xuICAgICAgICB2YXIgY291bnQsIHNldHRlcjtcblxuICAgICAgICBpZiAoZmllbGQuaW5kZXhPZignd2VlaycpID09PSAwKSB7XG4gICAgICAgICAgICBjb3VudCA9IDc7XG4gICAgICAgICAgICBzZXR0ZXIgPSAnZGF5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmaWVsZC5pbmRleE9mKCdtb250aCcpID09PSAwKSB7XG4gICAgICAgICAgICBjb3VudCA9IDEyO1xuICAgICAgICAgICAgc2V0dGVyID0gJ21vbnRoJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbWVudFtmaWVsZF0gPSBmdW5jdGlvbiAoZm9ybWF0LCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGksIGdldHRlcixcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBtb21lbnQuX2xvY2FsZVtmaWVsZF0sXG4gICAgICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdldHRlciA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG0gPSBtb21lbnQoKS51dGMoKS5zZXQoc2V0dGVyLCBpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kLmNhbGwobW9tZW50Ll9sb2NhbGUsIG0sIGZvcm1hdCB8fCAnJyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXR0ZXIoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGdldHRlcihpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSW50KGFyZ3VtZW50Rm9yQ29lcmNpb24pIHtcbiAgICAgICAgdmFyIGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbixcbiAgICAgICAgICAgIHZhbHVlID0gMDtcblxuICAgICAgICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xuICAgICAgICAgICAgaWYgKGNvZXJjZWROdW1iZXIgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5mbG9vcihjb2VyY2VkTnVtYmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmNlaWwoY29lcmNlZE51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoICsgMSwgMCkpLmdldFVUQ0RhdGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyLCBkb3csIGRveSkge1xuICAgICAgICByZXR1cm4gd2Vla09mWWVhcihtb21lbnQoW3llYXIsIDExLCAzMSArIGRvdyAtIGRveV0pLCBkb3csIGRveSkud2VlaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgICAgIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KG0pIHtcbiAgICAgICAgdmFyIG92ZXJmbG93O1xuICAgICAgICBpZiAobS5fYSAmJiBtLl9wZi5vdmVyZmxvdyA9PT0gLTIpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID1cbiAgICAgICAgICAgICAgICBtLl9hW01PTlRIXSA8IDAgfHwgbS5fYVtNT05USF0gPiAxMSA/IE1PTlRIIDpcbiAgICAgICAgICAgICAgICBtLl9hW0RBVEVdIDwgMSB8fCBtLl9hW0RBVEVdID4gZGF5c0luTW9udGgobS5fYVtZRUFSXSwgbS5fYVtNT05USF0pID8gREFURSA6XG4gICAgICAgICAgICAgICAgbS5fYVtIT1VSXSA8IDAgfHwgbS5fYVtIT1VSXSA+IDI0IHx8XG4gICAgICAgICAgICAgICAgICAgIChtLl9hW0hPVVJdID09PSAyNCAmJiAobS5fYVtNSU5VVEVdICE9PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5fYVtTRUNPTkRdICE9PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS5fYVtNSUxMSVNFQ09ORF0gIT09IDApKSA/IEhPVVIgOlxuICAgICAgICAgICAgICAgIG0uX2FbTUlOVVRFXSA8IDAgfHwgbS5fYVtNSU5VVEVdID4gNTkgPyBNSU5VVEUgOlxuICAgICAgICAgICAgICAgIG0uX2FbU0VDT05EXSA8IDAgfHwgbS5fYVtTRUNPTkRdID4gNTkgPyBTRUNPTkQgOlxuICAgICAgICAgICAgICAgIG0uX2FbTUlMTElTRUNPTkRdIDwgMCB8fCBtLl9hW01JTExJU0VDT05EXSA+IDk5OSA/IE1JTExJU0VDT05EIDpcbiAgICAgICAgICAgICAgICAtMTtcblxuICAgICAgICAgICAgaWYgKG0uX3BmLl9vdmVyZmxvd0RheU9mWWVhciAmJiAob3ZlcmZsb3cgPCBZRUFSIHx8IG92ZXJmbG93ID4gREFURSkpIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyA9IERBVEU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG0uX3BmLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1ZhbGlkKG0pIHtcbiAgICAgICAgaWYgKG0uX2lzVmFsaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgbS5faXNWYWxpZCA9ICFpc05hTihtLl9kLmdldFRpbWUoKSkgJiZcbiAgICAgICAgICAgICAgICBtLl9wZi5vdmVyZmxvdyA8IDAgJiZcbiAgICAgICAgICAgICAgICAhbS5fcGYuZW1wdHkgJiZcbiAgICAgICAgICAgICAgICAhbS5fcGYuaW52YWxpZE1vbnRoICYmXG4gICAgICAgICAgICAgICAgIW0uX3BmLm51bGxJbnB1dCAmJlxuICAgICAgICAgICAgICAgICFtLl9wZi5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAgICAgICAgICAgIW0uX3BmLnVzZXJJbnZhbGlkYXRlZDtcblxuICAgICAgICAgICAgaWYgKG0uX3N0cmljdCkge1xuICAgICAgICAgICAgICAgIG0uX2lzVmFsaWQgPSBtLl9pc1ZhbGlkICYmXG4gICAgICAgICAgICAgICAgICAgIG0uX3BmLmNoYXJzTGVmdE92ZXIgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgbS5fcGYudW51c2VkVG9rZW5zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBtLl9wZi5iaWdIb3VyID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG0uX2lzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG4gICAgfVxuXG4gICAgLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4gICAgLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbiAgICAvLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LCBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XG4gICAgZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiwgbmV4dCwgbG9jYWxlLCBzcGxpdDtcblxuICAgICAgICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBqID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICAgICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgICAgICAgICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShzcGxpdC5zbGljZSgwLCBqKS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHQgJiYgbmV4dC5sZW5ndGggPj0gaiAmJiBjb21wYXJlQXJyYXlzKHNwbGl0LCBuZXh0LCB0cnVlKSA+PSBqIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvL3RoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lKSB7XG4gICAgICAgIHZhciBvbGRMb2NhbGUgPSBudWxsO1xuICAgICAgICBpZiAoIWxvY2FsZXNbbmFtZV0gJiYgaGFzTW9kdWxlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9sZExvY2FsZSA9IG1vbWVudC5sb2NhbGUoKTtcbiAgICAgICAgICAgICAgICByZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBkZWZpbmVMb2NhbGUgY3VycmVudGx5IGFsc28gc2V0cyB0aGUgZ2xvYmFsIGxvY2FsZSwgd2Ugd2FudCB0byB1bmRvIHRoYXQgZm9yIGxhenkgbG9hZGVkIGxvY2FsZXNcbiAgICAgICAgICAgICAgICBtb21lbnQubG9jYWxlKG9sZExvY2FsZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSBtb21lbnQgZnJvbSBpbnB1dCwgdGhhdCBpcyBsb2NhbC91dGMvdXRjT2Zmc2V0IGVxdWl2YWxlbnQgdG9cbiAgICAvLyBtb2RlbC5cbiAgICBmdW5jdGlvbiBtYWtlQXMoaW5wdXQsIG1vZGVsKSB7XG4gICAgICAgIHZhciByZXMsIGRpZmY7XG4gICAgICAgIGlmIChtb2RlbC5faXNVVEMpIHtcbiAgICAgICAgICAgIHJlcyA9IG1vZGVsLmNsb25lKCk7XG4gICAgICAgICAgICBkaWZmID0gKG1vbWVudC5pc01vbWVudChpbnB1dCkgfHwgaXNEYXRlKGlucHV0KSA/XG4gICAgICAgICAgICAgICAgICAgICtpbnB1dCA6ICttb21lbnQoaW5wdXQpKSAtICgrcmVzKTtcbiAgICAgICAgICAgIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cbiAgICAgICAgICAgIHJlcy5fZC5zZXRUaW1lKCtyZXMuX2QgKyBkaWZmKTtcbiAgICAgICAgICAgIG1vbWVudC51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChpbnB1dCkubG9jYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgTG9jYWxlXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgICBleHRlbmQoTG9jYWxlLnByb3RvdHlwZSwge1xuXG4gICAgICAgIHNldCA6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIHZhciBwcm9wLCBpO1xuICAgICAgICAgICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICAgICAgICAgIHByb3AgPSBjb25maWdbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBwcm9wO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbJ18nICsgaV0gPSBwcm9wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExlbmllbnQgb3JkaW5hbCBwYXJzaW5nIGFjY2VwdHMganVzdCBhIG51bWJlciBpbiBhZGRpdGlvbiB0b1xuICAgICAgICAgICAgLy8gbnVtYmVyICsgKHBvc3NpYmx5KSBzdHVmZiBjb21pbmcgZnJvbSBfb3JkaW5hbFBhcnNlTGVuaWVudC5cbiAgICAgICAgICAgIHRoaXMuX29yZGluYWxQYXJzZUxlbmllbnQgPSBuZXcgUmVnRXhwKHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UgKyAnfCcgKyAvXFxkezEsMn0vLnNvdXJjZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX21vbnRocyA6ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICAgICAgICBtb250aHMgOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1ttLm1vbnRoKCldO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9tb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKSxcbiAgICAgICAgbW9udGhzU2hvcnQgOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W20ubW9udGgoKV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW9udGhzUGFyc2UgOiBmdW5jdGlvbiAobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICAgICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgICAgICAgICBtb20gPSBtb21lbnQudXRjKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJywgJ2knKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXN0cmljdCAmJiAhdGhpcy5fbW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSAnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKSArICd8XicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgICAgICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTU0nICYmIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NJyAmJiB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fbW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfd2Vla2RheXMgOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzIDogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1ttLmRheSgpXTtcbiAgICAgICAgfSxcblxuICAgICAgICBfd2Vla2RheXNTaG9ydCA6ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gICAgICAgIHdlZWtkYXlzU2hvcnQgOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRbbS5kYXkoKV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3dlZWtkYXlzTWluIDogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbiA6IGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5bbS5kYXkoKV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2Vla2RheXNQYXJzZSA6IGZ1bmN0aW9uICh3ZWVrZGF5TmFtZSkge1xuICAgICAgICAgICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgICAgICBtb20gPSBtb21lbnQoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gJ14nICsgdGhpcy53ZWVrZGF5cyhtb20sICcnKSArICd8XicgKyB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykgKyAnfF4nICsgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2xvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgICAgICAgTFRTIDogJ2g6bW06c3MgQScsXG4gICAgICAgICAgICBMVCA6ICdoOm1tIEEnLFxuICAgICAgICAgICAgTCA6ICdNTS9ERC9ZWVlZJyxcbiAgICAgICAgICAgIExMIDogJ01NTU0gRCwgWVlZWScsXG4gICAgICAgICAgICBMTEwgOiAnTU1NTSBELCBZWVlZIExUJyxcbiAgICAgICAgICAgIExMTEwgOiAnZGRkZCwgTU1NTSBELCBZWVlZIExUJ1xuICAgICAgICB9LFxuICAgICAgICBsb25nRGF0ZUZvcm1hdCA6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICAgICAgICAgICAgaWYgKCFvdXRwdXQgJiYgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IG91dHB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNQTSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xuICAgICAgICAgICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgICAgICAgICByZXR1cm4gKChpbnB1dCArICcnKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfbWVyaWRpZW1QYXJzZSA6IC9bYXBdXFwuP20/XFwuPy9pLFxuICAgICAgICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgICAgICAgICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdhbScgOiAnQU0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgX2NhbGVuZGFyIDoge1xuICAgICAgICAgICAgc2FtZURheSA6ICdbVG9kYXkgYXRdIExUJyxcbiAgICAgICAgICAgIG5leHREYXkgOiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gICAgICAgICAgICBuZXh0V2VlayA6ICdkZGRkIFthdF0gTFQnLFxuICAgICAgICAgICAgbGFzdERheSA6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgICAgICAgICBsYXN0V2VlayA6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgICAgICAgICAgIHNhbWVFbHNlIDogJ0wnXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGVuZGFyIDogZnVuY3Rpb24gKGtleSwgbW9tLCBub3cpIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvdXRwdXQgPT09ICdmdW5jdGlvbicgPyBvdXRwdXQuYXBwbHkobW9tLCBbbm93XSkgOiBvdXRwdXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3JlbGF0aXZlVGltZSA6IHtcbiAgICAgICAgICAgIGZ1dHVyZSA6ICdpbiAlcycsXG4gICAgICAgICAgICBwYXN0IDogJyVzIGFnbycsXG4gICAgICAgICAgICBzIDogJ2EgZmV3IHNlY29uZHMnLFxuICAgICAgICAgICAgbSA6ICdhIG1pbnV0ZScsXG4gICAgICAgICAgICBtbSA6ICclZCBtaW51dGVzJyxcbiAgICAgICAgICAgIGggOiAnYW4gaG91cicsXG4gICAgICAgICAgICBoaCA6ICclZCBob3VycycsXG4gICAgICAgICAgICBkIDogJ2EgZGF5JyxcbiAgICAgICAgICAgIGRkIDogJyVkIGRheXMnLFxuICAgICAgICAgICAgTSA6ICdhIG1vbnRoJyxcbiAgICAgICAgICAgIE1NIDogJyVkIG1vbnRocycsXG4gICAgICAgICAgICB5IDogJ2EgeWVhcicsXG4gICAgICAgICAgICB5eSA6ICclZCB5ZWFycydcbiAgICAgICAgfSxcblxuICAgICAgICByZWxhdGl2ZVRpbWUgOiBmdW5jdGlvbiAobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cmluZ107XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBvdXRwdXQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICBvdXRwdXQobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSA6XG4gICAgICAgICAgICAgICAgb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bWJlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFzdEZ1dHVyZSA6IGZ1bmN0aW9uIChkaWZmLCBvdXRwdXQpIHtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/IGZvcm1hdChvdXRwdXQpIDogZm9ybWF0LnJlcGxhY2UoLyVzL2ksIG91dHB1dCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcmRpbmFsLnJlcGxhY2UoJyVkJywgbnVtYmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgX29yZGluYWwgOiAnJWQnLFxuICAgICAgICBfb3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9LyxcblxuICAgICAgICBwcmVwYXJzZSA6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9zdGZvcm1hdCA6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2VlayA6IGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xuICAgICAgICB9LFxuXG4gICAgICAgIF93ZWVrIDoge1xuICAgICAgICAgICAgZG93IDogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3kgOiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlyc3REYXlPZldlZWsgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlyc3REYXlPZlllYXIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3k7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2ludmFsaWREYXRlOiAnSW52YWxpZCBkYXRlJyxcbiAgICAgICAgaW52YWxpZERhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZhbGlkRGF0ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBGb3JtYXR0aW5nXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLCBpLCBsZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gJyc7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYXJyYXlbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFycmF5W2ldLmNhbGwobW9tLCBmb3JtYXQpIDogYXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFtLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG0ubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBleHBhbmRGb3JtYXQoZm9ybWF0LCBtLmxvY2FsZURhdGEoKSk7XG5cbiAgICAgICAgaWYgKCFmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSkge1xuICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPSBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICAgICAgdmFyIGkgPSA1O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyhpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIFBhcnNpbmdcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICAgIC8vIGdldCB0aGUgcmVnZXggdG8gZmluZCB0aGUgbmV4dCB0b2tlblxuICAgIGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSB7XG4gICAgICAgIHZhciBhLCBzdHJpY3QgPSBjb25maWcuX3N0cmljdDtcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRva2VuT25lRGlnaXQ7XG4gICAgICAgIGNhc2UgJ0REREQnOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5UaHJlZURpZ2l0cztcbiAgICAgICAgY2FzZSAnWVlZWSc6XG4gICAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgICBjYXNlICdnZ2dnJzpcbiAgICAgICAgICAgIHJldHVybiBzdHJpY3QgPyBwYXJzZVRva2VuRm91ckRpZ2l0cyA6IHBhcnNlVG9rZW5PbmVUb0ZvdXJEaWdpdHM7XG4gICAgICAgIGNhc2UgJ1knOlxuICAgICAgICBjYXNlICdHJzpcbiAgICAgICAgY2FzZSAnZyc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlblNpZ25lZE51bWJlcjtcbiAgICAgICAgY2FzZSAnWVlZWVlZJzpcbiAgICAgICAgY2FzZSAnWVlZWVknOlxuICAgICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIGNhc2UgJ2dnZ2dnJzpcbiAgICAgICAgICAgIHJldHVybiBzdHJpY3QgPyBwYXJzZVRva2VuU2l4RGlnaXRzIDogcGFyc2VUb2tlbk9uZVRvU2l4RGlnaXRzO1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbk9uZURpZ2l0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdTUyc6XG4gICAgICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5Ud29EaWdpdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ1NTUyc6XG4gICAgICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5UaHJlZURpZ2l0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnREREJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRva2VuT25lVG9UaHJlZURpZ2l0cztcbiAgICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICAgIGNhc2UgJ2RkJzpcbiAgICAgICAgY2FzZSAnZGRkJzpcbiAgICAgICAgY2FzZSAnZGRkZCc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbldvcmQ7XG4gICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgIHJldHVybiBjb25maWcuX2xvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbiAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbk9mZnNldE1zO1xuICAgICAgICBjYXNlICdYJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRva2VuVGltZXN0YW1wTXM7XG4gICAgICAgIGNhc2UgJ1onOlxuICAgICAgICBjYXNlICdaWic6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlblRpbWV6b25lO1xuICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRva2VuVDtcbiAgICAgICAgY2FzZSAnU1NTUyc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbkRpZ2l0cztcbiAgICAgICAgY2FzZSAnTU0nOlxuICAgICAgICBjYXNlICdERCc6XG4gICAgICAgIGNhc2UgJ1lZJzpcbiAgICAgICAgY2FzZSAnR0cnOlxuICAgICAgICBjYXNlICdnZyc6XG4gICAgICAgIGNhc2UgJ0hIJzpcbiAgICAgICAgY2FzZSAnaGgnOlxuICAgICAgICBjYXNlICdtbSc6XG4gICAgICAgIGNhc2UgJ3NzJzpcbiAgICAgICAgY2FzZSAnd3cnOlxuICAgICAgICBjYXNlICdXVyc6XG4gICAgICAgICAgICByZXR1cm4gc3RyaWN0ID8gcGFyc2VUb2tlblR3b0RpZ2l0cyA6IHBhcnNlVG9rZW5PbmVPclR3b0RpZ2l0cztcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5PbmVPclR3b0RpZ2l0cztcbiAgICAgICAgY2FzZSAnRG8nOlxuICAgICAgICAgICAgcmV0dXJuIHN0cmljdCA/IGNvbmZpZy5fbG9jYWxlLl9vcmRpbmFsUGFyc2UgOiBjb25maWcuX2xvY2FsZS5fb3JkaW5hbFBhcnNlTGVuaWVudDtcbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICBhID0gbmV3IFJlZ0V4cChyZWdleHBFc2NhcGUodW5lc2NhcGVGb3JtYXQodG9rZW4ucmVwbGFjZSgnXFxcXCcsICcnKSksICdpJykpO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1dGNPZmZzZXRGcm9tU3RyaW5nKHN0cmluZykge1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcgfHwgJyc7XG4gICAgICAgIHZhciBwb3NzaWJsZVR6TWF0Y2hlcyA9IChzdHJpbmcubWF0Y2gocGFyc2VUb2tlblRpbWV6b25lKSB8fCBbXSksXG4gICAgICAgICAgICB0ekNodW5rID0gcG9zc2libGVUek1hdGNoZXNbcG9zc2libGVUek1hdGNoZXMubGVuZ3RoIC0gMV0gfHwgW10sXG4gICAgICAgICAgICBwYXJ0cyA9ICh0ekNodW5rICsgJycpLm1hdGNoKHBhcnNlVGltZXpvbmVDaHVua2VyKSB8fCBbJy0nLCAwLCAwXSxcbiAgICAgICAgICAgIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgdG9JbnQocGFydHNbMl0pO1xuXG4gICAgICAgIHJldHVybiBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRvIGNvbnZlcnQgc3RyaW5nIGlucHV0IHRvIGRhdGVcbiAgICBmdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgaW5wdXQsIGNvbmZpZykge1xuICAgICAgICB2YXIgYSwgZGF0ZVBhcnRBcnJheSA9IGNvbmZpZy5fYTtcblxuICAgICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIFFVQVJURVJcbiAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRhdGVQYXJ0QXJyYXlbTU9OVEhdID0gKHRvSW50KGlucHV0KSAtIDEpICogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBNT05USFxuICAgICAgICBjYXNlICdNJyA6IC8vIGZhbGwgdGhyb3VnaCB0byBNTVxuICAgICAgICBjYXNlICdNTScgOlxuICAgICAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkYXRlUGFydEFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTU1NJyA6IC8vIGZhbGwgdGhyb3VnaCB0byBNTU1NXG4gICAgICAgIGNhc2UgJ01NTU0nIDpcbiAgICAgICAgICAgIGEgPSBjb25maWcuX2xvY2FsZS5tb250aHNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgICAgICAgIC8vIGlmIHdlIGRpZG4ndCBmaW5kIGEgbW9udGggbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkLlxuICAgICAgICAgICAgaWYgKGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRhdGVQYXJ0QXJyYXlbTU9OVEhdID0gYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9wZi5pbnZhbGlkTW9udGggPSBpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBEQVkgT0YgTU9OVEhcbiAgICAgICAgY2FzZSAnRCcgOiAvLyBmYWxsIHRocm91Z2ggdG8gRERcbiAgICAgICAgY2FzZSAnREQnIDpcbiAgICAgICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVBhcnRBcnJheVtEQVRFXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEbycgOlxuICAgICAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkYXRlUGFydEFycmF5W0RBVEVdID0gdG9JbnQocGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQubWF0Y2goL1xcZHsxLDJ9LylbMF0sIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gREFZIE9GIFlFQVJcbiAgICAgICAgY2FzZSAnREREJyA6IC8vIGZhbGwgdGhyb3VnaCB0byBEREREXG4gICAgICAgIGNhc2UgJ0REREQnIDpcbiAgICAgICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBZRUFSXG4gICAgICAgIGNhc2UgJ1lZJyA6XG4gICAgICAgICAgICBkYXRlUGFydEFycmF5W1lFQVJdID0gbW9tZW50LnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdZWVlZJyA6XG4gICAgICAgIGNhc2UgJ1lZWVlZJyA6XG4gICAgICAgIGNhc2UgJ1lZWVlZWScgOlxuICAgICAgICAgICAgZGF0ZVBhcnRBcnJheVtZRUFSXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBBTSAvIFBNXG4gICAgICAgIGNhc2UgJ2EnIDogLy8gZmFsbCB0aHJvdWdoIHRvIEFcbiAgICAgICAgY2FzZSAnQScgOlxuICAgICAgICAgICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xuICAgICAgICAgICAgLy8gY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gSE9VUlxuICAgICAgICBjYXNlICdoJyA6IC8vIGZhbGwgdGhyb3VnaCB0byBoaFxuICAgICAgICBjYXNlICdoaCcgOlxuICAgICAgICAgICAgY29uZmlnLl9wZi5iaWdIb3VyID0gdHJ1ZTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnSCcgOiAvLyBmYWxsIHRocm91Z2ggdG8gSEhcbiAgICAgICAgY2FzZSAnSEgnIDpcbiAgICAgICAgICAgIGRhdGVQYXJ0QXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gTUlOVVRFXG4gICAgICAgIGNhc2UgJ20nIDogLy8gZmFsbCB0aHJvdWdoIHRvIG1tXG4gICAgICAgIGNhc2UgJ21tJyA6XG4gICAgICAgICAgICBkYXRlUGFydEFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gU0VDT05EXG4gICAgICAgIGNhc2UgJ3MnIDogLy8gZmFsbCB0aHJvdWdoIHRvIHNzXG4gICAgICAgIGNhc2UgJ3NzJyA6XG4gICAgICAgICAgICBkYXRlUGFydEFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gTUlMTElTRUNPTkRcbiAgICAgICAgY2FzZSAnUycgOlxuICAgICAgICBjYXNlICdTUycgOlxuICAgICAgICBjYXNlICdTU1MnIDpcbiAgICAgICAgY2FzZSAnU1NTUycgOlxuICAgICAgICAgICAgZGF0ZVBhcnRBcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludCgoJzAuJyArIGlucHV0KSAqIDEwMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIFVOSVggT0ZGU0VUIChNSUxMSVNFQ09ORFMpXG4gICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUodG9JbnQoaW5wdXQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBVTklYIFRJTUVTVEFNUCBXSVRIIE1TXG4gICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCkgKiAxMDAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBUSU1FWk9ORVxuICAgICAgICBjYXNlICdaJyA6IC8vIGZhbGwgdGhyb3VnaCB0byBaWlxuICAgICAgICBjYXNlICdaWicgOlxuICAgICAgICAgICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLl90em0gPSB1dGNPZmZzZXRGcm9tU3RyaW5nKGlucHV0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBXRUVLREFZIC0gaHVtYW5cbiAgICAgICAgY2FzZSAnZGQnOlxuICAgICAgICBjYXNlICdkZGQnOlxuICAgICAgICBjYXNlICdkZGRkJzpcbiAgICAgICAgICAgIGEgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcbiAgICAgICAgICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25maWcuX3dbJ2QnXSA9IGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5fcGYuaW52YWxpZFdlZWtkYXkgPSBpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBXRUVLLCBXRUVLIERBWSAtIG51bWVyaWNcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgIGNhc2UgJ3d3JzpcbiAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgIGNhc2UgJ1dXJzpcbiAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW4uc3Vic3RyKDAsIDEpO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdnZ2dnJzpcbiAgICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW4uc3Vic3RyKDAsIDIpO1xuICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuICAgICAgICAgICAgICAgIGNvbmZpZy5fd1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2cnOlxuICAgICAgICBjYXNlICdHRyc6XG4gICAgICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG4gICAgICAgICAgICBjb25maWcuX3dbdG9rZW5dID0gbW9tZW50LnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpIHtcbiAgICAgICAgdmFyIHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcDtcblxuICAgICAgICB3ID0gY29uZmlnLl93O1xuICAgICAgICBpZiAody5HRyAhPSBudWxsIHx8IHcuVyAhPSBudWxsIHx8IHcuRSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkb3cgPSAxO1xuICAgICAgICAgICAgZG95ID0gNDtcblxuICAgICAgICAgICAgLy8gVE9ETzogV2UgbmVlZCB0byB0YWtlIHRoZSBjdXJyZW50IGlzb1dlZWtZZWFyLCBidXQgdGhhdCBkZXBlbmRzIG9uXG4gICAgICAgICAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXG4gICAgICAgICAgICAvLyBhIG5vdyB2ZXJzaW9uIG9mIGN1cnJlbnQgY29uZmlnICh0YWtlIGxvY2FsL3V0Yy9vZmZzZXQgZmxhZ3MsIGFuZFxuICAgICAgICAgICAgLy8gY3JlYXRlIG5vdykuXG4gICAgICAgICAgICB3ZWVrWWVhciA9IGRmbCh3LkdHLCBjb25maWcuX2FbWUVBUl0sIHdlZWtPZlllYXIobW9tZW50KCksIDEsIDQpLnllYXIpO1xuICAgICAgICAgICAgd2VlayA9IGRmbCh3LlcsIDEpO1xuICAgICAgICAgICAgd2Vla2RheSA9IGRmbCh3LkUsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG93ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG93O1xuICAgICAgICAgICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xuXG4gICAgICAgICAgICB3ZWVrWWVhciA9IGRmbCh3LmdnLCBjb25maWcuX2FbWUVBUl0sIHdlZWtPZlllYXIobW9tZW50KCksIGRvdywgZG95KS55ZWFyKTtcbiAgICAgICAgICAgIHdlZWsgPSBkZmwody53LCAxKTtcblxuICAgICAgICAgICAgaWYgKHcuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2RheSAtLSBsb3cgZGF5IG51bWJlcnMgYXJlIGNvbnNpZGVyZWQgbmV4dCB3ZWVrXG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IHcuZDtcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA8IGRvdykge1xuICAgICAgICAgICAgICAgICAgICArK3dlZWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGVtcCA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG95LCBkb3cpO1xuXG4gICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IHRlbXAueWVhcjtcbiAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IGFuIGFycmF5IHRvIGEgZGF0ZS5cbiAgICAvLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xuICAgIC8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxuICAgIC8vIFt5ZWFyLCBtb250aCwgZGF5ICwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXVxuICAgIGZ1bmN0aW9uIGRhdGVGcm9tQ29uZmlnKGNvbmZpZykge1xuICAgICAgICB2YXIgaSwgZGF0ZSwgaW5wdXQgPSBbXSwgY3VycmVudERhdGUsIHllYXJUb1VzZTtcblxuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcblxuICAgICAgICAvL2NvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gICAgICAgIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xuICAgICAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIpIHtcbiAgICAgICAgICAgIHllYXJUb1VzZSA9IGRmbChjb25maWcuX2FbWUVBUl0sIGN1cnJlbnREYXRlW1lFQVJdKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyVG9Vc2UpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9wZi5fb3ZlcmZsb3dEYXlPZlllYXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRlID0gbWFrZVVUQ0RhdGUoeWVhclRvVXNlLCAwLCBjb25maWcuX2RheU9mWWVhcik7XG4gICAgICAgICAgICBjb25maWcuX2FbTU9OVEhdID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgICAgICAgICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cbiAgICAgICAgLy8gKiBpZiBubyB5ZWFyLCBtb250aCwgZGF5IG9mIG1vbnRoIGFyZSBnaXZlbiwgZGVmYXVsdCB0byB0b2RheVxuICAgICAgICAvLyAqIGlmIGRheSBvZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBtb250aCBhbmQgeWVhclxuICAgICAgICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxuICAgICAgICAvLyAqIGlmIHllYXIgaXMgZ2l2ZW4sIGRvbid0IGRlZmF1bHQgYW55dGhpbmdcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDMgJiYgY29uZmlnLl9hW2ldID09IG51bGw7ICsraSkge1xuICAgICAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSBjdXJyZW50RGF0ZVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFplcm8gb3V0IHdoYXRldmVyIHdhcyBub3QgZGVmYXVsdGVkLCBpbmNsdWRpbmcgdGltZVxuICAgICAgICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSAoY29uZmlnLl9hW2ldID09IG51bGwpID8gKGkgPT09IDIgPyAxIDogMCkgOiBjb25maWcuX2FbaV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgMjQ6MDA6MDAuMDAwXG4gICAgICAgIGlmIChjb25maWcuX2FbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICAgICAgY29uZmlnLl9hW01JTlVURV0gPT09IDAgJiZcbiAgICAgICAgICAgICAgICBjb25maWcuX2FbU0VDT05EXSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIGNvbmZpZy5fYVtNSUxMSVNFQ09ORF0gPT09IDApIHtcbiAgICAgICAgICAgIGNvbmZpZy5fbmV4dERheSA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLl9kID0gKGNvbmZpZy5fdXNlVVRDID8gbWFrZVVUQ0RhdGUgOiBtYWtlRGF0ZSkuYXBwbHkobnVsbCwgaW5wdXQpO1xuICAgICAgICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB1dGNPZmZzZXQgY2FuIGJlIGNoYW5nZWRcbiAgICAgICAgLy8gd2l0aCBwYXJzZVpvbmUuXG4gICAgICAgIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMjQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXRlRnJvbU9iamVjdChjb25maWcpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJbnB1dDtcblxuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhjb25maWcuX2kpO1xuICAgICAgICBjb25maWcuX2EgPSBbXG4gICAgICAgICAgICBub3JtYWxpemVkSW5wdXQueWVhcixcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dC5tb250aCxcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgbm9ybWFsaXplZElucHV0LmRhdGUsXG4gICAgICAgICAgICBub3JtYWxpemVkSW5wdXQuaG91cixcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dC5taW51dGUsXG4gICAgICAgICAgICBub3JtYWxpemVkSW5wdXQuc2Vjb25kLFxuICAgICAgICAgICAgbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kXG4gICAgICAgIF07XG5cbiAgICAgICAgZGF0ZUZyb21Db25maWcoY29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZykge1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5vdy5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIG5vdy5nZXRVVENNb250aCgpLFxuICAgICAgICAgICAgICAgIG5vdy5nZXRVVENEYXRlKClcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW25vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nXG4gICAgZnVuY3Rpb24gbWFrZURhdGVGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLl9mID09PSBtb21lbnQuSVNPXzg2MDEpIHtcbiAgICAgICAgICAgIHBhcnNlSVNPKGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuX2EgPSBbXTtcbiAgICAgICAgY29uZmlnLl9wZi5lbXB0eSA9IHRydWU7XG5cbiAgICAgICAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnICsgY29uZmlnLl9pLFxuICAgICAgICAgICAgaSwgcGFyc2VkSW5wdXQsIHRva2VucywgdG9rZW4sIHNraXBwZWQsXG4gICAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDA7XG5cbiAgICAgICAgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgcGFyc2VkSW5wdXQgPSAoc3RyaW5nLm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSkgfHwgW10pWzBdO1xuICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgc2tpcHBlZCA9IHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpKTtcbiAgICAgICAgICAgICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5fcGYudW51c2VkSW5wdXQucHVzaChza2lwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSArIHBhcnNlZElucHV0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkb24ndCBwYXJzZSBpZiBpdCdzIG5vdCBhIGtub3duIHRva2VuXG4gICAgICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5fcGYuZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5fcGYudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb25maWcuX3N0cmljdCAmJiAhcGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX3BmLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcbiAgICAgICAgY29uZmlnLl9wZi5jaGFyc0xlZnRPdmVyID0gc3RyaW5nTGVuZ3RoIC0gdG90YWxQYXJzZWRJbnB1dExlbmd0aDtcbiAgICAgICAgaWYgKHN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25maWcuX3BmLnVudXNlZElucHV0LnB1c2goc3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXG4gICAgICAgIGlmIChjb25maWcuX3BmLmJpZ0hvdXIgPT09IHRydWUgJiYgY29uZmlnLl9hW0hPVVJdIDw9IDEyKSB7XG4gICAgICAgICAgICBjb25maWcuX3BmLmJpZ0hvdXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChjb25maWcuX2xvY2FsZSwgY29uZmlnLl9hW0hPVVJdLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5fbWVyaWRpZW0pO1xuICAgICAgICBkYXRlRnJvbUNvbmZpZyhjb25maWcpO1xuICAgICAgICBjaGVja092ZXJmbG93KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkge1xuICAgICAgICAgICAgcmV0dXJuIHAxIHx8IHAyIHx8IHAzIHx8IHA0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDb2RlIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTYxNDkzL2lzLXRoZXJlLWEtcmVnZXhwLWVzY2FwZS1mdW5jdGlvbi1pbi1qYXZhc2NyaXB0XG4gICAgZnVuY3Rpb24gcmVnZXhwRXNjYXBlKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG4gICAgfVxuXG4gICAgLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcbiAgICBmdW5jdGlvbiBtYWtlRGF0ZUZyb21TdHJpbmdBbmRBcnJheShjb25maWcpIHtcbiAgICAgICAgdmFyIHRlbXBDb25maWcsXG4gICAgICAgICAgICBiZXN0TW9tZW50LFxuXG4gICAgICAgICAgICBzY29yZVRvQmVhdCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBjdXJyZW50U2NvcmU7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fZi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbmZpZy5fcGYuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbmZpZy5fZi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY3VycmVudFNjb3JlID0gMDtcbiAgICAgICAgICAgIHRlbXBDb25maWcgPSBjb3B5Q29uZmlnKHt9LCBjb25maWcpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBDb25maWcuX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICAgICAgICAgICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICAgICAgICAgIG1ha2VEYXRlRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gdGVtcENvbmZpZy5fcGYuY2hhcnNMZWZ0T3ZlcjtcblxuICAgICAgICAgICAgLy9vciB0b2tlbnNcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSB0ZW1wQ29uZmlnLl9wZi51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICAgICAgICAgIHRlbXBDb25maWcuX3BmLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgICAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuICAgIGZ1bmN0aW9uIHBhcnNlSVNPKGNvbmZpZykge1xuICAgICAgICB2YXIgaSwgbCxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbmZpZy5faSxcbiAgICAgICAgICAgIG1hdGNoID0gaXNvUmVnZXguZXhlYyhzdHJpbmcpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uZmlnLl9wZi5pc28gPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKHN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hbNV0gc2hvdWxkIGJlICdUJyBvciB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9mID0gaXNvRGF0ZXNbaV1bMF0gKyAobWF0Y2hbNl0gfHwgJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb1RpbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpc29UaW1lc1tpXVsxXS5leGVjKHN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9mICs9IGlzb1RpbWVzW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RyaW5nLm1hdGNoKHBhcnNlVG9rZW5UaW1lem9uZSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2YgKz0gJ1onO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFrZURhdGVGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXG4gICAgZnVuY3Rpb24gbWFrZURhdGVGcm9tU3RyaW5nKGNvbmZpZykge1xuICAgICAgICBwYXJzZUlTTyhjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICAgICAgICAgIG1vbWVudC5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFwKGFyciwgZm4pIHtcbiAgICAgICAgdmFyIHJlcyA9IFtdLCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXMucHVzaChmbihhcnJbaV0sIGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VEYXRlRnJvbUlucHV0KGNvbmZpZykge1xuICAgICAgICB2YXIgaW5wdXQgPSBjb25maWcuX2ksIG1hdGNoZWQ7XG4gICAgICAgIGlmIChpbnB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCtpbnB1dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhpbnB1dCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbWFrZURhdGVGcm9tU3RyaW5nKGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYSA9IG1hcChpbnB1dC5zbGljZSgwKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGF0ZUZyb21Db25maWcoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoaW5wdXQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGF0ZUZyb21PYmplY3QoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoaW5wdXQpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vbWVudC5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZURhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpIHtcbiAgICAgICAgLy9jYW4ndCBqdXN0IGFwcGx5KCkgdG8gY3JlYXRlIGEgZGF0ZTpcbiAgICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MTM0OC9pbnN0YW50aWF0aW5nLWEtamF2YXNjcmlwdC1vYmplY3QtYnktY2FsbGluZy1wcm90b3R5cGUtY29uc3RydWN0b3ItYXBwbHlcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG5cbiAgICAgICAgLy90aGUgZGF0ZSBjb25zdHJ1Y3RvciBkb2Vzbid0IGFjY2VwdCB5ZWFycyA8IDE5NzBcbiAgICAgICAgaWYgKHkgPCAxOTcwKSB7XG4gICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VVVENEYXRlKHkpIHtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgICAgaWYgKHkgPCAxOTcwKSB7XG4gICAgICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKGlucHV0KSkge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBSZWxhdGl2ZSBUaW1lXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxuICAgIGZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cmluZywgbnVtYmVyLCB3aXRob3V0U3VmZml4LCBpc0Z1dHVyZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bWJlciB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGF0aXZlVGltZShwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgbG9jYWxlKSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihwb3NOZWdEdXJhdGlvbikuYWJzKCksXG4gICAgICAgICAgICBzZWNvbmRzID0gcm91bmQoZHVyYXRpb24uYXMoJ3MnKSksXG4gICAgICAgICAgICBtaW51dGVzID0gcm91bmQoZHVyYXRpb24uYXMoJ20nKSksXG4gICAgICAgICAgICBob3VycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpLFxuICAgICAgICAgICAgZGF5cyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdkJykpLFxuICAgICAgICAgICAgbW9udGhzID0gcm91bmQoZHVyYXRpb24uYXMoJ00nKSksXG4gICAgICAgICAgICB5ZWFycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpLFxuXG4gICAgICAgICAgICBhcmdzID0gc2Vjb25kcyA8IHJlbGF0aXZlVGltZVRocmVzaG9sZHMucyAmJiBbJ3MnLCBzZWNvbmRzXSB8fFxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPT09IDEgJiYgWydtJ10gfHxcbiAgICAgICAgICAgICAgICBtaW51dGVzIDwgcmVsYXRpdmVUaW1lVGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSB8fFxuICAgICAgICAgICAgICAgIGhvdXJzID09PSAxICYmIFsnaCddIHx8XG4gICAgICAgICAgICAgICAgaG91cnMgPCByZWxhdGl2ZVRpbWVUaHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSB8fFxuICAgICAgICAgICAgICAgIGRheXMgPT09IDEgJiYgWydkJ10gfHxcbiAgICAgICAgICAgICAgICBkYXlzIDwgcmVsYXRpdmVUaW1lVGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSB8fFxuICAgICAgICAgICAgICAgIG1vbnRocyA9PT0gMSAmJiBbJ00nXSB8fFxuICAgICAgICAgICAgICAgIG1vbnRocyA8IHJlbGF0aXZlVGltZVRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSB8fFxuICAgICAgICAgICAgICAgIHllYXJzID09PSAxICYmIFsneSddIHx8IFsneXknLCB5ZWFyc107XG5cbiAgICAgICAgYXJnc1syXSA9IHdpdGhvdXRTdWZmaXg7XG4gICAgICAgIGFyZ3NbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xuICAgICAgICBhcmdzWzRdID0gbG9jYWxlO1xuICAgICAgICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkoe30sIGFyZ3MpO1xuICAgIH1cblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBXZWVrIG9mIFllYXJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICAgIC8vIGZpcnN0RGF5T2ZXZWVrICAgICAgIDAgPSBzdW4sIDYgPSBzYXRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRoYXQgc3RhcnRzIHRoZSB3ZWVrXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgKHVzdWFsbHkgc3VuZGF5IG9yIG1vbmRheSlcbiAgICAvLyBmaXJzdERheU9mV2Vla09mWWVhciAwID0gc3VuLCA2ID0gc2F0XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgdGhlIGZpcnN0IHdlZWsgaXMgdGhlIHdlZWsgdGhhdCBjb250YWlucyB0aGUgZmlyc3RcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICBvZiB0aGlzIGRheSBvZiB0aGUgd2Vla1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgIChlZy4gSVNPIHdlZWtzIHVzZSB0aHVyc2RheSAoNCkpXG4gICAgZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGZpcnN0RGF5T2ZXZWVrLCBmaXJzdERheU9mV2Vla09mWWVhcikge1xuICAgICAgICB2YXIgZW5kID0gZmlyc3REYXlPZldlZWtPZlllYXIgLSBmaXJzdERheU9mV2VlayxcbiAgICAgICAgICAgIGRheXNUb0RheU9mV2VlayA9IGZpcnN0RGF5T2ZXZWVrT2ZZZWFyIC0gbW9tLmRheSgpLFxuICAgICAgICAgICAgYWRqdXN0ZWRNb21lbnQ7XG5cblxuICAgICAgICBpZiAoZGF5c1RvRGF5T2ZXZWVrID4gZW5kKSB7XG4gICAgICAgICAgICBkYXlzVG9EYXlPZldlZWsgLT0gNztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXlzVG9EYXlPZldlZWsgPCBlbmQgLSA3KSB7XG4gICAgICAgICAgICBkYXlzVG9EYXlPZldlZWsgKz0gNztcbiAgICAgICAgfVxuXG4gICAgICAgIGFkanVzdGVkTW9tZW50ID0gbW9tZW50KG1vbSkuYWRkKGRheXNUb0RheU9mV2VlaywgJ2QnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdlZWs6IE1hdGguY2VpbChhZGp1c3RlZE1vbWVudC5kYXlPZlllYXIoKSAvIDcpLFxuICAgICAgICAgICAgeWVhcjogYWRqdXN0ZWRNb21lbnQueWVhcigpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy9odHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG4gICAgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGZpcnN0RGF5T2ZXZWVrT2ZZZWFyLCBmaXJzdERheU9mV2Vlaykge1xuICAgICAgICB2YXIgZCA9IG1ha2VVVENEYXRlKHllYXIsIDAsIDEpLmdldFVUQ0RheSgpLCBkYXlzVG9BZGQsIGRheU9mWWVhcjtcblxuICAgICAgICBkID0gZCA9PT0gMCA/IDcgOiBkO1xuICAgICAgICB3ZWVrZGF5ID0gd2Vla2RheSAhPSBudWxsID8gd2Vla2RheSA6IGZpcnN0RGF5T2ZXZWVrO1xuICAgICAgICBkYXlzVG9BZGQgPSBmaXJzdERheU9mV2VlayAtIGQgKyAoZCA+IGZpcnN0RGF5T2ZXZWVrT2ZZZWFyID8gNyA6IDApIC0gKGQgPCBmaXJzdERheU9mV2VlayA/IDcgOiAwKTtcbiAgICAgICAgZGF5T2ZZZWFyID0gNyAqICh3ZWVrIC0gMSkgKyAod2Vla2RheSAtIGZpcnN0RGF5T2ZXZWVrKSArIGRheXNUb0FkZCArIDE7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHllYXI6IGRheU9mWWVhciA+IDAgPyB5ZWFyIDogeWVhciAtIDEsXG4gICAgICAgICAgICBkYXlPZlllYXI6IGRheU9mWWVhciA+IDAgPyAgZGF5T2ZZZWFyIDogZGF5c0luWWVhcih5ZWFyIC0gMSkgKyBkYXlPZlllYXJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIFRvcCBMZXZlbCBGdW5jdGlvbnNcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICBmdW5jdGlvbiBtYWtlTW9tZW50KGNvbmZpZykge1xuICAgICAgICB2YXIgaW5wdXQgPSBjb25maWcuX2ksXG4gICAgICAgICAgICBmb3JtYXQgPSBjb25maWcuX2YsXG4gICAgICAgICAgICByZXM7XG5cbiAgICAgICAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBtb21lbnQubG9jYWxlRGF0YShjb25maWcuX2wpO1xuXG4gICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudC5pbnZhbGlkKHtudWxsSW5wdXQ6IHRydWV9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb21lbnQuaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbWVudChpbnB1dCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0KSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgbWFrZURhdGVGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFrZURhdGVGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWtlRGF0ZUZyb21JbnB1dChjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzID0gbmV3IE1vbWVudChjb25maWcpO1xuICAgICAgICBpZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgaXMgc21hcnQgZW5vdWdoIGFyb3VuZCBEU1RcbiAgICAgICAgICAgIHJlcy5hZGQoMSwgJ2QnKTtcbiAgICAgICAgICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgbW9tZW50ID0gZnVuY3Rpb24gKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgICAgIHZhciBjO1xuXG4gICAgICAgIGlmICh0eXBlb2YobG9jYWxlKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBzdHJpY3QgPSBsb2NhbGU7XG4gICAgICAgICAgICBsb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb2JqZWN0IGNvbnN0cnVjdGlvbiBtdXN0IGJlIGRvbmUgdGhpcyB3YXkuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXG4gICAgICAgIGMgPSB7fTtcbiAgICAgICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgYy5faSA9IGlucHV0O1xuICAgICAgICBjLl9mID0gZm9ybWF0O1xuICAgICAgICBjLl9sID0gbG9jYWxlO1xuICAgICAgICBjLl9zdHJpY3QgPSBzdHJpY3Q7XG4gICAgICAgIGMuX2lzVVRDID0gZmFsc2U7XG4gICAgICAgIGMuX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuXG4gICAgICAgIHJldHVybiBtYWtlTW9tZW50KGMpO1xuICAgIH07XG5cbiAgICBtb21lbnQuc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID0gZmFsc2U7XG5cbiAgICBtb21lbnQuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQgY29uc3RydWN0aW9uIGZhbGxzIGJhY2sgdG8ganMgRGF0ZS4gVGhpcyBpcyAnICtcbiAgICAgICAgJ2Rpc2NvdXJhZ2VkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdXBjb21pbmcgbWFqb3IgJyArXG4gICAgICAgICdyZWxlYXNlLiBQbGVhc2UgcmVmZXIgdG8gJyArXG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQwNyBmb3IgbW9yZSBpbmZvLicsXG4gICAgICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcbiAgICAvLyBvdGhlci4gVGhpcyByZWxpZXMgb24gdGhlIGZ1bmN0aW9uIGZuIHRvIGJlIHRyYW5zaXRpdmUuXG4gICAgLy9cbiAgICAvLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXG4gICAgLy8gZmlyc3QgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cy5cbiAgICBmdW5jdGlvbiBwaWNrQnkoZm4sIG1vbWVudHMpIHtcbiAgICAgICAgdmFyIHJlcywgaTtcbiAgICAgICAgaWYgKG1vbWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkobW9tZW50c1swXSkpIHtcbiAgICAgICAgICAgIG1vbWVudHMgPSBtb21lbnRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXMgPSBtb21lbnRzWzBdO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbW9tZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKG1vbWVudHNbaV1bZm5dKHJlcykpIHtcbiAgICAgICAgICAgICAgICByZXMgPSBtb21lbnRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgbW9tZW50Lm1pbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgcmV0dXJuIHBpY2tCeSgnaXNCZWZvcmUnLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgbW9tZW50Lm1heCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgcmV0dXJuIHBpY2tCeSgnaXNBZnRlcicsIGFyZ3MpO1xuICAgIH07XG5cbiAgICAvLyBjcmVhdGluZyB3aXRoIHV0Y1xuICAgIG1vbWVudC51dGMgPSBmdW5jdGlvbiAoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihsb2NhbGUpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgICAgICAgYyA9IHt9O1xuICAgICAgICBjLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xuICAgICAgICBjLl91c2VVVEMgPSB0cnVlO1xuICAgICAgICBjLl9pc1VUQyA9IHRydWU7XG4gICAgICAgIGMuX2wgPSBsb2NhbGU7XG4gICAgICAgIGMuX2kgPSBpbnB1dDtcbiAgICAgICAgYy5fZiA9IGZvcm1hdDtcbiAgICAgICAgYy5fc3RyaWN0ID0gc3RyaWN0O1xuICAgICAgICBjLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcblxuICAgICAgICByZXR1cm4gbWFrZU1vbWVudChjKS51dGMoKTtcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRpbmcgd2l0aCB1bml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcylcbiAgICBtb21lbnQudW5peCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KGlucHV0ICogMTAwMCk7XG4gICAgfTtcblxuICAgIC8vIGR1cmF0aW9uXG4gICAgbW9tZW50LmR1cmF0aW9uID0gZnVuY3Rpb24gKGlucHV0LCBrZXkpIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gaW5wdXQsXG4gICAgICAgICAgICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuICAgICAgICAgICAgbWF0Y2ggPSBudWxsLFxuICAgICAgICAgICAgc2lnbixcbiAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgIHBhcnNlSXNvLFxuICAgICAgICAgICAgZGlmZlJlcztcblxuICAgICAgICBpZiAobW9tZW50LmlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBtczogaW5wdXQuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgICAgICBkOiBpbnB1dC5fZGF5cyxcbiAgICAgICAgICAgICAgICBNOiBpbnB1dC5fbW9udGhzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb25ba2V5XSA9IGlucHV0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZHMgPSBpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghIShtYXRjaCA9IGFzcE5ldFRpbWVTcGFuSnNvblJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICAgICAgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgZDogdG9JbnQobWF0Y2hbREFURV0pICogc2lnbixcbiAgICAgICAgICAgICAgICBoOiB0b0ludChtYXRjaFtIT1VSXSkgKiBzaWduLFxuICAgICAgICAgICAgICAgIG06IHRvSW50KG1hdGNoW01JTlVURV0pICogc2lnbixcbiAgICAgICAgICAgICAgICBzOiB0b0ludChtYXRjaFtTRUNPTkRdKSAqIHNpZ24sXG4gICAgICAgICAgICAgICAgbXM6IHRvSW50KG1hdGNoW01JTExJU0VDT05EXSkgKiBzaWduXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gaXNvRHVyYXRpb25SZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgICAgIHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IDE7XG4gICAgICAgICAgICBwYXJzZUlzbyA9IGZ1bmN0aW9uIChpbnApIHtcbiAgICAgICAgICAgICAgICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAgICAgICAgICAgICAgIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICAgICAgICAgICAgICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XG4gICAgICAgICAgICAgICAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHk6IHBhcnNlSXNvKG1hdGNoWzJdKSxcbiAgICAgICAgICAgICAgICBNOiBwYXJzZUlzbyhtYXRjaFszXSksXG4gICAgICAgICAgICAgICAgZDogcGFyc2VJc28obWF0Y2hbNF0pLFxuICAgICAgICAgICAgICAgIGg6IHBhcnNlSXNvKG1hdGNoWzVdKSxcbiAgICAgICAgICAgICAgICBtOiBwYXJzZUlzbyhtYXRjaFs2XSksXG4gICAgICAgICAgICAgICAgczogcGFyc2VJc28obWF0Y2hbN10pLFxuICAgICAgICAgICAgICAgIHc6IHBhcnNlSXNvKG1hdGNoWzhdKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7Ly8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgKCdmcm9tJyBpbiBkdXJhdGlvbiB8fCAndG8nIGluIGR1cmF0aW9uKSkge1xuICAgICAgICAgICAgZGlmZlJlcyA9IG1vbWVudHNEaWZmZXJlbmNlKG1vbWVudChkdXJhdGlvbi5mcm9tKSwgbW9tZW50KGR1cmF0aW9uLnRvKSk7XG5cbiAgICAgICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgICAgICBkdXJhdGlvbi5tcyA9IGRpZmZSZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgZHVyYXRpb24uTSA9IGRpZmZSZXMubW9udGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gbmV3IER1cmF0aW9uKGR1cmF0aW9uKTtcblxuICAgICAgICBpZiAobW9tZW50LmlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfbG9jYWxlJykpIHtcbiAgICAgICAgICAgIHJldC5fbG9jYWxlID0gaW5wdXQuX2xvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIC8vIHZlcnNpb24gbnVtYmVyXG4gICAgbW9tZW50LnZlcnNpb24gPSBWRVJTSU9OO1xuXG4gICAgLy8gZGVmYXVsdCBmb3JtYXRcbiAgICBtb21lbnQuZGVmYXVsdEZvcm1hdCA9IGlzb0Zvcm1hdDtcblxuICAgIC8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBJU08gc3RhbmRhcmRcbiAgICBtb21lbnQuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIFBsdWdpbnMgdGhhdCBhZGQgcHJvcGVydGllcyBzaG91bGQgYWxzbyBhZGQgdGhlIGtleSBoZXJlIChudWxsIHZhbHVlKSxcbiAgICAvLyBzbyB3ZSBjYW4gcHJvcGVybHkgY2xvbmUgb3Vyc2VsdmVzLlxuICAgIG1vbWVudC5tb21lbnRQcm9wZXJ0aWVzID0gbW9tZW50UHJvcGVydGllcztcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbiAgICAvLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbiAgICBtb21lbnQudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbiAgICBtb21lbnQucmVsYXRpdmVUaW1lVGhyZXNob2xkID0gZnVuY3Rpb24gKHRocmVzaG9sZCwgbGltaXQpIHtcbiAgICAgICAgaWYgKHJlbGF0aXZlVGltZVRocmVzaG9sZHNbdGhyZXNob2xkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZWxhdGl2ZVRpbWVUaHJlc2hvbGRzW3RocmVzaG9sZF07XG4gICAgICAgIH1cbiAgICAgICAgcmVsYXRpdmVUaW1lVGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBtb21lbnQubGFuZyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbWVudC5sYW5nIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlIGluc3RlYWQuJyxcbiAgICAgICAgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQubG9jYWxlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIGxvY2FsZSBhbmQgdGhlbiBzZXQgdGhlIGdsb2JhbCBsb2NhbGUuICBJZlxuICAgIC8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4gICAgLy8gbG9jYWxlIGtleS5cbiAgICBtb21lbnQubG9jYWxlID0gZnVuY3Rpb24gKGtleSwgdmFsdWVzKSB7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKHZhbHVlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IG1vbWVudC5sb2NhbGVEYXRhKGtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9tZW50Ll9sb2NhbGUuX2FiYnI7XG4gICAgfTtcblxuICAgIG1vbWVudC5kZWZpbmVMb2NhbGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWVzKSB7XG4gICAgICAgIGlmICh2YWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlcy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgIGlmICghbG9jYWxlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NhbGVzW25hbWVdLnNldCh2YWx1ZXMpO1xuXG4gICAgICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgICAgIG1vbWVudC5sb2NhbGUobmFtZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdXNlZnVsIGZvciB0ZXN0aW5nXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1vbWVudC5sYW5nRGF0YSA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbWVudC5sYW5nRGF0YSBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZURhdGEgaW5zdGVhZC4nLFxuICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50LmxvY2FsZURhdGEoa2V5KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyByZXR1cm5zIGxvY2FsZSBkYXRhXG4gICAgbW9tZW50LmxvY2FsZURhdGEgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBsb2NhbGU7XG5cbiAgICAgICAgaWYgKGtleSAmJiBrZXkuX2xvY2FsZSAmJiBrZXkuX2xvY2FsZS5fYWJicikge1xuICAgICAgICAgICAga2V5ID0ga2V5Ll9sb2NhbGUuX2FiYnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudC5fbG9jYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgIC8vc2hvcnQtY2lyY3VpdCBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5ID0gW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hvb3NlTG9jYWxlKGtleSk7XG4gICAgfTtcblxuICAgIC8vIGNvbXBhcmUgbW9tZW50IG9iamVjdFxuICAgIG1vbWVudC5pc01vbWVudCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1vbWVudCB8fFxuICAgICAgICAgICAgKG9iaiAhPSBudWxsICYmIGhhc093blByb3Aob2JqLCAnX2lzQU1vbWVudE9iamVjdCcpKTtcbiAgICB9O1xuXG4gICAgLy8gZm9yIHR5cGVjaGVja2luZyBEdXJhdGlvbiBvYmplY3RzXG4gICAgbW9tZW50LmlzRHVyYXRpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbiAgICB9O1xuXG4gICAgZm9yIChpID0gbGlzdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgbWFrZUxpc3QobGlzdHNbaV0pO1xuICAgIH1cblxuICAgIG1vbWVudC5ub3JtYWxpemVVbml0cyA9IGZ1bmN0aW9uICh1bml0cykge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIH07XG5cbiAgICBtb21lbnQuaW52YWxpZCA9IGZ1bmN0aW9uIChmbGFncykge1xuICAgICAgICB2YXIgbSA9IG1vbWVudC51dGMoTmFOKTtcbiAgICAgICAgaWYgKGZsYWdzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGV4dGVuZChtLl9wZiwgZmxhZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbS5fcGYudXNlckludmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtO1xuICAgIH07XG5cbiAgICBtb21lbnQucGFyc2Vab25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbW9tZW50LmFwcGx5KG51bGwsIGFyZ3VtZW50cykucGFyc2Vab25lKCk7XG4gICAgfTtcblxuICAgIG1vbWVudC5wYXJzZVR3b0RpZ2l0WWVhciA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gdG9JbnQoaW5wdXQpICsgKHRvSW50KGlucHV0KSA+IDY4ID8gMTkwMCA6IDIwMDApO1xuICAgIH07XG5cbiAgICBtb21lbnQuaXNEYXRlID0gaXNEYXRlO1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBNb21lbnQgUHJvdG90eXBlXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgICBleHRlbmQobW9tZW50LmZuID0gTW9tZW50LnByb3RvdHlwZSwge1xuXG4gICAgICAgIGNsb25lIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICB2YWx1ZU9mIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICt0aGlzLl9kIC0gKCh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5peCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCt0aGlzIC8gMTAwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9EYXRlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldCA/IG5ldyBEYXRlKCt0aGlzKSA6IHRoaXMuX2Q7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9JU09TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbSA9IG1vbWVudCh0aGlzKS51dGMoKTtcbiAgICAgICAgICAgIGlmICgwIDwgbS55ZWFyKCkgJiYgbS55ZWFyKCkgPD0gOTk5OSkge1xuICAgICAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB0b0FycmF5IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG0gPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBtLnllYXIoKSxcbiAgICAgICAgICAgICAgICBtLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgbS5kYXRlKCksXG4gICAgICAgICAgICAgICAgbS5ob3VycygpLFxuICAgICAgICAgICAgICAgIG0ubWludXRlcygpLFxuICAgICAgICAgICAgICAgIG0uc2Vjb25kcygpLFxuICAgICAgICAgICAgICAgIG0ubWlsbGlzZWNvbmRzKClcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNWYWxpZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkKHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzRFNUU2hpZnRlZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpICYmIGNvbXBhcmVBcnJheXModGhpcy5fYSwgKHRoaXMuX2lzVVRDID8gbW9tZW50LnV0Yyh0aGlzLl9hKSA6IG1vbWVudCh0aGlzLl9hKSkudG9BcnJheSgpKSA+IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzaW5nRmxhZ3MgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLl9wZik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW52YWxpZEF0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGYub3ZlcmZsb3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXRjIDogZnVuY3Rpb24gKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsb2NhbCA6IGZ1bmN0aW9uIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJ0cmFjdCh0aGlzLl9kYXRlVXRjT2Zmc2V0KCksICdtJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9ybWF0IDogZnVuY3Rpb24gKGlucHV0U3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nIHx8IG1vbWVudC5kZWZhdWx0Rm9ybWF0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5wb3N0Zm9ybWF0KG91dHB1dCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkIDogY3JlYXRlQWRkZXIoMSwgJ2FkZCcpLFxuXG4gICAgICAgIHN1YnRyYWN0IDogY3JlYXRlQWRkZXIoLTEsICdzdWJ0cmFjdCcpLFxuXG4gICAgICAgIGRpZmYgOiBmdW5jdGlvbiAoaW5wdXQsIHVuaXRzLCBhc0Zsb2F0KSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IG1ha2VBcyhpbnB1dCwgdGhpcyksXG4gICAgICAgICAgICAgICAgem9uZURpZmYgPSAodGhhdC51dGNPZmZzZXQoKSAtIHRoaXMudXRjT2Zmc2V0KCkpICogNmU0LFxuICAgICAgICAgICAgICAgIGFuY2hvciwgZGlmZiwgb3V0cHV0LCBkYXlzQWRqdXN0O1xuXG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgICAgICAgICAgaWYgKHVuaXRzID09PSAneWVhcicgfHwgdW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICdxdWFydGVyJykge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KTtcbiAgICAgICAgICAgICAgICBpZiAodW5pdHMgPT09ICdxdWFydGVyJykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgLyAzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgLyAxMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpZmYgPSB0aGlzIC0gdGhhdDtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSB1bml0cyA9PT0gJ3NlY29uZCcgPyBkaWZmIC8gMWUzIDogLy8gMTAwMFxuICAgICAgICAgICAgICAgICAgICB1bml0cyA9PT0gJ21pbnV0ZScgPyBkaWZmIC8gNmU0IDogLy8gMTAwMCAqIDYwXG4gICAgICAgICAgICAgICAgICAgIHVuaXRzID09PSAnaG91cicgPyBkaWZmIC8gMzZlNSA6IC8vIDEwMDAgKiA2MCAqIDYwXG4gICAgICAgICAgICAgICAgICAgIHVuaXRzID09PSAnZGF5JyA/IChkaWZmIC0gem9uZURpZmYpIC8gODY0ZTUgOiAvLyAxMDAwICogNjAgKiA2MCAqIDI0LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICAgICAgICAgIHVuaXRzID09PSAnd2VlaycgPyAoZGlmZiAtIHpvbmVEaWZmKSAvIDYwNDhlNSA6IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICAgICAgICAgIGRpZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXNGbG9hdCA/IG91dHB1dCA6IGFic1JvdW5kKG91dHB1dCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZnJvbSA6IGZ1bmN0aW9uICh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHt0bzogdGhpcywgZnJvbTogdGltZX0pLmxvY2FsZSh0aGlzLmxvY2FsZSgpKS5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZnJvbU5vdyA6IGZ1bmN0aW9uICh3aXRob3V0U3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tKG1vbWVudCgpLCB3aXRob3V0U3VmZml4KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxlbmRhciA6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgICAgICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAgICAgICAgICAgLy8gR2V0dGluZyBzdGFydC1vZi10b2RheSBkZXBlbmRzIG9uIHdoZXRoZXIgd2UncmUgbG9jYXQvdXRjL29mZnNldFxuICAgICAgICAgICAgLy8gb3Igbm90LlxuICAgICAgICAgICAgdmFyIG5vdyA9IHRpbWUgfHwgbW9tZW50KCksXG4gICAgICAgICAgICAgICAgc29kID0gbWFrZUFzKG5vdywgdGhpcykuc3RhcnRPZignZGF5JyksXG4gICAgICAgICAgICAgICAgZGlmZiA9IHRoaXMuZGlmZihzb2QsICdkYXlzJywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZGlmZiA8IC02ID8gJ3NhbWVFbHNlJyA6XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPCAtMSA/ICdsYXN0V2VlaycgOlxuICAgICAgICAgICAgICAgICAgICBkaWZmIDwgMCA/ICdsYXN0RGF5JyA6XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPCAxID8gJ3NhbWVEYXknIDpcbiAgICAgICAgICAgICAgICAgICAgZGlmZiA8IDIgPyAnbmV4dERheScgOlxuICAgICAgICAgICAgICAgICAgICBkaWZmIDwgNyA/ICduZXh0V2VlaycgOiAnc2FtZUVsc2UnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMubG9jYWxlRGF0YSgpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcywgbW9tZW50KG5vdykpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc0xlYXBZZWFyIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzRFNUIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDApLnV0Y09mZnNldCgpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCg1KS51dGNPZmZzZXQoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF5IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgZGF5ID0gdGhpcy5faXNVVEMgPyB0aGlzLl9kLmdldFVUQ0RheSgpIDogdGhpcy5fZC5nZXREYXkoKTtcbiAgICAgICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoaW5wdXQgLSBkYXksICdkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW9udGggOiBtYWtlQWNjZXNzb3IoJ01vbnRoJywgdHJ1ZSksXG5cbiAgICAgICAgc3RhcnRPZiA6IGZ1bmN0aW9uICh1bml0cykge1xuICAgICAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIHN3aXRjaCBpbnRlbnRpb25hbGx5IG9taXRzIGJyZWFrIGtleXdvcmRzXG4gICAgICAgICAgICAvLyB0byB1dGlsaXplIGZhbGxpbmcgdGhyb3VnaCB0aGUgY2FzZXMuXG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKDApO1xuICAgICAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgxKTtcbiAgICAgICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXJzKDApO1xuICAgICAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIHRoaXMubWludXRlcygwKTtcbiAgICAgICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kcygwKTtcbiAgICAgICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMubWlsbGlzZWNvbmRzKDApO1xuICAgICAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2Vla3MgYXJlIGEgc3BlY2lhbCBjYXNlXG4gICAgICAgICAgICBpZiAodW5pdHMgPT09ICd3ZWVrJykge1xuICAgICAgICAgICAgICAgIHRoaXMud2Vla2RheSgwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pdHMgPT09ICdpc29XZWVrJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNvV2Vla2RheSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcXVhcnRlcnMgYXJlIGFsc28gc3BlY2lhbFxuICAgICAgICAgICAgaWYgKHVuaXRzID09PSAncXVhcnRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKE1hdGguZmxvb3IodGhpcy5tb250aCgpIC8gMykgKiAzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW5kT2Y6IGZ1bmN0aW9uICh1bml0cykge1xuICAgICAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgICAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRPZih1bml0cykuYWRkKDEsICh1bml0cyA9PT0gJ2lzb1dlZWsnID8gJ3dlZWsnIDogdW5pdHMpKS5zdWJ0cmFjdCgxLCAnbXMnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc0FmdGVyOiBmdW5jdGlvbiAoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXRNcztcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModHlwZW9mIHVuaXRzICE9PSAndW5kZWZpbmVkJyA/IHVuaXRzIDogJ21pbGxpc2Vjb25kJyk7XG4gICAgICAgICAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IG1vbWVudC5pc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IG1vbWVudChpbnB1dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICt0aGlzID4gK2lucHV0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dE1zID0gbW9tZW50LmlzTW9tZW50KGlucHV0KSA/ICtpbnB1dCA6ICttb21lbnQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dE1zIDwgK3RoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpc0JlZm9yZTogZnVuY3Rpb24gKGlucHV0LCB1bml0cykge1xuICAgICAgICAgICAgdmFyIGlucHV0TXM7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHR5cGVvZiB1bml0cyAhPT0gJ3VuZGVmaW5lZCcgPyB1bml0cyA6ICdtaWxsaXNlY29uZCcpO1xuICAgICAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBtb21lbnQuaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBtb21lbnQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiArdGhpcyA8ICtpbnB1dDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXRNcyA9IG1vbWVudC5pc01vbWVudChpbnB1dCkgPyAraW5wdXQgOiArbW9tZW50KGlucHV0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gK3RoaXMuY2xvbmUoKS5lbmRPZih1bml0cykgPCBpbnB1dE1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGlzQmV0d2VlbjogZnVuY3Rpb24gKGZyb20sIHRvLCB1bml0cykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNBZnRlcihmcm9tLCB1bml0cykgJiYgdGhpcy5pc0JlZm9yZSh0bywgdW5pdHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzU2FtZTogZnVuY3Rpb24gKGlucHV0LCB1bml0cykge1xuICAgICAgICAgICAgdmFyIGlucHV0TXM7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzIHx8ICdtaWxsaXNlY29uZCcpO1xuICAgICAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBtb21lbnQuaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBtb21lbnQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiArdGhpcyA9PT0gK2lucHV0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dE1zID0gK21vbWVudChpbnB1dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICsodGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpKSA8PSBpbnB1dE1zICYmIGlucHV0TXMgPD0gKyh0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtaW46IGRlcHJlY2F0ZShcbiAgICAgICAgICAgICAgICAgJ21vbWVudCgpLm1pbiBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1pbiBpbnN0ZWFkLiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTU0OCcsXG4gICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICAgICAgICAgICAgICAgb3RoZXIgPSBtb21lbnQuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvdGhlciA8IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICksXG5cbiAgICAgICAgbWF4OiBkZXByZWNhdGUoXG4gICAgICAgICAgICAgICAgJ21vbWVudCgpLm1heCBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTU0OCcsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyID0gbW9tZW50LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdGhlciA+IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApLFxuXG4gICAgICAgIHpvbmUgOiBkZXByZWNhdGUoXG4gICAgICAgICAgICAgICAgJ21vbWVudCgpLnpvbmUgaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudCgpLnV0Y09mZnNldCBpbnN0ZWFkLiAnICtcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE3NzknLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IC1pbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKSxcblxuICAgICAgICAvLyBrZWVwTG9jYWxUaW1lID0gdHJ1ZSBtZWFucyBvbmx5IGNoYW5nZSB0aGUgdGltZXpvbmUsIHdpdGhvdXRcbiAgICAgICAgLy8gYWZmZWN0aW5nIHRoZSBsb2NhbCBob3VyLiBTbyA1OjMxOjI2ICswMzAwIC0tW3V0Y09mZnNldCgyLCB0cnVlKV0tLT5cbiAgICAgICAgLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuICAgICAgICAvLyArMDIwMCwgc28gd2UgYWRqdXN0IHRoZSB0aW1lIGFzIG5lZWRlZCwgdG8gYmUgdmFsaWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuICAgICAgICAvLyBmcm9tIHRoZSBhY3R1YWwgcmVwcmVzZW50ZWQgdGltZS4gVGhhdCBpcyB3aHkgd2UgY2FsbCB1cGRhdGVPZmZzZXRcbiAgICAgICAgLy8gYSBzZWNvbmQgdGltZS4gSW4gY2FzZSBpdCB3YW50cyB1cyB0byBjaGFuZ2UgdGhlIG9mZnNldCBhZ2FpblxuICAgICAgICAvLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2VcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc3VjaCB0aW1lIGluIHRoZSBnaXZlbiB0aW1lem9uZS5cbiAgICAgICAgdXRjT2Zmc2V0IDogZnVuY3Rpb24gKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fb2Zmc2V0IHx8IDAsXG4gICAgICAgICAgICAgICAgbG9jYWxBZGp1c3Q7XG4gICAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdXRjT2Zmc2V0RnJvbVN0cmluZyhpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNikge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0ICogNjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbEFkanVzdCA9IHRoaXMuX2RhdGVVdGNPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNVVEMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbEFkanVzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGxvY2FsQWRqdXN0LCAnbScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkT3JTdWJ0cmFjdER1cmF0aW9uRnJvbU1vbWVudCh0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQuZHVyYXRpb24oaW5wdXQgLSBvZmZzZXQsICdtJyksIDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gb2Zmc2V0IDogdGhpcy5fZGF0ZVV0Y09mZnNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGlzTG9jYWwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuX2lzVVRDO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzVXRjT2Zmc2V0IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzVXRjIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMDtcbiAgICAgICAgfSxcblxuICAgICAgICB6b25lQWJiciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/ICdVVEMnIDogJyc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgem9uZU5hbWUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2Vab25lIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3R6bSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KHRoaXMuX3R6bSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KHV0Y09mZnNldEZyb21TdHJpbmcodGhpcy5faSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzQWxpZ25lZEhvdXJPZmZzZXQgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IG1vbWVudChpbnB1dCkudXRjT2Zmc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAodGhpcy51dGNPZmZzZXQoKSAtIGlucHV0KSAlIDYwID09PSAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRheXNJbk1vbnRoIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRheU9mWWVhciA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIGRheU9mWWVhciA9IHJvdW5kKChtb21lbnQodGhpcykuc3RhcnRPZignZGF5JykgLSBtb21lbnQodGhpcykuc3RhcnRPZigneWVhcicpKSAvIDg2NGU1KSArIDE7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKChpbnB1dCAtIGRheU9mWWVhciksICdkJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcXVhcnRlciA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMykgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArIHRoaXMubW9udGgoKSAlIDMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHdlZWtZZWFyIDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgeWVhciA9IHdlZWtPZlllYXIodGhpcywgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LCB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3kpLnllYXI7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHllYXIgOiB0aGlzLmFkZCgoaW5wdXQgLSB5ZWFyKSwgJ3knKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc29XZWVrWWVhciA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIHllYXIgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLnllYXI7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHllYXIgOiB0aGlzLmFkZCgoaW5wdXQgLSB5ZWFyKSwgJ3knKTtcbiAgICAgICAgfSxcblxuICAgICAgICB3ZWVrIDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgd2VlayA9IHRoaXMubG9jYWxlRGF0YSgpLndlZWsodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNvV2VlayA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2Vla2RheSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2Vla2RheSA6IHRoaXMuYWRkKGlucHV0IC0gd2Vla2RheSwgJ2QnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc29XZWVrZGF5IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gICAgICAgICAgICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAgICAgICAgICAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB0aGlzLmRheSgpIHx8IDcgOiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IGlucHV0IDogaW5wdXQgLSA3KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc29XZWVrc0luWWVhciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgMSwgNCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2Vla3NJblllYXIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcbiAgICAgICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgd2Vla0luZm8uZG93LCB3ZWVrSW5mby5kb3kpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCA6IGZ1bmN0aW9uICh1bml0cykge1xuICAgICAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bml0c10oKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgOiBmdW5jdGlvbiAodW5pdHMsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgdW5pdDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdW5pdHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yICh1bml0IGluIHVuaXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KHVuaXQsIHVuaXRzW3VuaXRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbdW5pdHNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbdW5pdHNdKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBJZiBwYXNzZWQgYSBsb2NhbGUga2V5LCBpdCB3aWxsIHNldCB0aGUgbG9jYWxlIGZvciB0aGlzXG4gICAgICAgIC8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgLy8gdmFyaWFibGVzIGZvciB0aGlzIGluc3RhbmNlLlxuICAgICAgICBsb2NhbGUgOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgbmV3TG9jYWxlRGF0YTtcblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3TG9jYWxlRGF0YSA9IG1vbWVudC5sb2NhbGVEYXRhKGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2NhbGUgPSBuZXdMb2NhbGVEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBsYW5nIDogZGVwcmVjYXRlKFxuICAgICAgICAgICAgJ21vbWVudCgpLmxhbmcoKSBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkLCB1c2UgbW9tZW50KCkubG9jYWxlRGF0YSgpIHRvIGdldCB0aGUgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbi4gVXNlIG1vbWVudCgpLmxvY2FsZSgpIHRvIGNoYW5nZSBsYW5ndWFnZXMuJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKSxcblxuICAgICAgICBsb2NhbGVEYXRhIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZGF0ZVV0Y09mZnNldCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcbiAgICAgICAgICAgIHJldHVybiAtTWF0aC5yb3VuZCh0aGlzLl9kLmdldFRpbWV6b25lT2Zmc2V0KCkgLyAxNSkgKiAxNTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiByYXdNb250aFNldHRlcihtb20sIHZhbHVlKSB7XG4gICAgICAgIHZhciBkYXlPZk1vbnRoO1xuXG4gICAgICAgIC8vIFRPRE86IE1vdmUgdGhpcyBvdXQgb2YgaGVyZSFcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbW9tLmxvY2FsZURhdGEoKS5tb250aHNQYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBBbm90aGVyIHNpbGVudCBmYWlsdXJlP1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF5T2ZNb250aCA9IE1hdGgubWluKG1vbS5kYXRlKCksXG4gICAgICAgICAgICAgICAgZGF5c0luTW9udGgobW9tLnllYXIoKSwgdmFsdWUpKTtcbiAgICAgICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArICdNb250aCddKHZhbHVlLCBkYXlPZk1vbnRoKTtcbiAgICAgICAgcmV0dXJuIG1vbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYXdHZXR0ZXIobW9tLCB1bml0KSB7XG4gICAgICAgIHJldHVybiBtb20uX2RbJ2dldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByYXdTZXR0ZXIobW9tLCB1bml0LCB2YWx1ZSkge1xuICAgICAgICBpZiAodW5pdCA9PT0gJ01vbnRoJykge1xuICAgICAgICAgICAgcmV0dXJuIHJhd01vbnRoU2V0dGVyKG1vbSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlQWNjZXNzb3IodW5pdCwga2VlcFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByYXdTZXR0ZXIodGhpcywgdW5pdCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIG1vbWVudC51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmF3R2V0dGVyKHRoaXMsIHVuaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG1vbWVudC5mbi5taWxsaXNlY29uZCA9IG1vbWVudC5mbi5taWxsaXNlY29uZHMgPSBtYWtlQWNjZXNzb3IoJ01pbGxpc2Vjb25kcycsIGZhbHNlKTtcbiAgICBtb21lbnQuZm4uc2Vjb25kID0gbW9tZW50LmZuLnNlY29uZHMgPSBtYWtlQWNjZXNzb3IoJ1NlY29uZHMnLCBmYWxzZSk7XG4gICAgbW9tZW50LmZuLm1pbnV0ZSA9IG1vbWVudC5mbi5taW51dGVzID0gbWFrZUFjY2Vzc29yKCdNaW51dGVzJywgZmFsc2UpO1xuICAgIC8vIFNldHRpbmcgdGhlIGhvdXIgc2hvdWxkIGtlZXAgdGhlIHRpbWUsIGJlY2F1c2UgdGhlIHVzZXIgZXhwbGljaXRseVxuICAgIC8vIHNwZWNpZmllZCB3aGljaCBob3VyIGhlIHdhbnRzLiBTbyB0cnlpbmcgdG8gbWFpbnRhaW4gdGhlIHNhbWUgaG91ciAoaW5cbiAgICAvLyBhIG5ldyB0aW1lem9uZSkgbWFrZXMgc2Vuc2UuIEFkZGluZy9zdWJ0cmFjdGluZyBob3VycyBkb2VzIG5vdCBmb2xsb3dcbiAgICAvLyB0aGlzIHJ1bGUuXG4gICAgbW9tZW50LmZuLmhvdXIgPSBtb21lbnQuZm4uaG91cnMgPSBtYWtlQWNjZXNzb3IoJ0hvdXJzJywgdHJ1ZSk7XG4gICAgLy8gbW9tZW50LmZuLm1vbnRoIGlzIGRlZmluZWQgc2VwYXJhdGVseVxuICAgIG1vbWVudC5mbi5kYXRlID0gbWFrZUFjY2Vzc29yKCdEYXRlJywgdHJ1ZSk7XG4gICAgbW9tZW50LmZuLmRhdGVzID0gZGVwcmVjYXRlKCdkYXRlcyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgZGF0ZSBpbnN0ZWFkLicsIG1ha2VBY2Nlc3NvcignRGF0ZScsIHRydWUpKTtcbiAgICBtb21lbnQuZm4ueWVhciA9IG1ha2VBY2Nlc3NvcignRnVsbFllYXInLCB0cnVlKTtcbiAgICBtb21lbnQuZm4ueWVhcnMgPSBkZXByZWNhdGUoJ3llYXJzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSB5ZWFyIGluc3RlYWQuJywgbWFrZUFjY2Vzc29yKCdGdWxsWWVhcicsIHRydWUpKTtcblxuICAgIC8vIGFkZCBwbHVyYWwgbWV0aG9kc1xuICAgIG1vbWVudC5mbi5kYXlzID0gbW9tZW50LmZuLmRheTtcbiAgICBtb21lbnQuZm4ubW9udGhzID0gbW9tZW50LmZuLm1vbnRoO1xuICAgIG1vbWVudC5mbi53ZWVrcyA9IG1vbWVudC5mbi53ZWVrO1xuICAgIG1vbWVudC5mbi5pc29XZWVrcyA9IG1vbWVudC5mbi5pc29XZWVrO1xuICAgIG1vbWVudC5mbi5xdWFydGVycyA9IG1vbWVudC5mbi5xdWFydGVyO1xuXG4gICAgLy8gYWRkIGFsaWFzZWQgZm9ybWF0IG1ldGhvZHNcbiAgICBtb21lbnQuZm4udG9KU09OID0gbW9tZW50LmZuLnRvSVNPU3RyaW5nO1xuXG4gICAgLy8gYWxpYXMgaXNVdGMgZm9yIGRldi1mcmllbmRsaW5lc3NcbiAgICBtb21lbnQuZm4uaXNVVEMgPSBtb21lbnQuZm4uaXNVdGM7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIER1cmF0aW9uIFByb3RvdHlwZVxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gICAgZnVuY3Rpb24gZGF5c1RvWWVhcnMgKGRheXMpIHtcbiAgICAgICAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAgICAgICByZXR1cm4gZGF5cyAqIDQwMCAvIDE0NjA5NztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB5ZWFyc1RvRGF5cyAoeWVhcnMpIHtcbiAgICAgICAgLy8geWVhcnMgKiAzNjUgKyBhYnNSb3VuZCh5ZWFycyAvIDQpIC1cbiAgICAgICAgLy8gICAgIGFic1JvdW5kKHllYXJzIC8gMTAwKSArIGFic1JvdW5kKHllYXJzIC8gNDAwKTtcbiAgICAgICAgcmV0dXJuIHllYXJzICogMTQ2MDk3IC8gNDAwO1xuICAgIH1cblxuICAgIGV4dGVuZChtb21lbnQuZHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGUsIHtcblxuICAgICAgICBfYnViYmxlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyxcbiAgICAgICAgICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMsXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RhdGEsXG4gICAgICAgICAgICAgICAgc2Vjb25kcywgbWludXRlcywgaG91cnMsIHllYXJzID0gMDtcblxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGJ1YmJsZXMgdXAgdmFsdWVzLCBzZWUgdGhlIHRlc3RzIGZvclxuICAgICAgICAgICAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICAgICAgICAgICAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gICAgICAgICAgICBzZWNvbmRzID0gYWJzUm91bmQobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gICAgICAgICAgICBkYXRhLnNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgICAgICAgICAgIG1pbnV0ZXMgPSBhYnNSb3VuZChzZWNvbmRzIC8gNjApO1xuICAgICAgICAgICAgZGF0YS5taW51dGVzID0gbWludXRlcyAlIDYwO1xuXG4gICAgICAgICAgICBob3VycyA9IGFic1JvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgICAgICAgICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcblxuICAgICAgICAgICAgZGF5cyArPSBhYnNSb3VuZChob3VycyAvIDI0KTtcblxuICAgICAgICAgICAgLy8gQWNjdXJhdGVseSBjb252ZXJ0IGRheXMgdG8geWVhcnMsIGFzc3VtZSBzdGFydCBmcm9tIHllYXIgMC5cbiAgICAgICAgICAgIHllYXJzID0gYWJzUm91bmQoZGF5c1RvWWVhcnMoZGF5cykpO1xuICAgICAgICAgICAgZGF5cyAtPSBhYnNSb3VuZCh5ZWFyc1RvRGF5cyh5ZWFycykpO1xuXG4gICAgICAgICAgICAvLyAzMCBkYXlzIHRvIGEgbW9udGhcbiAgICAgICAgICAgIC8vIFRPRE8gKGlza3Jlbik6IFVzZSBhbmNob3IgZGF0ZSAobGlrZSAxc3QgSmFuKSB0byBjb21wdXRlIHRoaXMuXG4gICAgICAgICAgICBtb250aHMgKz0gYWJzUm91bmQoZGF5cyAvIDMwKTtcbiAgICAgICAgICAgIGRheXMgJT0gMzA7XG5cbiAgICAgICAgICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICAgICAgICAgIHllYXJzICs9IGFic1JvdW5kKG1vbnRocyAvIDEyKTtcbiAgICAgICAgICAgIG1vbnRocyAlPSAxMjtcblxuICAgICAgICAgICAgZGF0YS5kYXlzID0gZGF5cztcbiAgICAgICAgICAgIGRhdGEubW9udGhzID0gbW9udGhzO1xuICAgICAgICAgICAgZGF0YS55ZWFycyA9IHllYXJzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFicyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IE1hdGguYWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XG4gICAgICAgICAgICB0aGlzLl9kYXlzID0gTWF0aC5hYnModGhpcy5fZGF5cyk7XG4gICAgICAgICAgICB0aGlzLl9tb250aHMgPSBNYXRoLmFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgICAgICAgICB0aGlzLl9kYXRhLm1pbGxpc2Vjb25kcyA9IE1hdGguYWJzKHRoaXMuX2RhdGEubWlsbGlzZWNvbmRzKTtcbiAgICAgICAgICAgIHRoaXMuX2RhdGEuc2Vjb25kcyA9IE1hdGguYWJzKHRoaXMuX2RhdGEuc2Vjb25kcyk7XG4gICAgICAgICAgICB0aGlzLl9kYXRhLm1pbnV0ZXMgPSBNYXRoLmFicyh0aGlzLl9kYXRhLm1pbnV0ZXMpO1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5ob3VycyA9IE1hdGguYWJzKHRoaXMuX2RhdGEuaG91cnMpO1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5tb250aHMgPSBNYXRoLmFicyh0aGlzLl9kYXRhLm1vbnRocyk7XG4gICAgICAgICAgICB0aGlzLl9kYXRhLnllYXJzID0gTWF0aC5hYnModGhpcy5fZGF0YS55ZWFycyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHdlZWtzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFic1JvdW5kKHRoaXMuZGF5cygpIC8gNyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsdWVPZiA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9taWxsaXNlY29uZHMgK1xuICAgICAgICAgICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xuICAgICAgICAgICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcbiAgICAgICAgICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNjtcbiAgICAgICAgfSxcblxuICAgICAgICBodW1hbml6ZSA6IGZ1bmN0aW9uICh3aXRoU3VmZml4KSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gcmVsYXRpdmVUaW1lKHRoaXMsICF3aXRoU3VmZml4LCB0aGlzLmxvY2FsZURhdGEoKSk7XG5cbiAgICAgICAgICAgIGlmICh3aXRoU3VmZml4KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gdGhpcy5sb2NhbGVEYXRhKCkucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGQgOiBmdW5jdGlvbiAoaW5wdXQsIHZhbCkge1xuICAgICAgICAgICAgLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgYWRkKDEsICdzJykgb3IgYWRkKG1vbWVudClcbiAgICAgICAgICAgIHZhciBkdXIgPSBtb21lbnQuZHVyYXRpb24oaW5wdXQsIHZhbCk7XG5cbiAgICAgICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyArPSBkdXIuX21pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHRoaXMuX2RheXMgKz0gZHVyLl9kYXlzO1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzICs9IGR1ci5fbW9udGhzO1xuXG4gICAgICAgICAgICB0aGlzLl9idWJibGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3VidHJhY3QgOiBmdW5jdGlvbiAoaW5wdXQsIHZhbCkge1xuICAgICAgICAgICAgdmFyIGR1ciA9IG1vbWVudC5kdXJhdGlvbihpbnB1dCwgdmFsKTtcblxuICAgICAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzIC09IGR1ci5fbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgdGhpcy5fZGF5cyAtPSBkdXIuX2RheXM7XG4gICAgICAgICAgICB0aGlzLl9tb250aHMgLT0gZHVyLl9tb250aHM7XG5cbiAgICAgICAgICAgIHRoaXMuX2J1YmJsZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgOiBmdW5jdGlvbiAodW5pdHMpIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHMudG9Mb3dlckNhc2UoKSArICdzJ10oKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhcyA6IGZ1bmN0aW9uICh1bml0cykge1xuICAgICAgICAgICAgdmFyIGRheXMsIG1vbnRocztcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgICAgICAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICAgICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgdGhpcy5fbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICAgICAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvWWVhcnMoZGF5cykgKiAxMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5pdHMgPT09ICdtb250aCcgPyBtb250aHMgOiBtb250aHMgLyAxMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxuICAgICAgICAgICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZCh5ZWFyc1RvRGF5cyh0aGlzLl9tb250aHMgLyAxMikpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2Vlayc6IHJldHVybiBkYXlzIC8gNyArIHRoaXMuX21pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGF5JzogcmV0dXJuIGRheXMgKyB0aGlzLl9taWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaG91cic6IHJldHVybiBkYXlzICogMjQgKyB0aGlzLl9taWxsaXNlY29uZHMgLyAzNmU1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW51dGUnOiByZXR1cm4gZGF5cyAqIDI0ICogNjAgKyB0aGlzLl9taWxsaXNlY29uZHMgLyA2ZTQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6IHJldHVybiBkYXlzICogMjQgKiA2MCAqIDYwICsgdGhpcy5fbWlsbGlzZWNvbmRzIC8gMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kJzogcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApICsgdGhpcy5fbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdW5pdCAnICsgdW5pdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBsYW5nIDogbW9tZW50LmZuLmxhbmcsXG4gICAgICAgIGxvY2FsZSA6IG1vbWVudC5mbi5sb2NhbGUsXG5cbiAgICAgICAgdG9Jc29TdHJpbmcgOiBkZXByZWNhdGUoXG4gICAgICAgICAgICAndG9Jc29TdHJpbmcoKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHRvSVNPU3RyaW5nKCkgaW5zdGVhZCAnICtcbiAgICAgICAgICAgICcobm90aWNlIHRoZSBjYXBpdGFscyknLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICksXG5cbiAgICAgICAgdG9JU09TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xuICAgICAgICAgICAgdmFyIHllYXJzID0gTWF0aC5hYnModGhpcy55ZWFycygpKSxcbiAgICAgICAgICAgICAgICBtb250aHMgPSBNYXRoLmFicyh0aGlzLm1vbnRocygpKSxcbiAgICAgICAgICAgICAgICBkYXlzID0gTWF0aC5hYnModGhpcy5kYXlzKCkpLFxuICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5hYnModGhpcy5ob3VycygpKSxcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5hYnModGhpcy5taW51dGVzKCkpLFxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLmFicyh0aGlzLnNlY29uZHMoKSArIHRoaXMubWlsbGlzZWNvbmRzKCkgLyAxMDAwKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmFzU2Vjb25kcygpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBDIydzIChOb2RhKSBhbmQgcHl0aG9uIChpc29kYXRlKS4uLlxuICAgICAgICAgICAgICAgIC8vIGJ1dCBub3Qgb3RoZXIgSlMgKGdvb2cuZGF0ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1AwRCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAodGhpcy5hc1NlY29uZHMoKSA8IDAgPyAnLScgOiAnJykgK1xuICAgICAgICAgICAgICAgICdQJyArXG4gICAgICAgICAgICAgICAgKHllYXJzID8geWVhcnMgKyAnWScgOiAnJykgK1xuICAgICAgICAgICAgICAgIChtb250aHMgPyBtb250aHMgKyAnTScgOiAnJykgK1xuICAgICAgICAgICAgICAgIChkYXlzID8gZGF5cyArICdEJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgKChob3VycyB8fCBtaW51dGVzIHx8IHNlY29uZHMpID8gJ1QnIDogJycpICtcbiAgICAgICAgICAgICAgICAoaG91cnMgPyBob3VycyArICdIJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgKG1pbnV0ZXMgPyBtaW51dGVzICsgJ00nIDogJycpICtcbiAgICAgICAgICAgICAgICAoc2Vjb25kcyA/IHNlY29uZHMgKyAnUycgOiAnJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9jYWxlRGF0YSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9KU09OIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9tZW50LmR1cmF0aW9uLmZuLnRvU3RyaW5nID0gbW9tZW50LmR1cmF0aW9uLmZuLnRvSVNPU3RyaW5nO1xuXG4gICAgZnVuY3Rpb24gbWFrZUR1cmF0aW9uR2V0dGVyKG5hbWUpIHtcbiAgICAgICAgbW9tZW50LmR1cmF0aW9uLmZuW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbbmFtZV07XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yIChpIGluIHVuaXRNaWxsaXNlY29uZEZhY3RvcnMpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AodW5pdE1pbGxpc2Vjb25kRmFjdG9ycywgaSkpIHtcbiAgICAgICAgICAgIG1ha2VEdXJhdGlvbkdldHRlcihpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9tZW50LmR1cmF0aW9uLmZuLmFzTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcygnbXMnKTtcbiAgICB9O1xuICAgIG1vbWVudC5kdXJhdGlvbi5mbi5hc1NlY29uZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzKCdzJyk7XG4gICAgfTtcbiAgICBtb21lbnQuZHVyYXRpb24uZm4uYXNNaW51dGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcygnbScpO1xuICAgIH07XG4gICAgbW9tZW50LmR1cmF0aW9uLmZuLmFzSG91cnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzKCdoJyk7XG4gICAgfTtcbiAgICBtb21lbnQuZHVyYXRpb24uZm4uYXNEYXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcygnZCcpO1xuICAgIH07XG4gICAgbW9tZW50LmR1cmF0aW9uLmZuLmFzV2Vla3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzKCd3ZWVrcycpO1xuICAgIH07XG4gICAgbW9tZW50LmR1cmF0aW9uLmZuLmFzTW9udGhzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcygnTScpO1xuICAgIH07XG4gICAgbW9tZW50LmR1cmF0aW9uLmZuLmFzWWVhcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzKCd5Jyk7XG4gICAgfTtcblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgRGVmYXVsdCBMb2NhbGVcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICAgIC8vIFNldCBkZWZhdWx0IGxvY2FsZSwgb3RoZXIgbG9jYWxlIHdpbGwgaW5oZXJpdCBmcm9tIEVuZ2xpc2guXG4gICAgbW9tZW50LmxvY2FsZSgnZW4nLCB7XG4gICAgICAgIG9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0b0ludChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKiBFTUJFRF9MT0NBTEVTICovXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIEV4cG9zaW5nIE1vbWVudFxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIGZ1bmN0aW9uIG1ha2VHbG9iYWwoc2hvdWxkRGVwcmVjYXRlKSB7XG4gICAgICAgIC8qZ2xvYmFsIGVuZGVyOmZhbHNlICovXG4gICAgICAgIGlmICh0eXBlb2YgZW5kZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb2xkR2xvYmFsTW9tZW50ID0gZ2xvYmFsU2NvcGUubW9tZW50O1xuICAgICAgICBpZiAoc2hvdWxkRGVwcmVjYXRlKSB7XG4gICAgICAgICAgICBnbG9iYWxTY29wZS5tb21lbnQgPSBkZXByZWNhdGUoXG4gICAgICAgICAgICAgICAgICAgICdBY2Nlc3NpbmcgTW9tZW50IHRocm91Z2ggdGhlIGdsb2JhbCBzY29wZSBpcyAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2RlcHJlY2F0ZWQsIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYW4gdXBjb21pbmcgJyArXG4gICAgICAgICAgICAgICAgICAgICdyZWxlYXNlLicsXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWxTY29wZS5tb21lbnQgPSBtb21lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb21tb25KUyBtb2R1bGUgaXMgZGVmaW5lZFxuICAgIGlmIChoYXNNb2R1bGUpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBtb21lbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBtb2R1bGUpIHtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuY29uZmlnICYmIG1vZHVsZS5jb25maWcoKSAmJiBtb2R1bGUuY29uZmlnKCkubm9HbG9iYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyByZWxlYXNlIHRoZSBnbG9iYWwgdmFyaWFibGVcbiAgICAgICAgICAgICAgICBnbG9iYWxTY29wZS5tb21lbnQgPSBvbGRHbG9iYWxNb21lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb21lbnQ7XG4gICAgICAgIH0pO1xuICAgICAgICBtYWtlR2xvYmFsKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1ha2VHbG9iYWwoKTtcbiAgICB9XG59KS5jYWxsKHRoaXMpO1xuIl19
