const encodeDuplicates = (text) => {
  const arrFromStr = text.split("")
  const duplicates = new Set()
  arrFromStr.forEach((letterI, i) => {
    arrFromStr.forEach((letterJ, j) => {
      i !== j && letterI === letterJ && duplicates.add(letterI)
    })
  })
  return arrFromStr
    .map((letter) => (duplicates.has(letter) ? ")" : "("))
    .join("")
}
