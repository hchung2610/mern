// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

/*a.*/ const nonEvilHeroes = heroes.filter(hero => !hero.isEvil);
console.log("Non-evil heroes: ", nonEvilHeroes);
/*b.*/ const uniqueFamName = [...new Set(heroes.map(hero => hero.family))]
console.log("Unique family names: ", uniqueFamName);
/*c.*/ const heroNameSir = heroes.map(hero => `Sir ${hero.name}`);
console.log("Hero names with Sir: ", heroNameSir);
/*d.*/ const nonEvilMarvalHeroes = heroes.some(hero => hero.family === 'Marvel' && !hero.isEvil);
console.log("Non-evil heroes in Marvel Family: ", nonEvilMarvalHeroes);

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one
function multiplyNumbers(... n) {
    return n.reduce((acc, curr) => acc * curr, 1);
}

const num = 5; 
const numbersArray = [1, 2, 3 , 4, 5];
const result = multiplyNumbers.apply(null, numbersArray);
console.log(`Product of numbers from 1 to ${num}: `, result);

//3. Print the last name through destructuring and add a contact number:9119119110 as well
    const person = {
        userDetails :{
            first: "FirstName",
            last: "LastName"
        }
    }

  const { userDetails: { last } } = person;
  console.log("Last Name:", last);
  
  const updatedPerson = { ...person, contactNumber: "9119119110" };
  console.log("Updated Person:", updatedPerson);
  
//4. Give me an example of const data manipulation
/* answer: 
    Even though a variable declared with const cannot be reassigned, 
    the data it holds (if it’s an object or array) can still be modified. 
    For example: */
    const myArray = [1, 2, 3]; 
    myArray.push(4);
    console.log("new out put of myArray will be [1, 2, 3, 4]:  ", myArray);

    const myPerson = { name: "John", age: 23};
    myPerson.age = 32; 
    console.log("John age after updating should be 32 not 23: ", myPerson);

    // However, attempting to reassign will throw an error: 
    // myArray = [5, 6, 7]; 
//5. What is the difference between for-of and for-in show with examples
// for...in iterates over the enumerable properties (keys) of an object, while
// for...of iterates over the values of an iterable object (like arrays, strings, etc.). 
    const number1 = [10, 20, 30];

    // Iterating over array indices using for-in
    for (const index in number1) {
    console.log(index); // Outputs: "0", "1", "2"
    }

    // we can then access the values if needed:
    for (const index in number1) {
    console.log(number1[index]); // Outputs: 10, then 20, then 30
    }

    for (let key in myPerson) {
        console.log(key); // Output: firstName, lastName, age
        console.log(myPerson[key]); // Output: John, Doe, 30
    }
    // Iterating over array values using for-of
    for (const num of number1) {
    console.log(num); // Outputs: 10, then 20, then 30
    }

//6. Give me an example of bind and write its usage, comparison with arrow function
    function greet(greeting, name) {
        console.log(`${greeting}, ${name}!`);
    }

    const person2 = {
        firstName: "Alice",
        lastName: "Smith"
    };

    // Using bind() to create a new function with a fixed 'this' context
    const greetAlice = greet.bind(person2, "Hello");

    greetAlice("Alice"); // Output: Hello, Alice!
    greetAlice("World"); // Output: Hello, World!
  
    //Comparison with Arrow Func 
    /* The bind() method in JavaScript creates a new function with a specified this value and arguments, whereas
    arrow functions inherit their this context from the surrounding scope */
    const person3 = {
        firstName: "Alice",
        lastName: "Smith"
    };
      
    // Arrow function
    const greetAlice2 = (name) => console.log(`Hello, ${name}!`);
    
    greetAlice2(person3.firstName); // Output: Hello, Alice!
//7. Create an example showing usage of event loop in concurrent execution cycle
    console.log("Script start");

    setTimeout(() => {
        console.log("Inside setTimeout (Macrotask)");
    }, 0);

    Promise.resolve().then(() => {
        console.log("Inside Promise then (Microtask)");
    });

    console.log("Script end");

//8. create an example showing usage of short hand and default param.
    function createUser(firstName, lastName = "Trump") {
        return {
            firstName,
            lastName,
            getFullName() {
                return `${firstName} ${lastName}`;
            }
        };
    }
  
    const user1 = createUser("John", "Smith");
    const user2 = createUser("Jane"); // lastName defaults to "Trump"
    
    console.log(user1.getFullName()); // Output: John Smith
    console.log(user2.getFullName()); // Output: Jane Doe
    
//9. Create two objects with some properties and merge them using Object method and ES6 way
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };

    // Using Object.assign() to merge obj1 and obj2 into a new object
    const mergedUsingAssign = Object.assign({}, obj1, obj2);
    console.log("Merged using Object.assign():", mergedUsingAssign);
    
    // Using ES6 spread operator to merge objects
    const mergedUsingSpread = { ...obj1, ...obj2 };
    console.log("Merged using spread operator:", mergedUsingSpread);
