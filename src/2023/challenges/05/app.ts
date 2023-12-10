const regexAlpha = /^[a-zA-Z0-9]+$/
const regexOnlyString = /^[a-zA-Z\s]+$/
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexNumber = /^[0-9]+$/

export function getFinalMessage (message: string) {
  const bd = message.split('\n')

  const bdParsed: string[][] = bd.map(b => b.split(','))

  const validDbValues = bdParsed.filter(d => {
    const id = d[0]
    const name = d[1]
    const email = d[2]
    const age = d[3]
    const location = d[4]

    const validId = regexAlpha.test(id)
    const validName = regexAlpha.test(name)
    const validEmail = regexEmail.test(email)
    const validAge = age ? regexNumber.test(age) : true
    const validLocation = location ? regexOnlyString.test(location) : true

    return !validId || !validName || !validEmail || !validAge || !validLocation
  })

  return validDbValues.map(a => a[1][0]).join('')
}
