var Employee = {
    firstName: "Jason",
    address: "Somewhere in US",
    empId: "007",
    // A method to return employee details.
    getEmployeeDetails: function() {
        // 'this' refers to the object that calls this function.
        // Note: We use 'this.designation' even if it might be undefined.
        return `First Name: ${this.firstName}
Address: ${this.address}
Designation: ${this.designation || "N/A"}`;
    }
};

console.log(Employee.getEmployeeDetails());


var SE = Object.create(Employee)
SE.firstName = "Jin"
SE.address = "123 ABC Street"

console.log(SE.getEmployeeDetails())

SE.getEmployeeDetails = function() {
    return `First Name: ${this.firstName}
    Address: ${this.address}
    empID: ${this.empId}
    Desgination: ${this.designation || "N/A"}`
}

console.log(SE.getEmployeeDetails())
console.log(SE.__proto__);
var EmptyClass = Object.create({});
// EmptyClass inherits from an empty object.
console.log(EmptyClass.__proto__);

// Create a Student object that uses SoftwareEngineer as its prototype.
var Student = Object.create(SE);

// Set properties unique to Student.
Student.firstName = "Emily";
//Student.empId = "N/A"; // Not applicable for a student.
Student.course = "Computer Science";

// We can add a new method specific to Student.
Student.getStudentDetails = function() {
    // This method uses inherited properties as well as its own.
    return `Name: ${this.firstName}
Course: ${this.course}
empID: ${this.empId}
Designation: ${this.designation || "Student"}`;
};

console.log(Student.getStudentDetails());
var obj = {
    a: 10,
    getA: function() {
        return this.a;
    }
};

// Case 1: Calling the method immediately.
var getC = Object.create(obj).getA();
console.log(getC); // Outputs: 10

// Case 2: Simply referencing the method without calling it.
var getCReference = Object.create(obj).getA;
console.log(getCReference); // Outputs: the function definition of getA
