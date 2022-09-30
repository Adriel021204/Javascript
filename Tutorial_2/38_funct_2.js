//writing concise declarative functions//
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        'use strict';
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//using class syntax to define a constructor funct//
/*
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);
*/

class SpaceShuttle {
   constructor(targetPlanet){
     this.targetPlanet = targetPlanet;
   }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

/*
function makeClass() {
    return Vegetable;
} 
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(corrot.name);
*/

function makeClass() {
    class Vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
} 
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(corrot.name);