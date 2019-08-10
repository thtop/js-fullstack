console.log('Start....');

/**
 * Objects
 */
let cat = {
    name: 'Fluffy',
    age: 4,
    eyeColor: 'bule',
    foods: {
        favorite: 'Tuna',
        leastFavorite: 'Oranges'
    },
    meow() {
        console.log('Meooooowwwwww');
    }
}

//cat.meow();
//console.log(cat.foods.favorite); // Tuna

document.addEventListener("click", alertWhenClicked);

function alertWhenClicked() {
    alert("Hello there!");
}


console.log('End....');