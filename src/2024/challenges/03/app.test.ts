import { expect, test } from 'vitest';
import { calculateSteps, getFollowingTracks } from './app';
import fs from 'fs';
import path from 'path';
const filePath = path.join(__dirname, 'trace.txt');
const trace = fs.readFileSync(filePath, 'utf-8');

test('Should return 5', () => {
  const result = calculateSteps('1 2 4 1 -2');
  expect(result).toBe(5);
});

test('Should return 6', () => {
  const result = calculateSteps('0 1 2 3 -1');
  expect(result).toBe(6);
});

test('Should return 2', () => {
  const result = calculateSteps('1 -2 5');
  expect(result).toBe(2);
});

test('Should return 453-15', () => {
  const result = getFollowingTracks(trace);
  expect(result).toBe('453-15');
});
