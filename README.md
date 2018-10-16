# generateAndFindDuplicates
Generate a random number list and find duplicate values.

This program finds duplicate numbers in a random integer array with maximum value N, and size N + 1, where N is either supplied by the user from the command line or set to a default value.

This program requires node.js to be installed. Download and navigate to the install directory using a terminal, and launch from the command line using:

`node index.js` The default value 1,000,000 is used for N.

`node index.js [user-value]`, where `[user-value]` is any integer supplied by the user. (e.g. `node index.js 10`)

The resulting array of duplicate values is printed to the console.

Test cases for buildRandomNumberList() and findDuplicates() functions are run with the following command:

`node generateAndFindDuplicates.test.js`
