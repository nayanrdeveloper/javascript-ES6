// (1) Javascript Perfomance Optimization
b = "Hello Nayan";

console.log(window.b);

function getName() {
  yourName = "Mayur";
}

console.log(window.yourName);

// (2) Forgotten timers or callbacks

var yourData = function () {
  return { name: "nayan Radadiya", role: "Fronted developer" };
};

var timer = setInterval(function () {
  var worldElement = document.getElementById("world");
  if (worldElement) {
    worldElement.innerHTML = JSON.stringify(yourData());
    // clearInterval clear update data otherwise it's run all time
    clearInterval(timer);
  }
}, 1000);

// (3) Remove listeners if not required

const btn = document.getElementById("btnChange");
const yourText = document.getElementById("yourText");

function onClick() {
  console.log("Clicked");
  yourText.innerHTML = "Great text are changed";
}

function removeEventListner() {
  btn.removeEventListener("click", onClick);
}

function addEventListener() {
  removeEventListner();
  // btn.addEventListener('click', onClick);

  // new approach not add removeListener
  btn.addEventListener("click", onClick, { once: true });
}

function reRender() {
  setInterval(() => {
    addEventListener();
  }, 500);
}

reRender();

// (4)  Out of DOM reference

var outDomElement = document.getElementById("outDom");
console.log(outDomElement);
console.log("------------------------------");

document.body.removeChild(outDomElement);
console.log(document.getElementsByClassName("outDom"));
console.log(outDomElement);

// (5) Closure

var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;

  var unUsed = function () {
    if (originalThing) {
      console.log("Hello UnUSed");
    }
  };

  theThing = {
    longArray: new Array(100),
    someMethod: function () {
      console.log("Bye");
    },
  };
};

setInterval(replaceThing, 1000);

// (6) reference object cycle

let x = {
  a: {
    b: 2,
  },
};

var y = x;

console.log(x, y);

console.log("-----------------");

x = 1;
console.log(x, y);

console.log("-------------------");

var z = y.a;

console.log("-----------------");

y = 2;

console.log(x, y, z);

console.log("-----------");

z = 3;

console.log(x, y, z);

//  (7) Detached window

let notesWindow;

function showNotes() {
  notesWindow = window.open("/optimization.html");
  notesWindow.document.addEventListener("click");
}

document.getElementById("notes").onclick = showNotes;

let slide = 1;
function nextSlide() {
  slide += 1;
  notesWindow.document.title = slide;
}

document.getElementById("title").onclick = nextSlide;

function closeNotes() {
  notesWindow.close();
}

document.getElementById("close").onclick = closeNotes;


