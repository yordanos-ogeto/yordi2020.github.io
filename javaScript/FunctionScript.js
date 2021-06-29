//4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers
// in an array of numbers
function sum(numbers) {
  return numbers.reduce((accumulator, elem) => {
    return accumulator + elem;
  });
}
console.log(sum([1, 2, 3]));

function multiply(number) {
  return number.reduce((accumulator, elem) => {
    return accumulator * elem;
  });
}
console.log(multiply([1, 2, 4]));

//5 Define a function reverse() that computes the reversal of a string.
let reverse = function reverseString(str) {
  return str.split("").reverse().join("");
};
console.log(reverse("joy"));

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words
 that are longer than i. */

const filterLongestWords = function filterLongWords(array, int) {
  return array.filter((ar) => ar.length > int);
};

//Write a function filterLongWords()
function filterLongestWord(str) {
  return str.reduce((accumulator, elm) => {
    return accumulator.length > elm.length ? accumulator : elm;
  });
}

console.log(filterLongestWord(["joy", "happy", "ltl"]));
