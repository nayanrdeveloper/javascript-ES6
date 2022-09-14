const obj = {
    name : "Nayan Radadiya",
    getName : function(){
        return this.name;
    },
    getRoll : function(){
        return this.roll;
    }
}

// console.log(obj);

const obj2 = {
    roll: 1,
    name: "Sahil Damsiya",
    __proto__: obj
}

// console.log(obj2.getName());
// console.log(obj2.getRoll());

const obj3 = {
    myClass : "MSc",
    __proto__ : obj2,
}

// console.log(obj3);
// console.log(obj3.getName());  // check probity wise first check current object after check inherit object

const array = new Array();
console.log(array);

const obj1 = new Object();
console.log(obj1);


// Create your own Array Prototype
Array.prototype.show = function(){
    return this;
}

const cities = ["Rajkot", "Delhi"];
console.log(cities.show());


Array.prototype.convertArrayToObj = function(){
    let newObj = {};
    this.forEach((element) => {
        newObj[element] = element;
    })
    return newObj;
}

console.log(cities.convertArrayToObj());

function MyPrototype(name, roll){
    this.name = name;
    this.roll = roll;
}

MyPrototype.prototype = obj3;

const myProto = new MyPrototype("nayan",34);
console.log(myProto);
