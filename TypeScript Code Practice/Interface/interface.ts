// Person interface
interface IPerson {
  firstName: string;
  lastName: string;
}

// Return full name
function getFullName(person: IPerson) {
  return person.firstName + " " + person.lastName;
}

// Person object
let person = {
  firstName: "Bhavesh",
  lastName: "Ajani",
};

/*** Optional properties Example ***/

// Person interface
interface IPersonB {
  firstName: string;
  lastName: string;
  age?: number;
}

// Person object
let personB: IPersonB = {
  firstName: "Vivek",
  lastName: "Ajani",
};
