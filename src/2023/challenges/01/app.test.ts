import { expect, test } from 'vitest'
import { decryptMessage } from './app'

test('Should return cat2dog3car1sun1', () => {
  const message = 'cat dog dog car Cat doG sun'
  const messageDecrypted = decryptMessage(message)
  expect(messageDecrypted).toBe('cat2dog3car1sun1')
})

test('Should return keys2house3', () => {
  const message = 'keys house HOUSE house keys'
  const messageDecrypted = decryptMessage(message)
  expect(messageDecrypted).toBe('keys2house3')
})

test('Should return cup2te1a1', () => {
  const message = 'cup te a cup'
  const messageDecrypted = decryptMessage(message)
  expect(messageDecrypted).toBe('cup2te1a1')
})

test('Should return houses1house1housess1', () => {
  const message = 'houses house housess'
  const messageDecrypted = decryptMessage(message)
  expect(messageDecrypted).toBe('houses1house1housess1')
})
