export function getCharactersIds() {
  const arrOfNumbers = []
  while (arrOfNumbers.length < 8) {
    const random = Math.floor(Math.random() * 200)
    if (!arrOfNumbers.includes(random)) arrOfNumbers.push(random)
  }
  return arrOfNumbers
}
