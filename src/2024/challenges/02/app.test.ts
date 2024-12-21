import { expect, test } from 'vitest';
import { detectAccessNotAllowed, getAccessNotAllowed } from './app';
import fs from 'fs';
import path from 'path';
const filePath = path.join(__dirname, 'log.txt');
const log = fs.readFileSync(filePath, 'utf-8');

test('Should return true', () => {
  const result = detectAccessNotAllowed('1234');
  expect(result).toBe(true);
});

test('Should return false', () => {
  const result = detectAccessNotAllowed('a123');
  expect(result).toBe(false);
});

test('Should return true', () => {
  const result = detectAccessNotAllowed('112233');
  expect(result).toBe(true);
});

test('Should return true', () => {
  const result = detectAccessNotAllowed('123abc');
  expect(result).toBe(true);
});

test('Should return true', () => {
  const result = detectAccessNotAllowed('aabbcc');
  expect(result).toBe(true);
});

test('Should return false', () => {
  const result = detectAccessNotAllowed('dbce');
  expect(result).toBe(false);
});

test('Should return 299true198false', () => {
  const result = getAccessNotAllowed(log);
  expect(result).toBe('299true198false');
});
