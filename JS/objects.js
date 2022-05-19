'use strict';

let darthVader = {
    "name": "Dath Vader",
    "allegiance": "Empire",
    "weapon": "Lightsabre",
    "sith": true,
    "jedi": false,
}

console.log(`${darthVader.name}'s allegiance is to the ${darthVader.allegiance}`);
console.log(`${darthVader.name}'s weapon of choice is a ${darthVader.weapon}`);
console.log(`${darthVader.name} is a sith? ${darthVader.sith}`);
console.log(`${darthVader.name} is a Jedi? ${darthVader.jedi}`);

let myArray = ["hello", "everyone"];
myArray.push("how", "are", "you");
console.log(myArray.length);
myArray.shift();

for (let value in myArray) {
    console.log(myArray[value]);
}

for (let value of myArray) {
    console.log(value);
}

