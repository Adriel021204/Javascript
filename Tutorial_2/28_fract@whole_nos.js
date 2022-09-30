//Random Fractions//
function randomFraction() {

    return 0;    //return Math.random; ans = 0.23813741879825767//
                //to create random decimal no in js//
}
console.log(randomFraction());

//Random Whole nos//
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
    
    //return Math.random();      //create random whole no//
    return Math.floor(Math.random() * 10);                          //Math.random never has 1//
}
console.log(randomWholeNum());

//Random Whole nos within a range//
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
var ourRandom = ourRandomRange(10, 30);
console.log(ourRandomRange);

function myRandomRange(myMin, myMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
var myRandom = myRandomRange(5, 15);
console.log(myRandomRange);