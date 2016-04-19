export function barCalc(span) {
  const ratio = 100 / 24;
  return {
    left: `${ratio * span.start}%`,
    width: `${ratio * span.duration}%`,
  };
}
