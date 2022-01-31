function getDigit(num, i) {
  return Math.floor((num % Math.pow(10, i + 1)) / Math.pow(10, i))
}

function digitCount(num) {
  if (!num) return 1;
  return num.toString().length
}

// solution from course
// function digitCount(num) {
//   if (num === 0) return 1;
//   what pov of 10 give us the num
//   return Math.floor(Math.log10(num)) + 1
// }

function mostDigits(nums) {
  let maxLength = 0;
  nums.forEach(num => {
    const length = digitCount(num);
    if (length > maxLength) maxLength = length
  })
  return maxLength
}

console.log(getDigit(12345, 0))
console.log(getDigit(12345, 1))
console.log(getDigit(12345, 2))
console.log(getDigit(12345, 3))
console.log(getDigit(12345, 4))
console.log(getDigit(12345, 5))
console.log("-------------")
console.log(digitCount(12345))
console.log(digitCount(125))
console.log(digitCount(45))
console.log(digitCount(5))
console.log(digitCount())
console.log("-------------")
console.log(mostDigits([]))
console.log(mostDigits([1, 123, 1234]))
console.log(mostDigits([0, 0, 0]))
console.log(mostDigits([1233456, 0, 23]))
