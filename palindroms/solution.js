function findPalindrome (string) {
  return (string = string.split('').reverse().join(''));
};
// test //
console.log(findPalindrome('hello'))