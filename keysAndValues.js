const keysAndValues = (inputObj) => {
  const entries = Object.entries(inputObj);
  const pairsCount = entries.length;

  const bubleEntriesSort = (inputArr) => {
    let tempEntrie;

    for (let i = 0; i < pairsCount - 1; i++) {
      for (let j = 0; j < pairsCount - 1; j++) {
        console.log(inputArr[j][0]);
        console.log(inputArr[j + 1][0]);
        if (inputArr[j][0] > inputArr[j + 1][0]) {
          tempEntrie = inputArr[j];
          inputArr[j] = inputArr[j + 1];
          inputArr[j + 1] = tempEntrie;
        }
      }
    }
    return inputArr;
  };
  return bubleEntriesSort(entries).reduce(
    (acc, curr) => {
      return [
        [...acc[0], curr[0]],
        [...acc[1], curr[1]],
      ];
    },
    [[], []]
  );
};
