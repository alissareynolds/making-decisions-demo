/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 35
let jamieLannisterAttack = 25 

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has a better attack than Jamie Lannister')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has a better attack than Jon Snow')
} else {
    console.log('Our fighters are evenly matched')
}


let jonSnowHealth = 100 
let jonSnowDefense = 0 

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow is still alive')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snows health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25

//second attack from jamie 
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon Snow is dead')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snows health is down to ${jonSnowHealth}`)
}