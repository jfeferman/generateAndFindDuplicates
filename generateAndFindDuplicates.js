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
  var list = numberList
    .map((num) => {
      return { count: 1, num}
    })
    .reduce((a, b) => {
      a[b.num] = (a[b.num] || 0) + b.count
      return a
    }, {})

    return Object.keys(list).filter((a) => list[a] > 1)
}
exports.findDuplicates = findDuplicates

// Helper to generate a random number where the value is a Number between min and max
function generateRandomNumberWithinList(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}