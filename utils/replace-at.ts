export const replaceAt = (_string: string, _chunk: string, index: number) => {
  return _string.substring(0, index) + _chunk + _string.substring(index + _chunk.length);
}