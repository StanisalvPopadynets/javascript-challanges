const countNines = (arbitraryNumber) => {
  let occurencesCount = 0
  for (let i = 0; i <= arbitraryNumber; i++) {
    occurencesCount += (i + "").split("9").length - 1
  }
  return occurencesCount
}
