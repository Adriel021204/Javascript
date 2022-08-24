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

//acessing array data//
var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData);

//modifying array data or values in an array//
var myArray = [10,25,30];
myArray[1] = 20;
console.log(myArray);

//accessing multdimensional array using indexes//
var ourArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var ourData = ourArray[3][0][2];
console.log(ourData);

//push an array inside an array//
var ourArray = ['Carlton', 30, 'M'] ;
ourArray.push(['happy', 'hardworking', 'technology']);
console.log(ourArray);
//ans = ['Carlton', 30, 'M', ['happy', 'hardworking']];

var weArray = [['Gavin', 35], ['Male', 'hardworking']];
weArray.push(['finance']);
console.log(weArray);

//pop an array outside an array//