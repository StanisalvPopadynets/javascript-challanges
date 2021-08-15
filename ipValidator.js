const validateIp = (IP) => {
  const arrFromIp = IP.split(".");
  let isIpValid = true;

  if (arrFromIp.length !== 4) {
    return false;
  }

  arrFromIp.forEach((element) => {
    if (element[0] === "0") {
      isIpValid = false;
      return;
    }
    const parsedElement = parseInt(element);
    if (isNaN(parsedElement)) {
      isIpValid = false;
      return;
    }
    if (parsedElement > 255 || parsedElement < 0) {
      isIpValid = false;
    }
  });
  return isIpValid;
};
