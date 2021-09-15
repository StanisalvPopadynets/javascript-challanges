const longestRepetition = (inputStr) => {
  const arrFromStr = inputStr.split("");
  let prevChar = "";
  let currentCharCount = 1;
  const mapStore = {};
  for (let i = 0; i < arrFromStr.length; i++) {
    if (i === 0) {
      prevChar = arrFromStr[i];
      continue;
    }
    if (i === arrFromStr.length - 1) {
      currentCharCount++;
      if (!mapStore[arrFromStr[i]] || mapStore[arrFromStr[i]] <= currentCharCount) {
        mapStore[prevChar] = currentCharCount;
      }
      break;
    }
    if (prevChar !== arrFromStr[i]) {
      if (!mapStore[arrFromStr[i]] || mapStore[arrFromStr[i]] <= currentCharCount) {
        mapStore[prevChar] = currentCharCount;
      }
      prevChar = arrFromStr[i];
      currentCharCount = 1;
    } else {
      currentCharCount++;
    }
  }
};
