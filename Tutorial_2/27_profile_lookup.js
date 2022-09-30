var contacts = [
    {
        'firstName': 'Akira',
        'lastName': 'Laine',
        'number': '1234554321',
        'likes': ['Pizza', 'Coding', 'Brownie Points']
    },
    {
        'firstName': 'Harry',
        'lastName': 'Potter',
        'number': '1234567890',
        'likes': ['Hogwarts', 'Magic', 'Wizard']
    },
    {
        'firstName': 'Optimus',
        'lastName': 'Prime',
        'number': '0000000000',
        'likes': ['Transformer', 'Cybertron', 'autoBots']
    },
    {
        'firstName': 'Ash',
        'lastName': 'Ketchum',
        'number': '6789009876',
        'likes': ['Pokemon', 'Pikachu', 'bestFriend']
    },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if ( contacts[i].firstName === name) {
  return contacts[i][prop] || 'No such property';
    }
  }
  return 'No such object';
}
var data = lookUpProfile('Akira', 'likes');
console.log(data);
