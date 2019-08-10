console.log('Start...');

/**
 * Array
 */
let myFavoriteNumber = 7;

let myFavoriteNumbers = [9, 2, 8, 3, 7, 4];
console.log(myFavoriteNumbers[3]);


let myPets = [
    {
        name: 'Meowsalot',
        species: 'cat'
    },
    {
        name: 'Barksalot',
        specise: 'dog'
    }
];
console.log(myPets[1].specise);


let myColors = ['red', 'orange', 'yellow'];
myColors.push('green');
console.log(myColors);

myColors.splice(1, 1);
console.log(myColors);


let myName = 'Commander Lexa';
console.log(myName.toUpperCase());

let myNumber = 7.89;
console.log(myNumber.toFixed());

console.log('End...');