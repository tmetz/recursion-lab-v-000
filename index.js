// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length == 1) {
    return myString
  }
  else {
    let mySubString = myString.substring(1, myString.length);
    return reverseString(mySubString) + myString.substring(0,1);
  }
}

function isPalindrome(myString) {
  if (myString == reverseString(myString)) {
    return true;
  }
  else {
    return false;
  }
}
