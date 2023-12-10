const MAPPED_SYMBOLS = {
  INCREASE_BY_1: '#',
  DECREASE_BY_1: '@',
  MULTIPLY_IT_SELF: '*',
  PRINT: '&'
} as const

export function compiler (message: string) {
  let value = ''
  let currentValue = 0

  for (const char of message) {
    if (char === MAPPED_SYMBOLS.PRINT) value += String(currentValue)
    if (char === MAPPED_SYMBOLS.INCREASE_BY_1) currentValue++
    if (char === MAPPED_SYMBOLS.DECREASE_BY_1) currentValue--
    if (char === MAPPED_SYMBOLS.MULTIPLY_IT_SELF) currentValue *= currentValue
  }

  return value
}
