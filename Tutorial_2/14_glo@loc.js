//Global scope//
var myGlobal = 10;       //scope refers to visiblilty of variables    
function funct1() {     //variables defined out of function block have global scope.
    oopsGlobal = 5;    //global scope means they can be seen everywhere in our js code.
}
function funct2() {
    var output = '';
    if(typeof myGlobal != 'udefined') {
        output += 'myGlobal: ' + myGlobal;    
    }
    if(typeof oopsGlobal != 'undefined') {
        output += 'oopsGlobal: ' + oopsGlobal;
    }
    console.log(output);
}
funct1();
funct2();

//Local scope//
function myLocalScope() {      //when var is used inside funct tht var becomes local
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
//console.log(myVar);   //tht var can be accessed only in that particular funct and not outside

//Global vs Local//
var outerWear = 'T-Shirt';
function myOutfit() {
    var outerWear = 'Pant';
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

//Returing value from fuct//
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5
}
console.log(timesFive(5));

//Returning undefined value from funct//
var sum = 0;
function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum += 5;
}
//if u log it out ans will be undefined//

//assignment with returned value//
var changed = 0;
function change(num) {
    return(num + 5) / 3;
}
changed = change(10);

var processed = 0;
function processArgs(num) {
    return (num + 3) / 5;
}
processed = processArgs(7);

//Stand in line//
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log('Before' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After' + JSON.stringify(testArr));