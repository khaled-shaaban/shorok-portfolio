export const insertString = (_string: string, _chunk: string, index: number)  => {
  return _string.slice(0, index) + _chunk + _string.slice(index)
}