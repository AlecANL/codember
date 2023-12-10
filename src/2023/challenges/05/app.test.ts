import fs from 'fs'
import path from 'path'
import { expect, test } from 'vitest'
import { getFinalMessage } from './app'

const filePath = path.join(__dirname, 'database_attacked.txt')
const db = fs.readFileSync(filePath, 'utf-8')

test('Should return youh4v3beenpwnd', () => {
  const value = getFinalMessage(db)
  expect(value).toBe('youh4v3beenpwnd')
})
