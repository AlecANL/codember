function isPrime(n: number) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export function findOmega(nodes: Array<number>) {
  const list = nodes.filter((n) => isPrime(n) && isPrime(getTotal(n.toString())));

  const total = list.length;
  const digit = list[2];

  return `${total}-${digit}`;
}

function getTotal(digit: string) {
  return digit.split('').reduce((sum, current) => {
    return sum + parseInt(current, 0);
  }, 0);
}
