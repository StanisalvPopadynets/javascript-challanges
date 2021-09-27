const countBoomerangs = (inputArr) => {
  let boomerangsOccurrences = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (i === 0 || i === inputArr.length - 1) continue;
    if (inputArr[i - 1] === inputArr[i + 1] && inputArr[i - 1] !== inputArr[i])
      boomerangsOccurrences++;
  }
  return boomerangsOccurrences;
};
