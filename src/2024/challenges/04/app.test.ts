import { expect, test } from 'vitest';
import { findSavedNodes } from './app';
import fs from 'fs';
import path from 'path';
const filePath = path.join(__dirname, 'network.txt');
const network = fs.readFileSync(filePath, 'utf-8');

test('Should return 5', () => {
  const result = findSavedNodes('[[1, 2], [2, 3], [4, 5]]');
  expect(result).toBe('4,5');
});

test('Should return ""', () => {
  const result = findSavedNodes('[[1, 2], [2, 3], [3, 4]]');
  expect(result).toBe('');
});

test('Should return 4,6,7,9', () => {
  const result = findSavedNodes('[[4, 6], [7, 9], [10, 12], [12, 16]]');
  expect(result).toBe('4,6,7,9');
});

test('Should return 13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,155,156,157,158,175,176,177,178,179,180,181,182,183,184,195,196', () => {
  const result = findSavedNodes(network);
  expect(result).toBe(
    '13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,155,156,157,158,175,176,177,178,179,180,181,182,183,184,195,196'
  );
});
