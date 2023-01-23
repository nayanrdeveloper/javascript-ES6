const persons = [
  { name: "Alice", age: 27 },
  { name: "Max", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Alice", age: 21 },
  { name: "Max", age: 15 },
  { name: "Jane", age: 30 },
];

//   ==> Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
// 		- if i is a multiple of both 3 and 5, print FizzBuzz
// 		- if i is a multiple of 3 but not 5, print Fizz
// 		- if i is a multiple of 5 but not 3, print Buzz
// 		- if i is not a multiple of 3 or 5, print i

// 		Example: n = 15
// 		Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

function giveFizzNumber(number) {
  let newFizzNumber = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      newFizzNumber.push("FizzBuzz");
    } else if (i % 3 == 0 && i % 5 != 0) {
      newFizzNumber.push("Fizz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      newFizzNumber.push("Buzz");
    } else {
      newFizzNumber.push(i);
    }
  }
  return newFizzNumber;
}

console.log(giveFizzNumber(30));

// ==> Extract unique values from an array

// 		const arr = [1,1,2,2,3,4,4,5];

// 		Output [ 3, 5 ]

const arr = [1, 1, 2, 2, 3, 4, 4, 5];

function giveUniqueValue(arrayList) {
  const uniqueValueList = [];
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] in uniqueValueList ) {
      console.log(arrayList[i]);
    } else {
      uniqueValueList.push(arrayList[i]);
    }
  }
  return uniqueValueList;
}

console.log(giveUniqueValue(arr));
