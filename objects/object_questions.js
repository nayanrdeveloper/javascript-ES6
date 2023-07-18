// Objects in Javascript
// Question-1 What output

const obj = {
  a: "one",
  b: "two",
  a: "three",
};
// same key so replace value of first one
console.log(obj); // {a: "three", b: "two"}

// Question 2 - Create a function  multiplyByTwo(obj) that multiplies
//all numeric property values of nums by 2

const mulNumber = {
  a: 100,
  b: 200,
  c: "300",
  d: "Hello Nayan",
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyByTwo(mulNumber);
console.log(mulNumber);

// Question -3 What's output

const a = {};
const b = { key: 100 };
const c = { key: 200 };

a[b] = 400;
a[c] = 500;

// a[b] is consider as a string of '[object Object]' so any object after another
//object so consider same string
console.log(a[c]); // 500
console.log(a);

// Question-4 What's output

const user = { name: "Nayana", age: 21 };
const admin = { admin: true, ...user };

console.log(admin); // {name: "Nayana", age: 21, admin:true}

// Question -5

const settings = {
  userName: "Mayuri",
  level: 19,
  health: 90,
};
// JSON.stringify() second argument which key for convert in string another are ignore
const data = JSON.stringify(settings, ["level", "health"]);

console.log(data);

// Question -6

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
// when we use arrow function so that no consider current object and
//that are consider global oject
console.log(shape.perimeter()); // NaN

// output

function getItems(fruitList, favouriteFruit, ...args) {
  return [...fruitList, favouriteFruit, ...args];
}

console.log(getItems(["Apple", "Mango"], "Mango", "Chicken", "Margho"));

// Most asked question

let myGreeting = { greeting: "Hello Namste" };
let gujGreeting;

gujGreeting = myGreeting;

myGreeting.greeting = "Good Morning";

console.log(gujGreeting.greeting);

// Output question

// both false because both object create different memory space or reference
console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

// Output question

let person = { name: "alexa" };
const member = [person];
person = null;
// member store of array and 0 index store person object so member not any changes
console.log(member); // [ {name: "alexa"} ]

// Output Question
const value = { number: 10 };

const multiPly = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiPly(); // 20
multiPly(); // 20
multiPly(value); // 20
multiPly(value); // 40

// How to deep Copy / Clone Copy

let user2 = {
  name: "Roadside Coder",
  age: 26,
};

const objClone = Object.assign({}, user2);
objClone.name = "Piyush";

console.log(user2, objClone);
