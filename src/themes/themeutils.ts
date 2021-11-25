import { Long } from 'mongodb'


export function roleIdToMention(id: Long): string {
  return id
    ? ((id as any) === 1 || id.equals?.(1))
      ? '@everyone'
      : `<@&${id}>`
    : ''
}
