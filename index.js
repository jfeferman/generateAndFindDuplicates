'use strict'

/*
 * Find duplicate numbers within and array of Number values with maximum number N, and size N + 1.
 * This program runs in node using 'node index.js'.
 * If a number is supplied as an argument (e.g. 'node index.js 100' or 'node index.js num=100'), 
 * than the argument is used as the value of N.
 */

const { 
  buildRandomNumberList, 
  findDuplicates
} = require('./generateAndFindDuplicates')

// Default value of N if no number is passed as argument in the command line.
const DEFAULT_N = 1000000

// Handle user supplied value if available
const args = process.argv.slice(2)
const userValue = args[0] ? args[0].match(/\d+(\.\d+)?/)[0] : null

// Set N to userValue or default
const N = parseInt(userValue) || DEFAULT_N

// Generate a random number list
const randomNumberList = buildRandomNumberList(N)

// Run the find duplicates function and print duplicates array to console
const duplicates = findDuplicates(randomNumberList)
console.log('Found duplicate values: ', duplicates)
