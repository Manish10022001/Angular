console.log("HI");
function x() {
  var a = 10;
  if (true) {
    let b = 15;
    console.log(a, b);
  }
}
var k = 20;
x();

//callback
function y(a, x) {
  console.log(a, x);
  return x;
}
y(5, x);

//datatypes

//loop, control statements
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("For of");
for (let i of arr) {
  console.log(i);
}

console.log("for in");
for (let i in arr) {
  //   console.log(i);
  console.log(arr[i]);
}

console.log("forEach");
arr.forEach((i) => {
  console.log(i);
});

console.log("Map");
// arr.map((i)=>{
// 	console.log(i);
// })
const p = arr.map((i) => {
  console.log(i);
  return i;
});
console.log(p);

const q = arr.filter((i) => {
  console.log(i);
  return i % 2 == 0;
});
console.log(q);

//Lexical Scoping
// “If I want to get the values of an object inside a function defined outside the object, I use this.”

// Answer

// Yes, but with a condition. ✅
// You can use this to access object values only if the function is called with that object as its context (using call, apply, bind, or as a method).
console.log("Lexical scoping  ");

let obj = {
  name: "manish",
  age: 25,
};

function print(a, b) {
  console.log(this.name, this.age, a, b);
}

print.call(obj, 4, 5); //call() calls the function immediately and sets this.
print.apply(obj, [5, 6]); //apply() is almost the same as call(). The only difference is arguments are passed as an array.
const r = print.bind(obj, 5, 6); // bind() does NOT call the function immediately. It returns a new function where this is permanently set.
console.log(r);
r();

//events

//fetch( first method using promise(then) and 2nd method using async await)
fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function fetchData() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  console.log(data);
}
fetchData();

//promise, await-async
//classes
//inside class we do not need to write let, var, const
//class is nothing but general data
//every class will be called by default constructor
class Iphone {
  name;
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(this.name);
  }
}

class Iphone2 extends Iphone {
  constructor(name) {
    super(name);
  }
}
export default Iphone;
export { Iphone2 };
//create objects for class
// let obj1 = new Iphone("iphone");
// obj1.print();

// let obj2 = new Iphone("iphone 2");
// obj2.name = "iphone3";
// obj2.print();

// let obj3 = new Iphone2("iphone4");
// obj3.print();
//modules
