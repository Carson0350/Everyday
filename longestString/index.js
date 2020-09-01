/*
# Longest String

Write a function that returns the longest string in the array and it's length as an object.

## Input

An array of strings (e.g ["truck", "sidewalk", "book"])

## Output

An object with the key of the longest string and a value of the length of the string (e.g. { sidewalk: 8 })
*/

var input = ['truck', 'sidewalk', 'book'];

function longestString(array){
  var longest,
      count,
      lastCount = 0;

  for (var i = 0; i < array.length; i++) {
    count = 0;
    for (var j = 0; j < array[i].length; j++) {
      count++;
    }
    if (count > lastCount) {
      longest = array[i];
      lastCount = count;
    }
  }
  console.log(longest + ': ' + lastCount);
}

longestString(input);

