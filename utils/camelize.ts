export default function(string: string) {
  const a = string.toLowerCase().replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
  return a.substring(0, 1).toLowerCase() + a.substring(1)
}