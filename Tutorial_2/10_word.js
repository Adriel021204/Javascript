//Word Blanks
function wordblanks(myNoun,myAdjective,myVerb,myAdverb) {

var result = '';
result +=  'The' + ' ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + 'in the store' + ' ' + myAdverb;

return result;
}
console.log(wordblanks('dog', 'big', 'ran', 'quickly'));
console.log(wordblanks('bike', 'slow', 'flew', 'slowly'));