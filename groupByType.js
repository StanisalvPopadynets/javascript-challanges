const groupByType = (arr) => {
  const grouped = {}
  arr.forEach((element) => {
    let currSpred = []
    const type = typeof element
    if (grouped[type]) {
      currSpred = [...grouped[type], element]
    } else {
      currSpred.push(element)
    }
    grouped[type] = [...currSpred]
  })

  return grouped
}
