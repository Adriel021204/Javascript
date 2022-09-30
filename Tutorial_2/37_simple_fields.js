//writing concise obj literal declarations using simple fields//
const createPerson = (name, age, gender) => ( {name, age, gender})
/*
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
*/
console.log(createPerson('No Name', 1000, 'male'));