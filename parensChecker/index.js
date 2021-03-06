/*
# Parens Checker

Write a function parensChecker which takes a single string argument consisting of a bunch of parentheses. The function should return true if the string is a valid parentheses expression.

# Input

A sequence of parentheses.

"()(((())))"

"())))("

")("

# Output

True if the expression is valid. False otherwise.

# Instructions

Create a file with your initials in the solutions folder.

Update line 1 of test\test.js

`var parensChecker = require('../solutions/yourfile.js');`

Change "yourfile" to your initials file.

To run the tests:

cd into this folder (12_parensChecker)

`npm install -g mocha`

Run the command `mocha`

*/


function parensChecker(string) {
  var parens = 0;

  for(var i = 0; i < string.length; i++) {
    if (parens < 0) {
      return false;
    }
    if (string[i] === '(') {
      parens += 1;
    }
    if (string[i] === ')') {
      parens -= 1;
    }
  }

  return parens == 0 ? true:false;
}