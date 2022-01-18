function getDigit(num, i) {
  return Math.floor((num % Math.pow(10, i + 1)) / Math.pow(10, i))
}

console.log(getDigit(12345, 0))
console.log(getDigit(12345, 1))
console.log(getDigit(12345, 2))
console.log(getDigit(12345, 3))
console.log(getDigit(12345, 4))
console.log(getDigit(12345, 5))