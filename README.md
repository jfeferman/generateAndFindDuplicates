# generateAndFindDuplicates
Generate a random number list and find duplicate values.

This program finds duplicate numbers in an array of int values with maximum number N, and size N + 1, where N is either supplied by the user from the command line or set to a default value.

The program runs on node.js and can be launched from the command line using:

`node index.js` where the default value is used, or
`node index.js [user-value]`, where `[user-value]` is any positive integer supplied by the user.

The resulting array of duplicate values is printed to the console.

Tests cases for module exported functions buildRandomNumberList() and findDuplicates() can be run by issuing the following command:

`node generateAndFindDuplicates.test.js`
