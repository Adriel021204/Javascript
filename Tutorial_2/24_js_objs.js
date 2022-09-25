/*similar to arrays instead of using 
  indexes to access data we use properties
  defined using {} brackets at the begining
  */

 var ourDog = {
    'name': 'Camper',    //everything in ' ' is the 
    'legs': 4,          //property after : is the value
    'tails': 1,
    'friends': ['everything!']
 };

 var myDog = {
     'name': 'Quincy',
     'legs': 3,
     'tails': 1,
     'friends': []
 };
 console.log(ourDog);
 console.log(myDog);

 //accessing obj properties using:
// dot notation//
var testObj = {
    'hat': 'ballcap',
    'shirt': 'jersey',
    'shoes': 'cleats'
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var shoesValue = testObj.shoes;

console.log(hatValue + ',' + shirtValue + ',' + shoesValue);

//bracket notation//
var testObj = {
    'fastFood': 'burger',
    'healthyFood': 'veggies',
    'healthydrink': 'water',
    'unhealthydrink': 'soda'
};
var fastFoodValue = testObj['fastFood'];
var healthyFoodValue = testObj['healthyFood'];
var healthydrinkValue = testObj['healthydrink'];
var unhealthydrinkValue = testObj['unhealthydrink'];

console.log(fastFoodValue + ',' + healthyFoodValue + ',' + healthydrinkValue + ',' + unhealthydrinkValue);

//variables//
var testObj = {
    12: 'Namath',
    16: 'Montana',
    19: 'Uchicha'
};
var playerNumber = 16;
var playerSelected = testObj[playerNumber];
console.log(playerSelected);

//updating obj properties//
var ourDog = {
    'name': 'Camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything!']
};
ourDog.name = 'Repmac';
var myDog = {
    'name': 'Coder',
    'legs': 4,
    'tails': 1,
    'friends': ['everything!']
};
myDog.bark = 'woof-oof-wof=fow'; 
//myDog['bark'] = 'woof-oof-wof-fow';

console.log(ourDog);
console.log(myDog);

//deleting properties from an obj//
var myDog = {
    'name': 'Coder',
    'legs': 4,
    'tails': 1,
    'friends': ['everything!'],
    'bark': 'woof-oof-wof=fow'
}; 
delete myDog.bark;
var ourDog = {
    'name': 'Camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything!']
};
delete ourDog['tails'];
console.log(myDog);
console.log(ourDog);

//ojs for lookup//
function phoneticLookup(val) {
    var result ='';
/*
    switch(val) {
        case 'alpha':
            result = 'Adriel';
            break;
        case 'bravo':
            result = 'Arslaan';
            break;
        case 'charlie':
            result = 'Carlton';
            break;
        case 'delta':
            result = 'Gavin';
            break;
        case 'echo':
            result = 'Eben';
            break;
        case 'foxtrot':
            result = 'Dweepain';
*/
var lookup = {
    'alpha': 'Adriel',
    'bravo': 'Arslaan',
    'charlie': 'Carlton',
    'delta': 'Gavin',
    'echo': 'Eben',
    'foxtrot': 'Dweepain'
};
result = lookup[val];
    return result;
}
console.log(phoneticLookup('charlie'));

//testing properties of objs//
var myObj = {
    gift: 'pony',
    pet: 'kitten',
    bed: 'dog'
};
function  checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }else {
        return 'Not Found'
    }
}
console.log(checkObj('gift'));

//manipulating complex objs//
var myMusic = [
    {
        'artist': 'Maroon 5',
        'title': 'Cold',
        'release year': 2022,
        'formats': [
            'Cd',
            '8T',
            'LP'
        ],
        'gold': true
    },
    {
        'artist': 'Ed Sheeran',
        'title': 'Memories',
        'release year': 2021,
        'formats': [
            'youtubeMusic',
            'spotify',
            'gaana'
        ]
    }
];

//accessing nested objs//
var myStorage = {
    'car': {
        'inside': {
            'glove box': 'maps',
            'passenger seat': 'crumbs'
        },
        'outside': {
            'trunk': 'jack'
        }
    }
};
var gloveBoxContents = myStorage.car.inside('glove box');
console.log(gloveBoxContents);