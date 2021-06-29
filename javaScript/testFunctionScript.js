describe("sum", function () {
  it("Sum all the numbers in an array of numbers", function () {
    assert.equal(6, sum([1, 2, 3]));
  });
});

describe("multiply", function () {
  it("Multiply  all the numbers in an array of numbers", function () {
    assert.equal(8, multiply([1, 2, 4]));
  });
});

describe("reverse", function () {
  it(" reverse that computes the reversal of a string.", function () {
    assert.equal("yoj", reverse("joy"));
  });
});

describe("filterLongestWords", function () {
  it("filterLongWords that takes an array of words and an integer i and returns the array of words that are longer than i.", function () {
    assert.equal("happy", filterLongestWord(["joy", "happy", "ltl"], 3));
  });
});
describe("filterLongestWord", function () {
  it("filterLongWords that takes an array of words ", function () {
    assert.equal("happy", filterLongestWord(["joy", "happy", "ltl"]));
  });
});
