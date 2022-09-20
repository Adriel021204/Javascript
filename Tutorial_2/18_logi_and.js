//Greater Than//
function testGreaterThan(val){
    if (val > 100) {
        return 'Over 100';
    }
    if (val > 10) {
        return 'Over 10';
    }
    return '10 or Under';
}
console.log(testGreaterThan(50));

//Greater than Equal to//
function testGreaterOrEqual(val){
    if (val >=20) {
        return '20 or Over';
    }
    if (val >= 10) {
        return '10 or Over';
    }
    return 'Less than 10';
}
console.log(testGreaterOrEqual(10));

//Less Than//
function testLessThan(val){
    if (val < 25) {
        return 'Under 25';
    }
    if (val < 55) {
        return 'Under 55';
    }
    return '55 or Over';
}
console.log(testLessThan(10));

//Less than Equal to//
function testLessOrEqual(val){
    if (val <= 12) {
        return "Smaller than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller than or Equal to 24";
    }
    return "More than 24";
}
console.log(testLessOrEqual(20));

//Logical And//
function testLogicalAnd(val) {
     if(val <= 50 && val >= 25) {
        return "Yes";
     }
     return "No";
}
console.log(testLogicalAnd(10));