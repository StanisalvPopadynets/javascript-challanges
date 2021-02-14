// Option 1
const arraySum = arr => {
  return arr.flat(Infinity).reduce((acc, curr) => acc+= curr , 0);
};

// Option 2
const arraySum2 = arr => {
  const customFlat = (recursiveArr) => {
    let flattened = [];
    let arrsCounter = 0;
    recursiveArr.forEach(element => {
      if (Array.isArray(element)) {
        flattened = [...flattened, ...element];
        arrsCounter++;
      }
      else {
        flattened.push(element);
      }
    });
    
    if (arrsCounter) return customFlat(flattened);
    return flattened;
  }
  return customFlat(arr).reduce((acc, curr) => acc += curr, 0);
};
