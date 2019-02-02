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
  console.log(myString[myString.length - 1]);
  if (myString.length > 1) {
    let mySubString = myString.substring(0, myString.length - 1);
    reverseString(mySubString);
  }
  else {
    return true;
  }
}
