// Rest Operator

function add(a,b,c, ...other){
    console.log(other);
    return a+b+c;
}

const addNumbers = add(3,7,4,9,5,3,6,8,6,3);
console.log(addNumbers);


// Spread Operator
const names = ["akash", "hitesh", "ankita", "manthan"];

function getNames(name1, name2, name3){
    console.log(name1, name2, name3);
}

getNames(names[0], names[1], names[2]); // Normal

getNames(...names); // using Spread Operator


// Object using with spread

var students = {
    name: "Hiren",
    age : 34,
    hobbies : ["Music", "Garba", "Movies"],
    roll : 23,
}

// var age = students.age;   // first simple method

// var {name, age, hobbies} = students;   // destruct method

// console.log(hobbies);

const {...rest} = students;

console.log(rest);

// Spread

var newStudents = {
    ...students,
    roll: 30     // change object value and other are as it is
}

console.log(newStudents);




