const uniqueInOrder = (unfilteredSequence) => {
  let adjustedInput;
  if (Array.isArray(unfilteredSequence)) adjustedInput = unfilteredSequence;
  else adjustedInput = unfilteredSequence.split("");
  return adjustedInput.filter(
    (element, index, toBeFiltered) =>
      index === toBeFiltered.length - 1 || element !== toBeFiltered[index + 1]
  );
};
