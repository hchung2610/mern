console.log("sum of 5 and 5 is", 5+5)
//var iknowJS = confirm("do you know js");
//console.log(iknowJS);

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

const nullProtoObject = Object.create(null);

const sample = Object.create(null);
sample.name = "No object";
sample.someMethod = function(){
    return " no inherited props ";
}
console.log("sample.toString:", sample.toString);  // -> undefined
console.log("nullProtoObject.toString:", nullProtoObject.toString);



let Assessment = {
    Name : "Jugue",
    Standard : "Professional",
    Marks : {
        Java : 10,
        Mernstack : 8,
        ES6 : 9
    }
};

// let ShowUserName =  Assessment.Name
// let ShowUserJavaMark =  Assessment.Marks.Java
// let ShowUserES6Mark =  Assessment.Marks.ES6

let {Name, Marks : {Java, ES6, AWS=10}} = Assessment

console.log(Name)
console.log(Java)
console.log(ES6)
console.log(AWS)
console.log(Standard)
