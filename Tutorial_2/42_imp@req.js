// 
import { capitalizeString } from "./41_string_funct";
const cap = capitalizeString('hello');

console.log(cap);

//
export const capitalizeString = str => str.toUpperCase()

//using export to reuse a code block//
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export {capitalizeString};

export const foo = 'bar';
export const bar = 'foo';

//use * to import all files in an obj//
//import * as capitalizeString from 'capitalize_strings';
//not sure if correct//

//creating and export fallback with export default//

//function subtract(x, y) {return x - y;}
export default function subtract(x, y) {return x - y;};

//import a default export//
import subtract from "math_funct"
subtract(7, 4);