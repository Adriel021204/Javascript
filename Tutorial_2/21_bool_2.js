//returning boolean values from functions//
function isLess(a, b) {
 return a < b;
    /*
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
*/
}
console.log(isLess(10, 15));

//returning early patterns from functions//
function abTest(a, b) {
    if ( a < 0 || b <  0) 
    {
        return undefined;
    }
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
confirm.log(isLess(-2, 2));