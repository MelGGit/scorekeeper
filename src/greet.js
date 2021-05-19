export default function greet(...rest) {
  if (rest.length === 0) return 'Hi, stranger'
  if (rest.length > 1) return 'Hi, guys'
  if (rest[0] === 'Jerry') return 'Hi, coach'
  return `Hi, ${rest[0]}`
}
