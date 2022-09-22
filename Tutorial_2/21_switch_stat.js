//switch stats tests a value and can have case stats which define various possible values//
function caseInSwitch(val) {
    var answer = '';
    switch(val) {
        case 1:
            answer ='alpha';
            break;
            case 2:
                answer = 'beta';
                break;
                case 3:
                answer = 'omega';
                break;
                case 4:
                answer = 'delta';
    }
    return answer;
}
console.log(caseInSwitch(4));

//switch statement using default//
function switchAnimals(val) {
    var answer = '';
    switch(val) {
            case 1:
                answer ='dog';
                break;
            case 2:
                answer = 'cat';
                break;
            case 3:
                answer = 'bird';
                break;
            case 4:
                answer = 'hamster';
                default:
                answer = 'nothing';
    }
return answer;
}
console.log(switchAnimals());

//multiple cases using switch//
function sequentialsSizes(val) {
    var answer = '';
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = 'low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'high';
            break;
    }
return answer;
}
console.log(sequentialsSizes());

//replacing if else statement with switch//
function ifElseToSwitch(val) {
    var answer = '';
 /*
  if (val === 'bob') {
    answer = 'Handsome';
} else if (val === 42) {
    answer = 'Digits';
} else if (val === 1) {
    answer = 'I am #1 in the world!';
} else if (val === 'pop') {
    answer = "He is my dad also called pop's";
}
return answer;
}
console.log(ifElseToSwitch(1));
*/
switch(val) {
    case 'bob':
        answer = 'Handsome';
        break;
    case 42:
        answer = 'Digits';
        break;
    case 1:
        answer = 'I am #1 in the world!';
        break;
    case 'pop':
        answer = "He is my dad also called pop's";
        break;
}
}
console.log(ifElseToSwitch(pop));