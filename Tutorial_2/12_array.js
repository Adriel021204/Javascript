//Arrays//
var myArray =  ['Adriel', 17];
console.log(myArray);

var hisArray = ['Arslaan, 05'];
console.log(hisArray);

console.log('Mine:' + ' '+ myArray + ' ' + 'His:' + ' ' + hisArray);

//Nested/Multdimensional array//
var ourArray = [['the universe', 42], ['everything', 101010]];
console.log(ourArray);

var weArray = [['bulls', 23], ['white fox', 56]];
console.log(weArray);

//Accessing array data//
var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData);

//Modifying array data or values in an array//
var myArray = [10,25,30];
myArray[1] = 20;
console.log(myArray);

//Accessing multdimensional array using indexes//
var ourArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var ourData = ourArray[3][0][2];
console.log(ourData);

//Push @ Pop
//push an element/array inside an array//
var ourArray = ['Carlton', 30, 'M'] ;
ourArray.push(['hardworking', 'technology']);
console.log(ourArray);
//ans: ourArray = ['Carlton', 30, 'M', ['happy', 'hardworking']]

var weArray = [['Gavin', 35], ['Male', 'hardworking']];
weArray.push(['finance', 'happy']);
console.log(weArray);

//pop used to remove last element of an array//
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);
console.log(removedFromOurArray);
//ans: ourArray = [1,2] removedFromOurArray = 3

var  myArray = [['John', 20], ['cat', 5]];
var removedFromMyArray = myArray.pop();
console.log(myArray);
console.log(removedFromMyArray);

//Shift @ Unshift
//shift usedt to remove first element of and array//
var ourArray = ['Stimpson', 'S', ['dog']];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);
console.log(removedFromOurArray);
//ans: ourArray = ['S', ['dog']] removedFromOurArray = ['Stimpson']

var myArray = [['Bob', 30], ['parrot', 2]];
var removedFromMyArray = myArray.shift();
console.log(myArray);
console.log(removedFromMyArray);