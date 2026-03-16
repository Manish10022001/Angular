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

//Enums: enum is a data type given to constant values( a set of constants)
//enums are basic contant values, enums will work as array, or will work as object etc.

enum days {
  sunday = 40,
  monday,
  tuesday,
  wednesday,
  thursday,
  firday,
  saturday,
}
console.log(days.firday);
console.log(days[41]);
console.log(days[days.thursday]);

//never: never is data type which defines the situation/function that should never run
//eg. some functions are runing and they are giving some errors, those kind of thing use never,
//normally have 3 kind of function: 1.function return, frunction do not return, void 3. function throwing errors( for this kind of thing use never, if we do not want to throw error, (i.e written that should never run)

function dummy(): never {
  throw Error;
} //it is not returning anything, it is never(not void),
//never is used in only situating where error throwing happens

//Interface: is user defined data type specifically for objects
interface myObj {
  name: string;
  age: number;
  salary?: number; //salary is optional
}

let obj: myObj = {
  name: "manish",
  age: 25,
};

//Create a object with name, email, phone number with its respective interface;
interface userInfo {
  name: string;
  email: string;
  phone_number?: number;
}
//interrface can have inheritance; i.e take properties of parent interface and use it in child interface
//if interface taking interface -> extends
//if class is taking interface -> implements, and we can write as many interfaces as we need
//interface is used for objects so call will take this, we cannot define interface for function, only for objects

interface userInfo2 extends userInfo {
  salary: number;
}

let user1: userInfo = {
  name: "Manish",
  email: "abc@gmail.com",
  phone_number: 34343433434,
};

let user2: userInfo2 = {
  name: "Manish",
  email: "abc@gmail.com",
  phone_number: 34343433434,
  salary: 2343,
};
console.log(user1, user2);

class Employee implements userInfo {
  name;
  salary;
  email;
  constructor(n: string, s: number, e: string) {
    this.name = n;
    this.salary = s;
    this.email = e;
  }
}
let xyz = new Employee("Manish", 234343, "abc@gmail.com");
console.log(xyz);

//Type alias
//alias means another name or fake name,
//give another name to data type

//type alias can be used for objects and other thing, but interface can only be used for objects
type x = number | string | boolean;
let ta: x = 23;

type myObj2 = {
  name: string;
  email: string;
  salary: number;
};

let obj2: myObj2 = {
  name: "Ajinkya",
  email: "asd@gmail.com",
  salary: 343343,
};
console.log(ta, obj2);

//create a object with name, email, phone number using Type alias

type myObj3 = {
  name: string;
  email: string;
  phone_no: number;
};

let obj3: myObj3 = {
  name: "dsd",
  email: "dsd@gmail.com",
  phone_no: 4848383838,
};
console.log(obj3);

//type alias can also be used with functions

//without type alias we have to give paramerter and its type for all, but using type alias, we create a common type, which we pass to functions
// let sum3 = (a:number, b:number):number => a + b;
// let sub3 = (a:number, b:number):number => a - b;
// let mul3 = (a:number, b:number):number => a * b;
// let div3 = (a:number, b:number):number => a / b;
type commonType = (p: number, q: number) => number; //one function takes 2 parameters as number and return a number

let sum3: commonType = (a, b) => a + b;
let sub3: commonType = (a, b) => (a = b);
let mul3: commonType = (a, b) => a * b;
let div3: commonType = (a, b) => a / b;
console.log(sum3(4, 2), sub3(5, 2), mul3(6, 3), div3(8, 2));

//Type assertion
function clicky(e: Event) {
  const btn = e.target as HTMLButtonElement;
  console.log(btn.textContent);
}

//Generics
function sum4<T>(x: T, y: T) {
  console.log(typeof x, typeof y);
}
sum4<number>(3, 4);
sum4<string>("abc", "efg");
sum4<boolean>(true, false);
