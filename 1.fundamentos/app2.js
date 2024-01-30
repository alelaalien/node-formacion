const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf-8'); // bloqueante

const newContent = data.replace(/React/ig, 'Angular'); //insensitive global

fs.writeFileSync('Readme-Angular.md', newContent);

console.log(data);