//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
    // Creating a Map and adding four key-value pairs
    const myMap = new Map();
    myMap.set("key1", "value1");
    myMap.set("key2", "value2");
    myMap.set("key3", "value3");
    myMap.set("key4", "value4");

    // Accessing a value using get
    console.log("Value for key1:", myMap.get("key1")); 

    // Checking existence of a key
    console.log("Has key2?", myMap.has("key2")); 

    // Iterating over the Map
    console.log("Iterating over Map:");
    for (const [key, value] of myMap) {
    console.log(key, value);
    }

    // Deleting a key-value pair
    myMap.delete("key3");
    console.log("Map size after deletion:", myMap.size); 

    // Clearing all entries
    myMap.clear();
    console.log("Map size after clear:", myMap.size); 


    // Creating a Set and adding four values
    const mySet = new Set();
    mySet.add(10);
    mySet.add(20);
    mySet.add(30);
    mySet.add(40);

    // Checking if a value exists
    console.log("Does set contain 10?", mySet.has(10)); 

    // Iterating over the Set
    console.log("Iterating over Set:");
    for (const value of mySet) {
    console.log(value);
    }

    // Deleting a value from the Set
    mySet.delete(20);
    console.log("Set size after deletion:", mySet.size); 

    // Clearing all values from the Set
    mySet.clear();
    console.log("Set size after clear:", mySet.size); 


//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
    const es6FeaturesPromise = new Promise((resolve, reject) => {
        const features = [
            "Arrow Functions",
            "Template Literals",
            "Destructuring",
            "Rest & Spread",
            "Classes"
        ];
    
        const rejectTimer = setTimeout(() => {
            reject("Promise rejected after 3 seconds");
        }, 3000);
    
        const resolveTimer = setTimeout(() => {
            clearTimeout(rejectTimer);
            resolve(features);
        }, 2000);
  });
  
    // Usage:
    es6FeaturesPromise
        .then(features => {
            console.log("Resolved with ES6 features:", features);
        })
        .catch(error => {
            console.error(error);
        });
  
//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
    /* please visit question 2 answer for the function and arrays */
    const product = multiplyNumbers(...numbersArray);
    console.log(`Product of numbers from 1 to ${num}:`, product);

//13. Use the question #11 to build promises using async and await - with multithread
    async function runConcurrentTasks() {
        const es6FeaturesPromise = new Promise((resolve, reject) => {
            const features = [
                "Arrow Functions",
                "Template Literals",
                "Destructuring",
                "Rest & Spread",
                "Classes"
            ];
        const rejectTimer = setTimeout(() => {
            reject("Promise rejected after 3 seconds");
        }, 3000);
        setTimeout(() => {
            clearTimeout(rejectTimer);
            resolve(features);
        }, 2000);
        });
    
        const anotherAsyncTask = new Promise((resolve) => {
            setTimeout(() => {
                resolve("Another async task completed");
            }, 2500);
        });
    
        try {
        // Run both promises concurrently.
            const [features, message] = await Promise.all([es6FeaturesPromise, anotherAsyncTask]);
            console.log("ES6 Features:", features);
            console.log("Message:", message);
        } catch (error) {
            console.error("Error in concurrent tasks:", error);
        }
    }
  
    runConcurrentTasks();
  
//14. Create an example of generator function of your choice
    function* fibonacciGenerator() {
        let a = 0, b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }
    
    const fibGen = fibonacciGenerator();
    console.log(fibGen.next().value); 
    console.log(fibGen.next().value); 
    console.log(fibGen.next().value); 
    console.log(fibGen.next().value); 
    console.log(fibGen.next().value); 
  
//15. Explain your knowledge on function and object protoype what is the purpose of the same - example
/*
    Function Prototype:
        When a function is used as a constructor (with the new keyword), the newly created object’s internal
        [[Prototype]] (commonly accessible via __proto__) is set to the constructor’s prototype object. 
        This mechanism allows all instances to share methods and properties, thereby saving memory and promoting code reuse.
    Object Prototype (Prototype Chain):
        Every object in JavaScript has a prototype. When we access a property or method on an object, 
        JavaScript looks up the prototype chain until it finds it (or reaches null) */
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.speak = function() {
        console.log(`${this.name} says: Woof!`);
    };

    let dog = new Animal("Bum");
    let cat = new Animal("Boo");

    dog.speak(); // Output: Bum says: Woof!
    cat.speak(); // Output: Boo says: Woof!

    let person5 = {
        firstName: "John",
        lastName: "Doe"
    };

    // person5 inherits from Object.prototype
    console.log(person5.hasOwnProperty("firstName")); // Output: true
    console.log(person5.hasOwnProperty("toString")); // Output: false (because toString is on Object.prototype)
    console.log(person5.toString()); // Output: [object Object] (because toString is on Object.prototype)