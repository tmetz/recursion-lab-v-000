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

function addUpTo(myArr[], myIndex) {
  if (myArr.length == 1) {
    return myArr[0];
  }
  else {
    return myArr[myIndex] + addUpTo(myArr.slice(0, myIndex - 1), myIndex - 1);
  }
}
