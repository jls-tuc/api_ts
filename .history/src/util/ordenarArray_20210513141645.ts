export const orderArray = (elemt) => {
  console.log(elemt);
  let order = elemt.sort(function (a1, a2) {
    if (a1.nroReg < a2.nroReg) {
      return 1;
    } else if (a1.nroReg > a2.nroReg) {
      return -1;
    }
    return 0;
  });
  return order;
};

/* export const orderSegArray = (elemt) => {
  console.log(elemt);
  let order = elemt.sort(function (a1, a2) {
    if (a1.nroReg < a2.nroReg) {
      return 1;
    } else if (a1.nroReg > a2.nroReg) {
      return -1;
    }
    return 0;
  });
  return order;
}; */
