export function detectAccessNotAllowed(log: string) {
  const LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const DIGIT = '1234567890';

  if (log.includes(LETTER)) return false;

  for (let i = 0; i < log.length; i++) {
    const char = log[i];
    if (LETTER.toLowerCase().includes(char) && DIGIT.includes(log[i + 1])) return false;

    if (DIGIT.includes(char)) {
      if (+log[i + 1] < +char) return false;

      if (char === '3' && log[i + 1] < char) return false;
    }

    if (LETTER.toLocaleLowerCase().includes(char)) {
      const currentCode = char.charCodeAt(0);

      if ((log[i + 1] ?? '').charCodeAt(0) < currentCode) return false;
    }
  }

  return true;
}

export function getAccessNotAllowed(log: string) {
  const listLog = log.split('\n');
  let available = 0;
  let wrong = 0;

  for (const value of listLog) {
    const isAllowedAccess = detectAccessNotAllowed(value);

    if (isAllowedAccess) {
      available++;
    } else {
      wrong++;
    }
  }

  return `${available}true${wrong}false`;
}
