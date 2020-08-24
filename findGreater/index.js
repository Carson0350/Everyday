
/*
# Find Greater
Write a function that takes two arguments. The first argument is an array of numbers. The second argument is a number to compare with each item in the array. Your function should return an array of numbers that are greater than the second argument.
Example:
findGreater([1,2,3,4,5,6,7,8], 5);
// => [6,7,8]
## Input
2 inputs:
An array of numbers [1, 2, 3, 4, 5, 6, 7, 8] and a number to compare each number with
## Output
An array of numbers that are greater than the second argument (e.g. [6,7,8])
 */

function findGreater (array, target) {
  array.filter((element) => {
    return element > target
  })
};

console.log(findGreater([4,7,8,9,2,4,7,10,22,45,89,45,76,34,34], 12))


