export function restoreFileSystem (file: string) {
  const fileSystemCollection = file.split('\n')

  const fileSystem = fileSystemCollection.map(fileSystem => {
    const [value, checksum] = fileSystem.split('-')
    const uniqueValue = getUniqueChar(value)

    return {
      value,
      uniqueValue,
      checksum
    }
  })

  const validFileSystem = fileSystem.filter(system => {
    return system.uniqueValue === system.checksum
  })

  return validFileSystem.map(el => el.checksum)
}

function getUniqueChar (value: string) {
  const duplicatedChar: Array<string> = []

  for (let i = 0; i < value.length; i++) {
    const char = value[i]
    if (value.indexOf(char) !== i) {
      duplicatedChar.push(char)
    }
  }

  return value.split('').filter(char => !duplicatedChar.includes(char)).join('')
}
