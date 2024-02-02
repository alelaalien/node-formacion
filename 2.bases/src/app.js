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
//!5


// const {buildMakePerson} = require('./js-foundation/5.factory');

// const makePerson = buildMakePerson({setId, getAge});

// const obj = {name: 'ale', birthdate: '1988-09-01'};

// const ale = makePerson(obj);

// console.log({ale});

//!6
// const { getAge, setId, http} = require('./pluggins');
// const getPokemonById = require('./js-foundation/6.promises');

// getPokemonById(1).then((pokemon) =>console.log({pokemon}))
// .catch((err) =>console.log('try again'))
// .finally(()=>console.log('fin')); 

 
//!unidad 4 - 4

const {buildLogger} = require('./pluggins');

const logger = buildLogger('app.js');
 
logger.log('oaa ale');

