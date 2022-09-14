// Callback
function greeting(name){
    alert(`hello good Morning ${name}`);
}


function greetingInput(callback){
    var name = prompt("Please give me your name");
    callback(name);
}

greetingInput(greeting);

//