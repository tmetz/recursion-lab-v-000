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

function addUpTo(myArr, myIndex) {
  if (myArr.length == 1) {
    return myArr[0];
  }
  else {
    return myArr[myIndex] + addUpTo(myArr.slice(0, myIndex), myIndex - 1);
  }
}

function maxOf(myArr) {
  if (myArr.length == 1) {
    return myArr[0];
  }
  else {
    let nextNum = maxOf(myArr.slice(1, myArr.length));
    if (myArr[0] > nextNum) {
      return myArr[0];
    }
    else {
      return nextNum;
    }
  }
}

function includesNumber(myArr, testNum) {
  if (myArr.length == 1) {
    if (myArr[0] == testNum) {
      return true;
    }
  }
  else {
    if (myArr[0] == testNum) {
      return true;
    }
    else if includesNumber(myArr.slice(1, myArr.length - 1), testNum) {
      return true;
    }
  }
  return false;
}
