const ingExtractor = (input) => {
  const words = input.match(/(\w+)/g);

  return words.filter((word) => {
    if (!word.includes("ing")) {
      return false;
    }
    return word.lastIndexOf("ing") === word.length - 3 && word.length > 4;
  });
};
