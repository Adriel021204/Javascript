//declaring an obj
let person = {
    name: 'Adriel',
    age: 17,
    contact: 8600261975,
    city: 'Panaji'
}
console.log(person);

//dot notation
person.name = 'Arslaan';
console.log(person.name);

//bracket notation
person['name'] = 'Carlton';
console.log(person.name);

//bracket notation
let selection = 'name';
person[selection] = 'Gavin';
console.log(person.name);