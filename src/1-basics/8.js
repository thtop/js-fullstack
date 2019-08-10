console.log('Start...');

/**
 * Scope & Context (Part 1)
 * Scope is the biggest source of confusing regarding variables.
 * Context is the biggest source of confusion regarding object.
 */

 /**
  * Global scope
  *    Function scope 
  *      Block scope (local)
  *        Block scope (local)
  */

let myName = 'Lexa';

function showName() {
    let myName = 'Lexa Junior';
    if (2 + 2 == 4) {
        let myName = 'Lexa the 3rd';
        console.log(`Inside th if statement: `, myName);
    }
    console.log('Inside our function: ', myName);
}

showName();
console.log('In the global scope: ', myName);


/**
 * var -> function scope
 *  
 * let -> block scope
 * 
 * const -> block scope
 * 
 */

 /**
  * Context => Object
  * 
  * this => The this keyword points towards the object
  *         that is executiog the current function.
  */

let john = {
    firstName: 'John',
    lastName: 'Doe',
    driverCar() {
        function imAFunctionNotAMethod() {
            console.log(this);
        }
        imAFunctionNotAMethod();
        console.log(`${this.firstName} ${this.lastName} is driving a car.`);
    }
}

john.driverCar();

// stand-alone function
function breathe() {
    console.log(`${this.firstName} ${this.lastName} is driving a car. just inhaled and exhaled.`)
}

breathe.call(john);

console.log('End...');