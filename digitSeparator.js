const separateDigits = (nonSeparatedDigits) => {
  const spelledDigits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const nonSeparatedDigitsArr = nonSeparatedDigits.split("");

  const toBeSeparated = [];

  while (nonSeparatedDigitsArr.length) {
    for (let i = 0; i < spelledDigits.length; i++) {
      if (nonSeparatedDigitsArr.join("").indexOf(spelledDigits[i]) === 0) {
        toBeSeparated.push(spelledDigits[i]);
        nonSeparatedDigitsArr.splice(0, spelledDigits[i].length);
      }
    }
  }

  return toBeSeparated.join(" ");
};
