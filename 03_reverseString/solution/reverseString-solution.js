const reverseString = function (string) {
  let b= string.split("");
  b.reverse();
  return b.join("");
};

module.exports = reverseString;
