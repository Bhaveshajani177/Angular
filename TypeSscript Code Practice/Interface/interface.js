// Return full name
function getFullName(person) {
    return person.firstName + " " + person.lastName;
}
// Person object
var person = {
    firstName: "Bhavesh",
    lastName: "Ajani"
};
console.log(getFullName(person));
// Return full name
function getFullNameB(person) {
    return person.firstName + " " + person.lastName + " " + person.age;
}
// Person object
var personB = {
    firstName: "Vivek",
    lastName: "Ajani"
};
console.log(getFullName(personB));
