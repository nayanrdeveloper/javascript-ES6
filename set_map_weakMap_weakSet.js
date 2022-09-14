let myArray = [1,4,7,8,9,6,9,7,5,7,7];

// set of Collection are always unique
let setArray = new Set(myArray);
console.log(setArray);

setArray.add(5);
setArray.add(5);

console.log(setArray);

const customObj = {
    name : "Nayan"
}

setArray.add(customObj);  // add new element in set

console.log(setArray);

console.log(setArray.has(0));  // check value in list


// Map -> Use with key-value pair

let myMap = new Map([["a1","Nayan"], ["a2","Radadiya"]]);
console.log(myMap);
myMap.set("a2", "savaliya");
myMap.set("a3", "MCA");
console.log(myMap);

// weakset
// Only store Objects
// it can not be itret (not loop)
let newWeakMap = new WeakSet();
var obj1 = {name : "Tiger"};
var obj2 = {};

newWeakMap.add(obj1);
newWeakMap.add(obj2);
console.log(newWeakMap);

//weakMap

let wkMap = new WeakMap();
var ob3 = {"name": "Ghost"};
var obj4 = {};

wkMap.set(ob3, "Private");
console.log(wkMap);