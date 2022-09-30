//rest operator with function parameter//
const sum = (function() {
    return function sum(...args) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b , 0)
    };
}) ();
console.log(sum(1, 2, 3, 4));

//spread operatro to evaluate arrays in place//
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
}) ();
console.log(arr2);