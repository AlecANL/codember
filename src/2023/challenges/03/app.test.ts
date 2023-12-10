import fs from 'fs'
import path from 'path'
import { expect, test } from 'vitest'
import { getInvalidPasswords, getValidPasswords } from './app'

const filePath = path.join(__dirname, 'encryption_policies.txt')
const password = fs.readFileSync(filePath, 'utf-8')

test('Should return ["fgff", "hhhhhh"]', () => {
  const value = getValidPasswords(`2-4 f: fgff
  4-6 z: zzzsg
  1-6 h: hhhhhh`)
  expect(value).toEqual(['fgff', 'hhhhhh'])
})

test('Should return bgamidqewtbus', () => {
  const value = getInvalidPasswords(password)
  expect(value[41]).toBe('bgamidqewtbus')
})
