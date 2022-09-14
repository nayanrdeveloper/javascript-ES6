// Closure

var sum = function (a) {
  console.log("Views are " + a);
  var c = 4;
  return function (b) {
    return a + b + c;
  };
};

var store = sum(300);
console.log(store);

var totalSum = store(10);
console.log(totalSum);

// Example2

function advanceSum(a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
}

const mySum = advanceSum(10,20, 30);
console.log(mySum);

console.log(mySum.getSumThree());
console.log(mySum.getSumTwo());
