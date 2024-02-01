const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf-8');

const wordCount = data.split(' ');

let reactCount = 0; 

//op 1 
wordCount.map(el => { if(el.toLowerCase() === 'react') {  reactCount ++; } } )
 
console.log('Palabras:', wordCount.length);
console.log('Palabras:', reactCount);

// op 2
const reactRepeat = wordCount.filter(world => world.toLowerCase() === 'react').length;
console.log('Repetido:', reactRepeat);

//op 3

const countRegex = data.match(/react/gi ?? []).length;

console.log('Con regex', countRegex);