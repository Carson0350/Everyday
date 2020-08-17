// You are given a valid integer.
// Sum all of the digits of the number.
// If the number is still multiple digits: repeat.
// Keep repeating until you are left with a single digit.

// > This means your answer will always be a single digit from 0-9

function findSum (number) {
  do {
    var string = String(number);
    var digits = string.split('');
    number = 0;
    for (var i = 0; i < digits.length; i++) {
      number += Number(digits[i]);
    }
  } while(string.length > 1);
  return number;
}