/*Set of statment that performs a task or calculated a value
Function are building blocks of js*/

//declaring a function
function greeting() {                   //body of the function 
    console.log('Hello World');      //for displaying a greeting messg on screen
}
greeting();

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Adriel', 'Fernandes');