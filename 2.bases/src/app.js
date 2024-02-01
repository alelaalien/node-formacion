//en consola: npm start
// console.log('Bienvenido');
//en dev(palabra no reservada) npm run dev (o cualquier otra palabra)

//sintaxis tradicional de importacion de modulos en node
// const {emailTemplate} //se esta accediendo a la const  emailtemplate de template
//  = require('./js-foundation/1.template');

// console.log(emailTemplate);

// require('./js-foundation/2.destructuring');
// console.log(process);

// const id = 3;
// const{getUserById} = require('./js-foundation/3.callbacks');

// getUserById(id, function(error, user){
//     if(error)
//     {
//         throw new Error (error);
//     }
//     console.log(user);
// });

// const id = 2;
// const{getUserById} = require('./js-foundation/4.arrow');

// getUserById(id,  (error, user) =>{
//     if(error)
//     {
//         throw new Error (error);
//     }
//     console.log(user);
// });

require('./js-foundation/5.factory')