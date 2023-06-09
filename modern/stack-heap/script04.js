// values stored on the stack
const name = 'John';
const age = 30;

// reference values stored on the heap
const person = {
  name: 'Brad',
  age: 40
}

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Brad';

console.log(name, newName);
console.log(person, newPerson);