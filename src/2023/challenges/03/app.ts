interface PasswordPolicy {
  password: string
  char: string
  min: number
  max: number
}

export function decryptionPassword (password: string) {
  const listOfPasswords = password.split('\n')

  const orderPasswordPolicy = listOfPasswords.map(currentPassword => {
    const [policies, value] = currentPassword.split(':')
    const [int, char] = policies.trim().split(' ')
    const [min, max] = int.split('-')

    return {
      password: value.trim(),
      char,
      min: Number(min),
      max: Number(max)
    }
  })

  return orderPasswordPolicy
}

export function getValidPasswords (password: string) {
  const passwordCollection = decryptionPassword(password)

  const validPasswords = passwordCollection.filter(password => {
    const countChar = getCountByCharInPassword(password)

    return countChar >= password.min && countChar <= password.max
  })

  return validPasswords.map(pass => pass.password)
}

export function getInvalidPasswords (password: string) {
  const passwordCollection = decryptionPassword(password)

  const invalidPasswords = passwordCollection.filter((password) => {
    const countChar = getCountByCharInPassword(password)

    return Math.min(password.min, countChar) !== password.min || Math.max(password.max, countChar) !== password.max
  })

  return invalidPasswords.map(pass => pass.password)
}

function getCountByCharInPassword (currentPassword: PasswordPolicy) {
  const { password, char } = currentPassword

  return password.split('').filter(listChar => listChar === char).length
}
