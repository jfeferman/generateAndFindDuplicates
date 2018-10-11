'use strict'

/*
 * Exports a random number list generator function and a find duplicates function.
 */

 // Minimum value 
const min = 1

// Build a Number array of random values from min to N, inclusive, with length N + 1, to ensure a duplicate exists
const buildRandomNumberList = (N) => {
  var numberList = []
  for (let i = 0; i < N + 1; i++) {
    numberList.push(generateRandomNumberWithinList(min, N))
  }
  return numberList
}
exports.buildRandomNumberList = buildRandomNumberList

// Map numberList to obtain a reduced object with key of unique numbers and value of a number's count
// return an array of filtered items with count of more than one.
const findDuplicates = (numberList) => {
  const count = numberList => 
  numberList.reduce((a, b) => 
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

  const duplicates = num => 
    Object.keys(num).filter((a) => num[a] > 1)

  return duplicates(count(numberList))
}
exports.findDuplicates = findDuplicates

// Helper to generate a random number where the value is a Number from min to max, inclusive
function generateRandomNumberWithinList(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}