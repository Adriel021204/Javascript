//Loops allow us to run the same code multiple times untill a conditon is fufilled//

//Iterate with While loops//
var myArray = [];

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

//Iterate with For loops//
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);

//Iterate odd nos with a For loop//
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

//count backwards with for loop//
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);

//Iterate an array with for loop//
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for( var i = 0;i < ourArray.length; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal);

//nesting for loops//
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++)
    product *= arr[i][j];j
  }
  return product;
}
var product =multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

//Iterate with Do While loops//
var myArray = [];
var i = 10;

/*
//using  loop
while (i < 5) {
  myArray.push(i);
  i++;
}
*/
do {
  myArray.push(i);
  i++;
} while(i < 5);

console.log(i, myArray);