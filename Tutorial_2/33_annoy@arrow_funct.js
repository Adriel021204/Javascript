//using arrow functions to write replace annonymous functions//
//using annoymous function//
var magic = function() {
    return new Date();
};

//using arrow function//
const magic = () => new Date();

//arrow function with parameters//
/*
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
*/
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3, 4, 5]));

//higher order arrow functions//
/*
arrow funct work well with high order
function like: map, filter, reduce
*/
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function() {
    return function increment(number, value) {
        return number + value;
    };
} ) ();
console.log(increment(5, 2));
console.log(increment(5));