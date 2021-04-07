const zipWith = (callback, firstArr, secondArr) => {
  return firstArr.map((el, i) => callback(el, secondArr[i]))
}
