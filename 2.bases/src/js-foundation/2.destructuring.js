// console.log(process.env);

const { SHELL, HOMEBREW_PREFIX} = process.env;
// console.table( {SHELL, HOMEBREW_PREFIX});
const characters = ['flash','superman', 'Linterna verde', 'batman' ];

// const [_,__, batman] = characters; opc 1
const [,, ,batman] = characters; //op 2

// console.log(batman);