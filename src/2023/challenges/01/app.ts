type WordsMapped = Record<string, number>;

export function decryptMessage(message: string): string {
  const messages = message.toLowerCase().split(' ');
  const wordsMapped: WordsMapped = {};

  for (const message of messages) {
    if (wordsMapped[message]) {
      wordsMapped[message] += 1;
      continue;
    }

    wordsMapped[message] = 1;
  }

  const wordsSorted = Object.entries(wordsMapped);

  return wordsSorted.reduce((current, next) => {
    return `${current}${next[0]}${next[1]}`;
  }, '');
}
