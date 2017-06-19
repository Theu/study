var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' }
]
// FILTER
// ===> with loops
    // var dogs = []
    // for (var i = 0; i < animals.length; i++) {
    //     if(animals[i].species === 'dog') {
    //         dogs.push(animals[i].name)
    //     }
    // }
// :::::::::: GOOD BUT NOT SUPER GOOD
/*var isDog = function(animal) {
    return animal.species === 'dog'
}

var dogs = animals.filter(isDog)*/

//:::::::::::::: BETTER

var isDog = (animal) => (animal.species === 'dog')
var dogs = animals.filter(isDog)


// MAP
// loops
// var names = []
// for (var i = 0; i < animals.length; i++) {
//     names.push(animals[i].name)
// }

// :::::::::: GOOD BUT NOT SUPER GOOD
// var names = animals.map(function(animal) {
//     return animal.name
// })

// BETTER

var names = animals.map((i) => i.name)


var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

// the foor loop
    // var totalAmount = 0
    // for (var i = 0; i < orders.length; i++) {
    //     totalAmount += orders[i].amount
    // }
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
