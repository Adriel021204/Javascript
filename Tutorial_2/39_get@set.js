//using getters @ setters to control access to an object//
class Book {
    constructor(author) {
        this._author = author;
    }
//getter
    get writer(){
        return this._author;
    }
//setter
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this.temp = 5/9  * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat =makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);