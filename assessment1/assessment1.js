//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
let myVar;

myVar = "Robert ";
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = 0.0266;
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = false;
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = { myname: "Test Me" };
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = 25166665;
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = undefined;
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = true;
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = "Robert Jr.";
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = null;
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = {};
console.log("Value:", myVar, "Type:", typeof myVar);

myVar = -32767;
console.log("Value:", myVar, "Type:", typeof myVar);

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function showUserInfo(firstname, lastname, age) {
    console.log("First name: ", firstname);
    console.log("Last name: ", lastname);
    console.log("Age: ", age);
}


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

function doaddition(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log("doaddition(2,3,4):", doaddition(2, 3, 4));  // => 9 (simple numeric addition)
console.log("doaddition(2):", doaddition(2));  //=> NaN because b and c are undefined, so 2 + undefined + undefined => NaN
console.log("doaddition(2.3, 3):", doaddition(2.3, 3));  // => NaN because c is undefined, so 2.3 + 3 + undefined = NaN
console.log('doaddition("first", 2, "three"):', doaddition("first", 2, "three")); //=> first2three because when adding strings and number in JS, 
                                                                                  // it coerces the number to a string 
//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
// b. hoisting, 
// c. constructor function

//a. closure: 
function outerFunction(x) {
    return function innerFunction(y) {
        console.log("Outer Variable: ", x);
        console.log("Inner Variable: ", y);
    }
}

const ex = outerFunction("I am outer");
ex("I am inner");

//b. Hoisting:
tryRunMe(); // Works due to hoisting

function tryRunMe() {
  console.log("I can be used even before declaration");
}
// Using a variable before its declaration
console.log(abc); // undefined due to hoisting, not an error
var abc = "I am hoisted but initialized later!";

//c. constructor function: 
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName  = lastName;
}

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

const person1 = new Person("Alice", "Borderlane");
console.log(person1.getFullName()); // "Alice Borderlane"
//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?

//all and apply let us invoke a function with a specific this context, plus arguments: call receives arguments separated by commas while apply receives arguments as an array.
//bind returns a new function with a fixed this context and optionally preset arguments. It does not invoke the function immediately; it just creates a bound copy.
//they are used when we need to control what this refers to or want to pass arguments in a flexible manner. 
//For example, reusing a method from one object in another object while ensuring the correct this context.

/*Difference between bind and apply
-apply will call/invoke the function right away, with arguments in an array.
-bind will not call the function immediately but return a new function that can be called later with that specific this context.*/

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
const Student = {
    name: "Jason",
    age: 23, 
    showDetails: function(){
        console.log(this.name, this.age);
    }
};

//This log undefined or cause an error, because 'this' is lost.
setTimeout(Student.showDetails, 1000); 

setTimeout(Student.showDetails.bind(Student), 2000); // Now 'this' is permanently bound to the Student object, so it will correctly log "Jason 23".
//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?

const sample = Object.create(null);
sample.name = "No object";
sample.someMethod = function(){
    return " no inherited props ";
}
console.log("sample.toString:", sample.toString);  // -> undefined
//Having a null prototype means it doesn’t inherit any properties  like `toString` or `hasOwnProperty` from Object.prototype. 
// This is useful when we want a completely clean object, often for maps to avoid key collisions.
//Q9. How do we merge different objects properties using Object class function

//We use the built-in method Object.assign() to merge properties from multiple source objects into a single target object
//And overlapping property names will be overwritten by the last object that has them.
//E.g.: 
const obj1 = {a: 3, b: 8};
const obj2 = {a: 11, c: 33};
const obj3 = {d: 99};
const mergedObject = Object.assign({}, obj1, obj2, obj3);

console.log(mergedObject); // {a: 11, b: 8, c: 33, d: 99}
//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned
import { myData } from "./myData.js";

console.log("Imported data is:", myData);
console.log("Name:", myData.name);
console.log("Value:", myData.value);