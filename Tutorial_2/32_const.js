function printManyTimes(str) {
    'use strict';

//var sentence = str + 'is cool!';
const SENTENCE = str + 'is amazing!';
//always use let with const keyword//
for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
    }
}
printManyTimes('learningToMasterNodeJS');

//mutate an array declared with const//
const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    //s = [2, 5, 7]; --> this will give and error//
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

//to prevent object mutation//
function freezeObj() {
    'use strict';
    const MATH_CONSTANNTS = {
        PI: 3.14
    };
/*
if u have an object and 
whenever items are in the object and
u don't want to change use:
//Object.freeze(MATH_CONSTANNTS);//
*/
try{
    MATH_CONSTANNTS.PI = 99;
} catch(ex) {
  console.log(ex);
}
return MATH_CONSTANNTS.PI;
}

const PI = freezeObj();
console.log(PI);