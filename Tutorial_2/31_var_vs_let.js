//using var//
var catName = 'Alice';
var quote;

var catName = 'Brown';

function catTalk() {
    'use strict';
catName = 'Oliver';
quote = catName + ' says Meow!';
}
catTalk();

//let dosent allow to declare multiple variables//
//var allows but with different names//

let catName = 'Alice';
let quote;

 catName = 'Brown';

function catTalk() {
    'use strict';       //'use strict' --> used by programmers to check//
catName = 'Oliver';    //if a var is created and has not been declared//
quote = catName + ' says Meow!';
}
catTalk();

//Scope of var@let keywords//
/*
-  if a variable is declared with var whether
globally or locally it is declared inside a function

-  let is limited to the block of statement 
or experssion it was declared in

-  let is used more then var as it confirms if the variable
is defined in the area it needs to be defined in
*/

function checkScope() {
    'use strict';
    let i = 'function scope';
    if(true) {
       let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
checkScope();