//Else statment//
function testElse(val) {
    var result = '';
    
    if (val > 5) {
        result = 'Bigger than 5';
    } else {
        reult = '5 or Smaller';
    }
    return result;
}
testElse(4);

//Else if statement//
function testElseIf(val) {
    if (val < 5) {
        return 'Less than 5';
    } else if (val < 10) {
        return 'Less than 10';
    } else {
        return 'Greater than or equal to 10';
    }
}
console.log(orderMyLogic(3));

//Chained If Else statement//
function testSize(num) {
    if (num < 5) {
        return 'Tiny';
} else if (num < 10) {
    return 'Small';
} else if (num < 15) {
    return 'Medium';
} else if (num < 20) {
    return 'Large';
} else {
    return 'Huge';
}
}
console.log(testSize(7));