// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution

/*
Primitive
7 types => String,Number,Boolean,null,undefined,Symbol
*/
const score = 99
const scoreValue = 100.3

const isLoggedIn1 = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =  Symbol('123')
console.log(id === anotherId);

const bigNumber = 123456789987654321n

//Reference(non-primitive)
//Array,Objects,Functions

const ourHeroes = ["SHRI RAM","SHRI KRISHN","HANUMAN"];//Array

let myObj = {
    name:"ashutosh",
    age:22,
} //obejct

const myFunction = function(){
    console.log("JAI HO");
}
console.log("Data Type of outsideTemp is "+ typeof outSideTemp);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// stack(primitive)

let myYoutubeName = "hiteshchaudharydotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

// Heap(non-primitive)

let userOne = {
    email:"ashu@gmail.com",
    upi:"akshukla2424@ybl"
}

let userTwo = userOne

userTwo.email = "akshukla2424@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



 
