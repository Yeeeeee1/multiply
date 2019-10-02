module.exports = function multiply(first, second) {
  var result = String(BigInt(first) * BigInt(second));
  return result;
}
