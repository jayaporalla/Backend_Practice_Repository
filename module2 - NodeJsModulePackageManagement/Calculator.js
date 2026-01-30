//By default NodeJs uses CommonJS module it is older version new is ECMA - ES6
const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

const moduluo = (a, b) => {
    return a % b;
}

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;
// module.exports.moduluo = moduluo;

// or can also export like this below
// exports.add = add; // this also will work


// ECMA Module below
class A {
    constructor(){
        console.log("From A intialized");
    }
}

//named export - have to import with the exact name
export { add, sub, mul, div, moduluo};

//default export - can import with any name 
export default A;