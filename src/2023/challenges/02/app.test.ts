import fs from 'fs'
import path from 'path'
import { expect, test } from 'vitest'
import { compiler } from './app'

const filePath = path.join(__dirname, 'message_02.txt')
const message = fs.readFileSync(filePath, 'utf-8')

test('Should return 4', () => {
  const value = compiler('##*&')
  expect(value).toBe('4')
})

test('Should return 0243', () => {
  const value = compiler('&##&*&@&')
  expect(value).toBe('0243')
})

test('Should return 024899455', () => {
  const value = compiler(message)
  expect(value).toBe('024899455')
})
