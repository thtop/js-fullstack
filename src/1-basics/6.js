console.log("Start....");

/**
 * Higher-Order Functions
 * is a funciton that either:
 * - Accepts a function as an argument
 * - Returns a function
 */

 document.addEventListener('click', ourFunction);

 function ourFunction() {
     //alert('Thank you for clicking.');
 }


 // Not Higher-Order Function
 function doubleMe(x) {
     return x * 2;
 }

 function tripleMe(x) {
    return x * 3;
 }

 function quadrupleMe(x) {
    return x * 4;
 }
 document.write(doubleMe(2));


/**
 * return a function
 */
function createMultipier(multiplier) {
    return function(x) {
        return x * multiplier;
    }
}

let double = createMultipier(2);
let triple = createMultipier(3);
let quadruple = createMultipier(4);

document.write(`<br> double: ${double(2)} <br>`);
document.write(`<br> triple: ${triple(3)} <br>`);
document.write(`<br> quadruple: ${quadruple(4)} <br>`);


// with array
let myColors = ['red', 'orange', 'yellow', 'green'];
myColors.forEach(saySomethingNice);

function saySomethingNice(color) {
    console.log(`Color: ${color}`);
}

/**
 * myColors.map()
 * myColors.filter()
 */

console.log("End....");