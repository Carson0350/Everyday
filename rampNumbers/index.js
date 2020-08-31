/*

# Ramp Numbers
A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.

## Input
A positive integer, n.

## Output
true if the input is a ramp number, false if it is not

 */

function rampNumber(num) {
  numStr = num.toString();
  for (var i = 0; i < numStr; i++) {
    if (i != 0) {
      //i is not the first letter of the string
      if (numStr[i - 1] > numStr[i]) {
        //if the previous number is greater than the current return false
        return false;
      }
    }
  }
  //string is a valid Ramp Number
  return true;
}