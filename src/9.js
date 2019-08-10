console.log('Start...');

/**
 * 1) Anonoymous functions
 */
document.addEventListener('click', function(){
    //alert('Thank you for clicking');
});

let myNumbers1 = [10, 500, 2000];
let doubleNumbers1 = myNumbers1.map(function(number) {
    return number * 2
});
console.log(doubleNumbers1);


/**
 * 2) Arrow functions
 */
document.addEventListener('click', () => alert('Thank you for clicking'));

let myNumbers = [10, 500, 2000];
let doubleNumbers = myNumbers.map(number => number * 2);
console.log(doubleNumbers);


let john = {
    firstName: 'John',
    lastName: 'Doe',
    driverCar() {
        let imAFunctionNotAMethod = () => console.log(this);
        
        imAFunctionNotAMethod();
        console.log(`${this.firstName} ${this.lastName} is driving a car.`);
    }
}

john.driverCar();

/**
 * 3) Function hoisting
 */

cool()

function cool() {
    console.log('This is super cool.');
}


// let cool = function() {
//     console.log('Hey');
// }
// cool();

// console.log(strawberryCount); // Error
// let strawberryCount = 100;

/**
 * 4) Template literals
 */
let myName = 'Lexa';
console.log(`Hello, my name is ${myName}`);

/**
 * 5) Semicolons
 * Automatic semicolons inserting
 */



console.log('End...');