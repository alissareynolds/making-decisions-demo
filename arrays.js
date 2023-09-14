/*
    In this file, we'll be making a new story
    about Doug, the Pokemon trainer.
*/

// Doug wants to be a Pokemon trainer
// His mom gives him a backpack full of handy items, 
// and kicks him out of the house

let backpack = ['poke ball', 'poke ball', 'potion', 'beef jerky', 'running shoes'];

let pokemon =[]; 

//doug wants more snacks than the beef jerky
// he goes to the store and buys two packs of oreos \

backpack.push('oreos');
backpack.push('oreos'); 

console.log('after buying oreos, this is our backpack:');
console.log(backpack);

//Doug meets professor Oak at the store
// Oak sees his potential and gives him a pokedex and pikachu 

backpack.push('pokedex');
pokemon.push('pikachu');

console.log('after meeting professor Oak, our backpack and pokemon are:');
console.log(backpack);
console.log(pokemon);

// Doug goes out into the tall grass in the forest 
// throughout the day he counters four pidgeys and catches them all 
// then miraculously happens to find a pokeball on the ground 

for(let i = 0; i < 4; i ++) {
    pokemon.push('pidgey');
}

console.log('after the pidgeys, out pokemon are now:');
console.log(pokemon);

//Doug gives away his running shoes to a poor, young, barefooted trainer
// he also eats all of the food in his backpack 
// splice out the food and shoes in Doug's backpack 

backpack.splice(3,4);

console.log('after the binge and the giveaway, backpack is now:');
console.log(backpack);

// we encounter a new pokemon, Charizard 

let newPokemon = 'Charizard';

// we get very lucky and catch it on our first try 

pokemon.push(newPokemon);

console.log('after catching charizard, our pokemon are now:');
console.log(pokemon);

// someone asks to see your cutest pokemon 
console.log('here is my pikachu:');

let cutestPokemon = pokemon[0];
console.log(cutestPokemon);

// a geneticist crosses your path and asks if he can clone your pidgeys, for science
// you agree if he will give you a lead statue of a jynix that he is currently holding 

let clonePidgeys = pokemon.slice(1,5); 
console.log('here are your cloned pidgeys');
console.log(clonePidgeys);

// lets make sure your pokeon stays the same 
console.log('checking to make sure that my pokemon are all still here');
console.log(pokemon);

backpack.unshift('jynix statue');
console.log('after the statue our backpack is now:');
console.log(backpack);

// 