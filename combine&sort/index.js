function alphaSort(array1, array2) {
  return array1.concat(array2).sort();
}

console.log(alphaSort([ "cat", "dog", "fish", "zebra" ], ["lion", "aardvark", "gorilla"]));