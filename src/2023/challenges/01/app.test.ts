import { expect, test } from 'vitest'
import { decryptMessage } from './app'
import fs from 'fs'
import path from 'path'
const filePath = path.join(__dirname, 'message_01.txt')
const message = fs.readFileSync(filePath, 'utf-8')

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

test('Should return murcielago15leon15jirafa15cebra6elefante15rinoceronte15hipopotamo15ardilla15mapache15zorro15lobo15oso15puma2jaguar14tigre10leopardo10gato12perro12caballo14vaca14toro14cerdo14oveja14cabra14gallina10pato10ganso10pavo10paloma10halcon11aguila11buho11colibri9canario8loro8tucan8pinguino7flamenco7', () => {
  const messageDecrypted = decryptMessage(message)
  expect(messageDecrypted).toBe('murcielago15leon15jirafa15cebra6elefante15rinoceronte15hipopotamo15ardilla15mapache15zorro15lobo15oso15puma2jaguar14tigre10leopardo10gato12perro12caballo14vaca14toro14cerdo14oveja14cabra14gallina10pato10ganso10pavo10paloma10halcon11aguila11buho11colibri9canario8loro8tucan8pinguino7flamenco7')
})
