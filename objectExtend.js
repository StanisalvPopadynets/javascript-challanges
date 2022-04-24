const extendObject = (...rest) => {
  const extended = {};
  rest.forEach((obj) => {
    for (const key in obj) {
      if (!Object.keys(extended).includes(key)) extended[key] = obj[key];
    }
  });
  return extended;
};
