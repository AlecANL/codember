import { expect, test } from 'vitest';
import { unlockShell } from './app';

test('Should return 119', () => {
  const result = unlockShell('000', 'URURD');
  expect(result).toBe('119');
});

test('Should return 4411', () => {
  const result = unlockShell('1111', 'UUURUUU');
  expect(result).toBe('4411');
});

test('Should return 8000', () => {
  const result = unlockShell('9999', 'LULULULD');
  expect(result).toBe('8000');
});

test('Should return 628934712834', () => {
  const result = unlockShell('528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR');
  expect(result).toBe('628934712834');
});
