const sumOfTwoLowestPositiveInts = (inputArr) => {
  return inputArr
    .filter((element) => element > 0)
    .sort((firstEl, secondEl) => firstEl - secondEl)
    .reduce((acc, prev, index) => (index < 2 ? acc + prev : acc), 0);
};
