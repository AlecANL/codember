export function unlockShell(password: string, movements: string) {
  const combination = password.split('').map(Number);
  const LAST_POSITION = combination.length - 1;
  const FIRST_DIGIT_POSITION = 0;
  const LAST_DIGIT_POSITION = 9;
  let position = 0;

  for (let i = 0; i < movements.length; i++) {
    const char = movements[i];

    if (char === 'R') {
      position = position === LAST_POSITION ? FIRST_DIGIT_POSITION : (position += 1);
    }

    if (char === 'L') {
      position = position === FIRST_DIGIT_POSITION ? LAST_POSITION : (position -= 1);
    }

    if (char === 'U') {
      const currentValue = combination[position];
      const value = currentValue === LAST_DIGIT_POSITION ? FIRST_DIGIT_POSITION : currentValue + 1;
      combination[position] = value;
    }

    if (char === 'D') {
      const currentValue = combination[position];
      const value = currentValue === FIRST_DIGIT_POSITION ? LAST_DIGIT_POSITION : currentValue - 1;
      combination[position] = value;
    }
  }

  return combination.join('');
}
