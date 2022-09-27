//takes a string and returns a intger//
//NAN = Not a Number if string cant be converted to int//
function convertStrToInt(str) {
   return parseInt(str);
}
console.log(convertStrToInt('56'));

//using parseInt function with a radix//
function convertToInt(str) {
    return parseInt(str, 2);
}
console.log(convertToInt('10011'));