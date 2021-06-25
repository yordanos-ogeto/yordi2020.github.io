/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}
// Question 1
/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

// Question 2

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(4, maxOfThree(55, 4, 44))
);

// Question 3
function isVowel(char) {
  char = char.toLowerCase();
  if (char === "a" || "e" || "i" || "o" || "u") {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel("A"));
// Question 4
function sum(numbers) {
  var totalSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
}
console.log(sum([1, 2, 3, 4]));
function multiply(numbers) {
  var totalProduct = 1;
  for (var i = 0; i < numbers.length; i++) {
    totalProduct *= numbers[i];
  }
  return totalProduct;
}
console.log(multiply([1, 2, 3, 4]));
// Question 5
function reverse(str) {
  var word = "";
  for (var i = str.length - 1; i >= 0; i--) {
    word += str[i];
  }
  return word.toString();
}
console.log(reverse("jag testar"));
// Question 6
function findLongestWord(array) {
  var elements = array.length;
  var count = 0;
  for (var i = 0; i < elements; i++) {
    if (array[i].length > count) {
      count = array[i].length;
    }
  }
  return count;
}
console.log(findLongestWord(["joy", "happy", "ltl"]));
// Question 7
function filterLongWords(array, int) {
  var length = array.length;
  var longestString = [];
  for (var i = 0; i < length; i++) {
    if (array[i].length > int) {
      longestString[longestString.length] = array[i];
    }
  }
  return longestString;
}

console.log(filterLongWords(["joy", "happy", "ltl"], 3));
// Question 8a
const a = [1, 3, 5, 3, 3];
function multiplyByTen(a) {
  return a.map(function (elem) {
    return elem * 10;
  });
}
console.log(multiplyByTen(a));
// Question 8b
function filterByThree(a) {
  return a.filter(function (elem) {
    return elem == 3;
  });
}
console.log(filterByThree(a));
// Question 8c
function productOfAll(a) {
  return a.reduce(function (accumulator, elem) {
    return accumulator * elem;
  });
}
console.log(productOfAll(a));
