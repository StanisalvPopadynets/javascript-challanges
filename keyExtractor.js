const extractKeys = (object) => {
  const keys = [];

  const recursivelyFindKeys = (nestedObj) => {
    for (key in nestedObj) {
      if (typeof nestedObj[key] === "object") {
        recursivelyFindKeys(nestedObj[key]);
      } else keys.push(key);
    }
  };
  recursivelyFindKeys(object);
};

extractKeys({ a: 1, b: 1, c: { d: 1 } });
