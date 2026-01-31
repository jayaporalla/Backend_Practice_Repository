// const cal = require("./Calculator");
// here we can destruct the cal we can use direclty add, sub without using cal like cal.add 
// const { add, sub, mul, div, moduluo } = require("./Calculator"); //prefered way

// const addition = cal.add(10, 10);
// console.log(`Addition - ${addition}`);

// const subtraction = cal.sub(20, 10);
// console.log(`Subtraction - ${subtraction}`);

// const multiplication = cal.mul(10, 10);
// console.log(`Multiplication - ${multiplication}`);

// const division = cal.div(20, 5);
// console.log(`Division - ${division}`);

// const mod = cal.moduluo(10, 10);
// console.log(`mod - ${mod}`);

// Importing using ECMA style
import ClassA, {add as Add} from "./Calculator.js";

const a = new ClassA();
console.log(Add(10, 10));

//importing global name
import "./Global.js"
console.log(global.name);
global.setName("Chechi");
console.log(global.getName());
console.log(process); //returns about node js data and also remote system data