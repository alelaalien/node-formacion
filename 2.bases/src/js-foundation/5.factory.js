
// const makeBuildPerson = ()=>{

//     return () =>{
//         return {

//         }
//     }
// }


// const buildPerson =({name, birthdate})=>{

//     return {
//         id: new Date().getTime(),
//         name: name,
//         birthdate: birthdate,
//         age: new Date().getFullYear() - new Date(birthdate).getFullYear()
//     }
// }
// //
// const obj = {name: 'ale', birthdate: '1988-09-01'};


// {dato : 'renombre'}
// const {setId} = require('../pluggins/get-id.plugin');

// const age = require('get-age');
// const {setId} = require('../pluggins/get-id.plugin');
// const {getAge} = require('../pluggins/get-age.plugin');

//reemplazados por archivo barril (index)

// const { getAge, setId } = require('../pluggins');

//mudando la funcion para volverla entidad
// const buildPerson =({name, birthdate})=>{

//     return {
//         id: setId(), //funcion
//         name: name,
//         birthdate: birthdate,
//         age: getAge(birthdate)
//     }
// }
 
// const obj = {name: 'ale', birthdate: '1988-09-01'};


// const ale = buildPerson(obj);

// console.log(ale);

const buildMakePerson = ({setId, getAge}) =>{

    return ({name, birthdate})=>{

        return {
            id: setId(), //funcion
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson,

}