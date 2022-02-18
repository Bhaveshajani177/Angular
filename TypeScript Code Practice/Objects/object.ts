// The empty type {}
let xyz: {};

let employee: object;

let employeeA: Object;

employee = {
  firstName: "Bhavesh",
  lastName: "Ajani",
  age: 23,
  jobTitle: "Web Developer",
};

/*
    To explicitly specify properties of the employee object, 
    you first use the following syntax to declare the employee object.

    And then you assign the employee object to a literal object with the described properties:
*/

let employeeB: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

employeeB = {
  firstName: "Bhavesh",
  lastName: "Ajani",
  age: 23,
  jobTitle: "Web Developer",
};

/*
    Or you can combine both syntaxes in the same statement like this:
*/

let employeeC: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "Bhavesh",
  lastName: "Ajani",
  age: 23,
  jobTitle: "Web Developer",
};
