console.log("Start...");

/**
 * Returning vs Mutating
 */
let pets = [
    {name: 'Meowsalot', species: 'cat', age: 2},
    {name: 'Barskalot', species: 'dog', age: 3},
    {name: 'Purrsloud', species: 'cat', age: 8}
]

console.log(pets.push({ name: 'Puppster', species: 'dog', age: 1}));
//console.log(pets);

let outTest = pets.map(nameOnly);

function nameOnly(pet) {
    return pet.name;
}

//console.log(outTest);


let dogs = pets.filter(onlyDogs);

function onlyDogs(pet) {
    return pet.species == 'dog';
}

//console.log(dogs);

function onlyBabies(pet) {
    return pet.age < 3;
}

let babydogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly);
console.log(babydogNames);

console.log("End...");