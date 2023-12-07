import fs from 'node:fs/promises'

export async function getInput (path: string) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' })
    return data
  } catch (err) {
    return 'file not found'
  }
}
