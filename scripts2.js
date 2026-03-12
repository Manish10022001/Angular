import Iphone from "./scripts.js";
import { Iphone2 } from "./scripts.js";

let obj1 = new Iphone("iphone");
obj1.print();

let obj2 = new Iphone("iphone 2");
obj2.name = "iphone3";
obj2.print();

let obj3 = new Iphone2("iphone4");
obj3.print();
