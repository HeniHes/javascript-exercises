const removeFromArray = function(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      a.splice(i, 1); // Remove the element at index i from array a
    }
  }
  return a;
};
// Do not edit below this line
module.exports = removeFromArray;
