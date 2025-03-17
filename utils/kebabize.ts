export default function(string: string) {
  const a = string.toLowerCase()
                    .replace(/([a-z])([A-Z])/g, "$1-$2")
                    .replace(/[\s_]+/g, '-')
                    
  return a
}