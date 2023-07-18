const user = {
  name: "nayan radadiya",
  age: 26,
  "your program": "Java",
};

console.log(user.name);
console.log(user["your program"]);

// how to dynamic object create
let property = "firstName";
let value = "Hello world";

let objUser = {
  [property]: value,
};
// when dynamic key use so use square bracket
console.log(objUser);

// Looping Through Objects
const myData = {
  name: "Mayur r",
  age: 34,
};

for (key in myData) {
  console.log(key);
  console.log(myData[key]);
}

// What is JSON.strigify and JSON.parse

const animalData = {
  animal: "Cow",
  leg: 4,
  eat: "Ghas",
};
// JSON.stringify convert object to string
const strObject = JSON.stringify(animalData);
console.log(strObject);

// JSON.parse() string to object convert
console.log(JSON.parse(strObject));

// What is destructuring in Objects

let MyUser = {
  name: "deepa Patel",
  age: 56,
  hobby: "Cricket",
  fullName: {
    firstName: "Radha",
    lastName: "Meera",
  },
};

// desturcure can object are separe and direct key value access
// use colon for another key are used
const { name: myName, hobby, fullName:{firstName} } = MyUser;
console.log(hobby);
console.log(myName);
console.log(firstName);


