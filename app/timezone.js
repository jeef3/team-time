export function attachTimezone(now, person) {
  return Object.assign(
    {},
    person,
    { time: now.clone().tz(person.tz) }
  );
}

export function sortByTimezone(a, b) {
  return b.time.utcOffset() - a.time.utcOffset();
}

export function getLocalOffset(localTime) {
  let offset = 0;
  offset = offset - (localTime.hours() * 60);
  offset = offset - localTime.minutes();
  const percentShift = (offset / 60) * (100 / 24);

  return percentShift;
}

export function getOffset(localTime, compareTime) {
  const offset = (localTime.utcOffset() - compareTime.utcOffset());
  const percentShift = (offset / 60) * (100 / 24);

  return percentShift;
}

