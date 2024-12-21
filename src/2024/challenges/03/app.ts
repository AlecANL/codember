export function calculateSteps(line: string) {
  const arr = line.split(' ');

  if (+arr[0] < 0) return 1;
  let steps = 0;

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (!char) break;
    steps++;
    arr.splice(i, 1, String(Number(char) + 1));

    if (Number(char) === 0) {
      i -= 1;
    }

    if (Number(char) > 0) {
      i += +char - 1;
    }

    if (Number(char) < 0) {
      i -= Math.abs(+char) + 1;
    }
  }

  return steps;
}

export function getFollowingTracks(trace: string) {
  let totalSteps = 0;
  let steps = 0;

  const lines = trace.split('\n');
  lines.forEach((a) => {
    const n = calculateSteps(a);
    totalSteps += n;
    steps = n;
  });

  return `${totalSteps}-${steps}`;
}
