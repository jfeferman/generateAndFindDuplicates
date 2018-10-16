'use strict'

/*
 * Test cases for generateAndFindDuplicates exported functions.
 */

const { 
  findDuplicates,
  buildRandomNumberList
 } = require('./generateAndFindDuplicates')
const assert = require('assert')

// Mock arrays
const testArray = [1, 1, 2, 2, 3, 6, 7, 8, 8, 9, 10, 11, 11]
const expectedResult = ['1', '2', '8', '11']

// Test if find duplicates is correct by comparing testArray values to expectedResult values
assert.deepEqual(findDuplicates(testArray), expectedResult)

// Test that the array length is N + 1 when building the random number list
const N = 4
assert(buildRandomNumberList(N).length === N + 1)

console.log('Tests passed.')