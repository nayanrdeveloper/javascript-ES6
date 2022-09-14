// call, bind and apply

const userDetails = {
    name: "Nayan",
    age: 24,
    profession : "Fronted Blockchain Developer",
    printDetails : function(){
        console.log(this);
    }
}

userDetails.printDetails();

const userDetails2 = {
    name: "Mayur",
    age: 32,
    profession : "Fronted Blockchain Developer",
    printDetails : function(){
        console.log(this);
    }
}

// call (call simply defined of object of given object like this.name)  this means current object property
userDetails.printDetails.call(userDetails2);

// Example-2

const userDetails3 = {
    name: "vishal",
    age: 32,
    profession : "Fronted Blockchain Developer",
}

const printDetails = function(){
    console.log(this.name);
}

printDetails();  // undefined
printDetails.call(userDetails3)  // object this userDetails3 (vishal)

// apply

const userDetails4 = {
    name: "vishal",
    age: 32,
    profession : "Fronted Blockchain Developer",
}

const printDetails4 = function(state, country){
    console.log(this.name+" "+state+ " "+ country );
}

printDetails4.call(userDetails4,"Rajkot", "India");
printDetails4.apply(userDetails4, ["Rajkot", "India"]);

// bind

let newFun = printDetails4.bind(userDetails4,"delhi", "India");
newFun();

