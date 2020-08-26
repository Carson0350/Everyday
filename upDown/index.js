/*
# Up Down

Given an array of numbers, write a program that describes whether each number was higher, lower or even to the previous number.

## Input

An array of numbers (e.g [6,3,5,4,3,4,4,5])

## Output

An array of up down strings (e.g. ["down","up","down","down","up","even","up"])
*/


function path(array) {
  return array.slice(1).map(function(element, i) {
    var difference = element - array[i];
    if (difference === 0) return 'even';
    else return (difference < 0) ? 'down' : 'up';
  });
}

console.log(path([6,3,5,4,3,4,4,5]));