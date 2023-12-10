import fs from 'fs'
import path from 'path'
import { expect, test } from 'vitest'
import { restoreFileSystem } from './app'

const filePath = path.join(__dirname, 'files_quarantine.txt')
const fileSystem = fs.readFileSync(filePath, 'utf-8')

test('Should return xy', () => {
  const value = restoreFileSystem('xyzz33-xy')
  expect(value[0]).toBe('xy')
})

test('Should return O2hrQ', () => {
  const value = restoreFileSystem(fileSystem)
  expect(value[32]).toBe('O2hrQ')
})
