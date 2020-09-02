/*
# Combine and Sort

Write a function that takes two arrays and returns a new array with all items in alphabetical order.

var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ]

combineAndSort(array1, array2);
//-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]

## Input

Two arrays (e.g [ "cat", "dog", "fish", "zebra" ] and [ "lion", "aardvark", "gorilla" ])

## Output

A new array with all items in alphabetical order. (e.g. [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ])

*/

function alphaSort(array1, array2) {
  return array1.concat(array2).sort();
}

console.log(alphaSort([ "cat", "dog", "fish", "zebra" ], ["lion", "aardvark", "gorilla"]));