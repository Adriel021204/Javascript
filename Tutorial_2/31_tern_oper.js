function checkEqual(a, b) {

    /*
//using if else//
    if(a === b) {
        return true;
    } else {
        return false;
    }
*/
return a === b ? true : false;   //use either 2 both do the same//
return a === b;
}
console.log(checkEqual);

//use multiple(ternary)operators//
function checkSign(num) {
   return num > 0 ? positive : num < 0 ? negative : 'zero';
}
console.log(checkSign(10));