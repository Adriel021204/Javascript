//destructuring assign to assign vari frosm objs//
var voxel = {x: 3.6, y: 7.4, z:6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x: a, y: b, z: c} = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperature) {
    'use strict';
    const {tempOfTomorrow : tempOfTomorrow } = avgTemperature;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

//destructuring assign with nested objs//
const LOCAL_FORECAST = {
    today: {min: 73.3, max: 84.6},
    tommorrow: {min: 73.3, max: 84.5}
};

function getMaxOfTime(forecast) {
    'use strict';
    const { tomorrow: {maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
console.log(maxofTmrw(LOCAL_FORECAST));

//using dest assign to assign variables from arrays//
const [z, x, , y] = [1, 2, 3, 4, ,5 , 6];
console.log(z, x, y);

//let a = 8, b = 6;// 
// it worked for the yt guy but this line is giving error for me//
(() => {
    'use strict';
    [a, b] = [b, a]
})();
console.log(a);
console.log(b);

//dest assign with rest operator//
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    //const arr =list;
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//using dest assign to pass an obj as a functiion's parameter//
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -8.75,
    average: 35.85
};
const half = (function () {
    return function half({max, min}) {
        return(max + min) / 2.0;
    };}) ();
console.log(stats);
console.log(half(stats));