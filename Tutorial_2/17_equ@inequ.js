//Euality Operator//
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));  //change value to test

/*
 2 == 2  gives true
 2  == '2' gives true cause == equality operator converts string to byte
 3 === 3 true
 3 === '3' false === operator dosen't do type conversion unlike == operator
 */

 //Strict Equality Operator//
 function testStrict(val) {
    if (val === 7) {
        return 'Equal';
    }
    return 'Not Equal';
}
console.log(testStrict(10)); 

function compareEquality(a, b) {
    if (a == b) //a === b//
    {
        return 'Equal';
    }
    return 'Not Equal';
}
console.log(compareEquality(10, '10'));

//Inequality Operator//
function testNotEqual(val) {
    if(val != 99 )  //smiliar to equality operator//
    {
        return 'Not Equal';
    }
        return 'Equal';
    }
console.log(testNotEqual(199));

//Strict Inequlity Operator//
function testStrictNotEqual(val) {
    if(val !== 199 )  //smiliar to equality operator//
    {
        return 'Not Equal';
    }
        return 'Equal';
    }
console.log(testStrictNotEqual(99));