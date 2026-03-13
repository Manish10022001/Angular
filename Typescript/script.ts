//Datatypes

let a: number = 55;
console.log(typeof a);
let a1 = 55;

let b: string = "Prasad";
console.log(typeof b);

let c: boolean = true;
console.log(typeof c);

let d: undefined = undefined;
console.log(typeof d);

let e: null = null;
console.log(typeof e);

//union ( | ) --> used to define multiple data types
let k: number | string = "raj"; //(string or number datatype);
console.log(typeof k);
k = 2343;
console.log(typeof k);
// k=true; => error

//any => means it is allowed to take any data tpype
let q: any = 44;
q = "prasad";
q = true;

//Task1: Create a variable "name" which accepts number or string and create a variable value
//which accepts any data type and print their types in console.

let s: number | string = "manish";
let w: any = 3343;
console.log(typeof s);
console.log(typeof w);

//Array
let arr: number[] = [2, 34, 233, 50];
let arr2: string[] = ["raj", "ravi", "shekhar"];

//Task 2: create an array which accepts strings and numbers only
//let task2: number[] | string[] = [2,"kk",333,"ksdfk"]  -> wrong
let task2: (number | string)[] = [2, "kd", 343, "kks"];
console.log(task2);

//first one to be number, 2nd to be string and 3rd to be boolean, so to resolve this, we have tuple
//Tuple: tuple is used when we need to declare data types for individual array elements;, we need to give elements in the same order, else will give error
let arr3: [number, string, number] = [343, "dk", 64];
console.log(arr3);
//we can also use union in tuple
let arr4: [number | string, any] = ["dk", true];
console.log(arr4);

//Function
//           number , number returns number -> we need to specify the return type as well
function sum(a: number, b: string): string {
  return a + b;
}
console.log(sum(2, "hi"));

//if function is not returning anything , then need to give void;
function sub(c: number, d: number): void {
  console.log(c, d);
}
sub(4, 2);

//Arrow Function
const mul = (e: number, f: number): void => {
  console.log(e * f);
};
mul(3, 9);

//if there are multiple parameter, and we do not give one then for it to work we use
//? which means optional
// const sum2 = (g: number, h: number, i?: number): void => {
//   console.log(g + h + i); //i is undefined so we give it a default value
const sum2 = (g: number, h: number, i: number = 4): void => {
  console.log(g + h + i);
};
sum2(3, 4);
