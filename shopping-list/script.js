const inputDOM = document.querySelector("#input");
const addButtonDOM = document.querySelector("#add-button");
const listDOM = document.querySelector("#list");
const ulDOM = document.querySelector("ul");
const inputLength = () => inputDOM.value.length;

const liDOMGenerator = () => {
    const li = document.createElement("li");
        li.textContent= inputDOM.value;
        li.classList.add("list-group-item" , "list-group-item-danger");
        li.addEventListener("click", (e) => {
            e.target.classList.toggle("list-group-item-danger");

            e.target.classList.toggle("done");
        })
        li.appendChild(removeButton());
        ulDOM.appendChild(li);
        inputDOM.value = "";
}

const removeButton = () => {
    const button = document.createElement("button");
    button.textContent="Remove";
    button.classList.add("btn", "btn-danger");

    button.addEventListener("click", (e) => {
        console.log(e);
        e.target.parentElement.remove();
    })
    return button;
}
inputDOM.addEventListener("keypress", (e) => {
    if(inputLength() > 0 && e.keyCode === 13) {
        liDOMGenerator();
    }
});

addButtonDOM.addEventListener("click", (e) => {
    if(inputLength() > 0) {
        liDOMGenerator();
    }
});


// Background Gradient

const color1DOM = document.querySelector(".color1");
const color2DOM = document.querySelector(".color2");
const bodyDOM = document.querySelector("body");

const changeGradient = () => {
    bodyDOM.style.background = `linear-gradient(to right,${color1DOM.value}, ${color2DOM.value})`;
}

color1DOM.addEventListener("input", changeGradient);
color2DOM.addEventListener("input", changeGradient);


// closures

const add = () => {
    const a = 10;
    const b = 20;

     const addNumbers = () => a+b;

     return addNumbers;
}

const addFun = add();  // addFun = const addNumbers = () => a+b;

console.log(addFun()); // 30

// currying

const add1 = (a,b) => a+b;

const curryiedAdd = (a) => (b) => a+b;
const add5 = curryiedAdd(5);

console.log(add5(10));  // 15

console.log(curryiedAdd(10)(20));  // 30

// compose

const compose = (f,g) => (a) => f(g(a));

const mult5 = (a,b) => a*5;

console.log(compose(mult5,mult5)(2));  // 50


// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const forArray = [];
 array.forEach((element) => {
    forArray.push(element.username + " !");
 })

  //Create an array using map that has all the usernames with a "? to each of the usernames
  const mapArray = array.map((element) => {
      return element.username+" ?";
  })
  
  //Filter the array to only include users who are on team: red
  const filterArray = array.filter((element) => {
      
          return element.team === "red"
      
  })
  
  //Find out the total score of all users using reduce

  const totalScore = array.reduce((accumulator,element) => accumulator+element.score,0);
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num) => {
     
      return num * 2;
  })
   i=5

  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  
  const allItems = array.map((element) => {
    element.items = element.items.map((element) => element+" !");
    return element;
  })


// //Evaluate these:
// //#1
// [2] === [2]  false
// {} === {} false

// //#2 what is the value of property a for each object.
// const object1 = { a: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { a: 5}; 
// object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Mamal {
    constructor(name,type,color) {
        this.name = name;
        this.color= color;
        this.type= type;
    }
}

class Animal extends Mamal {
    constructor(name,type,color){
        super(name,type,color);
        console.log(this);
    }

    moo() {
        console.log(`MOOOOOOOOOOO Name: ${this.name} Type: ${this.type} Color: ${this.color}`);
    }
}

const cow = new Animal("basanti", "cow", "white");
cow.moo();

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

console.log(dragons.includes("John"));
// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
//const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.filter((element) => element.includes("John")))

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power100 = (a) => a**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(power100(1000));


