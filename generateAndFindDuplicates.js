'use strict'

/*
 * Exports a random number list generator function and a find duplicates function.
 */

// Minimum value 
const min = 1

/**
 * Build a Number array of random values from min to N, inclusive, 
 * with length N + 1, to ensure a duplicate exists
 * @param {number} N the maximum number value that can be used
 * @returns {Array} an array of random numbers from min to N, inclusive and size N + 1
 */
const buildRandomNumberList = (N) => {
  var numberList = []
  for (let i = 0; i < N + 1; i++) {
    numberList.push(generateRandomNumberWithinList(min, N))
  }
  return numberList
}
exports.buildRandomNumberList = buildRandomNumberList

/**
 * Reduce numberList to an object with the number as the key and the number count as the value.
 * @param {Array} numberList an array of numbers to find duplicates.
 * @returns {Array} a filtered array with numbers that have count greater than one (duplicates).
 */
const findDuplicates = (numberList) => {
  const count = numberList => 
    numberList.reduce((a, b) => 
      Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

  const duplicates = num => 
    Object.keys(num).filter((a) => num[a] > 1)

  return duplicates(count(numberList))
}
exports.findDuplicates = findDuplicates

/**
 * Helper to generate a random number.
 * @param {number} min the minimum allowed random value
 * @param {number} max the maximum allowed random value
 * @returns {number} a random number between min and max, inclusive.
 */
function generateRandomNumberWithinList(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}